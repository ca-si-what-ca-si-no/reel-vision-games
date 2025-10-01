import logo from "@/assets/logo.svg";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-border">
      <div className="max-w-[1200px] mx-auto px-6 py-6">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
          {/* Left: Logo and Description */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-3">
              <span className="text-xl font-bold text-foreground mr-3">
                2xWet
              </span>
              <img
                src={logo}
                alt="2xWet Studio Logo"
                className="w-8 h-8 mx-2"
              />
              <span className="text-xl font-bold text-accent ml-3">Studio</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {t('footer.description')}
            </p>
          </div>

          {/* Right: Contacts and CTA */}
          <div className="flex flex-col items-start lg:items-end gap-3">
            <div className="flex flex-row lg:flex-col items-start lg:items-end gap-3 lg:gap-1 text-sm text-muted-foreground">
              <a
                href="mailto:business@2xwet.com"
                className="hover:text-accent smooth-transition"
              >
                business@2xwet.com
              </a>
              <span className="text-muted-foreground/50 lg:hidden">•</span>
              <a
                href="https://t.me/2xwet_support"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent smooth-transition"
              >
                @2xwet_support
              </a>
            </div>
            <Button
              size="sm"
              className="accent-gradient glow-effect font-semibold text-sm transition-all duration-300 hover:scale-105 hover:shadow-lg hover:brightness-110 group mt-2"
              onClick={() => {
                const contactSection = document.getElementById("contact");
                if (contactSection) {
                  const elementPosition =
                    contactSection.getBoundingClientRect().top;
                  const offsetPosition =
                    elementPosition + window.pageYOffset - 100;

                  window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth",
                  });
                }
              }}
            >
              {t('nav.cta')}
              <ExternalLink className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="mt-6 pt-4 border-t border-border">
          <div className="text-muted-foreground text-xs text-center">
            {t('footer.copyright')}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
