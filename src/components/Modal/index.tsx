import { XMarkIcon } from "@heroicons/react/24/outline";
import { ReactNode } from "react";

interface ModalProps {
  label: string;
  isOpen: boolean;
  children: ReactNode;
  onClose: () => void;
}

export function Modal ({ isOpen, onClose, children, label }: ModalProps){
  if (!isOpen) return null;

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-4 rounded-md w-[600px]">
        <div className="flex items-center justify-between gap-12">

        <span>{label}</span>

        <button className="top-2 right-2 border-none cursor-pointer" onClick={onClose}>
          <XMarkIcon className="text-red-500 hover:bg-gray-200 rounded-md transition-colors w-6 text-end"/>
        </button>

        </div>

        {children}

      </div>
    </div>
  );
}
