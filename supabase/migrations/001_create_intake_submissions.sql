-- Create intake_submissions table for profit analysis applications
create table if not exists public.intake_submissions (
  id uuid default gen_random_uuid() primary key,
  name text not null,
  email text not null,
  business_name text not null,
  website text,
  revenue_range text not null,
  pain_point text,
  accounting_software text,
  platforms jsonb default '[]'::jsonb,
  source text default 'profit-analysis',
  submitted_at timestamptz default now(),
  status text default 'new' check (status in ('new', 'reviewing', 'accepted', 'declined', 'completed')),
  notes text
);

-- Index for quick lookups by email and status
create index idx_intake_email on public.intake_submissions (email);
create index idx_intake_status on public.intake_submissions (status);
create index idx_intake_source on public.intake_submissions (source);
create index idx_intake_submitted_at on public.intake_submissions (submitted_at desc);

-- RLS: only service role can insert/read (API route uses service role key)
alter table public.intake_submissions enable row level security;

-- No public access policies — all access goes through the service role key in the API route
