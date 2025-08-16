# Deploy to Render (Next.js)

## Build & Start
- **Build Command**: `npm install && npm run build`
- **Start Command**: `npm start`
- **Environment**: Node
- **Node Version**: 18.x
- **Auto-Deploy**: On (optional)

## Environment Variables (Render → Settings → Environment)
- `STRIPE_SECRET_KEY` → e.g. `sk_test_...`
- `STRIPE_PUBLIC_KEY` → e.g. `pk_test_...`
- `NEXT_PUBLIC_GOOGLE_ADSENSE_ID` → e.g. `ca-pub-6630634320422572` (optional)

> Important: Do **not** use `next export` for this app because it includes API routes under `pages/api/*`.

## Health Check
Render will expose a random `$PORT`. Scripts already use `$PORT`:
- `dev`: `next dev -p $PORT`
- `start`: `next start -p $PORT`

## Notes
- Tailwind CSS is built via `postinstall` script automatically.
- If you change Node version requirements, update `"engines.node"` inside `package.json`.
