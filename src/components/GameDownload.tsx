import { motion } from "motion/react";
import {
  Download,
  ExternalLink,
  Gamepad2,
  Keyboard,
  Info,
  Users,
} from "lucide-react";
import type { CSSProperties } from "react";

export interface DownloadPlayer {
  name: string;
  device: "keyboard" | "controller";
  controls: string[];
}

export interface GameDownloadInfo {
  title: string;
  // Local path such as "/games/tank-arena/TankArena-Windows.zip" or any
  // external URL (Drive, itch.io). Leave empty until the build is hosted.
  url?: string;
  fileName?: string;
  size?: string;
  notice?: string;
  requirements?: string[];
  players?: DownloadPlayer[];
  steps?: string[];
}

const headingStyle: CSSProperties = {
  fontSize: "1.125rem",
  fontWeight: 600,
  color: "#1f2937",
  marginBottom: "0.75rem",
};

// The frozen stylesheet has no amber utilities, so the warning box is styled
// inline rather than with bg-amber-50 / border-amber-200 / text-amber-800.
const noticeBoxStyle: CSSProperties = {
  background: "#FFFBEB",
  border: "1px solid #FDE68A",
  color: "#92400E",
  padding: "0.75rem 1rem",
  borderRadius: "0.75rem",
  marginBottom: "1.75rem",
};

const listItemStyle: CSSProperties = {
  display: "flex",
  alignItems: "flex-start",
  gap: "0.625rem",
  fontSize: "0.9375rem",
  lineHeight: 1.7,
  color: "#4b5563",
  marginBottom: "0.375rem",
};

export function GameDownload({ info }: { info: GameDownloadInfo }) {
  const hasBuild = Boolean(info.url);
  // A .zip is a file the browser should download; anything else (an itch.io
  // project page, a Drive link) is a page that should just open.
  const isDirectFile = /\.zip(\?|$)/i.test(info.url ?? "");
  const isItch = (info.url ?? "").includes("itch.io");

  const buttonLabel = isDirectFile
    ? `Download for Windows${info.size ? ` (${info.size})` : ""}`
    : isItch
      ? "Get it on itch.io"
      : "Open download page";

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.1 }}
      className="mb-12"
    >
      <div className="bg-white rounded-3xl shadow-xl p-8">
        <div className="flex items-center gap-2 mb-6">
          <Gamepad2 className="w-6 h-6 text-[#7C4DFF]" />
          <h3 className="text-xl text-gray-800 font-semibold">
            {info.title}
          </h3>
        </div>

        {info.notice && (
          <div
            style={{
              display: "flex",
              alignItems: "flex-start",
              gap: "0.75rem",
              background: "#F3E5F5",
              borderRadius: "1rem",
              padding: "1.25rem",
              marginBottom: "1.75rem",
            }}
          >
            <Users className="w-5 h-5 text-[#7C4DFF]" style={{ flexShrink: 0, marginTop: 2 }} />
            <p
              style={{
                fontSize: "0.9375rem",
                lineHeight: 1.7,
                color: "#4b5563",
                margin: 0,
              }}
            >
              {info.notice}
            </p>
          </div>
        )}

        {hasBuild ? (
          <motion.a
            href={info.url}
            {...(isDirectFile
              ? { download: info.fileName }
              : { target: "_blank", rel: "noopener noreferrer" })}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center gap-3 px-6 py-4 rounded-2xl"
            style={{
              background:
                "linear-gradient(90deg, #7C4DFF 0%, #A0E7E5 100%)",
              color: "#ffffff",
              width: "fit-content",
              marginBottom: "1.75rem",
              fontWeight: 600,
            }}
          >
            {isDirectFile ? (
              <Download className="w-5 h-5" />
            ) : (
              <ExternalLink className="w-5 h-5" />
            )}
            <span>{buttonLabel}</span>
          </motion.a>
        ) : (
          <div style={noticeBoxStyle}>
            <p
              style={{
                fontWeight: 600,
                marginBottom: "0.25rem",
                fontSize: "0.875rem",
              }}
            >
              Build not hosted yet
            </p>
            <p style={{ margin: 0, fontSize: "0.875rem", lineHeight: 1.6 }}>
              The zip is too large for this repo (GitHub caps files at
              100 MB). Host it as a GitHub Release, then set{" "}
              <code>download.url</code> to the release asset URL.
            </p>
          </div>
        )}

        <div className="grid md:grid-cols-2 gap-8">
          {info.players && info.players.length > 0 && (
            <div>
              <h4 style={headingStyle}>Controls</h4>
              {info.players.map((player) => (
                <div key={player.name} style={{ marginBottom: "1.25rem" }}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                      marginBottom: "0.5rem",
                    }}
                  >
                    {player.device === "keyboard" ? (
                      <Keyboard className="w-4 h-4 text-[#2D8B8A]" />
                    ) : (
                      <Gamepad2 className="w-4 h-4 text-[#2D8B8A]" />
                    )}
                    <span
                      style={{
                        fontSize: "0.9375rem",
                        fontWeight: 600,
                        color: "#2D8B8A",
                      }}
                    >
                      {player.name}
                    </span>
                  </div>
                  {player.controls.map((control, i) => (
                    <div key={i} style={listItemStyle}>
                      <span aria-hidden="true" style={{ color: "#7C4DFF" }}>
                        •
                      </span>
                      <span>{control}</span>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          )}

          <div>
            {info.requirements && info.requirements.length > 0 && (
              <>
                <h4 style={headingStyle}>What you need</h4>
                <div style={{ marginBottom: "1.5rem" }}>
                  {info.requirements.map((req, i) => (
                    <div key={i} style={listItemStyle}>
                      <span aria-hidden="true" style={{ color: "#7C4DFF" }}>
                        •
                      </span>
                      <span>{req}</span>
                    </div>
                  ))}
                </div>
              </>
            )}

            {info.steps && info.steps.length > 0 && (
              <>
                <h4 style={headingStyle}>How to run it</h4>
                <div>
                  {info.steps.map((step, i) => (
                    <div key={i} style={listItemStyle}>
                      <span
                        aria-hidden="true"
                        style={{ color: "#7C4DFF", fontWeight: 600 }}
                      >
                        {i + 1}.
                      </span>
                      <span>{step}</span>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>

        <p
          style={{
            display: "flex",
            alignItems: "flex-start",
            gap: "0.5rem",
            fontSize: "0.8125rem",
            lineHeight: 1.6,
            color: "#9ca3af",
            marginTop: "1.75rem",
            marginBottom: 0,
          }}
        >
          <Info className="w-4 h-4" style={{ flexShrink: 0, marginTop: 2 }} />
          <span>
            Unreal Engine dropped browser (HTML5) packaging after 4.23,
            so this is a downloadable desktop build rather than an
            in-page playable embed.
          </span>
        </p>
      </div>
    </motion.div>
  );
}
