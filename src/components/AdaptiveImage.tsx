import {
  useState,
  type CSSProperties,
  type SyntheticEvent,
} from "react";
import {
  FILL_STYLE,
  FRAME_CLASS,
  HINT_RATIO,
  getFrameStyle,
  type AspectHint,
} from "./mediaFrame";

interface AdaptiveImageProps {
  url: string;
  title?: string;
  alt?: string;
  /** Smaller frame for portrait shots shown inside listing cards */
  compact?: boolean;
  /** Ratio guess used until the file's real size is known */
  preferredAspect?: AspectHint;
  className?: string;
  style?: CSSProperties;
}

export function AdaptiveImage({
  url,
  title,
  alt,
  compact = false,
  preferredAspect = "unknown",
  className = "",
  style,
}: AdaptiveImageProps) {
  const [ratio, setRatio] = useState<number>(
    HINT_RATIO[preferredAspect],
  );

  const readSize = (e: SyntheticEvent<HTMLImageElement>) => {
    const { naturalWidth, naturalHeight } = e.currentTarget;
    if (naturalWidth && naturalHeight) {
      setRatio(naturalWidth / naturalHeight);
    }
  };

  return (
    <div className={className} style={style}>
      <div
        className={FRAME_CLASS}
        style={getFrameStyle(ratio, compact)}
      >
        <img
          src={url}
          alt={alt || title || ""}
          onLoad={readSize}
          style={{ ...FILL_STYLE, objectFit: "contain" }}
        />
      </div>
      {title && (
        <p
          className="text-sm text-center"
          style={{ marginTop: 12, color: "#6b7280" }}
        >
          {title}
        </p>
      )}
    </div>
  );
}
