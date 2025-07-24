import React from "react";
import ReactDOM from "react-dom";
import type { ReactNode } from "react";

interface PopupMenuProps {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
}

const PopupMenu: React.FC<PopupMenuProps> = ({ open, onClose, children }) => {
  if (!open) return null;

  return ReactDOM.createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm transition-opacity animate-fade-in">
      <div
        className="relative bg-[#18181b] rounded-2xl shadow-2xl p-6 min-w-[260px] max-w-[90vw] text-white border border-gray-700 animate-popup"
        role="dialog"
        aria-modal="true"
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-400 hover:text-gray-200 transition-colors text-xl focus:outline-none"
          aria-label="Close menu"
        >
          &times;
        </button>
        {children}
      </div>
      <style>{`
        @keyframes fade-in { from { opacity: 0; } to { opacity: 1; } }
        .animate-fade-in { animation: fade-in 0.2s ease; }
        @keyframes popup { from { transform: scale(0.95); opacity: 0; } to { transform: scale(1); opacity: 1; } }
        .animate-popup { animation: popup 0.18s cubic-bezier(.4,2,.6,1); }
      `}</style>
    </div>,
    document.body
  );
};

export default PopupMenu;
