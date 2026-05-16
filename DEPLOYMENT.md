# Deploy Fashion Vintage Paris

## 1. Install tools

Install Git for Windows:

```text
https://git-scm.com/download/win
```

Optional but helpful:

```powershell
npm install --global vercel
```

## 2. Push to GitHub

Use this folder as the project root:

```text
F:\project\fashion-vintage-paris
```

That folder must be the folder you push to GitHub. It contains `index.html`, `vercel.json`, `package.json`, `api/`, `assets/`, and `admin/`.

Create an empty GitHub repository named:

```text
fashion-vintage-paris
```

Do not add a README, license, or gitignore on GitHub because this project already includes its own files.

Then run these commands from this project folder:

```powershell
cd F:\project\fashion-vintage-paris
npm run verify:deploy
git init -b main
git add -A
git commit -m "Launch Fashion Vintage Paris website"
git remote add origin https://github.com/YOUR-GITHUB-USERNAME/fashion-vintage-paris.git
git push -u origin main
```

## 3. Deploy to Vercel

1. Go to `https://vercel.com/new`.
2. Import the `fashion-vintage-paris` GitHub repository.
3. Set Root Directory:
   - Leave it empty if GitHub contains `index.html` and `vercel.json` at the top level.
   - Set it to `fashion-vintage-paris` only if your GitHub repository contains the whole folder as a subfolder.
4. Keep Framework Preset as `Other`.
5. Leave Build Command empty.
6. Leave Output Directory empty.
7. Keep Install Command empty/default.
8. Keep the Node.js version on the project default, or use the `22.x` version from `package.json`.
9. Add Environment Variables:

```text
NVIDIA_API_KEY=your_rotated_nvidia_key
NVIDIA_MODEL=meta/llama-4-maverick-17b-128e-instruct
```

10. Click Deploy.

After deployment, test these URLs:

```text
/
/collection
/booking
/api/vivienne
```

`/api/vivienne` should return "Method not allowed" in the browser because it only accepts POST requests. That is normal.

## 4. Important security note

The NVIDIA key must never be committed to GitHub. Keep it only in `.env` locally and in Vercel Environment Variables.

Because an API key was previously pasted into chat, rotate that key before using it in production.

## 5. Local check

Run:

```powershell
npm start
```

Open:

```text
http://localhost:8080
```

Vivienne uses:

```text
/api/vivienne
```

On Vercel, that route is handled by `api/vivienne.mjs`.
