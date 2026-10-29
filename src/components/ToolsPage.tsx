import { motion } from "motion/react";
import type { CSSProperties } from "react";
import { AdaptiveImage } from "./AdaptiveImage";
import { AdaptiveVideoPlayer } from "./AdaptiveVideoPlayer";

const titleStyle: CSSProperties = {
  fontSize: "1.5rem",
  fontWeight: 600,
  lineHeight: 1.3,
  color: "#1f2937",
  marginBottom: "0.35rem",
};

const headingStyle: CSSProperties = {
  fontSize: "1.125rem",
  fontWeight: 600,
  lineHeight: 1.4,
  color: "#2D8B8A",
  marginBottom: "0.75rem",
};

const bodyStyle: CSSProperties = {
  fontSize: "1rem",
  lineHeight: 1.75,
  color: "#4b5563",
  marginBottom: "1rem",
};

const metaStyle: CSSProperties = {
  fontSize: "0.95rem",
  lineHeight: 1.6,
  color: "#4b5563",
  marginBottom: "0.35rem",
};

const textureImages = [
  {
    url: "/images/texture-checker-ui.jpg",
    title: "Tool interface integrated within the Unreal Editor.",
  },
  {
    url: "/images/texture-checker-fail-state.jpg",
    title: "Identifying incorrect compression and sRGB settings.",
  },
  {
    url: "/images/texture-checker-fix-dialog.jpg",
    title: "Safety confirmation before applying batch settings.",
  },
  {
    url: "/images/texture-checker-pass-state.jpg",
    title: "Automatic rescan verifying the fixes.",
  },
  {
    url: "/images/texture-checker-verification.jpg",
    title: "Verifying the applied settings directly in Unreal's Texture Editor.",
  },
];

function FeatureList({
  items,
}: {
  items: { label: string; text: string }[];
}) {
  return (
    <ul style={{ margin: "0 0 1.25rem", padding: 0, listStyle: "none" }}>
      {items.map((item) => (
        <li
          key={item.label}
          style={{
            display: "flex",
            alignItems: "flex-start",
            gap: "0.625rem",
            fontSize: "1rem",
            lineHeight: 1.7,
            color: "#4b5563",
            marginBottom: "0.5rem",
          }}
        >
          <span aria-hidden="true" style={{ color: "#7C4DFF", lineHeight: 1.7 }}>
            •
          </span>
          <span>
            <strong style={{ color: "#7C4DFF", fontWeight: 600 }}>
              {item.label}
            </strong>
            {": "}
            {item.text}
          </span>
        </li>
      ))}
    </ul>
  );
}

function TechTags({ tags }: { tags: string[] }) {
  return (
    <div className="flex flex-wrap gap-2" style={{ marginBottom: "1.25rem" }}>
      {tags.map((tag) => (
        <span
          key={tag}
          className="px-3 py-1 bg-[#A0E7E5]/20 text-[#2D8B8A] rounded-full text-sm"
        >
          {tag}
        </span>
      ))}
    </div>
  );
}

export function ToolsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#E8F5F5] via-[#F5EBFA] to-[#F0FFF4] py-20 px-6">
      <div className="max-w-6xl mx-auto pt-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-[#7C4DFF] mb-4">Tools & Pipeline Development</h1>
          <p className="text-gray-600 max-w-3xl mx-auto">
            As a designer with a strong technical background, I develop
            internal tools to streamline workflows, eliminate repetitive
            tasks, and empower multidisciplinary teams to iterate faster.
          </p>
        </motion.div>

        <div className="space-y-12">
          <motion.article
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="bg-white rounded-3xl p-8 shadow-xl"
          >
            <h2 style={titleStyle}>Unreal Texture Health Checker</h2>
            <p style={{ ...metaStyle, color: "#7C4DFF", fontWeight: 600 }}>
              Unreal Engine 5, Python, PySide6 (ChatGPT-Assisted)
            </p>
            <p style={{ ...metaStyle, marginBottom: "1rem" }}>
              Target Users: Environment Artists and Technical Artists
            </p>
            <TechTags
              tags={[
                "Unreal Engine 5",
                "Python",
                "PySide6",
                "QA Automation",
              ]}
            />

            <h3 style={headingStyle}>Overview</h3>
            <p style={bodyStyle}>
              Incorrect texture settings can cause visual artifacts and
              performance issues, especially with normal maps. I developed
              the Texture Health Checker to automate the QA process for
              environment art teams. The tool scans a designated folder for
              normal maps (identified by _N, Normal, or NRM suffixes),
              detects incorrect compression or sRGB settings, and provides a
              one-click batch fix solution.
            </p>

            <h3 style={headingStyle}>Key Features</h3>
            <FeatureList
              items={[
                {
                  label: "Automated Scanning",
                  text: "Recursively scans selected content directories for normal maps.",
                },
                {
                  label: "Validation",
                  text: "Checks if Compression Settings are set to 'Normalmap' and sRGB is 'OFF'.",
                },
                {
                  label: "Batch Fixing",
                  text: "A 'Fix All Failing' operation that automatically corrects settings for all flagged assets with a confirmation dialog.",
                },
                {
                  label: "Verification",
                  text: "Automatically rescans assets post-fix to verify they pass project standards.",
                },
              ]}
            />

            <div className="grid md:grid-cols-2 gap-6">
              {textureImages.map((image, index) => (
                <div
                  key={image.url}
                  className={index === textureImages.length - 1 ? "md:col-span-2" : undefined}
                >
                  <AdaptiveImage
                    url={image.url}
                    title={image.title}
                    alt=""
                    preferredAspect="landscape"
                  />
                </div>
              ))}
            </div>
          </motion.article>

          <motion.article
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white rounded-3xl p-8 shadow-xl"
          >
            <div
              className="flex flex-wrap items-center gap-3"
              style={{ marginBottom: "0.35rem" }}
            >
              <h2 style={{ ...titleStyle, marginBottom: 0 }}>
                Procedural Platform Generator & Reachability Checker
              </h2>
              <span className="px-3 py-1 bg-[#7C4DFF]/10 text-[#7C4DFF] rounded-full text-sm">
                WIP
              </span>
            </div>
            <p style={{ ...metaStyle, color: "#7C4DFF", fontWeight: 600 }}>
              Maya 2026.2, Python, PySide (Codex-Assisted)
            </p>
            <p style={{ ...metaStyle, marginBottom: "1rem" }}>
              Target Users: Level Designers
            </p>
            <TechTags
              tags={["Maya 2026", "Python", "PySide", "Level Design Tools"]}
            />

            <h3 style={headingStyle}>Overview</h3>
            <p style={bodyStyle}>
              Blockout iteration in 3D platformers often requires tedious
              manual placement and constant testing to ensure platforms are
              jumpable. To solve this for my capstone project, I am
              developing a procedural platform generator in Maya. This tool
              allows level designers to quickly generate platform layouts
              and automatically evaluates pairwise jump distances using
              applied math, removing the guesswork from blockouts.
            </p>

            <h3 style={headingStyle}>Current Implementation</h3>
            <FeatureList
              items={[
                {
                  label: "Custom UI",
                  text: "Developed a PySide window for inputting platform dimensions and XYZ offsets.",
                },
                {
                  label: "Procedural Generation",
                  text: "Automates Maya's polygon cube commands to place new platforms relative to the previous one.",
                },
                {
                  label: "Spatial Measurement",
                  text: "Implemented pairwise bounding-box measurement to calculate the exact horizontal gap (XZ) and vertical height difference (Y) between platforms.",
                },
              ]}
            />

            <h3 style={headingStyle}>Development Roadmap (WIP)</h3>
            <p style={bodyStyle}>
              The next iteration will feature full graph-based reachability
              analysis, automatically highlighting unreachable platforms
              based on user-defined maximum jump limits, and supporting FBX
              export directly to Unreal Engine.
            </p>

            <AdaptiveVideoPlayer
              url="/videos/platform-generator-demo.mp4"
              title="Demo: Generating procedural blockout platforms and measuring gaps in Maya."
              preferredAspect="landscape"
            />
          </motion.article>
        </div>
      </div>
    </div>
  );
}
