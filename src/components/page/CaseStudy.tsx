import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { caseStudies } from "../../data/caseStudies";
import type { CaseStudyImage } from "../../data/caseStudies";

function EvidenceImage({ image, eager = false }: { image: CaseStudyImage; eager?: boolean }) {
  return (
    <figure className="mt-6">
      {image.label && <h3 className="mb-3 text-lg font-semibold leading-8">{image.label}</h3>}
      <a
        href={image.src}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Open full-size image: ${image.alt}`}
        className="block cursor-zoom-in rounded-xl border border-white/15 bg-white/[0.02] p-3 transition-colors hover:border-white/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
      >
        <img
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
          loading={eager ? "eager" : "lazy"}
          decoding="async"
          className="mx-auto h-auto max-w-full rounded-sm"
        />
      </a>
      <figcaption className="mt-3 text-base leading-7 text-white/70">{image.caption}</figcaption>
      {image.translation && (
        <blockquote className="mt-4 border-l-2 border-white/30 pl-5">
          <p className="mb-2 text-sm uppercase tracking-wider text-white/65">English translation</p>
          <p className="text-lg leading-8 text-white/90">“{image.translation}”</p>
        </blockquote>
      )}
      {image.note && <p className="mt-3 text-base leading-7 text-white/70">{image.note}</p>}
    </figure>
  );
}

export default function CaseStudy() {
  const { slug } = useParams();
  const study = caseStudies.find((entry) => entry.slug === slug);
  const otherStudies = caseStudies.filter((entry) => entry.slug !== slug);

  useEffect(() => {
    const previousTitle = document.title;
    document.title = `${study?.title ?? "Case study not found"} | Muhammad Daffa`;
    window.scrollTo(0, 0);
    return () => { document.title = previousTitle; };
  }, [study]);

  return (
    <main className="manrope min-h-[100dvh] bg-[#131310] px-6 py-6 text-white sm:px-10 sm:py-8">
      <div className="mx-auto max-w-5xl">
        <nav aria-label="Case study navigation">
          <Link to="/resume" className="inline-flex min-h-11 items-center gap-2 text-base text-white/75 transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">
            <span aria-hidden="true">←</span> back to case studies
          </Link>
        </nav>

        {study ? (
          <article className="mx-auto max-w-3xl pb-12 pt-16 sm:pt-24">
            <h1 className="unbounded text-3xl leading-snug sm:text-5xl sm:leading-snug">{study.title}</h1>
            <p className="mt-6 text-lg leading-8 text-white/80 sm:text-xl sm:leading-9">{study.description}</p>
            {study.hero && (
              <div className="mt-8">
                <EvidenceImage image={study.hero} eager />
                <p className="mt-2 text-sm leading-7 text-white/65">Select any screenshot to open the original at full size.</p>
              </div>
            )}
            {study.highlight && (
              <div className="mt-8 rounded-xl border border-white/15 px-6 py-6">
                <p className="unbounded text-5xl leading-tight">{study.highlight.value}</p>
                <p className="mt-3 text-lg leading-8 text-white/80">{study.highlight.label}</p>
                {study.highlight.note && <p className="mt-3 max-w-xl text-base leading-7 text-white/70">{study.highlight.note}</p>}
              </div>
            )}
            {study.timeline && (
              <section aria-labelledby="project-timeline" className="mt-12">
                <h2 id="project-timeline" className="text-2xl font-semibold leading-9">The story at a glance</h2>
                <ol className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
                  {study.timeline.map((step, index) => (
                    <li key={step.label} className="border-t border-white/20 pt-3">
                      <p aria-hidden="true" className="mb-3 text-sm text-white/60">{String(index + 1).padStart(2, "0")}</p>
                      <h3 className="text-base font-semibold leading-7">{step.label}</h3>
                      <p className="mt-1 text-base leading-7 text-white/70">{step.detail}</p>
                    </li>
                  ))}
                </ol>
              </section>
            )}
            {study.draft && (
              <p className="mt-8 rounded-xl border border-white/15 px-5 py-4 text-lg leading-8 text-white/80">
                This case study is being written. Project details, development decisions and results will be added soon.
              </p>
            )}
            <div className="mt-12 space-y-10">
              {study.sections.map((section) => (
                <section key={section.heading} className="border-t border-white/15 pt-6">
                  <h2 className="text-2xl font-semibold leading-9">{section.heading}</h2>
                  {(section.content ?? section.body?.split("\n\n") ?? []).map((block) => (
                    typeof block === "string"
                      ? <p key={block} className="mt-4 text-lg leading-8 text-white/80">{block}</p>
                      : <EvidenceImage key={block.src} image={block} />
                  ))}
                  {section.links?.map((link) => (
                    <a key={link.url} href={link.url} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex min-h-11 items-center gap-2 text-base text-white/85 underline underline-offset-4 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">
                      {link.label} <span aria-hidden="true">↗</span>
                    </a>
                  ))}
                  {section.images?.map((image) => <EvidenceImage key={image.src} image={image} />)}
                  {section.note && <p className="mt-5 border-l border-white/25 pl-4 text-base leading-7 text-white/70">{section.note}</p>}
                  {section.video && (
                    <div className="mt-6">
                      <iframe
                        src={`${section.video.embedUrl}?origin=${encodeURIComponent(window.location.origin)}`}
                        title={section.video.label}
                        loading="lazy"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                        referrerPolicy="strict-origin-when-cross-origin"
                        className="aspect-video w-full rounded-xl border border-white/20"
                      />
                      <a
                        href={section.video.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-3 inline-flex min-h-11 items-center gap-2 text-base text-white/75 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                      >
                        {section.video.label} <span aria-hidden="true">↗</span>
                      </a>
                    </div>
                  )}
                </section>
              ))}
            </div>
            {study.link && (
              <a
                href={study.link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-10 inline-flex min-h-11 max-w-full items-center gap-3 rounded-full border border-white/70 px-5 py-2 text-base font-semibold transition-colors hover:bg-white hover:text-[#131310] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
              >
                {study.link.label} <span aria-hidden="true">↗</span>
              </a>
            )}
            {otherStudies.length > 0 && (
              <section aria-labelledby="more-case-studies" className="mt-16 border-t border-white/20 pt-8">
                <h2 id="more-case-studies" className="mb-6 text-2xl font-semibold leading-9">More case studies</h2>
                <div className="space-y-4">
                  {otherStudies.map((other) => (
                    <Link
                      key={other.slug}
                      to={`/resume/${other.slug}`}
                      aria-label={`Read more about ${other.title}`}
                      className="group flex flex-col gap-5 rounded-2xl border border-white/15 bg-white/[0.02] p-5 transition-colors hover:border-white/40 hover:bg-white/[0.04] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:flex-row sm:items-start"
                    >
                      {other.hero && (
                        <img
                          src={other.hero.src}
                          alt={other.hero.alt}
                          width={other.hero.width}
                          height={other.hero.height}
                          loading="lazy"
                          decoding="async"
                          className="aspect-video w-full shrink-0 rounded-xl object-cover sm:w-40"
                        />
                      )}
                      <div className="min-w-0">
                        <h3 className="unbounded text-lg leading-relaxed">{other.title}</h3>
                        <p className="mt-3 text-base leading-7 text-white/75">{other.description}</p>
                        <span className="mt-4 inline-flex min-h-11 items-center gap-3 text-base font-semibold underline-offset-4 group-hover:underline">
                          Read more <span aria-hidden="true">↗</span>
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              </section>
            )}
          </article>
        ) : (
          <section className="py-24">
            <h1 className="unbounded text-3xl leading-snug">Case study not found</h1>
            <p className="mt-6 text-white/65">Use the link above to explore the available case studies.</p>
          </section>
        )}
      </div>
    </main>
  );
}
