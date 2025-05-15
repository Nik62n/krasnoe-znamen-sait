import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface VacancyCardProps {
  title: string;
  salary: string;
  experience: string;
}

const VacancyCard: React.FC<VacancyCardProps> = ({
  title,
  salary,
  experience,
}) => {
  return (
    <Card className="w-full transition-all duration-300 hover:shadow-lg border-red-200">
      <CardHeader className="pb-2">
        <CardTitle className="text-xl text-[#e32417]">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-2">
          <div className="flex items-center">
            <span className="font-semibold text-lg">{salary}</span>
          </div>
          <Badge variant="outline" className="w-fit bg-red-50">
            Опыт работы: {experience}
          </Badge>
        </div>
      </CardContent>
    </Card>
  );
};

export default VacancyCard;
