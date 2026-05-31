-- Newsletter subscribers + one-click unsubscribe support.
-- The table already exists in production (created outside migrations); these
-- statements are idempotent so they are safe to run either way.

create table if not exists public.newsletter_subscribers (
  id uuid default gen_random_uuid() primary key,
  email text not null,
  subscribed_at timestamptz default now(),
  source text default 'website_footer'
);

-- Suppression marker: set when a recipient unsubscribes. NULL = active subscriber.
alter table public.newsletter_subscribers
  add column if not exists unsubscribed_at timestamptz;

-- One row per email (subscribe flow upserts by email).
create unique index if not exists idx_newsletter_email
  on public.newsletter_subscribers (lower(email));

-- RLS: all access goes through the service role key in the API routes.
alter table public.newsletter_subscribers enable row level security;
