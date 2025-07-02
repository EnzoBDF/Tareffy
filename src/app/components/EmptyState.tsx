"use client";

import { ReactNode } from "react";

interface EmptyStateProps {
  title: string;
  description?: ReactNode;
  children?: ReactNode;
}

export default function EmptyState({ title, description, children }: EmptyStateProps) {
  return (
    <div className="text-center text-black mt-40 flex flex-col items-center justify-center gap-2">
      <p className="text-lg font-semibold">{title}</p>
      {description && <div className="text-sm text-gray-600">{description}</div>}
      {children}
    </div>
  );
}
