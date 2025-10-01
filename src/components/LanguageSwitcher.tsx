import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { useLanguage } from "@/contexts/LanguageContext";
import { ChevronDown, Globe } from "lucide-react";

interface LanguageSwitcherProps {
  variant?: 'desktop' | 'mobile';
  className?: string;
}

const LanguageSwitcher = ({ variant = 'desktop', className = '' }: LanguageSwitcherProps) => {
  const { language, setLanguage, t } = useLanguage();

  const languages = [
    {
      code: 'ru' as const,
      name: t('language.russian'),
      flag: '🇷🇺'
    },
    {
      code: 'en' as const,
      name: t('language.english'),
      flag: '🇺🇸'
    }
  ];

  const currentLanguage = languages.find(lang => lang.code === language);

  if (variant === 'mobile') {
    return (
      <div className={`flex flex-col space-y-3 ${className}`}>
        <span className="text-xs font-medium text-muted-foreground text-center uppercase tracking-wider">
          {t('language.switch')}
        </span>
        <div className="flex space-x-3 justify-center">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => setLanguage(lang.code)}
              className={`flex items-center space-x-2 px-5 py-2.5 rounded-full transition-all duration-300 ${
                language === lang.code
                  ? 'bg-orange-500/20 border-2 border-orange-400 text-orange-400'
                  : 'bg-background/30 border-2 border-border/30 text-muted-foreground hover:border-orange-400/50 hover:text-foreground'
              }`}
            >
              <span className="text-lg">{lang.flag}</span>
              <span className="text-sm font-medium">{lang.code.toUpperCase()}</span>
            </button>
          ))}
        </div>
      </div>
    );
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          className={`flex items-center space-x-2 px-3 py-2 hover:bg-accent/10 ${className}`}
        >
          <span className="text-base">{currentLanguage?.flag}</span>
          <span className="hidden sm:inline text-sm font-medium">
            {currentLanguage?.code.toUpperCase()}
          </span>
          <ChevronDown className="w-3 h-3" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="min-w-[120px]">
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            onClick={() => setLanguage(lang.code)}
            className={`flex items-center space-x-3 cursor-pointer ${
              language === lang.code ? 'bg-accent/50' : ''
            }`}
          >
            <span className="text-base">{lang.flag}</span>
            <span className="text-sm">{lang.name}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageSwitcher;