import { useState } from "react";
import { tabs } from "../../data/data";
import WorksMobileView from "../layouts/WorksMobileView";
import WorksDesktopView from "../layouts/WorksDesktopView";

export default function Works() {
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const [counter, setCounter] = useState(0);

  const handleActiveTab = (id: number) => {
    const tab = tabs.find((tab) => tab.id === id);
    if (tab) {
      setActiveTab(tab);
    }
  };

  const handlePrevTab = () => {
    if (counter > 0) {
      setCounter(counter - 1);
      setActiveTab(tabs[counter - 1]);
    }
  };

  const handleNextTab = () => {
    if (counter < tabs.length - 1) {
      setCounter(counter + 1);
      setActiveTab(tabs[counter + 1]);
    }
  };

  return (
    <main className="bg-[#131310] pt-20 pb-28 md:py-20 flex md:flex-col md:items-center md:justify-center w-full min-h-screen lg:p-0 relative">
      <div className="back__btn absolute left-6 top-4">
        <a href="/" className="text-white/85 flex items-center gap-2">
          <p className="text-lg">&#x2190; back</p>
        </a>
      </div>

      {/* Mobile */}
      <WorksMobileView tabs={tabs} activeTab={activeTab} handleNextTab={handleNextTab} handlePrevTab={handlePrevTab} />

      {/* Desktop */}
      <WorksDesktopView tabs={tabs} activeTab={activeTab} handleActiveTab={handleActiveTab} />

      <div className="contact__info absolute left-6 bottom-6 md:bottom-4 flex flex-col md:flex-row md:items-center gap-3">
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
