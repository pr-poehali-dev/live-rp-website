import GameNavbar from "@/components/GameNavbar";
import GameFooter from "@/components/GameFooter";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Search, MessageSquare, Users, Pin, BookOpen, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";

const ForumPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <GameNavbar />
      
      <main className="pt-24 pb-12">
        <div className="container px-4">
          <Link to="/" className="inline-flex items-center text-gray-400 hover:text-game-accent mb-4">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Вернуться на главную
          </Link>
          
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8 gap-4">
            <div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-game-accent to-game-light bg-clip-text text-transparent">
                Форум LIVE RP
              </h1>
              <p className="text-gray-300">Общайтесь с игроками, делитесь опытом и участвуйте в обсуждениях</p>
            </div>
            
            <div className="flex items-center gap-2 w-full md:w-auto">
              <div className="relative flex-1 md:w-64">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input 
                  placeholder="Поиск по форуму..." 
                  className="pl-8 bg-card border-border/40"
                />
              </div>
              <Button className="bg-game-accent hover:bg-game-secondary whitespace-nowrap">
                Новая тема
              </Button>
            </div>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6">
            <div className="md:col-span-3">
              {/* Pinned topics */}
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-4">
                  <Pin className="h-5 w-5 text-game-accent" />
                  <h2 className="text-xl font-semibold text-white">Закрепленные темы</h2>
                </div>
                
                <div className="space-y-4">
                  {[
                    { title: "Правила форума и игрового сервера", replies: 24, views: 1580, author: "Администратор" },
                    { title: "Обновление 1.2.5 - Список изменений", replies: 56, views: 3210, author: "Модератор" },
                    { title: "FAQ для новичков - Прочитать обязательно!", replies: 103, views: 8760, author: "Администратор" },
                  ].map((topic, index) => (
                    <div key={index} className="bg-card p-4 rounded-lg border border-border/40 hover:border-game-accent/50 transition-all duration-300">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="font-medium text-white hover:text-game-accent transition-colors">
                            {topic.title}
                          </h3>
                          <p className="text-sm text-gray-400 mt-1">Автор: {topic.author}</p>
                        </div>
                        <div className="text-right text-sm text-gray-400">
                          <div>{topic.replies} ответов</div>
                          <div>{topic.views} просмотров</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Forum categories */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <MessageSquare className="h-5 w-5 text-game-accent" />
                  <h2 className="text-xl font-semibold text-white">Категории форума</h2>
                </div>
                
                <div className="space-y-4">
                  {[
                    { title: "Новости и анонсы", description: "Официальные новости от команды разработчиков", topics: 42, icon: <BookOpen className="h-10 w-10 text-game-accent" /> },
                    { title: "Помощь новичкам", description: "Вопросы и ответы для новых игроков", topics: 128, icon: <Shield className="h-10 w-10 text-game-accent" /> },
                    { title: "Игровой процесс", description: "Обсуждение геймплея, механик и стратегий", topics: 256, icon: <MessageSquare className="h-10 w-10 text-game-accent" /> },
                    { title: "Жизнь сообщества", description: "Общение, ивенты, встречи и мероприятия", topics: 178, icon: <Users className="h-10 w-10 text-game-accent" /> },
                  ].map((category, index) => (
                    <div key={index} className="bg-card p-4 rounded-lg border border-border/40 hover:border-game-accent/50 transition-all duration-300">
                      <div className="flex">
                        <div className="mr-4 flex-shrink-0 hidden sm:block">
                          {category.icon}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <h3 className="font-medium text-white text-lg hover:text-game-accent transition-colors">
                              {category.title}
                            </h3>
                            <div className="text-sm text-gray-400">
                              {category.topics} тем
                            </div>
                          </div>
                          <p className="text-sm text-gray-300 mt-1">{category.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div>
              <div className="bg-card rounded-lg border border-border/40 overflow-hidden">
                <div className="bg-game-accent/20 p-4">
                  <h3 className="font-semibold text-white">Статистика форума</h3>
                </div>
                <div className="p-4 space-y-4">
                  <div>
                    <p className="text-gray-300 text-sm mb-1">Темы</p>
                    <p className="text-lg font-medium text-white">1,248</p>
                  </div>
                  <div>
                    <p className="text-gray-300 text-sm mb-1">Сообщения</p>
                    <p className="text-lg font-medium text-white">24,857</p>
                  </div>
                  <div>
                    <p className="text-gray-300 text-sm mb-1">Пользователи</p>
                    <p className="text-lg font-medium text-white">5,432</p>
                  </div>
                  <div>
                    <p className="text-gray-300 text-sm mb-1">Новый пользователь</p>
                    <p className="text-lg font-medium text-white">Player123</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-card rounded-lg border border-border/40 overflow-hidden mt-6">
                <div className="bg-game-accent/20 p-4">
                  <h3 className="font-semibold text-white">Онлайн</h3>
                </div>
                <div className="p-4">
                  <p className="text-gray-300">Сейчас на форуме: <span className="text-white font-medium">142</span> пользователя</p>
                  <div className="mt-2">
                    <span className="text-xs bg-game-accent text-white px-2 py-1 rounded-full mr-1">Администратор</span>
                    <span className="text-xs bg-game-secondary text-white px-2 py-1 rounded-full">Модератор</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <GameFooter />
    </div>
  );
};

export default ForumPage;
