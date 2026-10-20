import ownerFeedback from "../assets/img/minegens/owner-feedback.png";
import crowdedHub from "../assets/img/minegens/crowded-hub.png";
import playerCount from "../assets/img/minegens/player-count-july-2023.png";
import placeholderProfile from "../assets/img/minegens/placeholder-profile.png";
import activeGenerators from "../assets/img/minegens/active-generators.png";
import serverRanking from "../assets/img/minegens/server-list-ranking.png";
import sparkEarlier from "../assets/img/minegens/spark-earlier.png";
import sparkLater from "../assets/img/minegens/spark-later.png";
import itemskinsReport from "../assets/img/blocksmith-support/itemskins-report.png";
import itemskinsConfirmation from "../assets/img/blocksmith-support/itemskins-customer-confirmation.png";
import itemskinsBuild from "../assets/img/blocksmith-support/itemskins-build-delivery.png";
import nextgensCrash from "../assets/img/blocksmith-support/nextgens-crash-report.png";
import nextgensLog from "../assets/img/blocksmith-support/nextgens-full-log.png";
import nextgensDiagnosis from "../assets/img/blocksmith-support/nextgens-diagnosis.png";
import nextgensHandoff from "../assets/img/blocksmith-support/nextgens-customer-handoff.png";
import nextgensBuild from "../assets/img/blocksmith-support/nextgens-build-verification.png";
import collectorsRequest from "../assets/img/blocksmith-support/collectors-feature-request.png";
import collectorsFeedback from "../assets/img/blocksmith-support/collectors-first-feedback.png";
import collectorsFollowup from "../assets/img/blocksmith-support/collectors-follow-up.png";
import collectorsBuild from "../assets/img/blocksmith-support/collectors-build-verification.png";
import aiPlanning from "../assets/img/blocksmith-support/planning-with-ai.png";

export interface CaseStudyImage {
  src: string;
  alt: string;
  caption: string;
  width: number;
  height: number;
  label?: string;
  translation?: string;
  note?: string;
}

interface CaseStudy {
  slug: string;
  title: string;
  category: string;
  lastUpdated: string;
  year?: string;
  draft: boolean;
  description: string;
  hero?: CaseStudyImage;
  highlight?: { value: string; label: string; note?: string };
  timeline?: { label: string; detail: string }[];
  link?: { label: string; url: string };
  sections: {
    heading: string;
    body?: string;
    content?: (string | CaseStudyImage)[];
    images?: CaseStudyImage[];
    note?: string;
    links?: { url: string; label: string }[];
    video?: { url: string; embedUrl: string; label: string };
  }[];
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "minegens-nextgens",
    title: "Scaling MineGens through a viral launch",
    category: "Performance optimization",
    lastUpdated: "2026-10-20",
    year: "2023–2024",
    draft: false,
    description:
      "More than 500 players were trying to join. The server kept crashing. This is how I worked to bring my generator core up to speed while MineGens risked losing its new audience.",
    hero: {
      src: crowdedHub,
      alt: "Players and pets gathered around the MineGens hub's gamemode portals.",
      caption: "Players waiting in the hub while access to the gameplay servers was constrained. I remember the affected gameplay server already having more than 150 players at this stage.",
      width: 1080, height: 749,
    },
    highlight: {
      value: "~800",
      label: "concurrent-player peak across MineGens · December 2024",
      note: "From my recollection of the network's growth. A surviving screenshot below records 502 connected players on 5 July 2023; the complete historical player-count statistics are no longer available to me.",
    },
    timeline: [
      { label: "Viral launch", detail: "500+ players trying to join" },
      { label: "Capacity limit", detail: "Crashes and a player cap" },
      { label: "Optimization", detail: "Spark-guided improvements" },
      { label: "Core milestone", detail: "300+ concurrent players" },
      { label: "December 2024", detail: "~800 across the network, recalled" },
    ],
    link: { label: "Explore NextGens on GitHub", url: "https://github.com/blocksmithstudio/NextGens" },
    sections: [
      {
        heading: "One TikTok changed everything",
        body: "In 2023, I was a developer at MineGens when Gens Tycoon servers were booming. We were a new server launching with the Gens gamemode, powered by a generator core I had built. Then the owner posted a TikTok about it.\n\nThe video blew up. More than 500 players were trying to join, and the audience was growing faster than I could optimize the plugin. What should have been our breakthrough quickly became a race to keep the server running.",
        images: [{
          src: playerCount,
          alt: "Minecraft server list entry for MineGens showing 502 out of 1000 player slots occupied.",
          caption: "502 connected players in the MineGens server-list entry. From my archive, dated 5 July 2023. This is a network listing, rather than a measurement of players on one gameplay server.",
          width: 940, height: 111,
        }],
      },
      {
        heading: "The players kept coming. The server kept crashing.",
        body: "At the beginning, my plugin couldn't keep up as more players joined and more generators ran at once. The server kept crashing. Even with a high-end CPU and plenty of RAM, it struggled before we could reach 100 concurrent players.\n\nHundreds of people wanted to play, but the core I had built couldn't handle that demand. As the server grew, the workload became substantial: one surviving log records 15,688 active generators.",
        images: [{
          src: activeGenerators,
          alt: "Console log: MineGens successfully loaded 15688 active generators.",
          caption: "15,688 active generators loaded by the core, captured in a server console log.",
          width: 563, height: 32,
        }],
      },
      {
        heading: "Turning players away to keep the server running",
        body: "We had to cap the maximum player count and continue optimizing from there. It was a difficult tradeoff: limiting access gave us room to work, but it also meant turning away people who had just discovered MineGens.\n\nEvery player who couldn't get in might leave and never return. The crowded hub became a visible reminder of that pressure: people were ready to play, while we were still working to give them room.",
      },
      {
        heading: "Finding the expensive work with Spark",
        body: "With the player limit in place, I used the Spark profiler to analyze the plugin and find what was causing the performance drops. One capture drew attention to a generator-count placeholder: %gens_current_placed% appeared with an 18.65% share in that profile.\n\nIt gave me a concrete lead to investigate. There wasn't one change that solved everything. I kept going back and forth between profiling and optimization, working through the next bottleneck as the plugin improved. All the while, the demand to join was still there.",
        images: [{
          src: placeholderProfile,
          alt: "Profiler entry for the gens_current_placed placeholder showing 18.65%.",
          caption: "The generator-count placeholder in a profiling capture: %gens_current_placed% at 18.65%. This is a share within that profile, rather than total machine CPU usage.",
          width: 642, height: 35,
        }],
      },
      {
        heading: "The difference in the profiles",
        body: "An earlier Spark capture attributed 21.87% of sampled server-thread time to the MineGens plugin. A later capture showed 1.73%, with the remaining work broken down into generator calculation, scheduled tasks and event handlers.\n\nSeeing the plugin occupy a much smaller share in a later profile was a meaningful sign of progress after so much iteration.",
        images: [
          {
            src: sparkEarlier,
            alt: "Earlier Spark profile for MineGens v1.0 showing server thread 21.87%.",
            caption: "An earlier profiling capture attributed 21.87% of sampled server-thread time to MineGens.",
            label: "Earlier capture · 21.87%",
            width: 263, height: 81,
          },
          {
            src: sparkLater,
            alt: "Later Spark profile showing server thread 1.73%, generator calculate 0.89% and a generator task at 0.77%.",
            caption: "A later capture showed a 1.73% share, including generator calculation at 0.89% and a generator task at 0.77%.",
            label: "Later capture · 1.73%",
            width: 1027, height: 313,
          },
        ],
        note: "These are surviving snapshots from separate profiling sessions. Player counts, workloads and sampling conditions are not documented consistently, so they are not a controlled before-and-after benchmark.",
      },
      {
        heading: "The owner noticed the progress, too",
        body: "The improvements also showed up in my conversations with the owner. On 30 August 2023, they shared an update after the long optimization effort, commenting on the server's MSPT, or milliseconds per tick.\n\nThat exchange captures something the profiler alone couldn't: the work was making a difference to the person running the server.",
        images: [{
          src: ownerFeedback,
          alt: "Owner's Indonesian message dated 30 August 2023, with a MineGens screenshot showing 20 TPS, 39.76 MSPT and 229 other players.",
          caption: "Owner conversation, 30 August 2023. Original message in Indonesian, with an English translation below.",
          translation: "After a long stretch of optimization. At 140 players, the MSPT is only 20.",
          note: "The message mentions 140 players and 20 MSPT. The embedded screenshot shows a different reading: 20 TPS, 39.76 MSPT and 229 other players.",
          width: 766, height: 298,
        }],
      },
      {
        heading: "From a capped server to a growing network",
        body: "The generator core eventually supported more than 300 concurrent players. MineGens continued to grow beyond that milestone. By December 2024, the network reached its peak of around 800 concurrent players, as I remember it.\n\nWe were also climbing the Minecraft-MP server lists in Indonesia. The surviving listing below shows MineGens with 318 players online and a global rank of #48, appearing as the second Indonesian entry in the captured list. It is a snapshot of that period, rather than a complete ranking history.",
        images: [{
          src: serverRanking,
          alt: "Minecraft-MP list showing MineGens at rank 48 with 318 of 1000 player slots occupied, as the second visible Indonesian entry.",
          caption: "MineGens on Minecraft-MP: global rank #48, 318 players online, and the second Indonesian entry visible in this screenshot.",
          width: 1434, height: 765,
        }],
      },
      {
        heading: "An unexpected chapter: getting griefed",
        body: "That period wasn't only memorable for the performance work. MineGens was also griefed. I wondered whether the attention we were getting had played a part, though I don't know the motive.\n\nThe video below is a separate glimpse of that chapter in the server's history.",
        video: {
          url: "https://www.youtube.com/watch?v=Be_jsP5e7GU",
          embedUrl: "https://www.youtube-nocookie.com/embed/Be_jsP5e7GU",
          label: "Watch the griefing video on YouTube",
        },
      },
      {
        heading: "From MineGens to NextGens",
        body: "That generator core went on to become NextGens. It has been purchased more than 300 times and is now open source, so other server owners and developers can use it, explore the code and build on it.\n\nIts story extends beyond MineGens. SpookMC (spookmc.net) is one example of a larger server using the NextGens core. The live bStats graphic below shows the server and player counts currently reported by participating NextGens installations.\n\nBehind that public project is the story of a new server, an audience we couldn't initially handle and the work it took to catch up. Now that work is available for the wider Minecraft community to enjoy.",
        links: [{ url: "https://spookmc.net", label: "Visit SpookMC · spookmc.net" }],
        images: [{
          src: "https://bstats.org/signatures/bukkit/NextGens.svg",
          alt: "Live NextGens server and player counts from bStats.",
          caption: "Live usage reported to bStats by participating servers. These counts update independently of the 300+ purchases and do not include installations that have disabled metrics.",
          label: "NextGens in use today",
          width: 800,
          height: 300,
        }],
      },
    ],
  },
  {
    slug: "blocksmith-ai-customer-support",
    title: "Rebuilding customer trust with Blocksmith AI",
    category: "Developer tooling & customer support",
    lastUpdated: "2026-10-20",
    year: "2026",
    draft: false,
    description:
      "Maintaining more than five public plugins alongside college and client work had become unsustainable. I built an AI-connected Discord bot to help turn support conversations into fixes, tested builds and a way forward as a resource author.",
    hero: {
      src: itemskinsBuild,
      alt: "Blocksmith AI showing successful build checks, delivery controls and a downloadable ItemSkins JAR inside Discord.",
      caption: "A support request becomes a downloadable plugin build inside Discord. The bot handles the technical workflow; I direct the work and follow up with the customer.",
      width: 592, height: 623,
    },
    highlight: {
      value: "5+",
      label: "public plugins to maintain, alongside college and client work",
      note: "More than five products, each with its own bug reports, feature requests and Minecraft compatibility updates. This is the workload that led me to build a different support workflow.",
    },
    timeline: [
      { label: "Listen", detail: "Understand the customer's problem" },
      { label: "Investigate", detail: "Read evidence and project code" },
      { label: "Direct", detail: "Set requirements and make decisions" },
      { label: "Build", detail: "Implement, check and package a JAR" },
      { label: "Follow up", detail: "Customer tests on their server" },
    ],
    sections: [
      {
        heading: "The hardest part was watching trust disappear",
        body: "For more than five years, creating public Minecraft plugins has been a hobby I keep coming back to. Seeing something I made running on other servers, with real players enjoying it, makes me happy. That feeling is why I want to keep releasing things for the community.\n\nBut every release also creates a responsibility. More than five public plugins meant more than five products needing support, bug fixes, new features and updates as Minecraft changed. I was trying to keep up while attending college and working as a plugin developer on the side.\n\nI couldn't give every request the attention it needed. Customers lost trust, negative reviews appeared, and I watched interest in my products fade. It was a punch in the gut. I still loved building these plugins, but loving the work wasn't enough to make the maintenance manageable.",
      },
      {
        heading: "I needed a way to keep showing up",
        body: "The problem wasn't running out of ideas. It was finding the time to carry every support request through investigation, code changes, testing, compilation and delivery. A conversation could start in Discord, but finishing it usually meant sitting down at my development setup.\n\nSo I built Blocksmith AI: a Discord bot connected to my public plugin projects and an AI coding workflow. From the same place customers ask for help, I can ask it to inspect a project, analyze a log, answer a question or implement a change. It can then run build checks and prepare a downloadable JAR.\n\nI still speak with the customer, ask for evidence and decide what needs to change. The bot takes on the technical steps that used to make every ticket compete for the same limited hours. The early exchanges below show what that looks like in practice.",
      },
      {
        heading: "A fix delivered while I was away from my desk",
        content: [
          "One of the first examples involved ItemSkins. A customer was waiting for a solution, and I asked for screenshots or a video so I could understand the problem.",
          {
            src: itemskinsReport,
            alt: "ItemSkins customer following up in September 2026, then supplying a video after a request for more details.",
            caption: "The original support exchange: a waiting customer, my request for evidence and their video of the issue.",
            width: 1121, height: 815,
          },
          "The exchange shows the gap I was trying to close: their earlier follow-up had been on 14 September, and my request for more detail came on 27 September. Once they supplied the video, I asked the bot to implement the fix. It worked through the project, ran verification and produced the plugin JAR in Discord.",
          "I handled my side of this from my phone, away from my desk, enjoying a refreshing drink. I didn't have to open an IDE, edit the code myself or compile the project manually. I described the work and guided the handoff.",
          {
            src: itemskinsConfirmation,
            alt: "ItemSkins customer confirming that installing the delivered JAR successfully fixed the issue.",
            caption: "After testing the build, the customer confirmed that the issue was fixed. The build and downloadable JAR are shown at the top of this case study.",
            width: 1108, height: 695,
          },
          "In the captured exchange on 28 September, the task appeared at 14:39, the build was ready at 15:06, and the customer confirmed it worked at 15:13. They had downloaded the JAR, tried it on their server and told me it had fixed the issue.",
          "That was the moment this felt useful beyond a technical demonstration. A request that had been left waiting became a resolved problem, and the customer had a reason to trust my support again.",
        ],
      },
      {
        heading: "From a crashing server to a resolved support ticket",
        content: [
          "Another customer reported a more serious problem: their server was crashing. The first error excerpt mentioned failures to create threads.",
          {
            src: nextgensCrash,
            alt: "Customer reporting server thread-creation failures and my request for the full error log.",
            caption: "The initial crash report. I asked for the full log before taking the investigation further.",
            width: 1111, height: 797,
          },
          "I initially wondered whether memory pressure was involved, but a short excerpt wasn't enough to explain the failure. I asked for the complete server log, and the customer sent it over.",
          {
            src: nextgensLog,
            alt: "Customer providing a complete server log after describing their VPS setup.",
            caption: "The customer supplied the full log, giving the investigation more context than the original error excerpt.",
            width: 1105, height: 576,
          },
          "With the full log and access to the project, the bot identified native-thread exhaustion and investigated whether NextGens could be contributing. The failures followed a /pickupgens operation, and the inspected code showed asynchronous database deletions that could leave tasks waiting for connections.",
          {
            src: nextgensDiagnosis,
            alt: "Blocksmith AI explaining native-thread exhaustion and identifying NextGens bulk pickup as a plausible contributor rather than a proven sole cause.",
            caption: "The diagnosis connected the log to an inspected code path and explicitly kept uncertainty about the crash's cause.",
            width: 1112, height: 780,
          },
          "The diagnosis gave us a specific part of the plugin to improve. At that stage, it identified a plausible contributor without claiming the log proved NextGens was the sole cause. I asked the bot to optimize that bulk-pickup path.",
          "The implementation replaced the identified thread-growth path with one background database writer processing batches of up to 100 generators. It also added ordered updates, failed-write retries and draining pending work during shutdown.",
          {
            src: nextgensBuild,
            alt: "Blocksmith AI reporting the NextGens database-writer changes, passed offline checks and a JAR ready for delivery.",
            caption: "The implementation summary records the code change and offline verification. It also states that live Minecraft, Folia and MySQL testing was still needed at that point.",
            width: 597, height: 890,
          },
          "The bot reported that Maven verification and a 1,000-generator SQLite regression check passed, then prepared the JAR. Those were the checks before delivery. I directed the customer to the build in the task thread and asked them to retry the operation on their own server. The updated build resolved the reported crash.",
          {
            src: nextgensHandoff,
            alt: "Extended NextGens follow-up showing the build handoff, customer thanks, a request to retry pickupgens and agreement to report any further issues.",
            caption: "The fuller follow-up exchange: the build is delivered, the customer thanks me for the work on NextGens, and we agree to stay in touch if anything else comes up.",
            width: 1104, height: 792,
          },
          "The customer thanked me for the effort put into NextGens, and we kept the conversation open in case anything else came up. One support ticket had moved from a crash report through investigation, implementation and delivery to a working fix. For me, that was another step toward rebuilding trust through support I could actually follow through on.",
        ],
      },
      {
        heading: "A feature request that reached into existing data",
        content: [
          "The workflow wasn't limited to bug fixes. A NextCollectors customer wanted a configurable, upgradeable collection range. This was a substantial change: it needed persistent upgrades and changes to stored data, with compatibility for existing installations when they updated.",
          {
            src: collectorsRequest,
            alt: "NextCollectors customer discussing upgradeable collection range and receiving a task thread containing the build.",
            caption: "A feature conversation turned into a build the customer could test, even while my own availability was limited.",
            width: 1107, height: 829,
          },
          "I clarified the behavior with the customer and worked through the requirements with the bot. The implementation introduced a radius-based collection mode while keeping the existing chunk mode as the default. It also addressed overlap handling and collection behavior for both normal drops and NextGens drops.",
          {
            src: collectorsBuild,
            alt: "Blocksmith AI reporting persistent radius upgrades, preserved chunk defaults and five passed regression tests for NextCollectors.",
            caption: "The delivery summary describes persistent upgrades and compatibility checks, with the existing CHUNK mode retained as the default. Live Minecraft behavior was still untested at this stage.",
            width: 1110, height: 826,
          },
          "The delivery summary reported five passing regression tests, including checks around coverage, upgrade persistence and configuration compatibility. Those checks supported the change before handoff; the next step was for the customer to try it on a live server.",
          {
            src: collectorsFeedback,
            alt: "Customer confirming the collector-radius feature works and asking how to display its radius in a hologram.",
            caption: "Successful customer testing led straight into a practical follow-up request.",
            width: 1106, height: 726,
          },
          "The customer tested the collection-range change and replied that it was perfect. Then they asked whether the radius could also appear in the collector's hologram. The conversation didn't end with the first JAR: I took that follow-up through the same workflow, delivered a revised build with the radius placeholder and explained how to use it.",
          {
            src: collectorsFollowup,
            alt: "Customer receiving the radius_upgrade placeholder in a revised JAR and confirming the result after testing.",
            caption: "A second build added the hologram placeholder, followed by another positive customer confirmation.",
            width: 1120, height: 732,
          },
          "The customer tested again and confirmed they liked the result. A feature request had moved through implementation, testing and a useful follow-up without getting stuck behind another long development session. I could stay involved in the conversation while the bot handled the code and build steps.",
        ],
      },
      {
        heading: "Some of the most useful work happens before coding",
        content: [
          "I also use the bot to think through larger changes before implementation begins. In one planning exchange, we discussed how collector ranges should overlap, where new collectors could be placed and what should happen when existing collectors were upgraded.",
          {
            src: aiPlanning,
            alt: "Blocksmith AI asking design questions about collector overlap and upgrades, followed by my decisions before implementation.",
            caption: "Planning before implementation: the bot surfaces tradeoffs, and I decide the behavior the product should have.",
            width: 1107, height: 686,
          },
          "The bot laid out the choices and asked questions. I made the product decisions. This was still brainstorming, with no code changes or build yet.",
          "That distinction matters to how I use the tool. Sometimes I need an investigation, sometimes a design discussion and sometimes an implementation. Being able to move between those stages in Discord helps me keep the work moving without losing the decisions behind it.",
        ],
      },
      {
        heading: "A way to keep creating",
        body: "These are early examples, but they have already changed how I see the future of my work as a resource author. I can help a customer from my phone, turn a log into an investigation and move a feature request toward a build without personally carrying out every technical step.\n\nI don't see a few successful tickets as proof that all the trust I lost has returned. What they give me is a way to start earning it back: understand the problem, deliver something useful and stay present until the customer has tried it.\n\nThe reason behind all of this is still the same as it was five years ago. I enjoy making plugins that other people use. Building this support workflow gives me a more sustainable way to maintain those products and room to keep creating new ones. This is only the beginning.",
      },
    ],
  },
];
