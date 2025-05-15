import React from "react";
import BenefitCard from "@/components/BenefitCard";

// Сокращенный массив данных о преимуществах (до 3 элементов)
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-3">
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
