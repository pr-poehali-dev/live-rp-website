import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { Download, Users } from "lucide-react";

const GameNavbar = () => {
  return (
    <header className="bg-game fixed w-full z-50 border-b border-border/50 backdrop-blur-sm bg-background/80">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold bg-gradient-to-r from-game-accent to-game-secondary bg-clip-text text-transparent">
              LIVE RP
            </span>
          </Link>
          
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link to="/" className="nav-link px-4 py-2">
                  Главная
                </Link>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <NavigationMenuTrigger className="nav-link">
                  Об игре
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    <li>
                      <NavigationMenuLink asChild>
                        <Link
                          to="/features"
                          className={cn(
                            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          )}
                        >
                          <div className="text-sm font-medium leading-none">Особенности</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Узнайте обо всех ключевых особенностях нашей ролевой игры
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link
                          to="/world"
                          className={cn(
                            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          )}
                        >
                          <div className="text-sm font-medium leading-none">Мир игры</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Исследуйте огромный открытый мир Live RP
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link to="/news" className="nav-link px-4 py-2">
                  Новости
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="flex items-center gap-4">
          <Link to="/forum">
            <Button variant="outline" className="gap-2">
              <Users size={16} />
              Форум
            </Button>
          </Link>
          <Link to="/download">
            <Button className="gap-2 bg-game-accent hover:bg-game-secondary">
              <Download size={16} />
              Скачать
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default GameNavbar;
