import React from "react";
import BenefitCard from "@/components/BenefitCard";

// Полный массив данных о преимуществах
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
    <section className="py-3 px-4 bg-white">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold text-center mb-2 text-[#e32417]">
          Преимущества работы в ООО "Красное Знамя"
        </h2>
        <p className="text-center text-sm text-gray-600 max-w-2xl mx-auto mb-3">
          Мы создаем все условия для комфортной работы и профессионального
          развития наших сотрудников.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-2">
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
