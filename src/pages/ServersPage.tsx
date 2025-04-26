import GameNavbar from "@/components/GameNavbar";
import GameFooter from "@/components/GameFooter";
import { ArrowLeft, Server, Users, Star, Globe, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface GameServer {
  id: number;
  name: string;
  description: string;
  players: number;
  maxPlayers: number;
  rating: number;
  region: string;
  ping: number;
  tags: string[];
  status: "online" | "offline" | "maintenance";
  featured?: boolean;
}

const servers: GameServer[] = [
  {
    id: 1,
    name: "Москва РП",
    description: "Официальный сервер с реалистичным отыгрышем жизни в столице",
    players: 230,
    maxPlayers: 300,
    rating: 4.8,
    region: "RU",
    ping: 25,
    tags: ["RP", "Экономика", "PVE"],
    status: "online",
    featured: true
  },
  {
    id: 2,
    name: "Криминальная Россия",
    description: "Бандитские разборки, полицейские погони и криминальные истории",
    players: 188,
    maxPlayers: 200,
    rating: 4.6,
    region: "RU",
    ping: 30,
    tags: ["Криминал", "PVP", "Автомобили"],
    status: "online"
  },
  {
    id: 3,
    name: "Европейский РП",
    description: "Европейский стиль игры с международным сообществом",
    players: 156,
    maxPlayers: 250,
    rating: 4.3,
    region: "EU",
    ping: 75,
    tags: ["RP", "Международный", "Свободный мир"],
    status: "online"
  },
  {
    id: 4,
    name: "Гонки и Драйв",
    description: "Сервер для любителей быстрой езды и автомобильной культуры",
    players: 120,
    maxPlayers: 150,
    rating: 4.5,
    region: "RU",
    ping: 28,
    tags: ["Гонки", "Автомобили", "Тюнинг"],
    status: "online"
  },
  {
    id: 5,
    name: "Нью-Йорк РП",
    description: "Американский стиль игры с полным погружением в атмосферу мегаполиса",
    players: 0,
    maxPlayers: 300,
    rating: 4.7,
    region: "US",
    ping: 120,
    tags: ["RP", "Небоскребы", "Экономика"],
    status: "maintenance"
  },
  {
    id: 6,
    name: "Выживание",
    description: "Постапокалиптический мир с элементами выживания",
    players: 95,
    maxPlayers: 150,
    rating: 4.2,
    region: "RU",
    ping: 35,
    tags: ["Выживание", "PVP", "Зомби"],
    status: "online"
  }
];

const ServerCard = ({ server }: { server: GameServer }) => {
  const statusColors = {
    online: "bg-green-500",
    offline: "bg-red-500",
    maintenance: "bg-yellow-500"
  };

  const statusText = {
    online: "Онлайн",
    offline: "Офлайн",
    maintenance: "Тех. работы"
  };

  const playerPercentage = (server.players / server.maxPlayers) * 100;

  return (
    <Card className="game-card relative overflow-hidden">
      {server.featured && (
        <div className="absolute top-0 right-0">
          <Badge className="bg-game-accent rounded-none rounded-bl-md">
            <Star className="h-3 w-3 mr-1" fill="currentColor" /> Рекомендуемый
          </Badge>
        </div>
      )}
      <CardHeader>
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-xl">{server.name}</CardTitle>
            <CardDescription className="mt-1">{server.description}</CardDescription>
          </div>
          <div className={`px-2 py-1 rounded-md text-xs font-medium ${statusColors[server.status]}`}>
            {statusText[server.status]}
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <div className="flex justify-between text-sm mb-1">
              <span className="text-gray-300">Игроки</span>
              <span className="text-gray-300">{server.players}/{server.maxPlayers}</span>
            </div>
            <Progress value={playerPercentage} className="h-2" />
          </div>
          
          <div className="flex justify-between text-sm">
            <div className="flex items-center">
              <Globe className="h-4 w-4 mr-1 text-game-accent" />
              <span>{server.region}</span>
            </div>
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-1 text-game-accent" />
              <span>{server.ping} мс</span>
            </div>
            <div className="flex items-center">
              <Star className="h-4 w-4 mr-1 text-game-accent" />
              <span>{server.rating.toFixed(1)}</span>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-2 mt-2">
            {server.tags.map((tag, index) => (
              <Badge key={index} variant="outline" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button 
          className="w-full gap-2 bg-game-accent hover:bg-game-secondary"
          disabled={server.status !== "online"}
        >
          Подключиться
        </Button>
      </CardFooter>
    </Card>
  );
};

const ServersPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <GameNavbar />
      
      <main className="pt-24">
        <div className="container px-4 py-8">
          <Link to="/" className="inline-flex items-center text-gray-400 hover:text-game-accent mb-4">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Вернуться на главную
          </Link>
          
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-game-accent to-game-light bg-clip-text text-transparent">
              Серверы LIVE RP
            </h1>
            <p className="text-gray-300 mb-6">
              Выберите сервер, который подходит именно вам. От классического РП до экшн-ориентированных миров.
            </p>
          </div>
          
          <Tabs defaultValue="all" className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
              <TabsList className="grid grid-cols-3 w-full md:w-auto">
                <TabsTrigger value="all">
                  <Server className="mr-2 h-4 w-4" />
                  Все серверы
                </TabsTrigger>
                <TabsTrigger value="popular">
                  <Users className="mr-2 h-4 w-4" />
                  Популярные
                </TabsTrigger>
                <TabsTrigger value="recommended">
                  <Star className="mr-2 h-4 w-4" />
                  Рекомендуемые
                </TabsTrigger>
              </TabsList>
              
              <div className="flex gap-3 w-full md:w-auto">
                <Input placeholder="Поиск серверов..." className="max-w-sm" />
                <Select defaultValue="all">
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Регион" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Все регионы</SelectItem>
                    <SelectItem value="RU">Россия</SelectItem>
                    <SelectItem value="EU">Европа</SelectItem>
                    <SelectItem value="US">США</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <TabsContent value="all">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {servers.map(server => (
                  <ServerCard key={server.id} server={server} />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="popular">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {servers
                  .filter(server => server.players > 150 && server.status === "online")
                  .map(server => (
                    <ServerCard key={server.id} server={server} />
                  ))}
              </div>
            </TabsContent>
            
            <TabsContent value="recommended">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {servers
                  .filter(server => server.featured)
                  .map(server => (
                    <ServerCard key={server.id} server={server} />
                  ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      
      <GameFooter />
    </div>
  );
};

export default ServersPage;
