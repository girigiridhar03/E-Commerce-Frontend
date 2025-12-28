import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ChartSpline,
  CircleDollarSign,
  ClipboardClock,
  PackageCheck,
} from "lucide-react";
import React from "react";

const cardInfo = [
  {
    title: "Total Orders",
    icon: ChartSpline,
    count: "150",
  },
  {
    title: "Pending Orders",
    icon: ClipboardClock,
    count: "50",
  },
  {
    title: "Delivered Orders",
    icon: PackageCheck,
    count: "100",
  },
  {
    title: "Revenue",
    icon: CircleDollarSign,
    count: "12,000",
  },
];

const InfoCards = () => {
  return (
    <div className="grid grid-cols-4 gap-3">
      {cardInfo.map((item) => (
        <Card key={item.title}>
          <CardHeader className="flex justify-between">
            <CardTitle className="text-muted-foreground">
              {item.title}
            </CardTitle>
            <item.icon className="text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold" >{item.count}</div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default InfoCards;
