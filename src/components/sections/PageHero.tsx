import { Link } from 'react-router-dom';

interface PageHeroProps {
  title: string;
  subtitle: string;
  breadcrumbs: { label: string; path?: string }[];
}

export default function PageHero({ title, subtitle, breadcrumbs }: PageHeroProps) {
  return (
    <section className="bg-forest-700 pt-32 pb-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-wooden-texture opacity-5" />
      <div className="absolute inset-0 bg-gradient-to-b from-forest-800/50 to-transparent" />
      <div className="container-luxury relative z-10">
        <nav className="flex items-center gap-2 text-sm mb-6">
          <Link to="/" className="text-gold-400 hover:text-gold-300 transition-colors">Home</Link>
          {breadcrumbs.map((crumb, i) => (
            <span key={i} className="flex items-center gap-2">
              <span className="text-gold-400/50">/</span>
              {crumb.path ? (
                <Link to={crumb.path} className="text-gold-400 hover:text-gold-300 transition-colors">{crumb.label}</Link>
              ) : (
                <span className="text-white/80">{crumb.label}</span>
              )}
            </span>
          ))}
        </nav>
        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">{title}</h1>
        <p className="text-lg text-white/70 max-w-2xl">{subtitle}</p>
        <div className="gold-divider-left mt-6" />
      </div>
    </section>
  );
}
