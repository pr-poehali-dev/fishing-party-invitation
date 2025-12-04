import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-100 via-blue-50 to-cyan-50 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 text-6xl animate-float opacity-20">🐟</div>
        <div className="absolute top-40 right-20 text-5xl animate-wave opacity-20" style={{animationDelay: '1s'}}>🐠</div>
        <div className="absolute bottom-32 left-1/4 text-7xl animate-float opacity-20" style={{animationDelay: '2s'}}>🎣</div>
        <div className="absolute top-1/3 right-1/3 text-5xl animate-wave opacity-20" style={{animationDelay: '0.5s'}}>🐟</div>
      </div>

      <div className="container mx-auto px-4 py-8 relative z-10">
        <header className="text-center py-16 animate-fade-in">
          <div className="mb-8 max-w-3xl mx-auto">
            <img 
              src="https://cdn.poehali.dev/files/811b6337-8bc0-4ee2-97e2-feffc58bc9bf.png" 
              alt="Рыбацкая вечеринка" 
              className="w-full h-auto rounded-3xl shadow-2xl border-4 border-primary"
            />
          </div>
          <div className="mb-8 flex justify-center">
            <img 
              src="https://cdn.poehali.dev/files/14356d82-4e6c-4e94-a874-41c1656f5785.png" 
              alt="Рома" 
              className="w-48 h-48 rounded-full shadow-2xl border-4 border-secondary object-cover"
            />
          </div>
          <div className="inline-block mb-6">
            <Badge className="text-lg px-6 py-2 bg-secondary hover:bg-secondary/90">
              11 лет Роме! 🎉
            </Badge>
          </div>
          <h1 className="text-6xl md:text-8xl font-black text-primary mb-4 drop-shadow-lg">
            РЫБАЦКАЯ
          </h1>
          <h1 className="text-6xl md:text-8xl font-black text-secondary mb-6 drop-shadow-lg">
            ВЕЧЕРИНКА! 🎣
          </h1>
          <p className="text-2xl md:text-3xl text-foreground font-semibold">Приключение с ночёвкой </p>
        </header>

        <div className="max-w-5xl mx-auto space-y-8">
          <Card className="border-4 border-primary shadow-2xl animate-fade-in" style={{animationDelay: '0.2s'}}>
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <Icon name="CalendarDays" size={32} className="text-primary" />
                <h2 className="text-3xl font-bold text-primary">Детали события</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-start gap-4">
                  <Icon name="Calendar" size={28} className="text-secondary mt-1" />
                  <div>
                    <p className="font-semibold text-lg text-foreground/80">Дата</p>
                    <p className="text-2xl font-bold text-foreground">13-14 декабря</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Icon name="Clock" size={28} className="text-secondary mt-1" />
                  <div>
                    <p className="font-semibold text-lg text-foreground/80">Время</p>
                    <p className="text-2xl font-bold text-foreground">С 14:00 субботы до 12:00 воскресенья</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 md:col-span-2">
                  <Icon name="MapPin" size={28} className="text-secondary mt-1" />
                  <div>
                    <p className="font-semibold text-lg text-foreground/80">Место</p>
                    <p className="text-2xl font-bold text-foreground">Клуб рыболовов " Озера Адыгеи"</p>
                    <p className="text-lg text-muted-foreground mt-1">Россия, Республика Адыгея, Теучежский район</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-4 border-secondary shadow-2xl animate-fade-in" style={{animationDelay: '0.4s'}}>
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <Icon name="ListChecks" size={32} className="text-secondary" />
                <h2 className="text-3xl font-bold text-secondary">Программа мероприятия</h2>
              </div>
              <div className="space-y-6">
                <div className="flex gap-4 items-start p-4 bg-sky-50 rounded-2xl border-2 border-primary/20">
                  <div className="text-3xl">🎣</div>
                  <div className="flex-1">
                    <p className="font-bold text-xl text-primary">14:00 - 15:00</p>
                    <p className="text-lg text-foreground">Сбор гостей, знакомство с территорией, размещение в домиках</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start p-4 bg-orange-50 rounded-2xl border-2 border-secondary/20">
                  <div className="text-3xl">🐟</div>
                  <div className="flex-1">
                    <p className="font-bold text-xl text-secondary">15:00 - 18:00</p>
                    <p className="text-lg text-foreground">Мастер-класс по рыбалке и большая рыбалка! Конкурс на самую большую рыбу</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start p-4 bg-sky-50 rounded-2xl border-2 border-primary/20">
                  <div className="text-3xl">🍔</div>
                  <div className="flex-1">
                    <p className="font-bold text-xl text-primary">18:00 - 19:30</p>
                    <p className="text-lg text-foreground">Ужин на свежем воздухе, приготовление улова на костре</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start p-4 bg-orange-50 rounded-2xl border-2 border-secondary/20">
                  <div className="text-3xl">🔥</div>
                  <div className="flex-1">
                    <p className="font-bold text-xl text-secondary">19:30 - 22:00</p>
                    <p className="text-lg text-foreground">Вечер у костра: песни, истории, игры, торт и подарки!</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start p-4 bg-sky-50 rounded-2xl border-2 border-primary/20">
                  <div className="text-3xl">🌅</div>
                  <div className="flex-1">
                    <p className="font-bold text-xl text-primary">07:00 - 09:00</p>
                    <p className="text-lg text-foreground">Утренняя рыбалка на рассвете (для желающих)</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start p-4 bg-orange-50 rounded-2xl border-2 border-secondary/20">
                  <div className="text-3xl">🥞</div>
                  <div className="flex-1">
                    <p className="font-bold text-xl text-secondary">09:00 - 11:00</p>
                    <p className="text-lg text-foreground">Завтрак, награждение победителей, свободное время</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start p-4 bg-sky-50 rounded-2xl border-2 border-primary/20">
                  <div className="text-3xl">👋</div>
                  <div className="flex-1">
                    <p className="font-bold text-xl text-primary">11:00 - 12:00</p>
                    <p className="text-lg text-foreground">Сбор вещей, прощание до новых встреч!</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-4 border-primary shadow-2xl animate-fade-in" style={{animationDelay: '0.6s'}}>
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <Icon name="Backpack" size={32} className="text-primary" />
                <h2 className="text-3xl font-bold text-primary">Что взять с собой</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { icon: "👕", text: "Удобную одежду для активного отдыха" },
                  { icon: "🧥", text: "Тёплую кофту на вечер" },
                  { icon: "👟", text: "Сменную обувь и резиновые сапоги" },
                  { icon: "🧴", text: "Средство от комаров" },
                  { icon: "🎒", text: "Личные вещи для ночёвки" },
                  { icon: "💧", text: "Бутылку с водой" },
                  { icon: "📱", text: "Фонарик или телефон с зарядкой" },
                  { icon: "😊", text: "Хорошее настроение!" }
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3 p-4 bg-gradient-to-r from-sky-50 to-cyan-50 rounded-xl border-2 border-primary/10">
                    <span className="text-3xl">{item.icon}</span>
                    <p className="text-lg font-medium text-foreground">{item.text}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6 p-6 bg-secondary/10 rounded-2xl border-2 border-secondary">
                <p className="text-lg font-semibold text-foreground flex items-center gap-2">
                  <Icon name="Info" size={24} className="text-secondary" />
                  Рыболовные снасти предоставляются организаторами!
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-4 border-secondary shadow-2xl animate-fade-in" style={{animationDelay: '0.8s'}}>
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <Icon name="Map" size={32} className="text-secondary" />
                <h2 className="text-3xl font-bold text-secondary">Как добраться</h2>
              </div>
              <div className="bg-gradient-to-br from-sky-100 to-cyan-100 rounded-2xl p-8 border-2 border-primary/20">
                <div className="aspect-video bg-white rounded-xl shadow-lg overflow-hidden mb-6">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2242.5752469676286!2d37.6173!3d55.7558!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTXCsDQ1JzIwLjkiTiAzN8KwMzcnMDIuMyJF!5e0!3m2!1sru!2sru!4v1234567890"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <Icon name="Car" size={24} className="text-primary mt-1" />
                    <div>
                      <p className="font-bold text-lg text-foreground">На машине:</p>
                      <p className="text-foreground">Россия, Республика Адыгея, Теучежский район</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="Phone" size={24} className="text-secondary mt-1" />
                    <div>
                      <p className="font-bold text-lg text-foreground">Контакты:</p>
                      <p className="text-foreground">+7 (918) 944-74-47 - мама Ромы</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <footer className="text-center py-12 animate-fade-in" style={{animationDelay: '1s'}}>
          <div className="inline-block p-8 bg-gradient-to-r from-primary to-secondary rounded-3xl shadow-2xl">
            <p className="text-3xl md:text-4xl font-black text-white mb-2">
              Ждём всех на вечеринке! 🎉
            </p>
            <p className="text-xl text-white/90">
              Пожалуйста, подтвердите участие до 10 июня
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;