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
      <CardHeader className="pb-0 pt-2">
        <div className="flex items-center gap-1">
          <div className="p-1 bg-red-100 rounded-full">
            <Icon name={iconName} className="h-3 w-3 text-[#e32417]" />
          </div>
          <CardTitle className="text-sm text-[#e32417]">{title}</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="pb-2 pt-1">
        <p className="text-[10px] text-gray-600 line-clamp-3">{description}</p>
      </CardContent>
    </Card>
  );
};

export default BenefitCard;
