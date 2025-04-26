import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Download, MessageSquare, Server, Github } from "lucide-react";
import { Button } from "./ui/button";

const GameNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/40">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <img src="/logo-b.svg" alt="LIVE RP" className="h-8 w-auto mr-2" />
            <span className="text-xl font-bold bg-gradient-to-r from-game-accent to-game-light bg-clip-text text-transparent">LIVE RP</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <Link to="/" className="text-gray-300 hover:text-white transition-colors">
              Главная
            </Link>
            <Link to="/download" className="text-gray-300 hover:text-white transition-colors">
              <div className="flex items-center">
                <Download className="h-4 w-4 mr-1" />
                Скачать
              </div>
            </Link>
            <Link to="/servers" className="text-gray-300 hover:text-white transition-colors">
              <div className="flex items-center">
                <Server className="h-4 w-4 mr-1" />
                Серверы
              </div>
            </Link>
            <Link to="/forum" className="text-gray-300 hover:text-white transition-colors">
              <div className="flex items-center">
                <MessageSquare className="h-4 w-4 mr-1" />
                Форум
              </div>
            </Link>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Github className="h-5 w-5" />
            </a>
            <Button className="bg-game-accent hover:bg-game-secondary">
              Войти
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-gray-300 hover:text-white"
            aria-label={isMenuOpen ? "Закрыть меню" : "Открыть меню"}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-background border-b border-border/40">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col gap-4">
              <Link
                to="/"
                className="text-gray-300 hover:text-white py-2 transition-colors"
                onClick={toggleMenu}
              >
                Главная
              </Link>
              <Link
                to="/download"
                className="text-gray-300 hover:text-white py-2 transition-colors"
                onClick={toggleMenu}
              >
                <div className="flex items-center">
                  <Download className="h-4 w-4 mr-2" />
                  Скачать
                </div>
              </Link>
              <Link
                to="/servers"
                className="text-gray-300 hover:text-white py-2 transition-colors"
                onClick={toggleMenu}
              >
                <div className="flex items-center">
                  <Server className="h-4 w-4 mr-2" />
                  Серверы
                </div>
              </Link>
              <Link
                to="/forum"
                className="text-gray-300 hover:text-white py-2 transition-colors"
                onClick={toggleMenu}
              >
                <div className="flex items-center">
                  <MessageSquare className="h-4 w-4 mr-2" />
                  Форум
                </div>
              </Link>
              <div className="flex items-center justify-between mt-4 pt-4 border-t border-border/40">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Github className="h-5 w-5" />
                </a>
                <Button className="bg-game-accent hover:bg-game-secondary">
                  Войти
                </Button>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default GameNavbar;
