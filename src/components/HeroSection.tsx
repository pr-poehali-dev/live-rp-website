import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { Download } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat" 
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=2071&auto=format&fit=crop')", 
          filter: "brightness(0.4)" 
        }}
      />
      
      {/* Content */}
      <div className="container relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-4 py-24">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            <span className="bg-gradient-to-r from-game-accent to-game-light bg-clip-text text-transparent">LIVE RP</span>
            <span className="block text-white">Погрузись в реалистичный мир</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Уникальный игровой опыт с проработанной ролевой системой, обширным открытым миром и безграничными возможностями для творчества.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/download">
              <Button size="lg" className="game-btn">
                <Download className="mr-2 h-5 w-5" />
                Скачать игру
              </Button>
            </Link>
            <Link to="/forum">
              <Button size="lg" variant="outline" className="border-game-accent text-white hover:bg-game-accent/20">
                Присоединиться к форуму
              </Button>
            </Link>
          </div>
          
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6">
            <div className="flex items-center">
              <div className="h-10 w-10 rounded-full bg-game-accent animate-pulse-light flex items-center justify-center text-white">
                5K+
              </div>
              <span className="ml-2 text-gray-300">Активных игроков</span>
            </div>
            <div className="flex items-center">
              <div className="h-10 w-10 rounded-full bg-game-accent animate-pulse-light flex items-center justify-center text-white">
                200+
              </div>
              <span className="ml-2 text-gray-300">Уникальных локаций</span>
            </div>
            <div className="flex items-center">
              <div className="h-10 w-10 rounded-full bg-game-accent animate-pulse-light flex items-center justify-center text-white">
                24/7
              </div>
              <span className="ml-2 text-gray-300">Онлайн поддержка</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
