import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const Events: React.FC = () => {
  return (
    <section className="py-12 px-4 bg-white">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl font-bold text-center mb-8 text-[#e32417]">
          События
        </h2>

        <Card className="overflow-hidden mb-8">
          <div className="aspect-w-16 aspect-h-9 relative">
            <img
              src="https://www.kznamya.ru/media/news_img/34_1_NYNlQOp.jpg"
              alt="Мотопробег в Рязани"
              className="object-cover w-full"
            />
          </div>
          <CardContent className="p-6">
            <h3 className="text-xl font-bold mb-4 text-[#e32417]">
              Мотопробег в честь 80-летия Победы
            </h3>
            <div className="prose max-w-none">
              <p>
                В знаменательную дату 9 мая 2025 года в Рязани прошёл
                мотопробег, посвящённый 80-летию Победы. В этом году участниками
                мотопробега стало более 50 единиц техники.
              </p>
              <p>
                «Участвую во всех памятных и патриотических акциях, которые
                проводятся среди любителей мотоспорта. Для меня это возможность
                выразить свое уважение к подвигу поколения Победителей, –
                делится молодой работник завода «Красное знамя» Денис.
              </p>
            </div>
            <div className="text-sm text-gray-500 mt-4">
              Дата: 9 мая 2025 года
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Events;
