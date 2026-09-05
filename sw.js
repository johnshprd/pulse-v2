// Pulse — service worker
// Handles incoming Web Push notifications (MPS window closed) and
// focuses/opens the app when the notification is tapped.

const SUPABASE_URL = 'https://xcfxizkflleeahjguviq.supabase.co';
const SUPABASE_ANON = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhjZnhpemtmbGxlZWFoamd1dmlxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODA2MTA2ODMsImV4cCI6MjA5NjE4NjY4M30.FhufokzAT16n6zuL9pGn9QHjkENoijU3Wc_umvXEzjQ';

// TEMP DIAGNOSTIC (5 Sept 2026) -- push is confirmed accepted by FCM
// server-side but never displays on-device, with no obvious cause after
// exhausting OS/app notification and battery settings. Logs each step of
// push handling to a debug table so we can see exactly how far execution
// gets on the actual device, without needing a connected PC for remote
// debugging. Remove once the actual cause is found.
function debugLog(event, detail){
  try {
    fetch(SUPABASE_URL + '/rest/v1/push_debug_log', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'apikey': SUPABASE_ANON,
        'Authorization': 'Bearer ' + SUPABASE_ANON,
      },
      body: JSON.stringify({ event, detail: detail ? String(detail) : null }),
    }).catch(() => {});
  } catch (e) {}
}

self.addEventListener('install', (event) => {
  debugLog('sw_install');
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  debugLog('sw_activate');
  event.waitUntil(self.clients.claim());
});

self.addEventListener('push', (event) => {
  event.waitUntil((async () => {
    debugLog('push_received', event.data ? 'has data' : 'no data');
    if (!event.data) return;

    let payload;
    try {
      payload = event.data.json();
      debugLog('payload_parsed', JSON.stringify(payload));
    } catch (e) {
      payload = { title: 'Pulse', body: event.data.text() };
      debugLog('payload_parse_failed_fallback_to_text', e.message);
    }

    const title = payload.title || 'Pulse';
    const options = {
      body: payload.body || '',
      icon: payload.icon || '/icons/icon-192.png',
      badge: payload.badge || '/icons/icon-badge-96.png',
      data: payload.data || { url: '/dashboard.html' },
      vibrate: [100, 50, 100],
    };

    try {
      await self.registration.showNotification(title, options);
      debugLog('shownotification_succeeded');
    } catch (e) {
      debugLog('shownotification_threw', e.message || e.name || String(e));
    }
  })());
});

self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  const url = (event.notification.data && event.notification.data.url) || '/dashboard.html';

  event.waitUntil(
    self.clients.matchAll({ type: 'window', includeUncontrolled: true }).then((clientList) => {
      for (const client of clientList) {
        if (client.url.includes('dashboard.html') && 'focus' in client) {
          return client.focus();
        }
      }
      if (self.clients.openWindow) {
        return self.clients.openWindow(url);
      }
    })
  );
});
