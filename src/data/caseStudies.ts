import ownerFeedback from "../assets/img/minegens/owner-feedback.png";
import crowdedHub from "../assets/img/minegens/crowded-hub.png";
import playerCount from "../assets/img/minegens/player-count-july-2023.png";
import placeholderProfile from "../assets/img/minegens/placeholder-profile.png";
import activeGenerators from "../assets/img/minegens/active-generators.png";
import serverRanking from "../assets/img/minegens/server-list-ranking.png";
import sparkEarlier from "../assets/img/minegens/spark-earlier.png";
import sparkLater from "../assets/img/minegens/spark-later.png";

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
    body: string;
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
];
