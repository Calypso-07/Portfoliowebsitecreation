import { motion } from "motion/react";
import type { CSSProperties } from "react";

// The site ships a frozen, precompiled Tailwind stylesheet whose heading rules
// only apply under a fragile :where(:not(:has(...))) selector, so headings and
// body copy here carry explicit inline typography instead of utility classes.

export interface WriteupBullet {
  label?: string;
  text: string;
}

export interface WriteupBlock {
  title?: string;
  body?: string[];
  bullets?: (string | WriteupBullet)[];
  /** Paragraphs that close the block, rendered after the bullet list. */
  after?: string[];
  blocks?: WriteupBlock[];
}

export interface Writeup {
  title: string;
  intro?: string;
  blocks: WriteupBlock[];
}

const sectionTitleStyle: CSSProperties = {
  fontSize: "1.5rem",
  fontWeight: 600,
  lineHeight: 1.3,
  color: "#1f2937",
  marginBottom: "1rem",
};

const subTitleStyle: CSSProperties = {
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

function BulletList({
  bullets,
}: {
  bullets: (string | WriteupBullet)[];
}) {
  return (
    <ul style={{ margin: "0 0 1rem", padding: 0, listStyle: "none" }}>
      {bullets.map((bullet, i) => {
        const item =
          typeof bullet === "string" ? { text: bullet } : bullet;
        return (
          <li
            key={i}
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
            <span
              aria-hidden="true"
              style={{ color: "#7C4DFF", lineHeight: 1.7 }}
            >
              •
            </span>
            <span>
              {item.label && (
                <strong style={{ color: "#7C4DFF", fontWeight: 600 }}>
                  {item.label}
                </strong>
              )}
              {item.label ? " — " : ""}
              {item.text}
            </span>
          </li>
        );
      })}
    </ul>
  );
}

function BlockBody({ block }: { block: WriteupBlock }) {
  return (
    <>
      {block.body?.map((paragraph, i) => (
        <p key={i} style={bodyStyle}>
          {paragraph}
        </p>
      ))}
      {block.bullets && block.bullets.length > 0 && (
        <BulletList bullets={block.bullets} />
      )}
      {block.after?.map((paragraph, i) => (
        <p key={i} style={bodyStyle}>
          {paragraph}
        </p>
      ))}
    </>
  );
}

function hasOwnContent(block: WriteupBlock) {
  return Boolean(
    block.body?.length || block.bullets?.length || block.after?.length,
  );
}

export function GameWriteup({ writeup }: { writeup: Writeup }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.25 }}
      className="mb-12"
    >
      <div className="mb-8">
        <h2 className="text-gray-800 mb-4">{writeup.title}</h2>
        {writeup.intro && (
          <p className="text-gray-600 max-w-3xl">{writeup.intro}</p>
        )}
      </div>

      <div className="space-y-8">
        {writeup.blocks.map((block, i) => (
          <section
            key={i}
            className="bg-white rounded-3xl p-8 shadow-xl"
          >
            {block.title && (
              <h3 style={sectionTitleStyle}>{block.title}</h3>
            )}
            <BlockBody block={block} />

            {block.blocks?.map((sub, si) => {
              // A divider only earns its place between siblings, not directly
              // under a section title that has no copy of its own.
              const divided = si > 0 || hasOwnContent(block);
              return (
                <div
                  key={si}
                  style={{
                    marginTop: divided ? "1.75rem" : 0,
                    paddingTop: divided ? "1.75rem" : 0,
                    borderTop: divided ? "1px solid #f1eefb" : undefined,
                  }}
                >
                  {sub.title && <h4 style={subTitleStyle}>{sub.title}</h4>}
                  <BlockBody block={sub} />
                </div>
              );
            })}
          </section>
        ))}
      </div>
    </motion.div>
  );
}
