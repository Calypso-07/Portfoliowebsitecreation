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
