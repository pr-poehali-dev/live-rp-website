import GameNavbar from "@/components/GameNavbar";
import GameFooter from "@/components/GameFooter";
import DownloadSection from "@/components/DownloadSection";
import { ArrowLeft, Download, FileText, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const DownloadPage = () => {
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
              Загрузить LIVE RP
            </h1>
            <p className="text-gray-300 mb-6">
              Выберите версию игры, подходящую для вашей системы, и начните свое приключение уже сегодня!
            </p>
          </div>
          
          <Tabs defaultValue="download" className="max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="download" className="text-sm">
                <Download className="mr-2 h-4 w-4" />
                Скачать
              </TabsTrigger>
              <TabsTrigger value="requirements" className="text-sm">
                <FileText className="mr-2 h-4 w-4" />
                Системные требования
              </TabsTrigger>
              <TabsTrigger value="faq" className="text-sm">
                <HelpCircle className="mr-2 h-4 w-4" />
                FAQ
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="download">
              <DownloadSection />
            </TabsContent>
            
            <TabsContent value="requirements">
              <div className="bg-card rounded-lg p-6 border border-border/40">
                <h2 className="text-2xl font-bold mb-4 text-game-accent">Системные требования</h2>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-white">Минимальные</h3>
                    <ul className="space-y-2 text-gray-300">
                      <li><strong>ОС:</strong> Windows 10 (64-bit)</li>
                      <li><strong>Процессор:</strong> Intel Core i5-6600K / AMD Ryzen 5 1600</li>
                      <li><strong>Память:</strong> 8 GB ОЗУ</li>
                      <li><strong>Видеокарта:</strong> NVIDIA GeForce GTX 970 / AMD Radeon RX 570</li>
                      <li><strong>DirectX:</strong> Версии 11</li>
                      <li><strong>Сеть:</strong> Широкополосное подключение к интернету</li>
                      <li><strong>Место на диске:</strong> 50 GB</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-white">Рекомендуемые</h3>
                    <ul className="space-y-2 text-gray-300">
                      <li><strong>ОС:</strong> Windows 10/11 (64-bit)</li>
                      <li><strong>Процессор:</strong> Intel Core i7-8700K / AMD Ryzen 7 3700X</li>
                      <li><strong>Память:</strong> 16 GB ОЗУ</li>
                      <li><strong>Видеокарта:</strong> NVIDIA GeForce RTX 2070 / AMD Radeon RX 5700 XT</li>
                      <li><strong>DirectX:</strong> Версии 12</li>
                      <li><strong>Сеть:</strong> Широкополосное подключение к интернету</li>
                      <li><strong>Место на диске:</strong> 50 GB SSD</li>
                    </ul>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="faq">
              <div className="bg-card rounded-lg p-6 border border-border/40">
                <h2 className="text-2xl font-bold mb-4 text-game-accent">Часто задаваемые вопросы</h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-white">Как установить игру?</h3>
                    <p className="text-gray-300">
                      Скачайте установщик для вашей операционной системы, запустите его и следуйте инструкциям на экране. 
                      После установки запустите игру через ярлык на рабочем столе или через лаунчер.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-white">Как создать аккаунт?</h3>
                    <p className="text-gray-300">
                      Вы можете создать аккаунт непосредственно в игре при первом запуске или на нашем официальном сайте в разделе "Регистрация".
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-white">Игра платная?</h3>
                    <p className="text-gray-300">
                      Базовая версия игры бесплатна. Внутри игры есть косметические предметы и VIP-статусы, которые можно приобрести за реальные деньги,
                      но они не дают игрового преимущества.
                    </p>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      
      <GameFooter />
    </div>
  );
};

export default DownloadPage;
