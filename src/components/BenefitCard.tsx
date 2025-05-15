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
      <CardHeader className="pb-1 pt-3">
        <div className="flex items-center gap-2">
          <div className="p-1 bg-red-100 rounded-full">
            <Icon name={iconName} className="h-4 w-4 text-[#e32417]" />
          </div>
          <CardTitle className="text-base text-[#e32417]">{title}</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="pb-3">
        <p className="text-xs text-gray-600">{description}</p>
      </CardContent>
    </Card>
  );
};

export default BenefitCard;
