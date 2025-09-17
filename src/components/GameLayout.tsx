import { type ReactNode } from 'react';

import { ArrowLeft, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

import AnimatedBackground from '@/components/AnimatedBackground';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { Button } from '@/components/ui/button';
import { type GameData } from '@/types';

interface GameLayoutProps {
  gameData: GameData;
  children: ReactNode;
  showAnimatedBackground?: boolean;
}

const GameLayout = ({ gameData, children, showAnimatedBackground = true }: GameLayoutProps) => {
  return (
    <div className="min-h-screen">
      {showAnimatedBackground && <AnimatedBackground />}

      <Header />

      <main className="relative z-10 pt-20">
        <div className="container mx-auto px-4 py-8">
          <div className="mx-auto max-w-4xl">
            {/* Back Navigation */}
            <div className="mb-6">
              <Link to="/">
                <Button variant="ghost" className="mb-4 hover:bg-accent">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Назад к играм
                </Button>
              </Link>
            </div>

            {/* Game Header */}
            <div className="mb-8 rounded-lg border border-border bg-card p-6">
              <div className="flex flex-col gap-6 lg:flex-row">
                <div className="lg:w-1/3">
                  <img
                    src={gameData.image}
                    alt={gameData.title}
                    className="h-48 w-full rounded-lg border border-border object-cover lg:h-64"
                  />
                </div>

                <div className="lg:w-2/3">
                  <div className="mb-4 flex items-start justify-between">
                    <div>
                      <h1 className="mb-2 text-3xl font-bold lg:text-4xl">{gameData.title}</h1>
                      {gameData.badge && (
                        <span className="inline-flex items-center gap-1 rounded-full border border-yellow-500/30 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 px-3 py-1 text-sm font-medium text-yellow-400">
                          <Star className="h-3 w-3 fill-current" />
                          {gameData.badge}
                        </span>
                      )}
                    </div>
                  </div>

                  <p className="leading-relaxed text-muted-foreground">{gameData.description}</p>
                </div>
              </div>
            </div>

            {/* Game Content */}
            <div className="space-y-8">{children}</div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default GameLayout;
