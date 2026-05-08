const projects = [
  { title: "Snalo Delivery", tag: "Delivery", url: "https://snalo-delivery.vercel.app/", image: "/portfolio/snalo.png" },
  { title: "Jila Services", tag: "Accountants", url: "https://www.jilaservices.co.za/", image: "/portfolio/jila.png" },
  { title: "Linda Jacobs Properties", tag: "Real Estate", url: "https://linda-jacobs.vercel.app/", image: "/portfolio/linda.png" },
  { title: "Amonz Group", tag: "Tradespeople", url: "https://amonz-group-2.vercel.app/", image: "/portfolio/amonz.png" },
  { title: "Dominant Multi Projects", tag: "Security", url: "https://dominantmultiprojects.com/", image: "/portfolio/dominant.png" },
  { title: "Unique Medical & Wellness", tag: "Healthcare", url: "https://uniquemedicalandwellness.com/", image: "/portfolio/unique.png" },
];

export function Portfolio() {
  return (
    <section id="portfolio" className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-sm font-semibold text-accent uppercase tracking-wider">Our work</p>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight">
            Helping Local Businesses Look More Professional Online
          </h2>
        </div>
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <a key={p.title} href={p.url} target="_blank" rel="noopener noreferrer" className="group relative aspect-[4/3] rounded-2xl overflow-hidden border border-border shadow-elegant cursor-pointer block">
              <img
                src={p.image}
                alt={`${p.title} website screenshot`}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-x-0 bottom-0 p-5 bg-gradient-to-t from-black/85 via-black/50 to-transparent text-white">
                <p className="text-xs uppercase tracking-wider opacity-80">{p.tag}</p>
                <h3 className="font-semibold">{p.title}</h3>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
