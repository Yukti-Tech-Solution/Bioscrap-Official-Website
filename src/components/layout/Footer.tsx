import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, MessageCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';

// Custom X (Twitter) icon component
const XIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
  </svg>
);

export function Footer() {
  const { t } = useTranslation();

  const socials = [
    { icon: Facebook, href: "https://www.facebook.com/share/1GRp9msZ71/", label: "Facebook" },
    { icon: Instagram, href: "https://www.instagram.com/bioscrap.in?igsh=d3JtZHIyM3N1MWlr&utm_source=ig_contact_invite", label: "Instagram" },
    { icon: Linkedin, href: "https://www.linkedin.com/company/bioscrap/about/?viewAsMember=true", label: "LinkedIn" },
    { icon: MessageCircle, href: "https://wa.me/message/J6YOFYRWWVEUI1", label: "WhatsApp" },
    { icon: XIcon, href: "https://x.com/Bio_Scrap", label: "X (Twitter)" },
  ];

  const techSupportSocials = [
    { icon: Facebook, href: "https://www.facebook.com/share/1AAkmGT6Qz/", label: "Facebook" },
    { icon: XIcon, href: "https://x.com/YuktiTechSoln?t=CgX2-tuUCAYTu0sJQMZXEw&s=09", label: "X (Twitter)" },
    { icon: Instagram, href: "https://www.instagram.com/yukti_tech_solution?igsh=MXMwa2tvOGYybXFvag==", label: "Instagram" },
    { icon: Linkedin, href: "https://www.linkedin.com/company/yukti-tech-solution/", label: "LinkedIn" },
  ];

  return (
    <footer className="bg-[#1a2e1a] text-primary-foreground pt-16 pb-8 border-t border-white/10 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-5 mix-blend-overlay pointer-events-none" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {/* Column 1 - Bioscrap Info */}
          {/* Column 1 - Bioscrap Info */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-3 group">
              <div className="relative">
                <img
                  src="/images/Bioscrap.jpeg"
                  alt="Bioscrap Logo"
                  className="w-16 h-16 rounded-full object-cover border border-white/10"
                />
                <div className="absolute -bottom-1 -right-1 w-3.5 h-3.5 rounded-full bg-accent animate-pulse border-2 border-[#1a2e1a]" />
              </div>
              <span className="text-2xl font-serif font-bold text-white">
                <span className="text-green-500">Bio</span><span className="text-blue-500">scrap</span>
              </span>
            </Link>
            <p className="mb-4 text-sm text-primary-foreground/80">{t('footer.description')}</p>
            <div className="space-y-2 text-sm">
              <a href="tel:9607195770" className="flex items-center gap-2 text-primary-foreground/80 hover:text-primary transition-colors">
                <Phone size={16} /> 9607195770
              </a>
              <a href="mailto:Bioscrapp@gmail.com" className="flex items-center gap-2 text-primary-foreground/80 hover:text-primary transition-colors">
                <Mail size={16} /> Bioscrapp@gmail.com
              </a>
              <a 
                href="https://maps.app.goo.gl/83bYUmrLw6iwLoio6" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-start gap-2 text-primary-foreground/80 hover:text-primary transition-colors"
              >
                <MapPin size={16} className="mt-1 flex-shrink-0" />
                <span className="text-sm">{t('footer.address')}</span>
              </a>
              <div className="flex items-center gap-4 mt-4">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    aria-label={s.label}
                    target="_blank"
                    rel="noreferrer"
                    className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center text-primary-foreground/70 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  >
                    <s.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Column 2 - Technology Partner */}
          <div className="px-4">
            <div className="space-y-4">
              <h3 className="text-xl font-bold">{t('footer.technologyPartner.title', 'Technology Partner')}</h3>
              <a 
                href="https://yuktitechsolution.co.in/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 group"
              >
                <img 
                  src="/images/yukti.png" 
                  alt="Yukti Tech Solution" 
                  className="h-12 w-auto object-contain bg-white/10 rounded-lg p-1"
                />
                <div className="flex flex-col">
                  <span className="font-bold text-lg group-hover:text-primary transition-colors">Yukti Tech Solution</span>
                  <span className="text-sm text-primary-foreground/60 group-hover:text-primary/80 transition-colors">yuktitechsolution.co.in</span>
                </div>
              </a>
              
              <div className="text-sm space-y-3">
                <p className="text-primary-foreground/80 leading-relaxed">
                  {t('footer.technologyPartner.description', 'Yukti Tech Solution provides technology support to BioScrap:')}
                </p>
                
                <div className="flex items-center gap-3 pt-2">
                  {techSupportSocials.map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      aria-label={s.label}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-full bg-primary-foreground/10 flex items-center justify-center text-primary-foreground/70 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                    >
                      <s.icon className="w-4 h-4" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Column 3 - Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">{t('footer.quickLinks.title')}</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="text-primary-foreground/80 hover:text-primary transition-colors">{t('footer.quickLinks.home')}</Link></li>
              <li><Link to="/services" className="text-primary-foreground/80 hover:text-primary transition-colors">{t('footer.quickLinks.services')}</Link></li>
              <li><Link to="/about" className="text-primary-foreground/80 hover:text-primary transition-colors">{t('footer.quickLinks.about')}</Link></li>
              <li><Link to="/contact" className="text-primary-foreground/80 hover:text-primary transition-colors">{t('footer.quickLinks.contact')}</Link></li>
              <li><Link to="/shop" className="text-primary-foreground/80 hover:text-primary transition-colors">{t('footer.quickLinks.shop')}</Link></li>
              <li><Link to="/booking" className="text-primary-foreground/80 hover:text-primary transition-colors">{t('footer.quickLinks.bookPickup')}</Link></li>
              <li><Link to="/faq" className="text-primary-foreground/80 hover:text-primary transition-colors">{t('footer.quickLinks.faq')}</Link></li>
            </ul>
          </div>

          {/* Column 4 - Director & CEO */}
          <div className="px-4">
            <h3 className="text-xl font-bold mb-4">{t('footer.director.title')}</h3>
            <div className="space-y-3 text-sm">
              <p className="font-bold text-primary-foreground">Harshad V. Renapure</p>
              <a href="tel:9607195770" className="block text-primary-foreground/80 hover:text-primary transition-colors">
                9607195770
              </a>
              <a href="mailto:harshadrenapure@gmail.com" className="block text-primary-foreground/80 hover:text-primary transition-colors">
                harshadrenapure@gmail.com
              </a>
              <div className="pt-1">
                <a 
                  href="https://www.linkedin.com/in/r-h-vishnu-478031279/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className="inline-flex items-center gap-2 text-primary-foreground/80 hover:text-primary transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* FOOTER BOTTOM */}
        <div className="border-t border-primary-foreground/10 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <p className="text-primary-foreground/70">{t('footer.rights')}</p>
          <p className="text-primary-foreground/70">
            {t('footer.poweredBy')}{' '}
            <a 
              href="https://yuktitechsolution.co.in/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:text-primary-foreground font-semibold transition-colors"
            >
              Yukti Tech Solution
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
