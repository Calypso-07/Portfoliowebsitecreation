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
    url: "/images/texture-checker-ui.png",
    title: "Tool interface integrated within the Unreal Editor.",
  },
  {
    url: "/images/texture-checker-fail-state.png",
    title: "Identifying incorrect compression and sRGB settings.",
  },
  {
    url: "/images/texture-checker-fix-dialog.png",
    title: "Safety confirmation before applying batch settings.",
  },
  {
    url: "/images/texture-checker-pass-state.png",
    title: "Automatic rescan verifying the fixes.",
  },
  {
    url: "/images/texture-checker-verification.png",
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

        <div className="tools-project-list tools-project-list--details">
          <motion.article
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="bg-white rounded-3xl p-8 shadow-xl"
            style={{ order: 2 }}
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
            style={{ order: 1 }}
          >
            <h2 style={titleStyle}>
              Procedural Platform Generator & Reachability Checker
            </h2>
            <p style={{ ...metaStyle, color: "#7C4DFF", fontWeight: 600 }}>
              Maya 2026.2 | Python | PySide6 | Applied Math | Graph-Based
              Reachability | Technical Level Design
            </p>
            <p style={{ ...metaStyle, marginBottom: "1rem" }}>
              <strong>Target Users:</strong> Level Designers
            </p>
            <TechTags
              tags={[
                "Maya 2026.2",
                "Python",
                "PySide6",
                "Applied Math",
                "Graph-Based Reachability",
                "Technical Level Design",
              ]}
            />

            <h3 style={headingStyle}>Overview</h3>
            <p style={bodyStyle}>
              Creating and iterating on platforming levels often involves
              manually placing platforms, adjusting distances, and checking
              whether players can reach different areas. I developed a Python
              tool for Maya that streamlines this process by combining
              procedural platform generation with automated reachability
              analysis.
            </p>
            <p style={bodyStyle}>
              The tool allows level designers to quickly prototype platform
              layouts, define character movement limits, and identify
              unreachable areas without manually checking every possible jump.
            </p>

            <AdaptiveVideoPlayer
              url="/videos/platform-generator-demo.mp4"
              title="Demo: Procedural platform generation and graph-based reachability analysis in Maya."
              preferredAspect="landscape"
              style={{ marginBottom: "1.5rem" }}
            />

            <h3 style={headingStyle}>Key Features</h3>
            <FeatureList
              items={[
                {
                  label: "Procedural Platform Generation",
                  text: "Creates rectangular platforms using customizable dimensions and XYZ offsets, positioning each new platform relative to the previous one.",
                },
                {
                  label: "Custom PySide6 Interface",
                  text: "Provides controls for platform generation, starting platform selection, movement limits, and reachability analysis.",
                },
                {
                  label: "Spatial Analysis",
                  text: "Uses world-space bounding boxes and Euclidean distance calculations to measure horizontal gaps and vertical differences between platforms.",
                },
                {
                  label: "Graph-Based Reachability",
                  text: "Builds a directed graph of possible jumps and uses breadth-first search (BFS) to determine which platforms are reachable from the selected starting point, including through intermediate platforms.",
                },
                {
                  label: "Visual Feedback",
                  text: "Highlights reachable platforms in green and unreachable platforms in red directly in Maya, with a detailed list of results.",
                },
                {
                  label: "Scene Integration",
                  text: "Detects previously generated platforms, supports layout adjustments and repeated analysis, and allows users to restore original materials.",
                },
              ]}
            />

            <h3 style={headingStyle}>Technical Approach</h3>
            <p style={bodyStyle}>
              I separated the Maya interface and scene operations from the
              reachability calculations to keep the tool organized and the
              algorithm independently testable.
            </p>
            <p style={bodyStyle}>
              The tool calculates platform-to-platform connections using
              configurable horizontal jump distance, maximum rise, and maximum
              drop limits. Since jumps can be directional, a platform may be
              reachable from above without being reachable from below.
            </p>
            <p style={bodyStyle}>
              Rather than flagging every impossible direct jump, the algorithm
              checks whether each platform can be reached through any valid
              sequence of connections. This helps level designers identify
              actual gaps in level progression.
            </p>
            <p style={bodyStyle}>
              The system is intended for early-stage blockouts and uses
              simplified movement constraints rather than full character
              physics simulation.
            </p>

            <h3 style={headingStyle}>Development & Testing</h3>
            <p style={bodyStyle}>
              I tested the tool in Maya 2026.2 using multiple platform layouts,
              including connected sequences, disconnected platforms,
              overlapping platforms, and invalid inputs. The tool successfully
              identified unreachable sections and updated its results when
              platform positions or starting points changed.
            </p>
            <p style={bodyStyle}>
              <strong>Development:</strong> Python implementation and debugging
              with ChatGPT assistance.
            </p>

          </motion.article>
        </div>
      </div>
    </div>
  );
}
