import { motion } from "motion/react";
import { Play } from "lucide-react";
import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type SyntheticEvent,
} from "react";

import {
  FILL_STYLE,
  FRAME_CLASS,
  HINT_RATIO,
  getFrameStyle,
  isPortraitRatio,
  type AspectHint,
} from "./mediaFrame";

function isEmbedUrl(url: string) {
  return (
    url.includes("youtube.com") ||
    url.includes("vimeo.com") ||
    url.includes("drive.google.com") ||
    url.includes("streamable.com")
  );
}

interface AdaptiveVideoPlayerProps {
  url: string;
  title?: string;
  thumbnail?: string;
  /** Smaller frame for portrait clips shown inside listing cards */
  compact?: boolean;
  /** Ratio guess used until the file's real metadata loads */
  preferredAspect?: AspectHint;
  /** Play immediately, muted, and loop, with no play button. */
  loopMuted?: boolean;
  className?: string;
  style?: CSSProperties;
}

export function AdaptiveVideoPlayer({
  url,
  title,
  thumbnail,
  compact = false,
  preferredAspect = "unknown",
  loopMuted = false,
  className = "",
  style,
}: AdaptiveVideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(loopMuted);
  const [ratio, setRatio] = useState<number>(
    HINT_RATIO[preferredAspect],
  );

  const embed = isEmbedUrl(url);
  const isPortrait = isPortraitRatio(ratio);

  const readMetadata = (
    e: SyntheticEvent<HTMLVideoElement>,
  ) => {
    const { videoWidth, videoHeight } = e.currentTarget;
    if (videoWidth && videoHeight) {
      setRatio(videoWidth / videoHeight);
    }
  };

  useEffect(() => {
    if (!loopMuted) return;
    const el = videoRef.current;
    if (!el) return;
    el.muted = true;
    el.play().catch(() => {});
  }, [loopMuted, url]);

  // The click is the user gesture, so play() has to run here. A later effect
  // is outside that gesture and Chrome will only allow a muted start.
  const openWithSound = () => {
    const el = videoRef.current;
    setPlaying(true);
    if (!el) return;
    el.muted = false;
    el.play().catch(() => {
      el.muted = true;
      el.play().catch(() => {});
    });
  };

  const fill = FILL_STYLE;

  return (
    <div className={className} style={style}>
      <div
        className={FRAME_CLASS}
        style={getFrameStyle(ratio, compact)}
      >
        {embed ? (
          playing ? (
            <iframe
              src={url}
              title={title || "Video"}
              style={{ ...fill, border: 0 }}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : (
            thumbnail && (
              <img
                src={thumbnail}
                alt={title || "Video thumbnail"}
                style={{
                  ...fill,
                  objectFit: isPortrait ? "contain" : "cover",
                }}
              />
            )
          )
        ) : (
          <video
            ref={videoRef}
            src={url}
            muted={loopMuted || !playing}
            loop={loopMuted}
            autoPlay={loopMuted}
            controls={playing && !loopMuted}
            playsInline
            preload={loopMuted ? "auto" : "metadata"}
            onLoadedMetadata={readMetadata}
            style={{
              ...fill,
              objectFit: "contain",
              background: loopMuted || playing ? "#000" : "rgba(0,0,0,0.08)",
            }}
          />
        )}
        {!playing && (
          <>
            <div
              style={{
                ...fill,
                background: "rgba(0,0,0,0.28)",
              }}
            />
            <motion.button
              type="button"
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.96 }}
              onClick={embed ? () => setPlaying(true) : openWithSound}
              aria-label={
                title ? `Play ${title}` : "Play video"
              }
              className="relative z-10 rounded-full bg-white/90 flex items-center justify-center shadow-lg cursor-pointer"
              style={{
                width: 64,
                height: 64,
                border: 0,
                padding: 0,
              }}
            >
              <Play className="w-8 h-8 text-[#7C4DFF] ml-1" />
            </motion.button>
          </>
        )}
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
