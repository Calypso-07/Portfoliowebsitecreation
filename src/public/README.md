# Public Assets Folder

Place your images, videos, and PDFs here!

## Folder Structure

```
/public/
  ├── images/          ← Put your images here (.png, .jpg, etc.)
  ├── videos/          ← Put your videos here (.mp4, .webm, etc.)
  └── documents/       ← Put your PDFs here
```

## How to Use Your Files

After uploading files to these folders, reference them in your components like this:

**Images:**
```typescript
image: "/images/your-image.png"
```

**Videos:**
```typescript
videoUrl: "/videos/your-video.mp4"
```

**PDFs:**
```typescript
pdfUrl: "/documents/your-document.pdf"
```

## Example

If you upload:
- `/public/images/profile.jpg`
- `/public/videos/ue5-demo.mp4`
- `/public/documents/playdate-docs.pdf`

Reference them as:
- `"/images/profile.jpg"`
- `"/videos/ue5-demo.mp4"`
- `"/documents/playdate-docs.pdf"`
