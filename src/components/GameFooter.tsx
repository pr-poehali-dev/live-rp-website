import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { Facebook, Twitter, Instagram, Youtube, Mail } from "lucide-react";

const GameFooter = () => {
  return (
    <footer className="bg-game border-t border-border/50">
      <div className="container px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold bg-gradient-to-r from-game-accent to-game-secondary bg-clip-text text-transparent mb-4">
              LIVE RP
            </h3>
            <p className="text-gray-300 mb-4">
              Погрузитесь в захватывающий мир ролевой игры с безграничными возможностями.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="text-gray-300 hover:text-game-accent">
                <Facebook size={18} />
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-300 hover:text-game-accent">
                <Twitter size={18} />
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-300 hover:text-game-accent">
                <Instagram size={18} />
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-300 hover:text-game-accent">
                <Youtube size={18} />
              </Button>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold mb-4 text-white">Игра</h4>
            <ul className="space-y-2">
              <li><Link to="/features" className="text-gray-300 hover:text-game-accent">Особенности</Link></li>
              <li><Link to="/world" className="text-gray-300 hover:text-game-accent">Мир игры</Link></li>
              <li><Link to="/news" className="text-gray-300 hover:text-game-accent">Новости</Link></li>
              <li><Link to="/download" className="text-gray-300 hover:text-game-accent">Скачать</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4 text-white">Сообщество</h4>
            <ul className="space-y-2">
              <li><Link to="/forum" className="text-gray-300 hover:text-game-accent">Форум</Link></li>
              <li><Link to="/rules" className="text-gray-300 hover:text-game-accent">Правила</Link></li>
              <li><Link to="/support" className="text-gray-300 hover:text-game-accent">Поддержка</Link></li>
              <li><Link to="/faq" className="text-gray-300 hover:text-game-accent">FAQ</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4 text-white">Связаться с нами</h4>
            <div className="flex items-center space-x-2 mb-4">
              <Mail size={16} className="text-game-accent" />
              <span className="text-gray-300">support@liverp.game</span>
            </div>
            <Button className="w-full bg-game-accent hover:bg-game-secondary">
              Написать в поддержку
            </Button>
          </div>
        </div>
        
        <div className="border-t border-border/50 mt-8 pt-8 text-center text-gray-300 text-sm">
          <p>© 2025 LIVE RP. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default GameFooter;
