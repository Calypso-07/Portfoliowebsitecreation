# Images Folder

Upload your images here:
- Profile photos
- Project screenshots
- Artwork
- Thumbnails (jpg, png, **gif** all work)

Supported formats: .jpg, .jpeg, .png, .gif, .webp

After uploading, reference them in your code as:
`"/images/filename.png"`

## Unity internship thumbnails (suggested names)

Put files here, then paste the path into `UnitySection.tsx` (`thumbnailUrl`)
and/or `GameDetailPage.tsx` (`media[].thumbnail`):

| Project           | Suggested file               |
|-------------------|------------------------------|
| Runner Guy        | `runnerguy-thumb.jpg`        |
| Trivia Football   | `trivia-football-thumb.jpg`  |
| Solitaire Colors  | `solitaire-colors-thumb.jpg` |
| Sudoku            | `sudoku-thumb.jpg`           |

Example:
```typescript
thumbnailUrl: "/images/runnerguy-thumb.gif"
```
