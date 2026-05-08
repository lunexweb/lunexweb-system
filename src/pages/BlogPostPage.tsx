import { Helmet } from "react-helmet-async";
import { Link, useParams, Navigate } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, MessageCircle } from "lucide-react";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { FloatingWhatsApp } from "@/components/site/FloatingWhatsApp";
import { WHATSAPP_LINK } from "@/lib/site";
import { blogPosts } from "@/data/blogPosts";

export function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) return <Navigate to="/blog" replace />;

  const url = `https://lunexweb-system.vercel.app/blog/${post.slug}`;

  return (
    <>
      <Helmet>
        <title>{post.title} — Lunexweb</title>
        <meta name="description" content={post.description} />
        <link rel="canonical" href={url} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.description} />
        <meta property="og:url" content={url} />
        <meta property="article:published_time" content={post.date} />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: post.title,
            description: post.description,
            datePublished: post.date,
            author: { "@type": "Organization", name: "Lunexweb" },
            publisher: {
              "@type": "Organization",
              name: "Lunexweb",
              logo: {
                "@type": "ImageObject",
                url: "https://lunexweb-system.vercel.app/portfolio/2.png",
              },
            },
            mainEntityOfPage: url,
          })}
        </script>
      </Helmet>
      <Navbar />
      <main className="min-h-screen bg-background text-foreground pt-28 pb-24">
        <article className="mx-auto max-w-3xl px-6">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition mb-6"
          >
            <ArrowLeft className="h-4 w-4" /> All articles
          </Link>

          <span className="inline-flex w-fit text-xs font-semibold text-accent uppercase tracking-wider">
            {post.category}
          </span>
          <h1 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight">
            {post.title}
          </h1>
          <div className="mt-4 flex items-center gap-4 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              {new Date(post.date).toLocaleDateString("en-ZA", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </span>
            <span className="inline-flex items-center gap-1">
              <Clock className="h-4 w-4" /> {post.readTime}
            </span>
          </div>

          <div
            className="blog-content mt-10 text-base leading-relaxed text-foreground/90 [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:tracking-tight [&_h2]:mt-10 [&_h2]:mb-3 [&_p]:my-4 [&_p]:leading-relaxed [&_ul]:my-4 [&_ul]:pl-6 [&_ul]:list-disc [&_li]:my-1 [&_a]:text-accent [&_a]:underline [&_a]:underline-offset-2 hover:[&_a]:opacity-80 [&_strong]:text-foreground [&_strong]:font-semibold"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          <div className="mt-16 rounded-2xl bg-secondary border border-border p-8 text-center">
            <h2 className="text-2xl font-bold tracking-tight">Ready to grow your business online?</h2>
            <p className="mt-2 text-muted-foreground">
              Get a professional, ads-ready website from R499 setup + R299/month.
            </p>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-whatsapp text-whatsapp-foreground px-6 py-3 font-semibold hover:opacity-90 transition"
            >
              <MessageCircle className="h-5 w-5" /> Chat on WhatsApp
            </a>
          </div>
        </article>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
