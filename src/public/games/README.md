# Unity WebGL Builds (Play in Portfolio)

Drop a Unity **WebGL** build here to embed the game on its detail page.

## Folder layout

```
/public/games/
  runnerguy/
    index.html
    Build/
    TemplateData/
  trivia-football/
    ...
  solitaire-colors/
    ...
```

## Steps

1. In Unity: **File → Build Settings → WebGL → Build**
2. Copy the entire build output into e.g. `src/public/games/runnerguy/`
3. In `GameDetailPage.tsx`, set:

```typescript
embedUrl: "/games/runnerguy/index.html",
```

4. Restart `npm run dev` if needed.

## Notes

- Compression: if Unity uses Gzip/Brotli, your host must serve the right `Content-Encoding` headers (itch.io / Cloudflare Pages / Netlify usually handle this; plain static hosts sometimes need config).
- For a quick test with fewer hosting headaches, upload the WebGL build to **itch.io** and use the **Embed Game** URL instead.
- Mobile WebGL can be heavy; a gameplay video is often a better portfolio fallback.

---

# Unreal Engine Builds (Download, not embed)

Unreal removed HTML5 packaging after 4.23, so an Unreal project **cannot be
embedded and played inside the page** like a Unity WebGL build. Packaged Unreal
games are desktop executables, so they are offered as a download instead.

That is what the `download` block on a game in `GameDetailPage.tsx` drives —
see `tank-arena`.

## Option A — host the zip in this repo (only if it is small)

```
/public/games/
  tank-arena/
    TankArena-Windows.zip
```

Then in `GameDetailPage.tsx`:

```typescript
download: {
  url: "/games/tank-arena/TankArena-Windows.zip",
  size: "180 MB",
  ...
}
```

**Hard limit:** GitHub rejects any single file over **100 MB** and warns above
50 MB. Packaged Unreal builds are usually far larger than that, so check the zip
size first:

```powershell
(Get-Item .\TankArena-Windows.zip).Length / 1MB
```

If it is over ~90 MB, use Option B.

## Option B — GitHub Release (used for Tank Arena)

The zip is 331 MB, so it cannot live in the git repo. A **GitHub Release**
accepts files up to 2 GB. That is not the same as committing to `main` —
the zip sits on the release, not in the source tree.

```typescript
download: {
  url: "https://github.com/Calypso-07/Portfoliowebsitecreation/releases/download/tank-arena/TankArena-Windows.zip",
  size: "331 MB",
  ...
}
```

A public repo makes a public release: anyone with the link can download it.
It is much less discoverable than itch.io (no storefront, no search listing),
but it is still not private.

## Packaging checklist

1. In Unreal: **Platforms → Windows → Package Project** (Shipping config).
2. Zip the whole output folder — the `.exe` alone will not run.
3. Test the zip on a machine that does not have Unreal installed.
4. Set `download.url`, `download.fileName`, and `download.size`.
