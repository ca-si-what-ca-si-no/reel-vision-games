import { ReactNode } from 'react';
import { GameData } from '@/types';
import { Button } from '@/components/ui/button';
import { Star, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AnimatedBackground from '@/components/AnimatedBackground';

interface GameLayoutProps {
  gameData: GameData;
  children: ReactNode;
  showAnimatedBackground?: boolean;
}

const GameLayout = ({
  gameData,
  children,
  showAnimatedBackground = true
}: GameLayoutProps) => {
  return (
    <div className="min-h-screen">
      {showAnimatedBackground && <AnimatedBackground />}

      <Header />

      <main className="relative z-10 pt-20">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            {/* Back Navigation */}
            <div className="mb-6">
              <Link to="/">
                <Button variant="ghost" className="mb-4 hover:bg-accent">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Назад к играм
                </Button>
              </Link>
            </div>

            {/* Game Header */}
            <div className="bg-card border border-border rounded-lg p-6 mb-8">
              <div className="flex flex-col lg:flex-row gap-6">
                <div className="lg:w-1/3">
                  <img
                    src={gameData.image}
                    alt={gameData.title}
                    className="w-full h-48 lg:h-64 object-cover rounded-lg border border-border"
                  />
                </div>

                <div className="lg:w-2/3">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h1 className="text-3xl lg:text-4xl font-bold mb-2">{gameData.title}</h1>
                      {gameData.badge && (
                        <span className="inline-flex items-center gap-1 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 text-yellow-400 px-3 py-1 rounded-full text-sm font-medium border border-yellow-500/30">
                          <Star className="w-3 h-3 fill-current" />
                          {gameData.badge}
                        </span>
                      )}
                    </div>
                  </div>

                  <p className="text-muted-foreground leading-relaxed">
                    {gameData.description}
                  </p>
                </div>
              </div>
            </div>

            {/* Game Content */}
            <div className="space-y-8">
              {children}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default GameLayout;