import React from "react";
import { CardTitle } from "../ui/card";
import { useLocation } from "react-router-dom";
interface KPIDashboardProps {
  assignmentCompleted?: boolean;
}

const KPIDashboard: React.FC<KPIDashboardProps> = () => {
  const location = useLocation();

  const kpiData = [
    {
      id: 1,
      value: "-",
      description: "Projects Published",
    },
    {
      id: 2,
      value: "-",
      description: "Cadence Engagement",
    },
    {
      id: 3,
      value: "-",
      description: "Actions Executed",
    },
  ];

  return (
    <div className="space-y-6">
      <CardTitle>
        <h4 className="typography-h4 mb-12">Company KPIS</h4>
      </CardTitle>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {kpiData.map((kpi) => (
          <div key={kpi.id} className="flex flex-col">
            <div className="mb-6 border-b border-gray-300"></div>
            <div className="flex flex-col">
              <span className="mb-4 font-bold text-3xl">
                {location.pathname === "/dashboard" ? kpi.value : "Val"}
              </span>
              <span className="text-sm text-gray-500">{kpi.description}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default KPIDashboard;
