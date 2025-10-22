import React from "react";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "../ui/card"
import type { Service } from "../../types";
import Link from "next/link";

interface ServiceCardProps {
  service: Service;
  onClick?: () => void;
}

const statusColorMap: Record<Service["status"], string> = {
  operational: "bg-status-operational",
  degraded: "bg-status-degraded",
  outage: "bg-status-outage",
};

function ServiceCardComponent({ service, onClick }: ServiceCardProps) {
  return (
    <Link href={`/service/${service.id}`} className="block hover:bg-gray-50">
      <Card
        className="mt-2 mb-2 cursor-pointer hover:border-primary transition-colors"
        onClick={onClick}
      >
        <CardContent className="flex justify-between items-center px-4 py-1.5">
          <CardTitle className="text-primary font-semibold text-base">
            {service.name}
          </CardTitle>
            <div className={`rounded-xl px-1 py-1 w-[13%] text-center text-white ${statusColorMap[service.status]}`}>
              <p className="text-sm truncate hidden sm:block">
                {service.status}
              </p>
            </div>
        </CardContent>
      </Card>
    </Link>
  );
}

export default React.memo(ServiceCardComponent);
