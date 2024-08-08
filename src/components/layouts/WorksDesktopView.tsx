import { FadeImage } from "../ui/FadeImg";
import { FadeText } from "../ui/FadeText";
import { FadeVideo } from "../ui/FadeVideo";

export default function WorksDesktopView({ tabs, activeTab, handleActiveTab }: any) {
  return (
    <section className="hidden md:grid md:max-w-1/2 lg:max-w-[60%] w-full mx-auto grid-cols-3 bg-gradient-to-br from-[#0A7E8A] from-10% to-100% to-[rgb(240,92,98)] rounded-lg relative py-8 overflow-y-hidden">
      <aside className="absolute top-0 left-0 z-20 h-full overflow-y-auto py-10 pr-8 no-scrollbar">
        <ul className="text-white unbounded font-light space-y-10">
          {tabs.map((tab) => (
            <li key={tab.id} onClick={() => handleActiveTab(tab.id)} className={`${activeTab.id === tab.id ? "text-white table__label__active" : "text-white/70"} cursor-pointer relative`}>
              {tab.title}
            </li>
          ))}
        </ul>
      </aside>

      <div className="absolute right-0 left-0 top-0 bottom-0 bg-gradient-to-br from-transparent from-70% to-100% to-[#f05c6197] z-10"></div>

      <div className="flex flex-col gap-4 w-full col-start-2 col-end-4 relative overflow-hidden">
        <figure className="rounded-lg overflow-hidden aspect-video relative z-10">
          {activeTab.content[0].video && <FadeVideo src={activeTab.content[0].video} key={activeTab.content[0].id} direction="up" controls autoPlay loop className="my-video-class" />}
          {!activeTab.content[0].video && <FadeImage key={activeTab.content[0].id} src={activeTab.content[0].img} alt="Example Image" className="fade-image" direction="up" />}

          {/* <div className="absolute inset-y-0 bottom-0 right-0 left-0  bg-gradient-to-t from-black translate-y-36 pointer-events-none"></div> */}
        </figure>
        <div className="content__titles text-white space-y-2 pr-10 relative z-20 -translate-y-8">
          {activeTab.content.map((content) => (
            <div key={content.id} className="space-y-2 relative">
              <FadeText
                className="text-4xl font-bold text-black dark:text-white"
                direction="up"
                framerProps={{
                  show: { transition: { delay: 0.2 } },
                }}
                text={content.title}
              />

              <ul className="flex gap-3 text-white">
                {content.tags.map((tag, index) => (
                  <FadeText key={index} framerProps={{ show: { transition: { delay: 0.3 } } }} className="text-white text-xs" direction="up" text={tag} />
                ))}
              </ul>

              <FadeText
                className="text-white/50 text-sm"
                direction="up"
                framerProps={{
                  show: { transition: { delay: 0.4 } },
                }}
                text={activeTab.content[0].description}
              />
              <a href={content.href} className="text-white/80 hover:underline hover:text-white transition duration-150">
                <FadeText
                  direction="up"
                  framerProps={{
                    show: { transition: { delay: 0.5 } },
                  }}
                  text="see more"
                />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
