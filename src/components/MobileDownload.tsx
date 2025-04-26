import { useState } from "react";
import { QrCode, Download, Check, Smartphone, Apple, Chrome, Share2 } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/components/ui/use-toast";

const MobileDownload = () => {
  const { toast } = useToast();
  const [downloadStarted, setDownloadStarted] = useState(false);
  const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
  const isAndroid = /Android/.test(navigator.userAgent);

  const handleDirectDownload = (platform: string) => {
    setDownloadStarted(true);
    
    // Simulate download starting
    toast({
      title: "Загрузка началась",
      description: `LIVE RP для ${platform} скачивается. Установите после завершения загрузки.`,
      variant: "default",
    });
    
    // Reset state after 3 seconds
    setTimeout(() => {
      setDownloadStarted(false);
    }, 3000);
  };

  const handleShareLink = () => {
    // Simulate share functionality
    if (navigator.share) {
      navigator.share({
        title: 'Скачать LIVE RP',
        text: 'Скачай LIVE RP - лучшую ролевую игру!',
        url: window.location.href,
      })
      .then(() => {
        toast({
          title: "Ссылка отправлена",
          description: "Теперь вы можете скачать игру на любом устройстве",
          variant: "default",
        });
      })
      .catch((error) => console.log('Error sharing', error));
    } else {
      // Fallback for browsers that don't support Web Share API
      navigator.clipboard.writeText(window.location.href);
      toast({
        title: "Ссылка скопирована",
        description: "Ссылка для скачивания скопирована в буфер обмена",
        variant: "default",
      });
    }
  };

  return (
    <section className="py-16 bg-black/30 backdrop-blur-sm rounded-lg border border-game-accent/20">
      <div className="container px-4">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-game-accent to-game-light bg-clip-text text-transparent">
            Скачать LIVE RP на мобильное устройство
          </h2>
          <p className="text-gray-300">
            Установите LIVE RP прямо на ваш смартфон и играйте где угодно
          </p>
        </div>

        <Tabs defaultValue={isIOS ? "ios" : (isAndroid ? "android" : "android")} className="max-w-4xl mx-auto">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">
            <TabsTrigger value="android" className="text-sm">
              <Smartphone className="mr-2 h-4 w-4" />
              Android
            </TabsTrigger>
            <TabsTrigger value="ios" className="text-sm">
              <Apple className="mr-2 h-4 w-4" />
              iOS
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="android">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <Card className="game-card border-game-accent/30">
                  <CardHeader>
                    <CardTitle className="flex items-center text-xl">
                      <Smartphone className="h-5 w-5 mr-2 text-game-accent" />
                      Прямая загрузка APK
                    </CardTitle>
                    <CardDescription>
                      Скачайте APK файл напрямую с нашего сервера
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-gray-300">
                      <li className="flex items-center">
                        <Check className="h-4 w-4 mr-2 text-game-accent" />
                        Размер файла: 78 МБ
                      </li>
                      <li className="flex items-center">
                        <Check className="h-4 w-4 mr-2 text-game-accent" />
                        Версия: 1.2.5 (последняя)
                      </li>
                      <li className="flex items-center">
                        <Check className="h-4 w-4 mr-2 text-game-accent" />
                        Для Android 8.0 и выше
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter className="flex flex-col gap-3">
                    <Button 
                      className="w-full gap-2 bg-game-accent hover:bg-game-secondary flex items-center justify-center"
                      onClick={() => handleDirectDownload("Android")}
                      disabled={downloadStarted}
                    >
                      {downloadStarted ? (
                        <>Загрузка...</>
                      ) : (
                        <>
                          <Download className="h-4 w-4" />
                          Скачать APK файл
                        </>
                      )}
                    </Button>
                    
                    <Button 
                      variant="outline" 
                      className="w-full border-game-accent/50 text-white hover:bg-game-accent/20"
                      onClick={handleShareLink}
                    >
                      <Share2 className="h-4 w-4 mr-2" />
                      Отправить ссылку на телефон
                    </Button>
                  </CardFooter>
                </Card>
              </div>
              
              <div className="text-center">
                <div className="bg-white p-4 rounded-lg inline-block mb-4">
                  <QrCode className="h-48 w-48 text-black mx-auto" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Сканируйте QR-код</h3>
                <p className="text-gray-300 mb-4">
                  Отсканируйте код камерой телефона, чтобы перейти на страницу загрузки
                </p>
                <Button variant="secondary" className="mx-auto">
                  <Chrome className="h-4 w-4 mr-2" />
                  Открыть в Google Play
                </Button>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="ios">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <Card className="game-card border-game-accent/30">
                  <CardHeader>
                    <CardTitle className="flex items-center text-xl">
                      <Apple className="h-5 w-5 mr-2 text-game-accent" />
                      Установка на iOS
                    </CardTitle>
                    <CardDescription>
                      Установите LIVE RP на устройства Apple
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-gray-300">
                      <li className="flex items-center">
                        <Check className="h-4 w-4 mr-2 text-game-accent" />
                        Размер приложения: 92 МБ
                      </li>
                      <li className="flex items-center">
                        <Check className="h-4 w-4 mr-2 text-game-accent" />
                        Версия: 1.2.5 (последняя)
                      </li>
                      <li className="flex items-center">
                        <Check className="h-4 w-4 mr-2 text-game-accent" />
                        Для iOS 13.0 и выше
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter className="flex flex-col gap-3">
                    <Button 
                      className="w-full gap-2 bg-game-accent hover:bg-game-secondary flex items-center justify-center"
                      onClick={() => handleDirectDownload("iOS")}
                      disabled={downloadStarted}
                    >
                      {downloadStarted ? (
                        <>Загрузка...</>
                      ) : (
                        <>
                          <Download className="h-4 w-4" />
                          Скачать TestFlight Beta
                        </>
                      )}
                    </Button>
                    
                    <Button 
                      variant="outline" 
                      className="w-full border-game-accent/50 text-white hover:bg-game-accent/20"
                      onClick={handleShareLink}
                    >
                      <Share2 className="h-4 w-4 mr-2" />
                      Отправить ссылку на телефон
                    </Button>
                  </CardFooter>
                </Card>
              </div>
              
              <div className="text-center">
                <div className="bg-white p-4 rounded-lg inline-block mb-4">
                  <QrCode className="h-48 w-48 text-black mx-auto" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Сканируйте QR-код</h3>
                <p className="text-gray-300 mb-4">
                  Отсканируйте код камерой iPhone, чтобы перейти в App Store
                </p>
                <Button variant="secondary" className="mx-auto">
                  <Apple className="h-4 w-4 mr-2" />
                  Открыть в App Store
                </Button>
              </div>
            </div>
          </TabsContent>
        </Tabs>
        
        <div className="mt-12 text-center">
          <p className="text-sm text-gray-400 max-w-xl mx-auto">
            * Для установки APK файла на Android необходимо разрешить установку из неизвестных источников в настройках безопасности вашего устройства.
            На iOS для установки TestFlight Beta потребуется установить приложение TestFlight из App Store.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MobileDownload;