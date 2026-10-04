# RAKE desk

Paper scanner for new pump.fun coins, plus a live buy that only sends after you sign.

GitHub Pages alone cannot scan pump.fun. Pump.fun blocks browser calls. The scan works when this repo is connected to Netlify, because `netlify/functions/pump.js` fetches the list.

## Keep the scan live

1. Create a new empty GitHub repo.
2. Upload everything in this folder, including `netlify/functions/pump.js`.
3. In Netlify, add a new site from that GitHub repo. No build command. Publish directory is `.`
4. Open the `netlify.app` link. The scanner line should say `pump.fun`.

The paper sniper does not spend SOL. Live Buy quotes Jupiter and waits for a wallet signature.
