// Pulse v2 — shared Supabase config
// Same project as the live app (read/write to the same user_data table) —
// this rebuild is a new FRONT END only, not a new backend.
// Deliberately isolated in its own repo/deploy target so it never touches
// app.mpspulse.twa or the live closed-testing build.

const SUPABASE_URL = 'https://xcfxizkflleeahjguviq.supabase.co';
const SUPABASE_ANON = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhjZnhpemtmbGxlZWFoamd1dmlxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODA2MTA2ODMsImV4cCI6MjA5NjE4NjY4M30.FhufokzAT16n6zuL9pGn9QHjkENoijU3Wc_umvXEzjQ';

const db = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON);
