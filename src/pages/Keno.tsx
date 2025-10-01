import FloatingControls from "@/components/FloatingControls";
import Footer from "@/components/Footer";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import MobileMenu from "@/components/MobileMenu";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  ArrowLeft,
  Globe,
  Monitor,
  Plug,
  Settings,
  Shield,
  Smartphone,
  Zap,
} from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const Keno = () => {
  const { t, language } = useLanguage();
  const [selectedDevice, setSelectedDevice] = useState("mobile");
  const [isDesktopModalOpen, setIsDesktopModalOpen] = useState(false);
  const [isMobileModalOpen, setIsMobileModalOpen] = useState(false);
  const [rightColumnStyle, setRightColumnStyle] = useState<React.CSSProperties>(
    {}
  );

  // Game URL with language parameter
  const gameUrl = `https://v464541.hosted-by-vdsina.com/simple-frontend/keno?language=${language}`;

  // Прокручиваем страницу наверх при загрузке
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Calculate right column position
  useEffect(() => {
    const updatePosition = () => {
      const container = document.querySelector(".max-w-\\[1200px\\]");
      if (!container) return;

      const rect = container.getBoundingClientRect();
      const leftWidth = rect.width * 0.6;
      const rightWidth = rect.width * 0.4;

      setRightColumnStyle({
        position: "fixed",
        top: "96px",
        left: `${rect.left + leftWidth + 48}px`,
        width: `${rightWidth - 48}px`,
      });
    };

    if (window.innerWidth >= 1280) {
      updatePosition();
      window.addEventListener("resize", updatePosition);
      return () => window.removeEventListener("resize", updatePosition);
    }
  }, []);

  // Helper to get correct public path with base URL
  const getPublicPath = (path: string) => {
    const base = import.meta.env.BASE_URL;
    return base + path.replace(/^\//, '');
  };

  const gameData = {
    title: "Keno",
    badge: t("keno.badge"),
    image: getPublicPath("lovable-uploads/8ae2ba9a-e0ad-4bcd-a93e-b8aec9370099.png"),
  };
  return (
    <div className="min-h-screen">
      {/* Desktop Language Switcher - Fixed Top Right */}
      <div className="hidden lg:block fixed top-6 right-6 z-50">
        <LanguageSwitcher variant="desktop" />
      </div>

      {/* Animated Background */}
      <div className="animated-background">
        <div className="floating-orb"></div>
        <div className="floating-orb"></div>
        <div className="floating-orb"></div>
        <div className="floating-orb"></div>
        <div className="geometric-shape"></div>
        <div className="geometric-shape"></div>
        <div className="geometric-shape"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="animated-grid"></div>
      </div>
      <MobileMenu />
      <main>
        <div className="max-w-[1200px] mx-auto px-6 py-12">
          {/* Breadcrumb */}
          <div className="mb-8">
            <Link
              to="/#games"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              {t("keno.back")}
            </Link>
          </div>

          {/* 60/40 Layout */}
          <div className="xl:flex xl:gap-12 xl:items-start">
            {/* Left Side - Information (60%) */}
            <div className="xl:w-3/5 space-y-12">
              {/* Header */}
              <div>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
                  <div className="flex items-center gap-4">
                    <h1 className="text-4xl font-bold text-foreground">
                      {gameData.title}
                    </h1>
                    <div className="bg-primary/20 text-primary px-3 py-1 rounded-full text-sm font-medium">
                      {gameData.badge}
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <Button
                      onClick={() => setIsMobileModalOpen(true)}
                      className="xl:hidden bg-gradient-to-r from-accent via-primary-glow to-primary text-primary-foreground font-semibold px-6 py-2 rounded-full transition-all duration-300 hover:scale-105 whitespace-nowrap"
                    >
                      {t("keno.play")}
                    </Button>
                    <Button
                      onClick={() => window.location.href = '/#contact'}
                      className="bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold px-6 py-2 rounded-full hover:from-orange-600 hover:to-orange-700 transition-all duration-300 hover:scale-105 whitespace-nowrap"
                    >
                      {t('keno.request_integration')}
                    </Button>
                  </div>
                </div>
              </div>

              {/* Game Description */}
              <div>
                <h2 className="text-2xl font-semibold mb-6">
                  {t("keno.description.title")}
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>{t("keno.description.p1")}</p>

                  <p>{t("keno.description.p2")}</p>

                  <p>{t("keno.description.p3")}</p>
                </div>
              </div>

              {/* Technical Specifications */}
              <div>
                <h2 className="text-2xl font-semibold mb-6">
                  {t("keno.advantages.title")}
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                  <div className="gaming-border card-shadow p-4 md:p-6 rounded-lg text-center">
                    <div className="w-8 h-8 mx-auto mb-3 text-primary">
                      <Settings className="w-full h-full" />
                    </div>
                    <div className="font-semibold text-primary text-sm md:text-base">
                      {t("keno.advantages.customization")}
                    </div>
                  </div>

                  <div className="gaming-border card-shadow p-4 md:p-6 rounded-lg text-center">
                    <div className="w-8 h-8 mx-auto mb-3 text-green-400">
                      <Plug className="w-full h-full" />
                    </div>
                    <div className="font-semibold text-green-400 text-sm md:text-base leading-tight">
                      {t("keno.advantages.zero_effort")}
                    </div>
                  </div>

                  <div className="gaming-border card-shadow p-4 md:p-6 rounded-lg text-center flex flex-col items-center justify-center">
                    <div className="w-8 h-8 mx-auto mb-3 text-yellow-400">
                      <Zap className="w-full h-full" />
                    </div>
                    <div className="font-semibold text-yellow-400 text-sm md:text-base">
                      {t("keno.advantages.multiplier")}
                    </div>
                  </div>

                  <div className="gaming-border card-shadow p-4 md:p-6 rounded-lg text-center">
                    <div className="text-lg mb-3">📱💻</div>
                    <div className="font-semibold text-blue-400 text-sm md:text-base leading-tight">
                      {t("keno.advantages.responsive")}
                    </div>
                  </div>

                  <div className="gaming-border card-shadow p-4 md:p-6 rounded-lg text-center">
                    <div className="w-8 h-8 mx-auto mb-3 text-cyan-400">
                      <Globe className="w-full h-full" />
                    </div>
                    <div className="font-semibold text-cyan-400 text-sm md:text-base">
                      {t("keno.advantages.multilingual")}
                    </div>
                  </div>

                  <div className="gaming-border card-shadow p-4 md:p-6 rounded-lg text-center">
                    <div className="w-8 h-8 mx-auto mb-3 text-green-400">
                      <Shield className="w-full h-full" />
                    </div>
                    <div className="font-semibold text-green-400 text-sm md:text-base">
                      {t("keno.advantages.provably_fair")}
                    </div>
                  </div>
                </div>
              </div>

              {/* Game Process */}
              <div>
                <h2 className="text-2xl font-semibold mb-4">
                  {t("keno.process.title")}
                </h2>
                <div className="gaming-border card-shadow p-6 rounded-lg">
                  <div className="space-y-6">
                    <div className="border-l-4 border-blue-500 pl-4">
                      <h3 className="text-lg font-semibold text-blue-400 mb-2">
                        {t("keno.process.init.title")}
                      </h3>
                      <ul className="space-y-2 text-muted-foreground text-sm">
                        <li>{t("keno.process.init.item1")}</li>
                        <li>{t("keno.process.init.item2")}</li>
                        <li>{t("keno.process.init.item3")}</li>
                      </ul>
                    </div>

                    <div className="border-l-4 border-green-500 pl-4">
                      <h3 className="text-lg font-semibold text-green-400 mb-2">
                        {t("keno.process.bet.title")}
                      </h3>
                      <ul className="space-y-2 text-muted-foreground text-sm">
                        <li>{t("keno.process.bet.item1")}</li>
                        <li>{t("keno.process.bet.item2")}</li>
                        <li>{t("keno.process.bet.item3")}</li>
                      </ul>
                    </div>

                    <div className="border-l-4 border-purple-500 pl-4">
                      <h3 className="text-lg font-semibold text-purple-400 mb-2">
                        {t("keno.process.result.title")}
                      </h3>
                      <ul className="space-y-2 text-muted-foreground text-sm">
                        <li>{t("keno.process.result.item1")}</li>
                        <li>{t("keno.process.result.item2")}</li>
                        <li>{t("keno.process.result.item3")}</li>
                      </ul>
                    </div>

                    <div className="border-l-4 border-yellow-500 pl-4">
                      <h3 className="text-lg font-semibold text-yellow-400 mb-2">
                        {t("keno.process.calc.title")}
                      </h3>
                      <ul className="space-y-2 text-muted-foreground text-sm">
                        <li>{t("keno.process.calc.item1")}</li>
                        <li>{t("keno.process.calc.item2")}</li>
                        <li>{t("keno.process.calc.item3")}</li>
                      </ul>
                    </div>

                    <div className="border-l-4 border-orange-500 pl-4">
                      <h3 className="text-lg font-semibold text-orange-400 mb-2">
                        {t("keno.process.complete.title")}
                      </h3>
                      <ul className="space-y-2 text-muted-foreground text-sm">
                        <li>{t("keno.process.complete.item1")}</li>
                        <li>{t("keno.process.complete.item2")}</li>
                        <li>{t("keno.process.complete.item3")}</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Payout Table */}
              <div>
                <h2 className="text-2xl font-semibold mb-2">
                  {t("keno.payout.title")}
                </h2>
                <p className="text-sm text-muted-foreground mb-4">
                  {t("keno.payout.description")}
                </p>
                <div className="gaming-border card-shadow rounded-lg overflow-hidden">
                  <div className="overflow-x-auto">
                    <table className="w-full text-xs border-collapse">
                      <thead className="bg-muted/30">
                        <tr>
                          <th
                            rowSpan={2}
                            className="p-2 text-center font-semibold border border-border/30 text-xs text-muted-foreground uppercase tracking-wider align-middle"
                          >
                            {t("keno.payout.selected")}
                          </th>
                          <th
                            colSpan={10}
                            className="p-2 text-center font-semibold border border-border/30 text-xs text-muted-foreground uppercase tracking-wider"
                          >
                            {t("keno.payout.matches")}
                          </th>
                        </tr>
                        <tr>
                          <th className="p-2 text-center font-semibold border border-border/30">1</th>
                          <th className="p-2 text-center font-semibold border border-border/30">2</th>
                          <th className="p-2 text-center font-semibold border border-border/30">3</th>
                          <th className="p-2 text-center font-semibold border border-border/30">4</th>
                          <th className="p-2 text-center font-semibold border border-border/30">5</th>
                          <th className="p-2 text-center font-semibold border border-border/30">6</th>
                          <th className="p-2 text-center font-semibold border border-border/30">7</th>
                          <th className="p-2 text-center font-semibold border border-border/30">8</th>
                          <th className="p-2 text-center font-semibold border border-border/30">9</th>
                          <th className="p-2 text-center font-semibold border border-border/30">10</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="p-2 text-center font-medium border border-border/30 bg-muted/20">
                            1
                          </td>
                          <td className="p-2 text-center text-green-400 font-medium border border-border/30">
                            x3.8
                          </td>
                        </tr>
                        <tr>
                          <td className="p-2 text-center font-medium border border-border/30 bg-muted/20">
                            2
                          </td>
                          <td className="p-2 text-center text-green-400 font-medium border border-border/30">
                            x1.9
                          </td>
                          <td className="p-2 text-center text-green-400 font-medium border border-border/30">
                            x4
                          </td>
                        </tr>
                        <tr>
                          <td className="p-2 text-center font-medium border border-border/30 bg-muted/20">
                            3
                          </td>
                          <td className="p-2 text-center text-green-400 font-medium border border-border/30">
                            x1
                          </td>
                          <td className="p-2 text-center text-green-400 font-medium border border-border/30">
                            x3.1
                          </td>
                          <td className="p-2 text-center text-green-400 font-medium border border-border/30">
                            x8
                          </td>
                        </tr>
                        <tr>
                          <td className="p-2 text-center font-medium border border-border/30 bg-muted/20">
                            4
                          </td>
                          <td className="p-2 text-center text-gray-400 font-medium border border-border/30">
                            x0.7
                          </td>
                          <td className="p-2 text-center text-green-400 font-medium border border-border/30">
                            x2
                          </td>
                          <td className="p-2 text-center text-green-400 font-medium border border-border/30">
                            x6
                          </td>
                          <td className="p-2 text-center text-yellow-400 font-medium border border-border/30">
                            x12
                          </td>
                        </tr>
                        <tr>
                          <td className="p-2 text-center font-medium border border-border/30 bg-muted/20">
                            5
                          </td>
                          <td className="p-2 text-center text-gray-400 font-medium border border-border/30">
                            x0.4
                          </td>
                          <td className="p-2 text-center text-green-400 font-medium border border-border/30">
                            x1.3
                          </td>
                          <td className="p-2 text-center text-green-400 font-medium border border-border/30">
                            x3.9
                          </td>
                          <td className="p-2 text-center text-yellow-400 font-medium border border-border/30">
                            x11.8
                          </td>
                          <td className="p-2 text-center text-yellow-400 font-medium border border-border/30">
                            x30
                          </td>
                        </tr>
                        <tr>
                          <td className="p-2 text-center font-medium border border-border/30 bg-muted/20">
                            6
                          </td>
                          <td className="p-2 text-center text-gray-400 font-medium border border-border/30">
                            x0.3
                          </td>
                          <td className="p-2 text-center text-gray-400 font-medium border border-border/30">
                            x0.9
                          </td>
                          <td className="p-2 text-center text-green-400 font-medium border border-border/30">
                            x2.7
                          </td>
                          <td className="p-2 text-center text-green-400 font-medium border border-border/30">
                            x8.1
                          </td>
                          <td className="p-2 text-center text-yellow-400 font-medium border border-border/30">
                            x24.1
                          </td>
                          <td className="p-2 text-center text-orange-400 font-bold border border-border/30">
                            x50
                          </td>
                        </tr>
                        <tr>
                          <td className="p-2 text-center font-medium border border-border/30 bg-muted/20">
                            7
                          </td>
                          <td className="p-2 text-center text-gray-400 font-medium border border-border/30">
                            x0.2
                          </td>
                          <td className="p-2 text-center text-gray-400 font-medium border border-border/30">
                            x0.6
                          </td>
                          <td className="p-2 text-center text-green-400 font-medium border border-border/30">
                            x1.9
                          </td>
                          <td className="p-2 text-center text-green-400 font-medium border border-border/30">
                            x5.6
                          </td>
                          <td className="p-2 text-center text-yellow-400 font-medium border border-border/30">
                            x16.8
                          </td>
                          <td className="p-2 text-center text-orange-400 font-bold border border-border/30">
                            x50.3
                          </td>
                          <td className="p-2 text-center text-orange-400 font-bold border border-border/30">
                            x100
                          </td>
                        </tr>
                        <tr>
                          <td className="p-2 text-center font-medium border border-border/30 bg-muted/20">
                            8
                          </td>
                          <td className="p-2 text-center text-gray-400 font-medium border border-border/30">
                            x0.1
                          </td>
                          <td className="p-2 text-center text-gray-400 font-medium border border-border/30">
                            x0.4
                          </td>
                          <td className="p-2 text-center text-green-400 font-medium border border-border/30">
                            x1.3
                          </td>
                          <td className="p-2 text-center text-green-400 font-medium border border-border/30">
                            x3.9
                          </td>
                          <td className="p-2 text-center text-yellow-400 font-medium border border-border/30">
                            x11.8
                          </td>
                          <td className="p-2 text-center text-yellow-400 font-medium border border-border/30">
                            x35.4
                          </td>
                          <td className="p-2 text-center text-orange-400 font-bold border border-border/30">
                            x106.2
                          </td>
                          <td className="p-2 text-center text-red-400 font-bold border border-border/30">
                            x250
                          </td>
                        </tr>
                        <tr>
                          <td className="p-2 text-center font-medium border border-border/30 bg-muted/20">
                            9
                          </td>
                          <td className="p-2 text-center text-gray-400 font-medium border border-border/30">
                            x0.1
                          </td>
                          <td className="p-2 text-center text-gray-400 font-medium border border-border/30">
                            x0.3
                          </td>
                          <td className="p-2 text-center text-gray-400 font-medium border border-border/30">
                            x0.9
                          </td>
                          <td className="p-2 text-center text-green-400 font-medium border border-border/30">
                            x2.8
                          </td>
                          <td className="p-2 text-center text-green-600 font-medium border border-border/30">
                            x8.4
                          </td>
                          <td className="p-2 text-center text-yellow-400 font-medium border border-border/30">
                            x25.1
                          </td>
                          <td className="p-2 text-center text-orange-400 font-bold border border-border/30">
                            x75.4
                          </td>
                          <td className="p-2 text-center text-red-400 font-bold border border-border/30">
                            x226.2
                          </td>
                          <td className="p-2 text-center text-purple-500 font-bold border border-border/30">
                            x600
                          </td>
                        </tr>
                        <tr>
                          <td className="p-2 text-center font-medium border border-border/30 bg-muted/20">
                            10
                          </td>
                          <td className="p-2 text-center text-gray-400 font-medium border border-border/30">
                            x0.1
                          </td>
                          <td className="p-2 text-center text-gray-400 font-medium border border-border/30">
                            x0.2
                          </td>
                          <td className="p-2 text-center text-gray-400 font-medium border border-border/30">
                            x0.7
                          </td>
                          <td className="p-2 text-center text-green-400 font-medium border border-border/30">
                            x2
                          </td>
                          <td className="p-2 text-center text-green-500 font-medium border border-border/30">
                            x6
                          </td>
                          <td className="p-2 text-center text-yellow-400 font-medium border border-border/30">
                            x18
                          </td>
                          <td className="p-2 text-center text-orange-400 font-bold border border-border/30">
                            x54
                          </td>
                          <td className="p-2 text-center text-orange-500 font-bold border border-border/30">
                            x162.1
                          </td>
                          <td className="p-2 text-center text-purple-400 font-bold border border-border/30">
                            x486.4
                          </td>
                          <td className="p-2 text-center text-purple-600 font-bold text-shadow border border-border/30">
                            x750
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground mt-3">
                  {t("keno.payout.note")}
                </p>
              </div>

              {/* For Operators */}
              <div>
                <h2 className="text-2xl font-semibold mb-4">
                  {t("keno.customization.title")}
                </h2>
                <div className="gaming-border card-shadow p-6 rounded-lg">
                  <div className="space-y-6">
                    <div className="border-l-4 border-blue-500 pl-4">
                      <h3 className="text-lg font-semibold text-blue-400 mb-2 flex items-center gap-2">
                        {t("keno.customization.math.title")}
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        {t("keno.customization.math.description")}
                      </p>
                    </div>

                    <div className="border-l-4 border-green-500 pl-4">
                      <h3 className="text-lg font-semibold text-green-400 mb-2 flex items-center gap-2">
                        {t("keno.customization.economics.title")}
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        {t("keno.customization.economics.description")}
                      </p>
                    </div>

                    <div className="border-l-4 border-purple-500 pl-4">
                      <h3 className="text-lg font-semibold text-purple-400 mb-2 flex items-center gap-2">
                        {t("keno.customization.branding.title")}
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        {t("keno.customization.branding.description")}
                      </p>
                    </div>

                    <div className="border-l-4 border-yellow-500 pl-4">
                      <h3 className="text-lg font-semibold text-yellow-400 mb-2 flex items-center gap-2">
                        {t("keno.customization.coming_soon.title")}
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        {t("keno.customization.coming_soon.description")}
                      </p>
                    </div>

                    <div className="bg-primary/10 border border-primary/20 p-4 rounded-lg mt-6">
                      <p className="text-primary font-medium">
                        {t("keno.customization.main_message")}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Integration */}
              <div>
                <h2 className="text-2xl font-semibold mb-4">
                  {t("keno.integration.title")}
                </h2>
                <div className="gaming-border card-shadow p-6 rounded-lg">
                  <div className="space-y-6">
                    {/* What you do */}
                    <div className="border-l-4 border-green-500 pl-4">
                      <h3 className="text-lg font-semibold text-green-400 mb-2">
                        {t("keno.integration.you_do.title")}
                      </h3>
                      <ul className="space-y-2 text-muted-foreground text-sm">
                        <li>{t("keno.integration.you_do.item1")}</li>
                      </ul>
                    </div>

                    {/* What we do */}
                    <div className="border-l-4 border-blue-500 pl-4">
                      <h3 className="text-lg font-semibold text-blue-400 mb-3">
                        {t("keno.integration.we_do.title")}
                      </h3>
                      <ul className="space-y-2 text-muted-foreground text-sm">
                        <li>{t("keno.integration.we_do.item1")}</li>
                        <li>{t("keno.integration.we_do.item2")}</li>
                        <li>{t("keno.integration.we_do.item3")}</li>
                        <li>{t("keno.integration.we_do.item4")}</li>
                        <li>{t("keno.integration.we_do.item5")}</li>
                      </ul>
                    </div>

                    {/* Result */}
                    <div className="bg-primary/10 border border-primary/20 p-4 rounded-lg">
                      <h4 className="text-primary font-semibold mb-2">
                        {t("keno.integration.result.title")}
                      </h4>
                      <p className="text-primary text-sm">
                        {t("keno.integration.result.description")}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Demo (40%) */}
            <div className="xl:w-2/5 hidden xl:block relative">
              <div className="xl:fixed xl:top-24 xl:w-[calc(40%-3rem*3/5)]">
                {/* Device Preview with Side Controls */}
                <div className="flex items-start justify-center gap-4 mb-6">
                  {/* Left side - Phone and CTA aligned */}
                  <div className="flex flex-col items-start">
                    {/* Phone Preview */}
                    {selectedDevice === "mobile" && (
                      <div className="phone-frame hidden md:block">
                        <div className="phone-screen">
                          <iframe
                            key={language}
                            src={gameUrl}
                            className="w-full h-full border-0 rounded-[28px]"
                            title="Keno Mobile Demo Game"
                            allow="fullscreen"
                          />
                        </div>
                      </div>
                    )}

                    {/* Call to Action */}
                    {/* <div className="mt-8 w-full max-w-[400px]">
                      <CallToActionCard
                        title={t("keno.cta.title")}
                        description={t("keno.cta.description")}
                        statusText={t("keno.cta.status")}
                        buttonText={t("keno.cta.button")}
                        buttonLink="/#contact"
                      />
                    </div> */}
                  </div>

                  {/* Device Selection Buttons - Hidden on mobile */}
                  <div className="hidden md:flex flex-col gap-2">
                    <div className="gaming-border card-shadow p-2 rounded-lg">
                      <button
                        onClick={() => setSelectedDevice("mobile")}
                        className={`flex items-center justify-center p-3 rounded-md transition-all border ${selectedDevice === "mobile" ? "bg-primary text-primary-foreground shadow-md border-primary" : "bg-background text-foreground hover:bg-muted/50 border-border hover:border-muted-foreground"}`}
                        title="Телефон"
                      >
                        <Smartphone className="w-5 h-5" />
                      </button>
                      <button
                        onClick={() => setIsDesktopModalOpen(true)}
                        className="flex items-center justify-center p-3 rounded-md transition-all bg-background text-foreground hover:bg-muted/50 border border-border hover:border-muted-foreground mt-2"
                        title="Десктоп"
                      >
                        <Monitor className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Mobile Modal */}
      <Dialog open={isMobileModalOpen} onOpenChange={setIsMobileModalOpen}>
        <DialogContent className="max-w-[100vw] w-full h-[100vh] p-0 border-0 rounded-none [&>button]:hidden">
          <DialogTitle className="sr-only">Keno Mobile Game</DialogTitle>
          <DialogDescription className="sr-only">
            Полнофункциональная демо-версия игры Keno для мобильных устройств
          </DialogDescription>
          <div className="w-full h-full pt-12 pb-8 px-2 bg-black">
            <iframe
              key={language}
              src={gameUrl}
              className="w-full h-full border-0 rounded-lg"
              title="Keno Mobile Demo Game"
              allow="fullscreen"
            />
          </div>
          <FloatingControls onClose={() => setIsMobileModalOpen(false)} />
        </DialogContent>
      </Dialog>

      {/* Desktop Modal */}
      <Dialog open={isDesktopModalOpen} onOpenChange={setIsDesktopModalOpen}>
        <DialogContent className="max-w-7xl w-full h-[95vh] p-0 [&>button]:w-8 [&>button]:h-8 md:[&>button]:w-6 md:[&>button]:h-6">
          <DialogTitle className="sr-only">Keno Desktop Game</DialogTitle>
          <DialogDescription className="sr-only">
            Полнофункциональная демо-версия игры Keno для десктопа
          </DialogDescription>
          <iframe
            key={language}
            src={gameUrl}
            className="w-full h-full rounded-lg border-0"
            title="Keno Desktop Demo Game"
            allow="fullscreen"
          />
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
};
export default Keno;
