# 🔒 Using Local Files - Keep Everything Private!

## ✅ How Local Files Work

Instead of uploading to public services, you can store your images, videos, and PDFs directly in your project's `/public` folder. **These files stay private to your portfolio** and won't be uploaded anywhere public.

---

## 📁 Folder Structure

Your project already has these folders set up:

```
/public
  /images       ← Put your images here (JPG, PNG, GIF, etc.)
  /videos       ← Put your videos here (MP4, MOV, WEBM)
  /documents    ← Put your PDFs here
```

---

## 🖼️ How to Add Images

### Step 1: Add Your Image File

1. Click on the `/public/images` folder in the file explorer
2. Click the "+" button or "Upload" 
3. Select your image file (e.g., `my-artwork.jpg`)
4. The file will be uploaded to `/public/images/my-artwork.jpg`

### Step 2: Reference It in Your Code

Use the path starting with `/images/`:

```typescript
image: "/images/my-artwork.jpg"
```

**Complete Example for ArtworkSection.tsx:**
```typescript
const artworks = [
  {
    title: "Character Concept Art",
    description: "Original character designs",
    image: "/images/character-design.jpg",  // ← Your local file
  },
  {
    title: "Environment Art",
    description: "Fantasy landscape",
    image: "/images/environment.png",  // ← Another local file
  },
];
```

---

## 🎥 How to Add Videos

### Step 1: Add Your Video File

1. Click on the `/public/videos` folder
2. Upload your video file (e.g., `gameplay-demo.mp4`)
3. The file will be at `/public/videos/gameplay-demo.mp4`

### Step 2: Reference It in Your Code

Use the path starting with `/videos/`:

```typescript
videoUrl: "/videos/gameplay-demo.mp4"
```

**Complete Example for UE5Section.tsx:**
```typescript
{
  title: "Game Prototype Demo",
  description: "My Unreal Engine 5 game",
  videoUrl: "/videos/ue5-gameplay.mp4",  // ← Your local video
  thumbnailUrl: "/images/ue5-thumbnail.jpg",  // ← Optional thumbnail
}
```

---

## 📄 How to Add PDFs

### Step 1: Add Your PDF File

1. Click on the `/public/documents` folder
2. Upload your PDF (e.g., `project-documentation.pdf`)
3. The file will be at `/public/documents/project-documentation.pdf`

### Step 2: Reference It in Your Code

Use the path starting with `/documents/`:

```typescript
pdfUrl: "/documents/project-documentation.pdf"
```

**Complete Example for PlaydateSection.tsx:**
```typescript
const pdfUrl = "/documents/playdate-development-doc.pdf";
```

---

## 📝 Complete Example: Setting Up Your Portfolio

Let's say you have these files:

**Your Files:**
- `profile-photo.jpg` (your photo)
- `character-art.png` (artwork)
- `landscape.jpg` (artwork)
- `ue5-demo.mp4` (UE5 video)
- `ue5-thumb.jpg` (UE5 thumbnail)
- `playdate-demo.mp4` (Playdate video)
- `playdate-docs.pdf` (Playdate documentation)

### Step 1: Upload Files to Correct Folders

```
/public/images/
  - profile-photo.jpg
  - character-art.png
  - landscape.jpg
  - ue5-thumb.jpg

/public/videos/
  - ue5-demo.mp4
  - playdate-demo.mp4

/public/documents/
  - playdate-docs.pdf
```

### Step 2: Update Your Components

**AboutSection.tsx** (Profile Photo):
```typescript
<ImageWithFallback
  src="/images/profile-photo.jpg"
  alt="Cansu"
  className="w-full h-full object-cover"
/>
```

**ArtworkSection.tsx**:
```typescript
const artworks = [
  {
    title: "Character Concept Art",
    description: "Original character designs",
    image: "/images/character-art.png",
  },
  {
    title: "Environment Concept",
    description: "Fantasy landscape",
    image: "/images/landscape.jpg",
  },
];
```

**UE5Section.tsx**:
```typescript
const projects = [
  {
    title: "Game Prototype",
    description: "My UE5 game demo",
    videoUrl: "/videos/ue5-demo.mp4",
    thumbnailUrl: "/images/ue5-thumb.jpg",
  },
];
```

**PlaydateSection.tsx**:
```typescript
const videoUrl = "/videos/playdate-demo.mp4";
const pdfUrl = "/documents/playdate-docs.pdf";
```

---

## 🎯 Quick Reference

| File Type | Upload To | Reference As |
|-----------|-----------|--------------|
| **Images** (JPG, PNG, GIF) | `/public/images/` | `"/images/filename.jpg"` |
| **Videos** (MP4, MOV, WEBM) | `/public/videos/` | `"/videos/filename.mp4"` |
| **Documents** (PDF) | `/public/documents/` | `"/documents/filename.pdf"` |

---

## ✅ Supported File Formats

### Images:
- ✅ JPG / JPEG
- ✅ PNG (supports transparency)
- ✅ GIF (supports animation)
- ✅ WEBP
- ✅ SVG

### Videos:
- ✅ MP4 (recommended - best compatibility)
- ✅ WEBM
- ✅ MOV
- ⚠️ Keep videos under 100MB for best performance

### Documents:
- ✅ PDF

---

## 💡 Pro Tips

1. **File Names**: Use lowercase and hyphens (e.g., `my-artwork.jpg`, not `My Artwork.jpg`)
2. **File Sizes**: 
   - Images: Keep under 5MB for fast loading
   - Videos: Keep under 100MB (or use YouTube for larger files)
3. **Image Dimensions**: Upload high-quality images (1920px+ width)
4. **Video Format**: MP4 with H.264 codec works best across all browsers
5. **Organization**: Name files clearly (e.g., `ue5-gameplay-demo.mp4`, not `video1.mp4`)

---

## 🚨 Troubleshooting

### "My image isn't showing"
✅ **Check these:**
1. File is in the correct folder (`/public/images/`)
2. Path starts with `/` (e.g., `/images/file.jpg`, not `images/file.jpg`)
3. File name matches exactly (case-sensitive!)
4. File format is supported (JPG, PNG, GIF, WEBP, SVG)

### "My video isn't playing"
✅ **Check these:**
1. File is in `/public/videos/`
2. Path is `/videos/filename.mp4`
3. Video format is MP4 (most compatible)
4. File size isn't too large (keep under 100MB)

### "Path is correct but still not working"
✅ **Common mistakes:**
- ❌ `/public/images/file.jpg` (don't include "public")
- ✅ `/images/file.jpg` (correct)
- ❌ `images/file.jpg` (missing leading slash)
- ✅ `/images/file.jpg` (correct)

---

## 📱 File Upload Instructions (Step-by-Step)

### In Figma Make:

1. **Open the file explorer** (left sidebar)
2. **Navigate to the folder**:
   - For images: Click `/public` → Click `/images`
   - For videos: Click `/public` → Click `/videos`
   - For PDFs: Click `/public` → Click `/documents`
3. **Upload your file**:
   - Look for "Upload" button or "+" icon
   - Select your file from your computer
   - Wait for upload to complete
4. **Verify the file**:
   - You should see your file listed in the folder
   - Note the exact filename (case-sensitive!)
5. **Use in your code**:
   - Reference it with the correct path (e.g., `/images/your-file.jpg`)

---

## 🔒 Privacy & Security

### Is this private?
- ✅ **Your files are NOT uploaded to any public service**
- ✅ Files are stored in your project only
- ✅ Only people with access to your portfolio URL can see them
- ✅ Files are not searchable or indexed by Google
- ✅ No third-party services involved

### When you deploy:
- Your files will be deployed with your portfolio
- They'll be served from your own domain/hosting
- Much more private than Imgur or public services

---

## 📋 Checklist for Adding Your Media

```
☐ Profile Photo:
  - Upload to: /public/images/
  - Filename: ________________________
  - Add to: AboutSection.tsx, line ~33
  - Path: /images/________________________

☐ Artwork Images (add multiple):
  - Upload to: /public/images/
  - Filenames: 
    1. ________________________
    2. ________________________
    3. ________________________
  - Add to: ArtworkSection.tsx
  - Paths: /images/________________________

☐ UE5 Videos:
  - Upload to: /public/videos/
  - Filenames: ________________________
  - Add to: UE5Section.tsx
  - Paths: /videos/________________________

☐ UE5 Thumbnails (optional):
  - Upload to: /public/images/
  - Filenames: ________________________
  - Paths: /images/________________________

☐ Playdate Video:
  - Upload to: /public/videos/
  - Filename: ________________________
  - Add to: PlaydateSection.tsx
  - Path: /videos/________________________

☐ Playdate PDF:
  - Upload to: /public/documents/
  - Filename: ________________________
  - Add to: PlaydateSection.tsx
  - Path: /documents/________________________
```

---

## 🎬 Video Example Walkthrough

**Scenario:** You want to add a UE5 gameplay video.

**Your file:** `unreal-game-demo.mp4` (on your computer)

**Steps:**
1. In Figma Make, click `/public` folder
2. Click `/videos` folder
3. Click "Upload" or "+" button
4. Select `unreal-game-demo.mp4` from your computer
5. Wait for upload (shows progress bar)
6. File now appears in `/public/videos/unreal-game-demo.mp4`
7. Open `/components/UE5Section.tsx`
8. Find the projects array (around line 10-15)
9. Change the videoUrl:
   ```typescript
   videoUrl: "/videos/unreal-game-demo.mp4",
   ```
10. Save the file
11. ✅ Your video now plays in your portfolio!

---

**Remember:** Everything stays private in your project. No public uploads needed! 🔒
