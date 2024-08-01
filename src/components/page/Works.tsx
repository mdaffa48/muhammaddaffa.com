import { useState } from "react";
import { useEffect } from "react";
import { FadeImage } from "../ui/FadeImg";
import { FadeText } from "../ui/FadeText";
import { tabs } from "../../data/data";

export default function Works() {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  const handleActiveTab = (id: number) => {
    const tab = tabs.find((tab) => tab.id === id);
    if (tab) {
      setActiveTab(tab);
    }
  };

  useEffect(() => {
    console.log("Active tab changed:", activeTab);
  }, [activeTab]);

  return (
    <main className="bg-[#131310] py-20 md:py-0 flex md:flex-col md:items-center md:justify-center w-full min-h-screen lg:p-0 relative">
      <div className="back__btn absolute left-6 top-4">
        <a href="/" className="text-white/85 flex items-center gap-2">
          
          <p className="text-lg">&#x2190; back</p>
        </a>
      </div>

      {/* Mobile */}
      <section className="w-full space-y-36 md:hidden">
        <div className="titles text-left space-y-2 px-4">
          <h1 className="unbounded text-white text-4xl">ikhlasdansantai</h1>
          <h2 className="manrope text-white text-base font-light tracking-wider">Frontend Engineer & Mobile Developer</h2>
        </div>

        <div id="work-wrappers">
          <p className="text-white text-lg pl-4">Works</p>
          <div className="bg-gradient-to-r from-[#0e474d] from-0% to-[#853637] to-100% pb-10 mt-4">
            <div className="content__titles text-white space-y-32 relative z-20">
              {tabs.map((tab) => (
                <div key={tab.id} className="tab-section">
                  {tab.content.map((item) => (
                    <div key={item.id} className="content-item space-y-4">
                      <figure className="rounded-lg w-full overflow-hidden aspect-video relative">
                        <FadeImage key={item.id} src={item.img} alt={item.alt} className="fade-image" direction="up" />
                        <div className="absolute inset-y-0 bottom-0 right-0 left-0  bg-gradient-to-t from-black  translate-y-28"></div>
                      </figure>
                      <div className="work__titles -translate-y-8 space-y-2 p-2">
                        <FadeText
                          className="text-4xl font-bold text-black dark:text-white"
                          direction="up"
                          framerProps={{
                            show: { transition: { delay: 0.2 } },
                          }}
                          text={item.title}
                        />
                        <ul className="flex gap-3">
                          {item.tags.map((tag) => (
                            <li key={tag} className="text-md font-semibold">
                              {tag}
                            </li>
                          ))}
                        </ul>
                        <div className="flex flex-col gap-4">
                          <p className="text-sm">{item.description}</p>
                          <a href={item.href} className="text-white/80 hover:underline hover:text-white transition duration-150">
                            see more
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
          <p className="text-white text-lg pl-4 mt-10">hi@ikhlasdansantai.dev</p>
        </div>
      </section>

      {/* Desktop */}
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
          <figure className="rounded-lg overflow-hidden aspect-video relative">
            <FadeImage key={activeTab.content[0].id} src={activeTab.content[0].img} alt="Example Image" className="fade-image" direction="up" />
            <div className="absolute inset-y-0 bottom-0 right-0 left-0  bg-gradient-to-t from-black  translate-y-28"></div>
          </figure>
          <div className="content__titles text-white space-y-2 pr-10 relative z-20 -translate-y-8">
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
      </section>
      <p id="email__mobile" className="text-white/85 text-lg pl-4 mt-10 md:hidden">
        ikhlasdansantai
      </p>

      <div className="contact__info absolute left-6 bottom-4 flex items-center gap-3">
        <figure className="flex items-center text-white/85 text-lg gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
            <path fill="currentColor" d="M2 6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2zm3.519 0L12 11.671L18.481 6zM20 7.329l-7.341 6.424a1 1 0 0 1-1.318 0L4 7.329V18h16z" />
          </svg>
          <p id="email__mobile">contact@muhammaddaffa.com</p>
        </figure>

        <figure className="flex items-center text-white/85 text-lg gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M19.27 5.33C17.94 4.71 16.5 4.26 15 4a.09.09 0 0 0-.07.03c-.18.33-.39.76-.53 1.09a16.09 16.09 0 0 0-4.8 0c-.14-.34-.35-.76-.54-1.09c-.01-.02-.04-.03-.07-.03c-1.5.26-2.93.71-4.27 1.33c-.01 0-.02.01-.03.02c-2.72 4.07-3.47 8.03-3.1 11.95c0 .02.01.04.03.05c1.8 1.32 3.53 2.12 5.24 2.65c.03.01.06 0 .07-.02c.4-.55.76-1.13 1.07-1.74c.02-.04 0-.08-.04-.09c-.57-.22-1.11-.48-1.64-.78c-.04-.02-.04-.08-.01-.11c.11-.08.22-.17.33-.25c.02-.02.05-.02.07-.01c3.44 1.57 7.15 1.57 10.55 0c.02-.01.05-.01.07.01c.11.09.22.17.33.26c.04.03.04.09-.01.11c-.52.31-1.07.56-1.64.78c-.04.01-.05.06-.04.09c.32.61.68 1.19 1.07 1.74c.03.01.06.02.09.01c1.72-.53 3.45-1.33 5.25-2.65c.02-.01.03-.03.03-.05c.44-4.53-.73-8.46-3.1-11.95c-.01-.01-.02-.02-.04-.02M8.52 14.91c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12c0 1.17-.84 2.12-1.89 2.12m6.97 0c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12c0 1.17-.83 2.12-1.89 2.12"
            />
          </svg>
          <p id="email__mobile">aglerr</p>
        </figure>
      </div>
    </main>
  );
}
