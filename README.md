# poofai.com

The marketing site for [Poof](https://www.poofai.com) — free bookkeeping software, with an AI agent you can hire.
The app itself lives at app.poofai.com and is a separate codebase.

Next.js 14 (App Router) and Tailwind, deployed on Vercel from `main`.

```bash
npm install
npm run dev      # http://localhost:3001
npm run build
```

- Pages: `src/app/<route>/page.tsx`. Shared pieces: `src/components/`.
- Blog posts: `content/blog/*.mdx`, rendered by `src/app/blog/[slug]/page.tsx`.
- Every feature on `/features` comes from `src/lib/featureData.ts`.
- `public/llms.txt` describes the site for AI assistants; keep it in step with the pages.
- Server routes in `src/app/api/` send email through Resend and store leads in Supabase. Their keys are Vercel
  environment variables (`RESEND_API_KEY`, `SUPABASE_URL`, `SUPABASE_SERVICE_ROLE_KEY`, `UNSUBSCRIBE_SECRET`,
  `NOTIFY_EMAIL`, `COMPANY_MAILING_ADDRESS`); nothing secret belongs in this repository, which is public.
