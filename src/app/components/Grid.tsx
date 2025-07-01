import React from "react";

interface GridProps {
  children: React.ReactNode;
  columns?: number;  // Número de colunas (ex: 1 a 6)
  rows?: number;      // Número de linhas (opcional)
  gap?: string;       // Ex: 'gap-4'
  className?: string;
}

export default function Grid({
  children,
  columns = 3,
  rows,
  gap = "gap-4",
  className = "",
}: GridProps) {
  const columnClass = {
    1: "md:grid-cols-1",
    2: "md:grid-cols-2",
    3: "md:grid-cols-3",
    4: "md:grid-cols-4",
    5: "md:grid-cols-5",
    6: "md:grid-cols-6",
  }[columns] || "md:grid-cols-3";

  const rowClass = rows
    ? {
        1: "grid-rows-1",
        2: "grid-rows-2",
        3: "grid-rows-3",
        4: "grid-rows-4",
        5: "grid-rows-5",
        6: "grid-rows-6",
      }[rows] || ""
    : "";

  return (
    <div className={`grid grid-cols-1 sm:grid-cols-2 ${columnClass} ${gap} ${rowClass} ${className} justify-items-center`}>
      {children}
    </div>
  );
}
