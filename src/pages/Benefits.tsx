import React from "react";
import BenefitCard from "@/components/BenefitCard";

// Массив данных о преимуществах
const benefits = [
  {
    id: 1,
    title: "Стабильность и уверенность",
    description:
      "Многолетняя история и репутация предприятия гарантируют долгосрочное трудоустройство и уверенность в завтрашнем дне.",
    iconName: "Shield",
  },
  {
    id: 2,
    title: "Социальные гарантии",
    description:
      "Полный социальный пакет, включающий медицинское страхование, оплачиваемый отпуск и больничный, а также пенсионные отчисления.",
    iconName: "Heart",
  },
  {
    id: 3,
    title: "Профессиональный рост",
    description:
      "Регулярное обучение, курсы повышения квалификации и возможности карьерного роста внутри предприятия.",
    iconName: "GraduationCap",
  },
  {
    id: 4,
    title: "Комфортные условия труда",
    description:
      "Современное оборудование, соблюдение всех норм безопасности и санитарно-гигиенических требований на рабочих местах.",
    iconName: "Coffee",
  },
  {
    id: 5,
    title: "Корпоративная культура",
    description:
      "Дружный коллектив, корпоративные мероприятия, спортивные соревнования и праздники для работников и их семей.",
    iconName: "Users",
  },
  {
    id: 6,
    title: "Конкурентная оплата труда",
    description:
      "Своевременная выплата заработной платы, система премирования и материального поощрения за профессиональные достижения.",
    iconName: "Wallet",
  },
];

const Benefits: React.FC = () => {
  return (
    <section className="py-12 px-4 bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8 text-[#e32417]">
          Преимущества работы в ООО "Красное Знамя"
        </h2>
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-10">
          Мы создаем все условия для комфортной работы и профессионального
          развития наших сотрудников. Вот почему быть частью команды ООО
          "Красное Знамя" — это выгодно и престижно.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {benefits.map((benefit) => (
            <BenefitCard
              key={benefit.id}
              title={benefit.title}
              description={benefit.description}
              iconName={benefit.iconName}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
