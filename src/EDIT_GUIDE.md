# How to Edit Your Portfolio Content

## 📝 Where to Find and Edit Text

### 1. **About Section (Home Page)**
**File:** `/components/AboutSection.tsx`

- **Your name:** Line 45 - Change "Hi, I'm Cansu"
- **Your introduction:** Lines 52-67 - Edit the three paragraphs with your personal story
- **Profile image:** Line 33 - Replace the image URL with your own photo

---

### 2. **Explore My Work Section**
**File:** `/components/SectionNavigator.tsx`

**Lines 5-34** - Edit the section cards:
```typescript
{
  id: 'ue5',
  title: 'Unreal Engine 5',  // ← Edit title here
  description: 'Game development & interactive experiences',  // ← Edit description here
}
```

---

### 3. **Unreal Engine 5 Section**
**File:** `/components/UE5Section.tsx`

- **Section intro:** Lines 36-40 - Change the description text
- **Projects:** Lines 6-23 - Edit each project:
  ```typescript
  {
    title: 'Open World Adventure Game',  // ← Project title
    description: 'A vast open-world...',  // ← Project description
  }
  ```

---

### 4. **Artwork Section**
**File:** `/components/ArtworkSection.tsx`

- **Section intro:** Lines 36-40
- **Artwork items:** Lines 6-31 - Edit each artwork:
  ```typescript
  {
    title: 'Character Concept Art',  // ← Artwork title
    description: 'Original character designs...',  // ← Description
    image: 'URL_HERE',  // ← Replace with your image URL
  }
  ```

---

### 5. **Playdate Section**
**File:** `/components/PlaydateSection.tsx`

- **Section intro:** Lines 36-40
- **Project title:** Line 35 - "Crank Adventure"
- **Project description:** Lines 36-40
- **Documentation text:** Lines 52-61

---

### 6. **Software Development Section**
**File:** `/components/SoftwareDevSection.tsx`

- **Section intro:** Lines 36-40
- **Projects:** Lines 6-24 - Edit each project:
  ```typescript
  {
    title: 'Full-Stack Web Application',  // ← Project title
    description: 'A comprehensive web platform...',  // ← Description
    liveLink: 'https://example.com',  // ← Your live project URL
    githubLink: 'https://github.com/cansu/project',  // ← Your GitHub URL
    tags: ['React', 'Node.js', ...],  // ← Technology tags
  }
  ```

---

### 7. **Footer**
**File:** `/components/Footer.tsx`

- **Contact heading:** Line 21 - "Let's Connect"
- **Contact description:** Lines 22-25
- **Social links:** Lines 8-13 - Update URLs:
  ```typescript
  { icon: Mail, href: 'mailto:cansu@example.com', label: 'Email' },
  { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
  ```

---

### 8. **Navigation**
**File:** `/components/Navigation.tsx`

- **Portfolio name:** Line 35 - "Cansu's Portfolio"

---

## 🎨 Quick Tips

1. **Keep text concise** - Short descriptions work better for visual flow
2. **Update all URLs** - Replace placeholder URLs with your actual links
3. **Match your brand** - Keep the tone consistent across all sections
4. **Test after editing** - Check that everything still looks good after changes

## 📸 Adding Your Own Images

Replace these placeholder images:
- **Profile photo:** `/components/AboutSection.tsx` line 33
- **Artwork gallery:** `/components/ArtworkSection.tsx` lines 6-31
- **Software projects:** `/components/SoftwareDevSection.tsx` lines 6-24

Simply replace the URL in the `image:` or `src:` field with your own image URL.

---

**Need help?** Just open the file mentioned and look for the line numbers listed above!
