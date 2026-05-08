import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { FloatingWhatsApp } from "@/components/site/FloatingWhatsApp";
import { blogPosts } from "@/data/blogPosts";

export function BlogPage() {
  return (
    <>
      <Helmet>
        <title>Web Design & Marketing Blog — Lunexweb South Africa</title>
        <meta
          name="description"
          content="Practical web design, SEO, and digital marketing tips for South African businesses. Learn how to grow your business online with Lunexweb."
        />
        <link rel="canonical" href="https://lunexweb-system.vercel.app/blog" />
        <meta property="og:title" content="Lunexweb Blog — Web Design & Marketing Tips for SA Businesses" />
        <meta property="og:url" content="https://lunexweb-system.vercel.app/blog" />
      </Helmet>
      <Navbar />
      <main className="min-h-screen bg-background text-foreground pt-28 pb-24">
        <div className="mx-auto max-w-5xl px-6">
          <header className="text-center mb-16">
            <p className="text-sm font-semibold text-accent uppercase tracking-wider">Blog</p>
            <h1 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
              Web Design & Marketing Insights for South African Businesses
            </h1>
            <p className="mt-4 text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto">
              Practical guides on websites, Google Ads, SEO and digital growth — written for SA business owners.
            </p>
          </header>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                to={`/blog/${post.slug}`}
                className="group rounded-2xl border border-border bg-card p-6 hover:shadow-elegant hover:border-accent/40 transition flex flex-col"
              >
                <span className="inline-flex w-fit text-xs font-semibold text-accent uppercase tracking-wider">
                  {post.category}
                </span>
                <h2 className="mt-3 text-lg font-bold leading-snug group-hover:text-accent transition">
                  {post.title}
                </h2>
                <p className="mt-2 text-sm text-muted-foreground line-clamp-3">{post.description}</p>
                <div className="mt-4 flex items-center gap-4 text-xs text-muted-foreground">
                  <span className="inline-flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    {new Date(post.date).toLocaleDateString("en-ZA", {
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                    })}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <Clock className="h-3 w-3" /> {post.readTime}
                  </span>
                </div>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-accent group-hover:gap-2 transition-all">
                  Read article <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
