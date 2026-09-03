import { motion } from "motion/react";
import {
  ArrowLeft,
  Github,
  ExternalLink,
  Gamepad2,
} from "lucide-react";
import type { CSSProperties } from "react";
import { AdaptiveVideoPlayer } from "./AdaptiveVideoPlayer";
import { AdaptiveImage } from "./AdaptiveImage";
import { GameWriteup } from "./GameWriteup";
import { GameDownload } from "./GameDownload";

// Served from src/public/images/ — Google Drive throttles hotlinked
// thumbnails, which made these covers fail intermittently.
const pizzaDeliveryCover = "/images/pizza-delivery-cover.png";
const wistarWagerCover = "/images/wistar-wager-cover.png";

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
    "to-be-seen": {
      title: "To Be Seen",
      subtitle: "Narrative-Driven Puzzle-Platformer",
      description:
        "A heartwarming, narrative-driven puzzle-platformer that blends third-person exploration, first-person gameplay, and environmental puzzles into a story-focused experience.\n\nTo Be Seen is built around a single core mechanic explored through multiple puzzle variations, with the game split roughly evenly between puzzle-solving and platforming. Rather than constantly introducing new mechanics, the game expands the possibilities of its central mechanic and challenges the player to understand it in new ways.",
      role: "My Role",
      roleDescription:
        "I have been involved with To Be Seen from the early stages of development, working across gameplay, puzzle, level, and narrative design. My focus is on connecting the individual pieces of the experience — from the core mechanic and its puzzle applications to platforming, level progression, and storytelling — so that they feel like parts of the same game rather than separate systems.",
      features: [
        "One core mechanic, expanded through escalating puzzle variations",
        "Roughly even split between puzzle-solving and platforming",
        "Shifts between first-person and third-person perspectives",
        "Story beats placed directly into level progression",
        "Environmental puzzles and environmental storytelling",
      ],
      technologies: [
        "Unreal Engine 5",
        "Puzzle Design",
        "Level Design",
        "Narrative Design",
        "Gameplay Design",
        "Playtesting",
      ],
      embedUrl: "",
      previewUrl: "",
      gamePageUrl: "",
      media: [
        {
          type: "video",
          // Drop the clip in src/public/videos/ and set the path here.
          url: "",
          title: "Gameplay",
        },
      ],
      writeup: {
        title: "Design Breakdown",
        intro:
          "How the core mechanic, puzzles, platforming, and story are developed together into one cohesive experience.",
        blocks: [
          {
            title: "Puzzle & Gameplay Design",
            body: [
              "The game revolves around a single core mechanic that is used to create a variety of puzzles.",
              "I contribute to designing and refining these puzzles by exploring new applications of the mechanic, combining it with environmental elements, and progressively increasing its complexity. The goal is to create new challenges through recontextualization rather than constantly introducing new mechanics.",
              "I also contribute to balancing the game's puzzle-solving and platforming, including pacing, difficulty, player objectives, and how each section builds on what the player has previously learned.",
            ],
          },
          {
            title: "Narrative & Level Progression",
            body: [
              "Story and gameplay are developed together rather than treated as separate layers. I have been involved in shaping:",
            ],
            bullets: [
              "Level and chapter progression",
              "Story beat and narrative moment placement",
              "Player objectives and their relationship to the story",
              "Puzzle and platforming pacing",
              "How gameplay progression reflects narrative progression",
              "How individual levels contribute to the overall narrative arc",
            ],
            after: [
              "I work with the team to make sure the player's journey through the levels also feels like meaningful progression through the story, creating a heartwarming experience where the player's actions naturally carry the narrative forward.",
            ],
          },
          {
            title: "Perspective & Player Experience",
            body: [
              "To Be Seen moves between first-person and third-person perspectives, with each perspective supporting different aspects of gameplay and exploration. I consider how perspective affects:",
            ],
            bullets: [
              "Puzzle readability and interaction",
              "Platforming and exploration",
              "Player immersion",
              "Environmental storytelling",
              "Emotional and narrative moments",
            ],
            after: [
              "The perspective shifts are considered as part of the overall player experience rather than simply being camera changes.",
            ],
          },
          {
            title: "Collaboration & Iteration",
            body: [
              "I work closely with the team throughout development to iterate on the game's core mechanic, puzzles, levels, and narrative flow.",
              "This includes brainstorming and refining puzzle ideas, playtesting gameplay, evaluating pacing and difficulty, and ensuring that gameplay challenges, story beats, and level progression work together cohesively.",
            ],
          },
        ],
      },
      links: [],
    },
    "tank-arena": {
      title: "Tank Arena",
      subtitle: "2-Player Local Arcade Tank Battle",
      description:
        "A fast-paced 2-player arcade tank battle built entirely from scratch in Unreal Engine.\n\nInspired by classic arcade tank games, Tank Arena puts two players head-to-head in a timed battle. One player controls their tank using a keyboard, while the other uses a game controller. Players score by successfully hitting their opponent, and the player with the highest score when the timer runs out wins the match.\n\nThe project was developed from the ground up, covering everything from player controls and combat systems to projectile behaviors, power-ups, VFX, SFX, scoring, and complete match flow.",
      role: "My Contributions",
      roleDescription:
        "I was responsible for the game's implementation from concept to playable build, including gameplay programming, Blueprint development, systems design, player controls, combat mechanics, power-ups, VFX/SFX integration, and game flow. Each major gameplay feature required its own logic, interactions, and integration into the overall game loop.",
      features: [
        "Complete arcade combat game built from scratch",
        "Three distinct projectile behaviors: standard, bouncing, and guided",
        "Four power-ups: shield, invincibility, speed boost, and big bullet",
        "Local multiplayer across keyboard and controller input",
        "VFX and SFX integrated as gameplay feedback",
        "Full loop from input to combat, scoring, and match completion",
      ],
      technologies: [
        "Unreal Engine 5",
        "Blueprints",
        "Gameplay Programming",
        "Local Multiplayer",
        "VFX",
        "SFX",
      ],
      embedUrl: "",
      previewUrl: "",
      gamePageUrl: "",
      download: {
        title: "Play Tank Arena",
        notice:
          "Tank Arena is a local 2-player game — there is no AI opponent and no single-player mode. Both tanks are driven by people sitting at the same machine, so you need a second player with a game controller. If you launch it alone, the second tank simply will not move.",
        url: "https://github.com/Calypso-07/Portfoliowebsitecreation/releases/download/tank-arena/TankArena-Windows.zip",
        fileName: "TankArena-Windows.zip",
        size: "331 MB",
        requirements: [
          "A Windows PC",
          "A keyboard for Player 1",
          "A game controller for Player 2 (Xbox or PlayStation style)",
          "Two people — the second tank has no AI",
        ],
        players: [
          {
            name: "Player 1 — Keyboard",
            device: "keyboard",
            controls: [
              "WASD to move and aim the tank",
              "Fire to score hits on the opposing tank",
              "WASD also steers the guided projectile after firing",
            ],
          },
          {
            name: "Player 2 — Game Controller",
            device: "controller",
            controls: [
              "Analog stick to move and aim the tank",
              "Trigger / face button to fire",
            ],
          },
        ],
        steps: [
          "Download and unzip the archive anywhere on your PC.",
          "Plug in a game controller before launching, so Player 2 is picked up.",
          "Run the .exe inside the extracted folder.",
          "Both players score by hitting the other tank — highest score when the timer hits zero wins.",
        ],
      },
      media: [
        {
          type: "video",
          // Drop a match clip in src/public/videos/ and set the path here.
          url: "",
          title: "Match Gameplay",
        },
      ],
      writeup: {
        title: "Project Breakdown",
        intro:
          "Every system in Tank Arena — controls, combat, projectiles, power-ups, scoring, and match flow — was built from the ground up in Unreal Engine.",
        blocks: [
          {
            title: "Gameplay",
            blocks: [
              {
                title: "2-Player Local Multiplayer",
                body: [
                  "Two players compete simultaneously using different input devices. The keyboard and controller inputs are independently mapped to their respective tanks, allowing both players to move, aim, fire, and react in real time.",
                  "The match is built around a simple arcade loop — move, attack, dodge, score, repeat — with a countdown timer determining the end of the round.",
                ],
              },
              {
                title: "Three Unique Projectile Types",
                body: [
                  "The combat system features three distinct bullet behaviors, each requiring a different approach from the player:",
                ],
                bullets: [
                  {
                    label: "Standard Bullet",
                    text: "A straightforward projectile that travels directly toward the opponent.",
                  },
                  {
                    label: "Bouncing Bullet",
                    text: "Ricochets off the environment, allowing players to attack from unexpected angles and create indirect shots.",
                  },
                  {
                    label: "Guided Bullet",
                    text: "A controllable projectile that can be steered using WASD, giving players additional control after firing.",
                  },
                ],
              },
              {
                title: "Power-Up System",
                body: [
                  "Power-ups appear during the match and temporarily change the player's capabilities, creating opportunities to turn the fight around.",
                ],
                bullets: [
                  {
                    label: "Shield",
                    text: "Protects the player from incoming damage for a limited duration.",
                  },
                  {
                    label: "Invincibility",
                    text: "Makes the player completely immune to attacks temporarily.",
                  },
                  {
                    label: "Speed Boost",
                    text: "Temporarily increases tank movement speed.",
                  },
                  {
                    label: "Big Bullet",
                    text: "Increases projectile size, making attacks more impactful and easier to land.",
                  },
                ],
              },
            ],
          },
          {
            title: "Combat & Game Systems",
            body: [
              "The entire gameplay loop was implemented from scratch, including:",
            ],
            bullets: [
              "Player movement and shooting",
              "Keyboard and controller input",
              "Projectile spawning and behavior",
              "Collision and hit detection",
              "Damage and health systems",
              "Projectile-specific interactions",
              "Power-up spawning and activation",
              "Temporary status effects and durations",
              "Score tracking and match timer",
              "Win-condition logic, round and end-of-match flow",
            ],
            after: [
              "The systems were built to work together as a cohesive gameplay framework rather than as isolated mechanics.",
            ],
          },
          {
            title: "VFX & SFX",
            body: [
              "To make combat feel more responsive and readable, gameplay events are supported by visual and audio feedback. VFX and SFX were integrated directly into the gameplay systems so that important combat events communicate clearly to the player.",
            ],
            blocks: [
              {
                title: "Visual Effects",
                bullets: [
                  "Projectile trails",
                  "Bullet impact effects",
                  "Hit feedback",
                  "Combat effects",
                ],
              },
              {
                title: "Sound Effects",
                bullets: [
                  "Weapon firing",
                  "Projectile impacts",
                  "Gameplay feedback",
                ],
              },
            ],
          },
          {
            title: "Technical Implementation",
            blocks: [
              {
                title: "Built From Scratch",
                body: [
                  "This project involved building the game from the ground up in Unreal Engine, with extensive use of Blueprints and gameplay code.",
                  "Rather than relying on pre-built gameplay systems, I implemented the core mechanics and interactions myself, including player controls, combat, projectile logic, power-ups, scoring, and match progression.",
                ],
              },
              {
                title: "Modular Gameplay Systems",
                body: [
                  "The different projectile types and power-ups were implemented as separate gameplay systems, allowing each mechanic to have its own behavior while integrating with the shared combat framework.",
                  "This made it possible to introduce different attack behaviors and temporary player effects without rebuilding the core combat system for every mechanic.",
                ],
              },
              {
                title: "Input System",
                body: [
                  "Implemented support for two simultaneous players using different control schemes:",
                ],
                bullets: [
                  {
                    label: "Player 1",
                    text: "Keyboard / WASD",
                  },
                  {
                    label: "Player 2",
                    text: "Game Controller",
                  },
                ],
              },
            ],
          },
        ],
      },
      links: [],
    },
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
        "Claude",
      ],
      embedUrl: "",
      previewUrl: "",
      gamePageUrl: "https://pixidus.com",
      // Portrait gameplay clip sits beside the header
      heroVideo: {
        url: "/videos/runnerguy-video.mp4",
        title: "Gameplay Demo",
        aspect: "portrait",
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
      heroVideo: {
        url: "/videos/trivia-video.mp4",
        title: "Gameplay Demo",
        aspect: "portrait",
      },
      media: [],
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
      heroVideo: {
        url: "/videos/Solitaire.mp4",
        title: "Gameplay Demo",
        aspect: "landscape",
      },
      media: [],
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
      heroImage: {
        url: "/images/sudoku.png",
        title: "Localized in-game UI",
        aspect: "portrait",
      },
      media: [],
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

  const heroMedia = game.heroVideo?.url
    ? game.heroVideo
    : game.heroImage?.url
      ? game.heroImage
      : null;

  // Portrait media sizes itself from its own height, so it only needs to be
  // allowed to shrink. Landscape media needs a real column width instead.
  const heroMediaStyle: CSSProperties =
    heroMedia?.aspect === "landscape"
      ? { flex: "1 1 24rem", minWidth: 0, maxWidth: "34rem" }
      : { flex: "0 1 auto", maxWidth: "100%" };

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

        {/* Header + optional hero clip or screenshot */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12"
          style={
            heroMedia
              ? {
                  display: "flex",
                  flexWrap: "wrap",
                  alignItems: "flex-start",
                  gap: "2.5rem",
                }
              : undefined
          }
        >
          <div
            style={
              heroMedia
                ? { flex: "1 1 20rem", minWidth: 0 }
                : undefined
            }
          >
            <p className="text-[#7C4DFF] mb-2">{game.subtitle}</p>
            <h1 className="text-gray-800 mb-4">{game.title}</h1>
            <p className="text-gray-600 max-w-3xl whitespace-pre-wrap">
              {game.description}
            </p>
          </div>
          {game.heroVideo?.url ? (
            <AdaptiveVideoPlayer
              url={game.heroVideo.url}
              title={game.heroVideo.title}
              thumbnail={game.heroVideo.thumbnail}
              preferredAspect={game.heroVideo.aspect || "portrait"}
              style={heroMediaStyle}
            />
          ) : (
            game.heroImage?.url && (
              <AdaptiveImage
                url={game.heroImage.url}
                title={game.heroImage.title}
                alt={`${game.title} screenshot`}
                preferredAspect={game.heroImage.aspect || "portrait"}
                style={heroMediaStyle}
              />
            )
          )}
        </motion.div>

        {/* Downloadable desktop build (Unreal packages to .exe, not to web) */}
        {game.download && <GameDownload info={game.download} />}

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
                    <div
                      style={{
                        background: "#FFFBEB",
                        border: "1px solid #FDE68A",
                        color: "#92400E",
                        padding: "0.75rem 1rem",
                        borderRadius: "0.75rem",
                        fontSize: "0.875rem",
                        lineHeight: 1.6,
                      }}
                    >
                      <p
                        style={{
                          fontWeight: 600,
                          marginBottom: "0.25rem",
                        }}
                      >
                        Game not loading?
                      </p>
                      <p style={{ margin: 0 }}>
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

        {/* Long-form design / project breakdown */}
        {game.writeup && <GameWriteup writeup={game.writeup} />}

        {/* Technical Case Study */}
        {game.caseStudy && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="mb-12"
          >
            <div className="mb-8">
              <h2 className="text-gray-800 mb-4">
                {game.caseStudy.title}
              </h2>
              <p className="text-gray-600 max-w-3xl">
                {game.caseStudy.intro}
              </p>
            </div>

            {game.caseStudy.metrics?.length > 0 && (
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                {game.caseStudy.metrics.map(
                  (
                    metric: { value: string; label: string },
                    i: number,
                  ) => (
                    <div
                      key={i}
                      className="bg-[#F3E5F5] rounded-2xl p-6 text-center"
                    >
                      <h3 className="text-[#7C4DFF] mb-2">
                        {metric.value}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        {metric.label}
                      </p>
                    </div>
                  ),
                )}
              </div>
            )}

            {game.caseStudy.context && (
              <div className="bg-white rounded-3xl p-8 shadow-xl mb-8">
                <h3 className="mb-4 text-gray-800">
                  {game.caseStudy.context.title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {game.caseStudy.context.body}
                </p>
                <ul className="space-y-2">
                  {game.caseStudy.context.bullets.map(
                    (bullet: string, i: number) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-gray-600"
                      >
                        <span className="text-[#7C4DFF] mt-1">
                          •
                        </span>
                        {bullet}
                      </li>
                    ),
                  )}
                </ul>
              </div>
            )}

            <div className="space-y-8">
              {game.caseStudy.highlights.map(
                (h: any, i: number) => (
                  <article
                    key={i}
                    className="bg-white rounded-3xl p-8 shadow-xl"
                  >
                    <div className="flex items-start gap-3 mb-6">
                      <span className="text-[#7C4DFF]">
                        {h.number}
                      </span>
                      <h3 className="text-gray-800">
                        {h.title}
                      </h3>
                    </div>

                    <h4 className="mb-2 text-[#2D8B8A]">
                      Problem
                    </h4>
                    <p className="text-gray-600 mb-6">
                      {h.problem}
                    </p>

                    <h4 className="mb-3 text-[#2D8B8A]">
                      Diagnosis
                    </h4>
                    <ol className="space-y-2 mb-6">
                      {h.diagnosis.map(
                        (step: string, si: number) => (
                          <li
                            key={si}
                            className="flex items-start gap-2 text-gray-600"
                          >
                            <span className="text-[#7C4DFF] mt-1">
                              {si + 1}.
                            </span>
                            {step}
                          </li>
                        ),
                      )}
                    </ol>

                    <h4 className="mb-2 text-[#2D8B8A]">
                      Decision
                    </h4>
                    <p className="text-gray-600">
                      {h.decision}
                    </p>

                    {h.code && (
                      <pre
                        style={{
                          marginTop: "1.5rem",
                          padding: "1.25rem",
                          borderRadius: "1rem",
                          background: "#2D2A4A",
                          color: "#EDE7F6",
                          fontFamily:
                            "ui-monospace, SFMono-Regular, Menlo, Consolas, monospace",
                          fontSize: "0.8125rem",
                          lineHeight: 1.7,
                          overflowX: "auto",
                        }}
                      >
                        <code>{h.code}</code>
                      </pre>
                    )}
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
