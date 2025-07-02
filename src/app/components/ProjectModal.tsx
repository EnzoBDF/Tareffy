"use client";

import ProjectForm from "./ProjectForm";
import Button from "./Button";
export default function ProjectModal({ isOpen, onClose, onSave }: { isOpen: boolean, onClose: () => void, onSave: (data: any) => void }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-[#3333339a] flex items-center justify-center z-50">
      <div className="bg-white rounded-xl p-8 w-[50rem] shadow-lg relative">
        <Button variant="noBg" className="absolute top-4 right-4 text-xl" onClick={onClose} >x</Button>
        
        <ProjectForm onSave={onSave} onClose={onClose} />
      </div>
    </div>
  );
}
