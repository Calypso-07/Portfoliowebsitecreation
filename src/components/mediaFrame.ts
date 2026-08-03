import type { CSSProperties } from "react";

export type AspectHint =
  | "unknown"
  | "portrait"
  | "landscape"
  | "square";

export const HINT_RATIO: Record<AspectHint, number> = {
  unknown: 16 / 9,
  portrait: 9 / 16,
  landscape: 16 / 9,
  square: 1,
};

export const FRAME_CLASS =
  "relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#A0E7E5] to-[#7DD3C0] flex items-center justify-center group";

export const FILL_STYLE: CSSProperties = {
  position: "absolute",
  inset: 0,
  width: "100%",
  height: "100%",
};

export function isPortraitRatio(ratio: number) {
  return ratio < 0.95;
}

// Sizing lives in inline styles on purpose: index.css is a pre-built Tailwind
// bundle, so arbitrary utilities added later never get generated.
// Portrait media is driven by height so tall clips stay watchable, while
// landscape media simply fills the column width.
export function getFrameStyle(
  ratio: number,
  compact: boolean,
): CSSProperties {
  const targetHeight = compact
    ? "min(58vh, 440px)"
    : "min(78vh, 680px)";

  return {
    aspectRatio: String(ratio),
    width: isPortraitRatio(ratio)
      ? `calc(${targetHeight} * ${ratio})`
      : "100%",
    maxWidth: "100%",
    marginLeft: "auto",
    marginRight: "auto",
  };
}
