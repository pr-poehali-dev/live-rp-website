import { Users, Map, Briefcase, Shield } from "lucide-react";

const FeaturesSection = () => {
  return (
    <section className="py-20 bg-card">
      <div className="container px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-game-accent to-game-light bg-clip-text text-transparent">
            Особенности игры
          </h2>
          <p className="text-gray-300">
            Live RP предлагает уникальный игровой опыт с продвинутой ролевой системой и реалистичной симуляцией жизни
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-game p-6 rounded-lg border border-border/40 hover:border-game-accent/50 transition-all duration-300">
            <div className="flex items-start">
              <div className="bg-game-accent/20 p-3 rounded-lg mr-4">
                <Users className="h-6 w-6 text-game-accent" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-white">Ролевая система</h3>
                <p className="text-gray-300">
                  Проработанная система ролевого отыгрыша с множеством профессий, 
                  социальных взаимодействий и возможностей для развития уникального персонажа.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-game p-6 rounded-lg border border-border/40 hover:border-game-accent/50 transition-all duration-300">
            <div className="flex items-start">
              <div className="bg-game-accent/20 p-3 rounded-lg mr-4">
                <Map className="h-6 w-6 text-game-accent" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-white">Открытый мир</h3>
                <p className="text-gray-300">
                  Огромный и детализированный мир с различными городами, сельской местностью, 
                  уникальными достопримечательностями и динамической погодной системой.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-game p-6 rounded-lg border border-border/40 hover:border-game-accent/50 transition-all duration-300">
            <div className="flex items-start">
              <div className="bg-game-accent/20 p-3 rounded-lg mr-4">
                <Briefcase className="h-6 w-6 text-game-accent" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-white">Экономическая система</h3>
                <p className="text-gray-300">
                  Реалистичная экономика с возможностью открыть собственный бизнес, 
                  торговать на бирже, инвестировать и управлять недвижимостью.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-game p-6 rounded-lg border border-border/40 hover:border-game-accent/50 transition-all duration-300">
            <div className="flex items-start">
              <div className="bg-game-accent/20 p-3 rounded-lg mr-4">
                <Shield className="h-6 w-6 text-game-accent" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-white">Фракции и группировки</h3>
                <p className="text-gray-300">
                  Присоединяйтесь к различным группировкам, от правоохранительных органов до криминальных 
                  синдикатов, или создайте собственную организацию с уникальной иерархией.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
