import { useEffect } from "react";
import { Link } from "react-router-dom";
import cv from "../../assets/pdf/cv_minecraft_development.pdf";
import { caseStudies } from "../../data/caseStudies";

export default function Resume() {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = "Case Studies | Muhammad Daffa";
    window.scrollTo(0, 0);
    return () => { document.title = previousTitle; };
  }, []);

  return (
    <main className="manrope min-h-[100dvh] bg-[#131310] px-6 py-6 text-white sm:px-10 sm:py-8">
      <div className="mx-auto max-w-5xl">
        <nav aria-label="Resume navigation" className="flex items-center justify-between gap-4">
          <a
            href={cv}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Download CV (PDF, opens in a new tab)"
            className="inline-flex min-h-11 items-center gap-3 rounded-full border border-white px-5 py-2 text-sm font-semibold transition-colors hover:bg-white hover:text-[#131310] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
          >
            Download CV <span aria-hidden="true">↗</span>
          </a>
          <Link to="/" className="inline-flex min-h-11 items-center text-sm text-white/70 transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">
            <span aria-hidden="true" className="mr-2">←</span> home
          </Link>
        </nav>

        <header className="mb-8 border-b border-white/15 pb-8 pt-20 sm:pt-24">
          <h1 id="case-studies-heading" className="unbounded text-4xl leading-tight sm:text-6xl">case studies</h1>
        </header>

        <section aria-labelledby="case-studies-heading">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {caseStudies.map((study) => (
              <article key={study.slug} className="flex flex-col items-start rounded-2xl border border-white/15 bg-white/[0.02] p-5">
                <div className="mb-6 flex w-full flex-wrap items-center justify-between gap-3 text-sm text-white/65">
                  <p>{study.category}{study.year && ` · ${study.year}`}</p>
                  {study.draft && <span className="rounded-full border border-white/20 px-3 py-1">Draft</span>}
                </div>
                <h2 className="unbounded text-lg leading-relaxed">{study.title}</h2>
                <p className="mb-6 mt-3 text-base leading-7 text-white/80">{study.description}</p>
                <Link
                  to={`/resume/${study.slug}`}
                  aria-label={`Read more about ${study.title}`}
                  className="mt-auto inline-flex min-h-11 items-center gap-5 rounded-full border border-white/70 px-5 py-2 text-sm font-semibold transition-colors hover:bg-white hover:text-[#131310] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                >
                  Read more <span aria-hidden="true">↗</span>
                </Link>
              </article>
            ))}
          </div>
        </section>

      </div>
    </main>
  );
}
