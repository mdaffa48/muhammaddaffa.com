import { FadeImage } from "../ui/FadeImg";
import { FadeText } from "../ui/FadeText";

export default function WorksMobileView({ tabs, activeTab, handleNextTab, handlePrevTab }: any) {
  return (
    <section className="w-full space-y-36 md:hidden">
      <div className="flex flex-col items-end px-3 bg-gradient-to-r from-[#0e474d] from-0% to-[#853637] to-100% pt-4 pb-4 mt-4">
        {/* NEW */}
        <ul className="slider__actions flex gap-10">
          <li className={` ${tabs[0].id === activeTab.id ? "text-white/50 cursor-not-allowed" : "text-white cursor-pointer"} text-lg`} onClick={() => handlePrevTab()}>
            &laquo; prev
          </li>
          <li className={` ${tabs[tabs.length - 1].id === activeTab.id ? "text-white/50 cursor-not-allowed" : "text-white cursor-pointer"} text-white text-lg`} onClick={() => handleNextTab()}>
            next &raquo;
          </li>
        </ul>

        <div className="new__wrapers mt-8">
          <figure className="rounded-lg overflow-hidden aspect-video relative">
            <FadeImage key={activeTab.content[0].id} src={activeTab.content[0].img} alt="Example Image" className="fade-image" direction="up" />
            <div className="absolute inset-y-0 bottom-0 right-0 left-0  bg-gradient-to-t from-black  translate-y-28"></div>
          </figure>
          <div className="content__titles text-white space-y-2 pr-10 relative z-20 -translate-y-6">
            {activeTab.content.map((content) => (
              <div key={content.id} className="space-y-2">
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
      </div>
    </section>
  );
}
