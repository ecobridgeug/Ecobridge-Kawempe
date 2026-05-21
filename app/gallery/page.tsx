import { PageHeader } from '@/components/ui/page-header';
import { Reveal } from '@/components/ui/reveal';
import { galleryImages } from '@/data/content';

export const metadata = { title: 'Gallery' };

export default function GalleryPage() {
  return (
    <>
      <PageHeader
        eyebrow="/ Gallery"
        title={<>Field photography from{' '}<em className="italic" style={{ fontVariationSettings: "'opsz' 144, 'wght' 400, 'SOFT' 80" }}>the work.</em></>}
        intro="Moments from cleanups, classrooms, installations, and convenings — photographed by our staff and volunteers."
      />
      <section className="py-12 lg:py-20">
        <div className="container-x">
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            {galleryImages.map((image, i) => (
              <Reveal key={i} delay={(i % 6) * 0.04}>
                <div className="break-inside-avoid overflow-hidden rounded-2xl border border-[var(--border)] group">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={image.url}
                    alt={image.alt}
                    loading="lazy"
                    className="w-full h-auto transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
