import Link from 'next/link';
import { PageHeader } from '@/components/ui/page-header';
import { Reveal } from '@/components/ui/reveal';
import { posts } from '@/data/posts';
import { formatDate } from '@/lib/utils';

export const metadata = { title: 'Journal' };

export default function BlogPage() {
  return (
    <>
      <PageHeader
        eyebrow="/ The journal"
        title={<>Field notes, research,{' '}<em className="italic" style={{ fontVariationSettings: "'opsz' 144, 'wght' 400, 'SOFT' 80" }}>and reflections.</em></>}
        intro="Writing from our staff, fellows, and partners — about what we are learning in real time."
      />
      <section className="py-12 lg:py-20">
        <div className="container-x">
          <div className="grid lg:grid-cols-2 gap-x-12 gap-y-16">
            {posts.map((post, i) => (
              <Reveal key={post.slug} delay={i * 0.05}>
                <Link href={`/blog/${post.slug}`} className="group block">
                  <div className="aspect-[16/10] overflow-hidden rounded-2xl border border-[var(--border)]">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={post.image} alt={post.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  </div>
                  <div className="mt-5 flex items-center gap-4 text-sm">
                    <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--accent)]">{post.category}</span>
                    <span className="text-[var(--text-muted)]">{formatDate(post.date)}</span>
                    <span className="text-[var(--text-muted)]">· {post.readTime} read</span>
                  </div>
                  <h2 className="mt-3 display text-3xl leading-tight group-hover:text-[var(--primary)] transition-colors max-w-xl">{post.title}</h2>
                  <p className="mt-3 text-base text-[var(--text-muted)] leading-relaxed max-w-xl">{post.excerpt}</p>
                  <p className="mt-4 text-sm text-[var(--text-muted)]">By {post.author}</p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
