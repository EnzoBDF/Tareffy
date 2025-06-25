"use client";

import { ReactNode } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  containerClassName?: string;
}

export default function Modal({ isOpen, onClose, children, containerClassName }: ModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#00000085]">
      <div className={`bg-white rounded-t-[0.8rem] shadow-lg ${containerClassName ?? "p-6 w-[500px]"}`}>
        {children}
      </div>
    </div>
  );
}
