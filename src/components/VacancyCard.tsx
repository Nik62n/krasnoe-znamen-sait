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
      <CardHeader className="pb-1 pt-3">
        <CardTitle className="text-base text-[#e32417]">{title}</CardTitle>
      </CardHeader>
      <CardContent className="pb-3">
        <div className="flex flex-col gap-1">
          <div className="flex items-center">
            <span className="font-semibold">{salary}</span>
          </div>
          <Badge variant="outline" className="w-fit bg-red-50 text-xs">
            Опыт работы: {experience}
          </Badge>
        </div>
      </CardContent>
    </Card>
  );
};

export default VacancyCard;
