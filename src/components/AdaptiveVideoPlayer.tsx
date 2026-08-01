import { motion } from "motion/react";
import { Play } from "lucide-react";
import { useState, type SyntheticEvent } from "react";

type AspectMode = "unknown" | "portrait" | "landscape" | "square";

function getAspectMode(width: number, height: number): AspectMode {
  if (!width || !height) return "unknown";
  const ratio = width / height;
  if (ratio < 0.85) return "portrait";
  if (ratio > 1.15) return "landscape";
  return "square";
}

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
  /** Compact phone-frame style for portrait clips in side-by-side layouts */
  compact?: boolean;
  /** Hint before metadata loads (avoids a landscape flash for known portrait clips) */
  preferredAspect?: AspectMode;
  className?: string;
  autoPlayOnClick?: boolean;
}

export function AdaptiveVideoPlayer({
  url,
  title,
  thumbnail,
  compact = false,
  preferredAspect = "unknown",
  className = "",
  autoPlayOnClick = true,
}: AdaptiveVideoPlayerProps) {
  const [playing, setPlaying] = useState(false);
  const [aspect, setAspect] = useState<AspectMode>(preferredAspect);
  const embed = isEmbedUrl(url);

  const effective = aspect === "unknown" ? preferredAspect : aspect;

  const shellClass =
    effective === "portrait"
      ? compact
        ? "w-full max-w-[280px] mx-auto aspect-[9/16] max-h-[70vh]"
        : "w-full max-w-[360px] mx-auto aspect-[9/16] max-h-[75vh]"
      : effective === "square"
        ? "w-full max-w-xl mx-auto aspect-square"
        : "w-full aspect-video";

  const handleMeta = (e: SyntheticEvent<HTMLVideoElement>) => {
    const v = e.currentTarget;
    setAspect(getAspectMode(v.videoWidth, v.videoHeight));
  };

  // Preload metadata even before play so the frame sizes correctly
  const metaProbe =
    !embed && aspect === "unknown" ? (
      <video
        src={url}
        preload="metadata"
        muted
        playsInline
        className="sr-only absolute w-0 h-0 opacity-0 pointer-events-none"
        onLoadedMetadata={handleMeta}
        aria-hidden
      />
    ) : null;

  return (
    <div className={className}>
      {metaProbe}
      <div
        className={`relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#A0E7E5] to-[#7DD3C0] flex items-center justify-center group ${shellClass}`}
      >
        {playing ? (
          embed ? (
            <iframe
              src={url}
              title={title || "Video"}
              className="absolute inset-0 w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <video
              src={url}
              className="absolute inset-0 w-full h-full object-contain bg-black"
              controls
              autoPlay
              playsInline
              onLoadedMetadata={handleMeta}
            />
          )
        ) : thumbnail ? (
          <>
            <img
              src={thumbnail}
              alt={title || "Video thumbnail"}
              className={`absolute inset-0 w-full h-full ${
                effective === "portrait"
                  ? "object-contain bg-black/20"
                  : "object-cover"
              }`}
            />
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors" />
            <PlayButton
              onClick={() =>
                autoPlayOnClick ? setPlaying(true) : undefined
              }
            />
          </>
        ) : (
          <>
            {/* Silent preview first frame once metadata known */}
            {!embed && (
              <video
                src={url}
                muted
                playsInline
                preload="metadata"
                className="absolute inset-0 w-full h-full object-contain bg-black/10"
                onLoadedMetadata={handleMeta}
              />
            )}
            <div className="absolute inset-0 bg-black/25 group-hover:bg-black/15 transition-colors" />
            <PlayButton onClick={() => setPlaying(true)} />
          </>
        )}
      </div>
      {title && (
        <p className="mt-3 text-sm text-gray-500 text-center">
          {title}
        </p>
      )}
    </div>
  );
}

function PlayButton({ onClick }: { onClick?: () => void }) {
  return (
    <motion.button
      type="button"
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.96 }}
      onClick={onClick}
      className="relative z-10 w-14 h-14 rounded-full bg-white/95 flex items-center justify-center shadow-lg cursor-pointer"
      aria-label="Play video"
    >
      <Play className="w-7 h-7 text-[#7C4DFF] ml-0.5" />
    </motion.button>
  );
}
