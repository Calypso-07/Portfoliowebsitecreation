import { motion } from "motion/react";
import {
  ArrowLeft,
  Github,
  ExternalLink,
  Gamepad2,
} from "lucide-react";
import { AdaptiveVideoPlayer } from "./AdaptiveVideoPlayer";

const pizzaDeliveryCover =
  "https://drive.google.com/thumbnail?id=1tsLykXWahGshQehcEniebXquvAoyeqIN&sz=w2000";
const wistarWagerCover =
  "https://drive.google.com/thumbnail?id=1b17wpo4-2cIDmwlUlY5jhVKvSo6orJ6y&sz=w2000";
const godotCover =
  "https://images.unsplash.com/photo-1745223676002-b881b2a19089?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWRlbyUyMGdhbWUlMjBkZXZlbG9wbWVudCUyMHNjcmVlbiUyMGNvZGV8ZW58MXx8fHwxNzY5NTgyMDIzfDA&ixlib=rb-4.1.0&q=80&w=1080";
const unityCover =
  "https://images.unsplash.com/photo-1676263813382-bb5ba4b63f91?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml0eSUyMGdhbWUlMjBkZXZlbG9wbWVudHxlbnwxfHx8fDE3Njk1ODIwMTl8MA&ixlib=rb-4.1.0&q=80&w=1080";

interface GameDetailPageProps {
  gameId: string;
  onNavigate: (page: string) => void;
}

export function GameDetailPage({
  gameId,
  onNavigate,
}: GameDetailPageProps) {
  // Game data
  const games: Record<string, any> = {
    "pizza-delivery": {
      title: "Pizza Delivery - Zombies Eat Free",
      subtitle: "Game Jam FPS Experience",
      description:
        "A first person shooter game made by me and 5 classmates in a Game Jam. The player need to deliver pizza in a zombie apocalypse to earn enough money to leave the town. He need to kill the zombies, but the gun shoots money, your health bar is your money, everything is money. The theme of the game jam was Pay to Win.",
      role: "My Role",
      roleDescription:
        "I worked on gameplay mechanics, weapon systems, and UI implementation. I was responsible for creating the unique money-as-ammo system, integration of the new gun model to the system, addition of sound cues, and the enemy spawner. I made sure the enemies spawn correctly, were able to move around after spawning, and their increase in number would make the game harder with time but not impossible. ",
      features: [
        "Innovative money-based combat system",
        "Fast-paced zombie encounters",
        "Strategic resource management",
        "Co-developed with 5 teammates",
      ],
      technologies: [
        "Unreal Engine 5",
        "Blueprints",
        "C++",
        "Game Jam",
        "Diversion",
      ],
      media: [
        {
          type: "video",
          url: "https://drive.google.com/file/d/1QjOPfDqkMC_8BOqZlLAAyrN8tjTNeePq/preview",
          thumbnail: pizzaDeliveryCover,
          title: "Gameplay Demo",
        },
      ],
      links: [
        // { label: "Play Game", url: "", icon: "external" },
        // { label: "GitHub", url: "", icon: "github" },
      ],
    },
    "wistar-wager": {
      title: "Wistar Wager",
      subtitle: "Escape Facility Puzzle-Platformer",
      description:
        "An escape the facility game made using puzzles and platformers. It is a term long game project made by a 6 people team. I implemented blueprints, did level design, Audio Design, and built 2 levels in Unreal Engine 5.",
      role: "My Contributions",
      roleDescription:
        "As a key member of the development team, I was responsible for implementing blueprint logic, designing a complete level and building two, creating the audio landscape, and ensuring smooth gameplay flow through careful level design.",
      features: [
        "Complex puzzle mechanics",
        "Platforming challenges",
        "Custom level design",
        "Immersive audio design",
        "Blueprint implementation",
      ],
      technologies: [
        "Unreal Engine 5",
        "Blueprints",
        "Level Design",
        "Audio Design",
        "Reaper",
        "Perforce",
      ],
      media: [
        {
          type: "video",
          url: "https://www.youtube.com/embed/CW8HNpuqJHg", // Walkthrough video
          thumbnail: wistarWagerCover,
          title: "Walkthrough",
        },
      ],
      links: [
        // { label: "Play Demo", url: "", icon: "external" },
        // { label: "GitHub", url: "", icon: "github" },
      ],
    },
    "godot-platformer": {
      title: "B0T.NET",
      subtitle: "Hacker-themed Clicker / Tower Defense",
      description: `B0T.NET is a hacker-themed clicker / tower defense game where you fight off a virus continuously diving deeper into your file system. Click on the viruses to gain RAM, and use it to buy towers!

How to Play:
Click on viruses to deal damage and harvest RAM. Viruses stream down paths on the right—if they enter a folder, you must click the folder to open it and destroy them inside. Buy towers from the shop (bottom left) to defend automatically.

RAM is your currency, earned passively and by killing viruses. Use it to purchase towers and upgrades between waves. Be careful: shop items become more expensive the more you use them! Game Over occurs if you lose all your files at the bottom.`,
      role: "Gameplay Programmer",
      roleDescription:
        "Designed and programmed the entire game, including player mechanics, enemy AI, and level design.",
      features: [
        "Active Clicking & Tower Defense Hybrid",
        "Folder/File System Protection Mechanics",
        "Multiple Tower Types (Firewall, Sentinel, Quarantine)",
        "Upgrade System for Abilities & Economy",
        "Wave-based Progression",
      ],
      technologies: [
        "Godot 4",
        "GDScript",
        "Tower Defense",
        "Web Export",
      ],
      embedUrl:
        "https://itch.io/embed-upload/16264064?color=000f06",
      gamePageUrl: "https://olatiny.itch.io/b0tnet",
      media: [],
      links: [],
    },
    "unity-runnerguy": {
      title: "Runner Guy",
      subtitle: "Productionizing an Inherited Unity Codebase",
      description:
        "A 3-lane vertical endless runner for mobile and WebGL. I did not build it from scratch — I inherited an unowned, undocumented, decompiled, testless codebase and engineered it into a production-ready title shipped on Pixidus.",
      role: "Gameplay & Engine Programmer",
      roleDescription:
        "Refactored 21 scripts (+2,013 / −73 LOC), added 9 architecture files, and migrated the project to Unity 6. Focused on systems diagnosis, platform interop, cold-start performance, and shipping a stable build.",
      features: [
        "Legacy decompiled C# codebase rehabilitated for production",
        "Unity 2021 → Unity 6 engine migration",
        "Cold-start load time cut from ~6s to ~1s",
        "Locale / TextMeshPro / CanvasScaler systems fixes",
        "WebGL–iOS fullscreen interop polyfill",
        "Published on Pixidus (pixidus.com)",
      ],
      technologies: [
        "Unity 6",
        "C#",
        "Built-in RP",
        "TextMeshPro",
        "WebGL",
        "JS Interop",
        "Android",
      ],
      embedUrl: "",
      previewUrl: "",
      gamePageUrl: "https://pixidus.com",
      // Portrait gameplay clip sits beside the header
      heroVideo: {
        url: "/videos/runnerguy-video.mp4",
        title: "Gameplay Demo",
      },
      media: [],
      caseStudy: {
        title: "Technical Case Study",
        intro:
          "Structural debt, systems-level debugging, and measurable outcomes from taking an inherited runner to production.",
        metrics: [
          { value: "~6s → ~1s", label: "Cold load time" },
          { value: "+2,013 / −73", label: "LOC · 21 files" },
          { value: "50Hz → 0", label: "Exception spike" },
          { value: "2021 → U6", label: "Engine upgrade" },
        ],
        context: {
          title: "Context & Technical Debt",
          body: "The existing codebase exhibited severe structural debt before any feature work could land safely:",
          bullets: [
            "Decompiled C# sources — typo-heavy names (Obstracle, Collieder, strightPathList), no comments, original authors unreachable",
            "Monolithic single-scene architecture — menu and gameplay lived in Game.unity, driven entirely by UI canvas toggles",
            "Fragile Inspector wiring — critical logic depended on explicit GUID/fileID links instead of dynamic initialization",
          ],
        },
        highlights: [
          {
            number: "01",
            title: "System-Level Locale & Font Atlas Diagnosis",
            problem:
              'Certain lowercase "i" characters vanished across the UI. "SKIP" rendered as "SK P" — intermittent, element-dependent.',
            diagnosis: [
              "Affected TextMeshPro elements used FontStyles.UpperCase",
              "tr-TR locale: ToUpper() maps 'i' → 'İ' (U+0130), not ASCII 'I'",
              "Font atlas only contained glyphs up to U+007E — missing U+0130 → blank glyph",
            ],
            decision:
              "A 29-line runtime bootstrapper with [RuntimeInitializeOnLoadMethod(BeforeSceneLoad)] forces CultureInfo.InvariantCulture before scene load. Follow-up: Convert.ToDateTime(string) assumptions broke under invariant culture, crashing uimanager.Start() and firing exceptions at 50 Hz in VaultTimer.FixedUpdate() — fixed with a SafeDate utility (fallback culture chains + explicit defaults per call-site).",
          },
          {
            number: "02",
            title: "Scene Deserialization & Canvas Scale Overrides",
            problem:
              "During the opening police chase, the enemy scaled massively and blocked the screen. Editor visual fixes kept reverting.",
            diagnosis: [
              "Tutorial Time.timeScale freeze left the chase coroutine mid-flight",
              "StopChase() skipped cleanup on fresh runs due to null coroutine checks",
              "Root cause: enemy lived under a Scale With Screen Size Canvas — Game view vs Simulator mismatch exposed lossyScale mutation; ~47k-line Game.unity diffs overwrote scene edits",
            ],
            decision:
              "Moved state ownership from scene serialization into C# runtime enforcement — pin enemy world scale every frame against parent Canvas lossyScale.",
            code: `// Forces enemy world scale to 1.0f by counteracting parent Canvas lossyScale
private void PinEnemyWorldScale()
{
    Transform p = EnemyTransform.parent;
    Vector3 pl = (p != null) ? p.lossyScale : Vector3.one;
    if (Mathf.Approximately(pl.x, 0f)) return; // Canvas uninitialized on frame 0
    EnemyTransform.localScale = new Vector3(1f / pl.x, 1f / pl.y, 1f / pl.z);
}`,
          },
          {
            number: "03",
            title: "WebGL / iOS Fullscreen Interop Polyfill",
            problem:
              "WebGL builds on iOS shells threw TypeError: requestFullscreen is not a function.",
            diagnosis: [
              "iOS WebKit only exposes Fullscreen API on <video>, not arbitrary DOM elements",
              "Platform shell scripts called element.requestFullscreen() with no capability checks",
            ],
            decision:
              "Built a .jslib polyfill that conditionally stubs missing methods and swallows non-critical fullscreen exceptions. Bound init to a C# [DllImport(\"__Internal\")] bridge at boot so Emscripten does not strip the plugin.",
          },
          {
            number: "04",
            title: "Cold-Start Optimization (~6s → ~1s)",
            problem:
              "Profiling showed three init bottlenecks dominating first paint.",
            diagnosis: [
              "Object pool allocation (~5s) — WaitForFixedUpdate after every prefab (~240 × ~20ms)",
              "Artificial UI delay (≥1s) — progress bar MoveTowards regardless of asset readiness",
              "Hardcoded unconditional coroutine waits (1.5s)",
            ],
            decision:
              "Batched pool allocation (yield every 8 items via yield return null) and replaced O(N) List.Insert(0, item) with O(1) List.Add(). Load time dropped ~6s → ~1s while keeping frame allocation smooth.",
          },
        ],
      },
      links: [
        {
          label: "Play on Pixidus",
          url: "https://pixidus.com",
          icon: "external",
        },
      ],
    },
    "unity-trivia-football": {
      title: "Trivia Football",
      subtitle: "Football Trivia — Internship Project",
      description:
        "A football-themed trivia game shipped on Mackolik, one of Turkey’s most widely used sports platforms. Questions are loaded from CSV. The run has three stages with rising difficulty and score weighting, four lifelines (50/50, double answer, ask the audience, and pass), a how-to-play screen, and a dynamic leaderboard with weekly, monthly, and all-time rankings — plus your own rank pinned at the bottom.",
      role: "Unity Developer Intern",
      roleDescription:
        "Built the game end-to-end: CSV question pipeline, lifeline systems, staged difficulty and scoring, leaderboard UX, how-to-play flow, and the final production build for Mackolik.",
      features: [
        "Questions loaded from CSV",
        "Four lifelines: 50/50, Double Answer, Ask the Audience, Pass",
        "Three-stage difficulty with score scaling",
        "Weekly, monthly, and all-time leaderboards",
        "Fixed personal rank row at the bottom of the board",
        "How-to-play onboarding screen",
        "Published on Mackolik",
      ],
      technologies: [
        "Unity",
        "C#",
        "CSV Data",
        "Leaderboards",
        "UI/UX",
      ],
      embedUrl: "",
      previewUrl: "",
      gamePageUrl: "",
      media: [
        {
          type: "video",
          url: "",
          thumbnail: "",
          title: "Gameplay Demo",
        },
        {
          type: "video",
          url: "",
          thumbnail: "",
          title: "Lifelines & Leaderboard",
        },
      ],
      links: [
        // Add Mackolik / store URL when you have it:
        // { label: "Play on Mackolik", url: "https://...", icon: "external" },
      ],
    },
    "unity-solitaire-colors": {
      title: "Solitaire Colors",
      subtitle: "Mobile WebGL Port — Internship Project",
      description:
        "Took a Solitaire game that was packed for Android, decoded and repaired the build, then adapted it to run as mobile WebGL. Added advertising and paid purchase flows so the web version could monetize like the native app.",
      role: "Unity Developer Intern",
      roleDescription:
        "Handled decode/fix of the packed Android build, WebGL adaptation for mobile browsers, and placement of ads plus paid purchase integration.",
      features: [
        "Decoded and fixed a packed Android build",
        "Adapted gameplay for mobile WebGL",
        "Ad placement and integration",
        "Paid purchase / IAP wiring",
      ],
      technologies: [
        "Unity",
        "C#",
        "WebGL",
        "Mobile Web",
        "Ads",
        "IAP",
      ],
      // Self-host: "/games/solitaire-colors/index.html"
      embedUrl: "",
      previewUrl: "",
      gamePageUrl: "",
      media: [
        {
          type: "video",
          url: "",
          thumbnail: "",
          title: "Gameplay Demo",
        },
      ],
      links: [],
    },
    "unity-sudoku": {
      title: "Sudoku Localization",
      subtitle: "Multi-language Support — Internship Project",
      description:
        "Configured localization for a Sudoku title so the game works correctly in multiple languages — strings, UI layout considerations, and locale switching.",
      role: "Unity Developer Intern",
      roleDescription:
        "Set up and validated localization settings so players can experience the game in different languages without broken UI or missing text.",
      features: [
        "Multi-language localization setup",
        "Locale-aware string and UI handling",
        "Verified gameplay across supported languages",
      ],
      technologies: ["Unity", "Localization", "i18n", "C#"],
      embedUrl: "",
      previewUrl: "",
      gamePageUrl: "",
      media: [
        {
          type: "video",
          url: "",
          thumbnail: "",
          title: "Localization Walkthrough",
        },
      ],
      links: [],
    },
    "unity-shooter": {
      title: "Flap",
      subtitle: "Flappy Bird Remake - Unity",
      description:
        "In order to start learning Unity Engine I worked through the classic Flappy Bird and made Flap. I created custom pixel art and learned Gamobjects, how to integrate logic between them, the UI UX integration to the scene and the overall process of finilazing a 2D game in Unity.",
      role: "Solo Developer",
      roleDescription:
        "Implemented all game objects, logic scripts, pixel art and the UI.",
      features: [
        "Custom Pixel Art",
        "Score Counter",
        "End Screen UI",
        "WebGL optimized",
      ],
      technologies: ["Unity", "C#", "WebGL", "Visual Studio"],
      // itch.io Embed Game URL (Distribute tab)
      embedUrl:
        "https://itch.io/embed-upload/16289815?color=333333",
      gamePageUrl: "https://cansuoner.itch.io/flap",
      media: [],
      links: [],
    },
  };

  const game = games[gameId];

  if (!game) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#E8F5F5] via-[#F0FFFF] to-[#E0F7FA] flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-[#7C4DFF] mb-4">
            Game Not Found
          </h2>
          <button
            onClick={() => {
              onNavigate("home");
              setTimeout(() => {
                const ue5Section =
                  document.getElementById("ue5");
                if (ue5Section) {
                  ue5Section.scrollIntoView({
                    behavior: "smooth",
                  });
                }
              }, 100);
            }}
            className="px-6 py-3 bg-gradient-to-r from-[#A0E7E5] to-[#7C4DFF] text-white rounded-full"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  const handleBackToHome = () => {
    onNavigate("home");
    setTimeout(() => {
      // Try to scroll to the section matching the game type
      let targetSection = "ue5";
      if (gameId.includes("godot")) targetSection = "godot";
      if (gameId.includes("unity")) targetSection = "unity";

      const section = document.getElementById(targetSection);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  // Helper to determine if the URL is a widget or a playable embed
  const isWidget =
    game.embedUrl && game.embedUrl.includes("/embed/");
  const isItchEmbed =
    game.embedUrl &&
    game.embedUrl.includes("itch.io") &&
    game.embedUrl.includes("/embed-upload/");
  const isSelfHosted =
    game.embedUrl &&
    (game.embedUrl.startsWith("/games/") ||
      game.embedUrl.endsWith(".html"));
  const isPlayable =
    isItchEmbed ||
    isSelfHosted ||
    (game.embedUrl && !isWidget);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#E8F5F5] via-[#F0FFFF] to-[#E0F7FA] py-20 px-6">
      <div className="max-w-6xl mx-auto pt-16">
        {/* Back Button */}
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={handleBackToHome}
          className="flex items-center gap-2 text-[#7C4DFF] mb-8 hover:gap-3 transition-all"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Home
        </motion.button>

        {/* Header + optional hero video (e.g. portrait gameplay) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className={`mb-12 ${
            game.heroVideo
              ? "grid lg:grid-cols-[1fr_minmax(240px,320px)] gap-10 items-start"
              : ""
          }`}
        >
          <div>
            <p className="text-[#7C4DFF] mb-2">{game.subtitle}</p>
            <h1 className="text-gray-800 mb-4">{game.title}</h1>
            <p className="text-gray-600 max-w-3xl whitespace-pre-wrap">
              {game.description}
            </p>
          </div>
          {game.heroVideo?.url && (
            <AdaptiveVideoPlayer
              url={game.heroVideo.url}
              title={game.heroVideo.title}
              thumbnail={game.heroVideo.thumbnail}
              preferredAspect="portrait"
              compact
              className="lg:sticky lg:top-24"
            />
          )}
        </motion.div>

        {/* Embed / Play Section */}
        {game.embedUrl && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mb-12"
          >
            <div className="bg-white rounded-3xl overflow-hidden shadow-xl p-6 flex flex-col items-center">
              <div className="flex items-center gap-2 mb-6 self-start">
                <Gamepad2 className="w-6 h-6 text-[#7C4DFF]" />
                <h3 className="text-xl text-gray-800 font-semibold">
                  {isPlayable
                    ? "Play Now"
                    : "Available Externally"}
                </h3>
              </div>

              {isWidget ? (
                <div className="flex flex-col items-center gap-4">
                  <iframe
                    src={game.embedUrl}
                    width="552"
                    height="167"
                    frameBorder="0"
                    className="max-w-full shadow-md rounded-lg"
                  >
                    <a href={game.gamePageUrl || "#"}>
                      {game.title}
                    </a>
                  </iframe>

                  <div className="text-center max-w-lg mt-4 text-sm text-gray-500">
                    <p>
                      Hosted externally. Use the banner above or
                      the links below to open the game.
                    </p>
                  </div>
                </div>
              ) : (
                <div className="w-full flex flex-col gap-4">
                  <div className="w-full aspect-video bg-black rounded-xl overflow-hidden relative shadow-2xl">
                    <iframe
                      src={game.embedUrl}
                      className="w-full h-full border-0 absolute inset-0"
                      allowFullScreen
                      allow="autoplay; fullscreen; gamepad; clipboard-write"
                    />
                  </div>

                  {isItchEmbed && (
                    <div className="bg-amber-50 border border-amber-200 text-amber-800 px-4 py-3 rounded-xl text-sm">
                      <p className="font-semibold mb-1">
                        Game not loading?
                      </p>
                      <p>
                        Use the <strong>Embed Game</strong> URL
                        from itch.io Dashboard → Edit Game →
                        Distribute (embed-upload), not the widget
                        ID.
                      </p>
                    </div>
                  )}

                  {isSelfHosted && (
                    <p className="text-sm text-gray-500">
                      Self-hosted WebGL build from{" "}
                      <code>{game.embedUrl}</code>. If it fails
                      to load, check compression headers or host
                      on itch.io instead.
                    </p>
                  )}
                </div>
              )}
            </div>
          </motion.div>
        )}

        {/* External site preview (optional — many sites block iframes) */}
        {game.previewUrl && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.12 }}
            className="mb-12"
          >
            <div className="bg-white rounded-3xl overflow-hidden shadow-xl p-6">
              <div className="flex items-center justify-between gap-4 mb-4 flex-wrap">
                <div className="flex items-center gap-2">
                  <ExternalLink className="w-5 h-5 text-[#7C4DFF]" />
                  <h3 className="text-xl text-gray-800 font-semibold">
                    Live Preview
                  </h3>
                </div>
                <a
                  href={game.previewUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[#7C4DFF] hover:underline"
                >
                  Open in new tab
                </a>
              </div>
              <div className="w-full aspect-video bg-gray-100 rounded-xl overflow-hidden relative border border-gray-200">
                <iframe
                  src={game.previewUrl}
                  className="w-full h-full border-0 absolute inset-0"
                  title={`${game.title} preview`}
                />
              </div>
              <p className="text-xs text-gray-400 mt-3">
                If this shows blank, the site blocks embedding
                (X-Frame-Options). Use “Open in new tab” or a
                gameplay video instead.
              </p>
            </div>
          </motion.div>
        )}

        {/* Media Section */}
        {game.media &&
          game.media.filter((m: any) => m.url || m.thumbnail)
            .length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-12 space-y-8"
            >
              {game.media
                .filter((m: any) => m.url || m.thumbnail)
                .map((media: any, index: number) => (
                  <div
                    key={index}
                    className="bg-white rounded-3xl overflow-hidden shadow-xl p-6"
                  >
                    {media.url ? (
                      <AdaptiveVideoPlayer
                        url={media.url}
                        title={media.title}
                        thumbnail={media.thumbnail}
                      />
                    ) : (
                      <>
                        <div className="relative aspect-video rounded-2xl overflow-hidden bg-gradient-to-br from-[#A0E7E5] to-[#7DD3C0]">
                          <img
                            src={media.thumbnail}
                            alt={media.title}
                            className="absolute inset-0 w-full h-full object-cover"
                          />
                        </div>
                        {media.title && (
                          <p className="mt-3 text-sm text-gray-500 text-center">
                            {media.title}
                          </p>
                        )}
                      </>
                    )}
                  </div>
                ))}
            </motion.div>
          )}

        {/* Technical Case Study */}
        {game.caseStudy && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="mb-12"
          >
            <div className="mb-8">
              <h2 className="text-gray-800 mb-2">
                {game.caseStudy.title}
              </h2>
              <p className="text-gray-600 max-w-3xl">
                {game.caseStudy.intro}
              </p>
            </div>

            {game.caseStudy.metrics?.length > 0 && (
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-10">
                {game.caseStudy.metrics.map(
                  (
                    metric: { value: string; label: string },
                    i: number,
                  ) => (
                    <div
                      key={i}
                      className="rounded-2xl bg-white/80 border border-[#A0E7E5]/40 px-4 py-5 text-center shadow-sm"
                    >
                      <p className="text-lg sm:text-xl font-semibold text-[#5B35C8] tracking-tight mb-1">
                        {metric.value}
                      </p>
                      <p className="text-xs sm:text-sm text-gray-500 uppercase tracking-wide">
                        {metric.label}
                      </p>
                    </div>
                  ),
                )}
              </div>
            )}

            {game.caseStudy.context && (
              <div className="bg-white rounded-3xl p-8 shadow-xl mb-8">
                <h3 className="text-gray-800 mb-3">
                  {game.caseStudy.context.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {game.caseStudy.context.body}
                </p>
                <ul className="space-y-3">
                  {game.caseStudy.context.bullets.map(
                    (bullet: string, i: number) => (
                      <li
                        key={i}
                        className="flex gap-3 text-gray-600 text-sm sm:text-base leading-relaxed"
                      >
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#7C4DFF]" />
                        <span>{bullet}</span>
                      </li>
                    ),
                  )}
                </ul>
              </div>
            )}

            <div className="space-y-6">
              {game.caseStudy.highlights.map(
                (h: any, i: number) => (
                  <article
                    key={i}
                    className="bg-white rounded-3xl shadow-xl overflow-hidden"
                  >
                    <div className="flex items-start gap-4 px-6 sm:px-8 pt-7 pb-4 border-b border-gray-100">
                      <span className="text-sm font-semibold tracking-widest text-[#7C4DFF]/80 mt-1">
                        {h.number}
                      </span>
                      <h3 className="text-gray-800 text-lg sm:text-xl leading-snug">
                        {h.title}
                      </h3>
                    </div>

                    <div className="px-6 sm:px-8 py-6 space-y-5">
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wider text-[#2D8B8A] mb-1.5">
                          Problem
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                          {h.problem}
                        </p>
                      </div>

                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wider text-[#2D8B8A] mb-2">
                          Diagnosis
                        </p>
                        <ol className="space-y-2">
                          {h.diagnosis.map(
                            (step: string, si: number) => (
                              <li
                                key={si}
                                className="flex gap-3 text-gray-600 text-sm sm:text-base leading-relaxed"
                              >
                                <span className="shrink-0 w-5 h-5 rounded-full bg-[#A0E7E5]/40 text-[#2D8B8A] text-xs flex items-center justify-center mt-0.5 font-medium">
                                  {si + 1}
                                </span>
                                <span>{step}</span>
                              </li>
                            ),
                          )}
                        </ol>
                      </div>

                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wider text-[#2D8B8A] mb-1.5">
                          Decision
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                          {h.decision}
                        </p>
                      </div>

                      {h.code && (
                        <pre className="mt-2 overflow-x-auto rounded-2xl bg-[#1a1f2e] text-[#E8EEF7] text-[11px] sm:text-xs leading-relaxed p-4 sm:p-5 font-mono">
                          <code>{h.code}</code>
                        </pre>
                      )}
                    </div>
                  </article>
                ),
              )}
            </div>
          </motion.div>
        )}

        {/* Details Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Role Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="bg-white rounded-3xl p-8 shadow-xl"
          >
            <h3 className="mb-4 text-gray-800">{game.role}</h3>
            <p className="text-gray-600 mb-6">
              {game.roleDescription}
            </p>

            <h4 className="mb-3 text-gray-800">Key Features</h4>
            <ul className="space-y-2">
              {game.features.map(
                (feature: string, index: number) => (
                  <li
                    key={index}
                    className="flex items-start gap-2 text-gray-600"
                  >
                    <span className="text-[#7C4DFF] mt-1">
                      •
                    </span>
                    {feature}
                  </li>
                ),
              )}
            </ul>
          </motion.div>

          {/* Technologies Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white rounded-3xl p-8 shadow-xl"
          >
            <h3 className="mb-4 text-gray-800">
              Technologies Used
            </h3>
            <div className="flex flex-wrap gap-3 mb-8">
              {game.technologies.map(
                (tech: string, index: number) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-[#A0E7E5]/20 text-[#2D8B8A] rounded-full"
                  >
                    {tech}
                  </span>
                ),
              )}
            </div>

            {((game.links && game.links.length > 0) ||
              game.gamePageUrl) && (
              <>
                <h4 className="mb-3 text-gray-800">Links</h4>
                <div className="space-y-3">
                  {game.links?.map(
                    (link: any, index: number) => (
                      <motion.a
                        key={index}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.02 }}
                        className="flex items-center gap-3 px-4 py-3 bg-gradient-to-r from-[#A0E7E5]/20 to-[#7DD3C0]/20 rounded-xl hover:from-[#A0E7E5]/30 hover:to-[#7DD3C0]/30 transition-colors"
                      >
                        {link.icon === "github" ? (
                          <Github className="w-5 h-5 text-[#2D8B8A]" />
                        ) : (
                          <ExternalLink className="w-5 h-5 text-[#2D8B8A]" />
                        )}
                        <span className="text-gray-700">
                          {link.label}
                        </span>
                      </motion.a>
                    ),
                  )}
                  {game.gamePageUrl &&
                    !(game.links || []).some(
                      (l: any) => l.url === game.gamePageUrl,
                    ) && (
                      <motion.a
                        href={game.gamePageUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.02 }}
                        className="flex items-center gap-3 px-4 py-3 bg-gradient-to-r from-[#A0E7E5]/20 to-[#7DD3C0]/20 rounded-xl hover:from-[#A0E7E5]/30 hover:to-[#7DD3C0]/30 transition-colors"
                      >
                        <ExternalLink className="w-5 h-5 text-[#2D8B8A]" />
                        <span className="text-gray-700">
                          Open game page
                        </span>
                      </motion.a>
                    )}
                </div>
              </>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
