import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

interface BenefitCardProps {
  title: string;
  description: string;
  iconName: string;
}

const BenefitCard: React.FC<BenefitCardProps> = ({
  title,
  description,
  iconName,
}) => {
  return (
    <Card className="w-full transition-all duration-300 hover:shadow-lg border-red-200">
      <CardHeader className="pb-2">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-red-100 rounded-full">
            <Icon name={iconName} className="h-6 w-6 text-[#e32417]" />
          </div>
          <CardTitle className="text-xl text-[#e32417]">{title}</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600">{description}</p>
      </CardContent>
    </Card>
  );
};

export default BenefitCard;
