import React from "react";

const stats = [
  {
    label: "Total Users",
    value: "24K",
    bgColor: "bg-white",
    icon: <i className="bi bi-people-fill text-lg text-white"></i>,
    iconBgColor: "bg-[#4D12B9]",
  },
  {
    label: "Online",
    value: "82K",
    bgColor: "bg-white",
    icon: <i className="bi bi-globe-americas text-lg text-white"></i>,
    iconBgColor: "bg-green-400",
  },
  {
    label: "Service Reqst",
    value: "200",
    bgColor: "bg-white",
    icon: <i className="bi bi-telephone-inbound-fill text-lg text-white"></i>,
    iconBgColor: "bg-yellow-400",
  },
  {
    label: "Lead Reqst",
    value: "89",
    bgColor: "bg-white",
    icon: <i className="bi bi-briefcase-fill text-lg text-white"></i>,
    iconBgColor: "bg-blue-400",
  },
  {
    label: "Active Service",
    value: "89",
    bgColor: "bg-white",
    icon: <i className="bi bi-patch-check-fill text-lg text-white"></i>,
    iconBgColor: "bg-green-600",
  },
  {
    label: "Complaints",
    value: "89",
    bgColor: "bg-white",
    icon: (
      <i className="bi bi-exclamation-triangle-fill text-lg text-white"></i>
    ),
    iconBgColor: "bg-red-600",
  },
];

function UserStats() {
  return (
    <div className="flex flex-wrap mb-2 justify-between gap-0">
      {stats.map((stat, index) => (
        <div
          key={index}
          className={`${stat.bgColor} p-4 rounded-2xl text-left flex items-center mb-4 w-full sm:w-[48%] md:w-[30%] xl:w-[16%]`}
        >
          <div className={`${stat.iconBgColor} rounded-full py-2 px-3 mr-3`}>
            <span className="text-lg">{stat.icon}</span>
          </div>
          <div>
            <div className="text-lg font-bold">{stat.value}</div>
            <div className="text-gray-600 text-sm">{stat.label}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default UserStats;
