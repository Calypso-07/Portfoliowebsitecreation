# 🎥 How to Add Your Videos and Images - SIMPLE GUIDE

## ⚠️ Important: Two Options Available

You have two ways to add media to your portfolio:

### 🔒 Option 1: LOCAL FILES (RECOMMENDED - PRIVATE)
**Keep your files private by uploading them directly to your project.**
- ✅ **Private** - Files stay in your portfolio only
- ✅ **No third-party services** - Complete control
- ✅ **No external dependencies** - Always works
- ✅ **Best for**: All images, videos, and PDFs
- 📖 **See:** `LOCAL_FILES_GUIDE.md` for complete instructions

### 🌐 Option 2: EXTERNAL HOSTING (PUBLIC)
**Upload to public services like YouTube, Imgur, etc.**
- ⚠️ **Public** - Anyone can see these files
- ⚠️ **Third-party dependent** - Services may change or fail
- ✅ **Best for**: YouTube videos you want to share publicly
- 📖 **See below** for external hosting options

---

## 🔒 OPTION 1: LOCAL FILES (Keep Everything Private!)

### Quick Start:
1. Upload your file to the appropriate folder:
   - **Images**: `/public/images/`
   - **Videos**: `/public/videos/`
   - **PDFs**: `/public/documents/`

2. Reference it in your code:
   ```typescript
   image: "/images/your-file.jpg"
   videoUrl: "/videos/your-video.mp4"
   pdfUrl: "/documents/your-doc.pdf"
   ```

**📖 For complete instructions, see `LOCAL_FILES_GUIDE.md`**

---

## 🌐 OPTION 2: EXTERNAL HOSTING (Public Services)

---

## 🎬 Best Options for Videos

### Option 1: YouTube (RECOMMENDED - Most Reliable!)

**Steps:**
1. Upload your video to YouTube (can be **unlisted** if you don't want it public)
2. Go to your video on YouTube
3. Click **Share** → **Embed**
4. Copy the URL from the iframe code (it looks like: `https://www.youtube.com/embed/VIDEO_ID`)
5. Paste this URL in your code

**Example:**
```typescript
videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
```

**Why YouTube is best:**
- ✅ Always works, no configuration needed
- ✅ Can be unlisted (not searchable, but viewable with link)
- ✅ Free hosting, no size limits
- ✅ Built-in player with controls

### Option 2: Google Drive (Can be tricky!)

**⚠️ IMPORTANT: Google Drive often blocks embedding for privacy reasons.**

**Steps to try:**
1. Go to [Google Drive](https://drive.google.com)
2. Upload your video (MP4, MOV, etc.)
3. Right-click the video → **"Share"**
4. Set to **"Anyone with the link"** (CRITICAL!)
5. Click "Copy link"
6. Extract the FILE_ID from the link (the long random string between `/d/` and `/view`)
7. Use this format:

```typescript
videoUrl: "https://drive.google.com/file/d/YOUR_FILE_ID/preview"
```

**Example:**
If your share link is: `https://drive.google.com/file/d/1a2B3c4D5e6F7g8H9i0J/view?usp=sharing`

The FILE_ID is: `1a2B3c4D5e6F7g8H9i0J`

Use:
```typescript
videoUrl: "https://drive.google.com/file/d/1a2B3c4D5e6F7g8H9i0J/preview"
```

**⚠️ Common Google Drive Issues:**
- ❌ **Not working?** The video might be too large or the sharing settings might not be set correctly
- ❌ **"Preview not available"?** Google Drive sometimes blocks video previews
- ❌ **Blank screen?** Check browser console for errors - might be a CORS issue

**🔧 Google Drive Troubleshooting:**
1. Make sure sharing is set to "Anyone with the link" (not "Restricted")
2. Try opening the preview URL in a new tab to test it: `https://drive.google.com/file/d/FILE_ID/preview`
3. If it says "Preview not available", Google Drive won't embed it
4. **Solution:** Use YouTube instead (upload as unlisted for privacy)

### Option 3: Vimeo (FREE - Good Alternative)

1. Create free account at [vimeo.com](https://vimeo.com)
2. Upload your video
3. Go to Settings → Privacy → Change to "Anyone" or "Hide from Vimeo"
4. Get the player URL: `https://player.vimeo.com/video/YOUR_VIDEO_ID`
5. Paste in your code

**Example:**
```typescript
videoUrl: "https://player.vimeo.com/video/123456789"
```

### Option 4: Streamable (Quick & Easy)

1. Go to [streamable.com](https://streamable.com) (no account needed!)
2. Upload your video
3. After upload, click the video
4. Copy the URL, replace `streamable.com` with `streamable.com/e`
5. Use in your code

**Example:**
If URL is: `https://streamable.com/abc123`
Use: `https://streamable.com/e/abc123`

```typescript
videoUrl: "https://streamable.com/e/abc123"
```

---

## 🖼️ Best Options for Images

### Option 1: Imgur (RECOMMENDED - FREE & EASY)

**Steps:**
1. Go to [imgur.com](https://imgur.com)
2. Click "New post"
3. Upload your image
4. Right-click the image → "Copy image address"
5. Paste this URL in your code

**Example:**
```typescript
image: "https://i.imgur.com/AbC123.jpg"
```

### Option 2: Google Drive (For Images - DIFFERENT format than videos!)

**⚠️ IMPORTANT: Images use a DIFFERENT URL format than videos!**

**Steps:**
1. Upload image to Google Drive
2. Right-click → "Share" → Set to "Anyone with the link"
3. Copy the share link
4. Extract the FILE_ID (the part between `/d/` and `/view`)
5. Use this format: `https://drive.google.com/uc?export=view&id=FILE_ID`

**Example:**
If your share link is: `https://drive.google.com/file/d/1Z2xEEax02kbXh2PDG5ru-zZalM3JlAdw/view`

The FILE_ID is: `1Z2xEEax02kbXh2PDG5ru-zZalM3JlAdw`

Use:
```typescript
image: "https://drive.google.com/uc?export=view&id=1Z2xEEax02kbXh2PDG5ru-zZalM3JlAdw"
```

**🔴 WRONG (This is for videos, NOT images):**
```typescript
❌ "https://drive.google.com/file/d/FILE_ID/preview"  // This won't work for images!
```

**✅ CORRECT (For images):**
```typescript
✅ "https://drive.google.com/uc?export=view&id=FILE_ID"
```

### Option 3: Dropbox

1. Upload to Dropbox
2. Get the share link
3. Change `www.dropbox.com` to `dl.dropboxusercontent.com` in the URL
4. Change `?dl=0` to `?raw=1` at the end

---

## 📄 Best Options for PDFs

### Google Drive (RECOMMENDED)

1. Upload PDF to Google Drive
2. Right-click → Get link → Set to "Anyone with the link"
3. Get the file ID
4. Use: `https://drive.google.com/file/d/FILE_ID/view`

---

## 📝 Step-by-Step: Adding a Google Drive Video to UE5 Section

**1. Upload your video to Google Drive**
   - Go to [drive.google.com](https://drive.google.com)
   - Click "New" → "File upload"
   - Select your video file (MP4, MOV, etc.)
   - Wait for upload to complete

**2. Share the video**
   - Right-click on your video
   - Click "Share"
   - Click "Change to anyone with the link"
   - Click "Copy link"

**3. Get the FILE_ID**
   - Your link looks like: `https://drive.google.com/file/d/1a2B3c4D5e6F7g8H9i0J/view?usp=sharing`
   - The FILE_ID is the part between `/d/` and `/view`
   - In this example: `1a2B3c4D5e6F7g8H9i0J`

**4. Add to your portfolio**
   - Open `/components/UE5Section.tsx`
   - Find line 15 (videoUrl)
   - Use this format:
   ```typescript
   videoUrl: "https://drive.google.com/file/d/1a2B3c4D5e6F7g8H9i0J/preview",
   ```
   (Replace the FILE_ID with yours!)

**Done!** Your video will now play in your portfolio.

---

## 📝 Step-by-Step: Adding Images with Imgur

**1. Upload to Imgur**
   - Go to [imgur.com](https://imgur.com)
   - Click "New post" (no account needed!)
   - Drag your image or click to upload
   - Wait for upload to complete

**2. Get the direct image link**
   - Right-click on your uploaded image
   - Select "Copy image address" (or "Copy image location")
   - The URL should look like: `https://i.imgur.com/AbC123.png`

**3. Add to your portfolio**

For **profile photo** (`/components/AboutSection.tsx` - line 33):
```typescript
src="https://i.imgur.com/YOUR_IMAGE.jpg"
```

For **artwork** (`/components/ArtworkSection.tsx` - around line 9):
```typescript
{
  title: 'My Artwork',
  description: 'Cool art I made',
  image: 'https://i.imgur.com/YOUR_IMAGE.png',
}
```

---

## 🎯 Quick Reference Table

| What | Where to Upload | How to Get Link |
|------|----------------|-----------------|
| **Videos** | YouTube (recommended) | Share → Embed → Copy URL |
| **Videos** | Google Drive | Share → Get FILE_ID → Use `/preview` URL |
| **Videos** | Vimeo | Share → Copy player link |
| **Videos** | Streamable | Upload → Copy URL, replace `streamable.com` with `streamable.com/e` |
| **Images** | Imgur (recommended) | Right-click → Copy image address |
| **Images** | Google Drive | Share → Get ID → Use view URL |
| **PDFs** | Google Drive | Share → Get ID → Use file URL |

---

## ✅ Complete Example

Let's say you want to add:
- Your profile photo
- A UE5 gameplay video
- Some artwork

**Step 1: Upload Everything**
- Profile photo → Upload to Imgur → Get: `https://i.imgur.com/profile123.jpg`
- UE5 video → Upload to YouTube → Share → Get URL: `https://www.youtube.com/embed/1a2B3c4D5e6F`
- Artwork 1 → Upload to Imgur → Get: `https://i.imgur.com/art1.png`
- Artwork 2 → Upload to Imgur → Get: `https://i.imgur.com/art2.png`

**Step 2: Update Your Code**

**AboutSection.tsx** (line 33):
```typescript
src="https://i.imgur.com/profile123.jpg"
```

**UE5Section.tsx** (line 15):
```typescript
videoUrl: "https://www.youtube.com/embed/1a2B3c4D5e6F",
```

**ArtworkSection.tsx** (lines 9-20):
```typescript
const artworks = [
  {
    title: 'Character Design',
    description: 'My character concept',
    image: 'https://i.imgur.com/art1.png',
  },
  {
    title: 'Environment Art',
    description: 'A landscape I created',
    image: 'https://i.imgur.com/art2.png',
  },
];
```

**That's it!** Save the files and your media will appear.

---

## 💡 Pro Tips

1. **YouTube for videos** - Best for your own MP4 files, no size limit (up to 15GB free)
2. **Imgur** - No account needed, just upload and get links instantly
3. **Image quality** - Upload high-resolution images (1200px+ width)
4. **Test links** - Open the URL in a browser to make sure it works before adding to code

---

## 🚨 Troubleshooting

**Google Drive video not playing?**
- Make sure you set sharing to **"Anyone with the link"**
- Use the `/preview` URL format, not `/view`
- Example: `https://drive.google.com/file/d/FILE_ID/preview`

**YouTube video not embedding?**
- Make sure you're using the `/embed/` URL, not the regular watch URL
- Check video privacy settings (Public or Unlisted works, Private won't)

**Imgur image not showing?**
- Make sure you copied the **direct image link** (should start with `https://i.imgur.com/`)
- If you copied the page URL, right-click the image again and get the image address

---

## 🎬 Where to Edit Each Component

| What to Update | File | Line |
|---------------|------|------|
| Profile Photo | `/components/AboutSection.tsx` | ~33 |
| UE5 Videos | `/components/UE5Section.tsx` | ~15, 24, 31 |
| Artwork Images | `/components/ArtworkSection.tsx` | ~9-36 |
| Playdate Video | `/components/PlaydateSection.tsx` | ~8 |
| Playdate PDF | `/components/PlaydateSection.tsx` | ~13 |

---

**Need help?** Just upload your media to Google Drive, YouTube, or Imgur, get the link, and paste it in the code! 🚀

---

## 📺 Google Drive Video - Complete Example

Let's say you have a video file called `my-game-demo.mp4` on your computer.

**Step 1:** Go to [drive.google.com](https://drive.google.com) and upload it

**Step 2:** Right-click the video → Share → "Anyone with the link" → Copy link
- Your link: `https://drive.google.com/file/d/1abc123XYZ456/view?usp=sharing`

**Step 3:** Extract the FILE_ID (the part between `/d/` and `/view`)
- FILE_ID: `1abc123XYZ456`

**Step 4:** Use this in your code:
```typescript
videoUrl: "https://drive.google.com/file/d/1abc123XYZ456/preview"
```

**That's it!** Your video will play directly in your portfolio. ✨