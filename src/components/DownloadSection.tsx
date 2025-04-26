import { Download, Monitor, Globe, Calendar, Smartphone, Apple } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";

const DownloadSection = () => {
  return (
    <section className="py-20 bg-game" id="download">
      <div className="container px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-game-accent to-game-light bg-clip-text text-transparent">
            Скачать LIVE RP
          </h2>
          <p className="text-gray-300">
            Выберите версию, подходящую для вашей операционной системы. 
            Наслаждайтесь игрой с оптимизированной производительностью и стабильностью.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <Card className="game-card">
            <CardHeader>
              <Monitor className="h-10 w-10 mb-2 text-game-accent" />
              <CardTitle>Windows</CardTitle>
              <CardDescription>Версия 1.2.5</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-center">
                  <span className="mr-2 text-game-accent">✓</span> 
                  DirectX 11/12
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-game-accent">✓</span> 
                  Оптимизированная графика
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-game-accent">✓</span> 
                  Русская локализация
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full gap-2 bg-game-accent hover:bg-game-secondary">
                <Download className="h-4 w-4" />
                Скачать для Windows
              </Button>
            </CardFooter>
          </Card>

          <Card className="game-card">
            <CardHeader>
              <Globe className="h-10 w-10 mb-2 text-game-accent" />
              <CardTitle>Mac OS</CardTitle>
              <CardDescription>Версия 1.2.5</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-center">
                  <span className="mr-2 text-game-accent">✓</span> 
                  Metal API
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-game-accent">✓</span> 
                  Оптимизация для Apple Silicon
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-game-accent">✓</span> 
                  Русская локализация
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full gap-2 bg-game-accent hover:bg-game-secondary">
                <Download className="h-4 w-4" />
                Скачать для Mac
              </Button>
            </CardFooter>
          </Card>

          <Card className="game-card">
            <CardHeader>
              <Calendar className="h-10 w-10 mb-2 text-game-accent" />
              <CardTitle>Обновления</CardTitle>
              <CardDescription>История изменений</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 text-sm">
                <div>
                  <h4 className="font-medium text-game-accent">Версия 1.2.5</h4>
                  <p className="text-gray-300">Улучшения производительности и стабильности</p>
                </div>
                <div>
                  <h4 className="font-medium text-game-accent">Версия 1.2.0</h4>
                  <p className="text-gray-300">Новые транспортные средства и локации</p>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full border-game-accent text-white hover:bg-game-accent/20">
                Полный список изменений
              </Button>
            </CardFooter>
          </Card>
        </div>

        <div className="mt-10 text-center">
          <h3 className="text-2xl font-bold mb-6 text-white">Мобильные платформы</h3>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mt-4">
          <Card className="game-card">
            <CardHeader>
              <Smartphone className="h-10 w-10 mb-2 text-game-accent" />
              <CardTitle>Android</CardTitle>
              <CardDescription>Версия 1.1.8</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-center">
                  <span className="mr-2 text-game-accent">✓</span> 
                  Оптимизация под различные устройства
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-game-accent">✓</span> 
                  Поддержка контроллеров
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-game-accent">✓</span> 
                  Кросс-платформенная синхронизация
                </li>
              </ul>
            </CardContent>
            <CardFooter className="flex flex-col space-y-2">
              <Button className="w-full gap-2 bg-game-accent hover:bg-game-secondary">
                <Download className="h-4 w-4" />
                Скачать APK
              </Button>
              <Button variant="outline" className="w-full border-game-accent text-white hover:bg-game-accent/20">
                Google Play
              </Button>
            </CardFooter>
          </Card>

          <Card className="game-card">
            <CardHeader>
              <Apple className="h-10 w-10 mb-2 text-game-accent" />
              <CardTitle>iOS</CardTitle>
              <CardDescription>Версия 1.1.8</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-center">
                  <span className="mr-2 text-game-accent">✓</span> 
                  Оптимизация для iPhone и iPad
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-game-accent">✓</span> 
                  Поддержка Apple Game Center
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-game-accent">✓</span> 
                  Кросс-платформенная синхронизация
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full gap-2 bg-game-accent hover:bg-game-secondary">
                <Download className="h-4 w-4" />
                App Store
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;
