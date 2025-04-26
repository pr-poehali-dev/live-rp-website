import GameNavbar from "@/components/GameNavbar";
import GameFooter from "@/components/GameFooter";
import DownloadSection from "@/components/DownloadSection";
import MobileDownload from "@/components/MobileDownload";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { Download, Monitor, Smartphone, ServerCrash } from "lucide-react";

const DownloadPage = () => {
  const { toast } = useToast();

  const handleDownloadClick = () => {
    toast({
      title: "Загрузка началась",
      description: "Файл установки LIVE RP скачивается. Следуйте инструкциям по установке после завершения.",
    });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <GameNavbar />
      
      <main className="pt-24 pb-16">
        <div className="container px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-game-accent to-game-light bg-clip-text text-transparent">
              Скачать LIVE RP
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Выберите платформу и начните свое приключение в мире ролевой игры уже сегодня
            </p>
          </div>
          
          <Tabs defaultValue="pc" className="max-w-5xl mx-auto">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-12">
              <TabsTrigger value="pc" className="text-lg py-3">
                <Monitor className="mr-2 h-5 w-5" />
                ПК
              </TabsTrigger>
              <TabsTrigger value="mobile" className="text-lg py-3">
                <Smartphone className="mr-2 h-5 w-5" />
                Мобильные
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="pc">
              <DownloadSection />
              
              <div className="mt-16 bg-black/30 backdrop-blur-sm rounded-lg border border-game-accent/20 p-8">
                <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-game-accent to-game-light bg-clip-text text-transparent">
                  Системные требования
                </h2>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-bold mb-4 text-white">Минимальные</h3>
                    <ul className="space-y-4 text-gray-300">
                      <li className="flex">
                        <span className="font-medium text-gray-400 w-28">ОС:</span>
                        <span>Windows 10 64-bit</span>
                      </li>
                      <li className="flex">
                        <span className="font-medium text-gray-400 w-28">Процессор:</span>
                        <span>Intel Core i5-4460 / AMD Ryzen 3 1200</span>
                      </li>
                      <li className="flex">
                        <span className="font-medium text-gray-400 w-28">Память:</span>
                        <span>8 GB ОЗУ</span>
                      </li>
                      <li className="flex">
                        <span className="font-medium text-gray-400 w-28">Видеокарта:</span>
                        <span>NVIDIA GeForce GTX 960 / AMD Radeon RX 470 (2GB VRAM)</span>
                      </li>
                      <li className="flex">
                        <span className="font-medium text-gray-400 w-28">Диск:</span>
                        <span>50 GB свободного места (SSD рекомендуется)</span>
                      </li>
                      <li className="flex">
                        <span className="font-medium text-gray-400 w-28">Интернет:</span>
                        <span>Широкополосное подключение</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold mb-4 text-white">Рекомендуемые</h3>
                    <ul className="space-y-4 text-gray-300">
                      <li className="flex">
                        <span className="font-medium text-gray-400 w-28">ОС:</span>
                        <span>Windows 10/11 64-bit</span>
                      </li>
                      <li className="flex">
                        <span className="font-medium text-gray-400 w-28">Процессор:</span>
                        <span>Intel Core i7-8700K / AMD Ryzen 5 3600</span>
                      </li>
                      <li className="flex">
                        <span className="font-medium text-gray-400 w-28">Память:</span>
                        <span>16 GB ОЗУ</span>
                      </li>
                      <li className="flex">
                        <span className="font-medium text-gray-400 w-28">Видеокарта:</span>
                        <span>NVIDIA GeForce RTX 2060 / AMD Radeon RX 5700 (6GB VRAM)</span>
                      </li>
                      <li className="flex">
                        <span className="font-medium text-gray-400 w-28">Диск:</span>
                        <span>50 GB свободного места (SSD)</span>
                      </li>
                      <li className="flex">
                        <span className="font-medium text-gray-400 w-28">Интернет:</span>
                        <span>Высокоскоростное подключение</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="mt-8 flex justify-center">
                  <Button className="bg-game-accent hover:bg-game-secondary" size="lg" onClick={handleDownloadClick}>
                    <Download className="mr-2 h-5 w-5" />
                    Скачать для Windows (2.4 GB)
                  </Button>
                </div>
                
                <div className="mt-4 text-center">
                  <a href="#" className="text-game-accent hover:underline">
                    Также доступно для: Mac OS X, Linux
                  </a>
                </div>
              </div>
              
              <div className="mt-16 text-center">
                <h2 className="text-2xl font-bold mb-6">Нужна помощь?</h2>
                <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                  Если у вас возникли проблемы при установке или запуске игры, посетите нашу страницу поддержки
                  или обратитесь к сообществу на форуме.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button variant="outline" className="border-game-accent/30 hover:bg-game-accent/10">
                    Центр поддержки
                  </Button>
                  <Button variant="outline" className="border-game-accent/30 hover:bg-game-accent/10">
                    Инструкция по установке
                  </Button>
                  <Button variant="outline" className="border-game-accent/30 hover:bg-game-accent/10">
                    <ServerCrash className="mr-2 h-4 w-4" />
                    Сообщить об ошибке
                  </Button>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="mobile">
              <MobileDownload />
              
              <div className="mt-16 bg-black/30 backdrop-blur-sm rounded-lg border border-game-accent/20 p-8">
                <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-game-accent to-game-light bg-clip-text text-transparent">
                  Системные требования для мобильных устройств
                </h2>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-bold mb-4 text-white">Android</h3>
                    <ul className="space-y-4 text-gray-300">
                      <li className="flex">
                        <span className="font-medium text-gray-400 w-28">ОС:</span>
                        <span>Android 8.0 и выше</span>
                      </li>
                      <li className="flex">
                        <span className="font-medium text-gray-400 w-28">Процессор:</span>
                        <span>Snapdragon 730 или выше / Exynos 9820 или выше</span>
                      </li>
                      <li className="flex">
                        <span className="font-medium text-gray-400 w-28">Память:</span>
                        <span>4 GB ОЗУ или больше</span>
                      </li>
                      <li className="flex">
                        <span className="font-medium text-gray-400 w-28">Графика:</span>
                        <span>Adreno 618 / Mali-G76 MP12 или лучше</span>
                      </li>
                      <li className="flex">
                        <span className="font-medium text-gray-400 w-28">Хранилище:</span>
                        <span>1.5 GB свободного места</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold mb-4 text-white">iOS</h3>
                    <ul className="space-y-4 text-gray-300">
                      <li className="flex">
                        <span className="font-medium text-gray-400 w-28">ОС:</span>
                        <span>iOS 13.0 и выше</span>
                      </li>
                      <li className="flex">
                        <span className="font-medium text-gray-400 w-28">Устройства:</span>
                        <span>iPhone X или новее / iPad 7-го поколения или новее</span>
                      </li>
                      <li className="flex">
                        <span className="font-medium text-gray-400 w-28">Процессор:</span>
                        <span>A11 Bionic или новее</span>
                      </li>
                      <li className="flex">
                        <span className="font-medium text-gray-400 w-28">Память:</span>
                        <span>3 GB ОЗУ или больше</span>
                      </li>
                      <li className="flex">
                        <span className="font-medium text-gray-400 w-28">Хранилище:</span>
                        <span>1.8 GB свободного места</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="mt-6 px-4 py-3 bg-amber-900/30 border border-amber-500/30 rounded text-amber-200 text-sm">
                  <p className="font-medium">Примечание:</p>
                  <p>Мобильная версия LIVE RP находится в бета-тестировании. Возможны некоторые ограничения в функциональности по сравнению с версией для ПК.</p>
                </div>
              </div>
              
              <div className="mt-16 text-center">
                <h2 className="text-2xl font-bold mb-6">Часто задаваемые вопросы</h2>
                <div className="max-w-3xl mx-auto text-left">
                  <div className="mb-6">
                    <h3 className="text-lg font-medium mb-2">Могу ли я играть на одном аккаунте с разных устройств?</h3>
                    <p className="text-gray-300">Да, ваш прогресс синхронизируется между всеми устройствами. Просто войдите в свой аккаунт LIVE RP.</p>
                  </div>
                  <div className="mb-6">
                    <h3 className="text-lg font-medium mb-2">Совместима ли мобильная версия игры с Bluetooth-контроллерами?</h3>
                    <p className="text-gray-300">Да, игра поддерживает большинство популярных Bluetooth-контроллеров как на Android, так и на iOS.</p>
                  </div>
                  <div className="mb-6">
                    <h3 className="text-lg font-medium mb-2">Нужна ли постоянная интернет-связь для игры?</h3>
                    <p className="text-gray-300">Да, LIVE RP требует постоянного интернет-соединения, так как это многопользовательская ролевая игра.</p>
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