# Pulse v2 — rebuild starting point

This is a **separate project** from the live Pulse app (`mpspulse` repo /
`mpspulse.app` / `app.mpspulse.twa` on Play Store). Nothing here touches
that app, your 12 testers, or your 14-day closed testing countdown.

## What's isolated vs shared

**Shared (deliberately, not by accident):**
- Same Supabase project (`xcfxizkflleeahjguviq`) — same `user_data` table,
  same auth users. This means if you log in with the same account here and
  in the live app, you'd be looking at the same underlying data. That's
  fine for your own testing but worth knowing.
- Same food database (ported into `js/foods.js`).

**Isolated (this is the point):**
- This is its own folder/repo — push it somewhere new, e.g. a repo called
  `pulse-v2`, NOT a branch of `mpspulse`.
- Deploy it to a **different URL** — a subdomain like `next.mpspulse.app`,
  or a plain `github.io` URL, or a new domain. Do NOT deploy to
  `mpspulse.app` while testing this.
- Play Console, the TWA package `app.mpspulse.twa`, and closed testing are
  completely untouched by anything in this folder.

## What's built so far

- `dashboard.html` — the single-screen 4-pulse dashboard (no scrolling),
  wired to real Supabase reads/writes. Matches the approved mockup:
  fixed 4-segment strip at top, one pulse expanded at a time, collapsed
  rows for the other three, floating + button.
- `auth.html` — carried over from the live app, unchanged except the
  post-login redirect now points to `dashboard.html` instead of `app.html`.
  **You need to update the `redirectTo` URL on line ~317 once you know
  your actual deploy domain** (currently a placeholder).
- Add-meal flow: search + manual portion confirm is functional (search the
  food database, tap a result, adjust grams, pick a pulse, confirm — it
  writes to Supabase and updates the dashboard live).

## What's NOT built yet (stubbed or missing)

- **Photo/camera scanning** (single-item or whole-meal) — the mockups for
  this exist (`add-meal-flow-mockup.html` from our design pass) but there's
  no real image recognition wired up yet. This needs either a food-recognition
  API or model — worth scoping as its own piece of work.
- **Gallery picker** — same story, depends on the scanning pipeline above.
- **Onboarding flow** (goal setup, pulse window confirmation, notification
  opt-in) — mockup exists (`onboarding-flow-mockup.html`), not yet built
  as real screens. Right now `dashboard.html` assumes a user already has
  `slot_targets` set, or falls back to an even split of a 150g default goal.
- **Editable pulse windows** — `SLOT_WINDOWS` is currently hardcoded in
  `dashboard.html` (7-9am, 12-3pm, 6-8pm, 9-10pm). The live app may already
  store custom windows per user; if so, that needs porting in.
- **Push notifications** — the live app has a working VAPID/push pipeline;
  none of that has been carried over here yet.
- **Subscription/paywall check** — the live app checks a `subscriptions`
  table before granting access; not yet added here.

## Suggested next steps, in order

1. Push this folder to a new repo.
2. Deploy to a test subdomain or GitHub Pages URL.
3. Update the `redirectTo` in `auth.html` to match that real URL.
4. Test login → dashboard → log a meal → confirm it saves and reloads
   correctly.
5. Build onboarding screens next (goal + pulse windows + notifications),
   since dashboard.html currently assumes that data already exists.
6. Scope the photo-scanning piece separately — it's the most technically
   different piece (needs an image-recognition service) and shouldn't
   block the rest of the rebuild.
