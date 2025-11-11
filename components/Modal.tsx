
import React, { ReactNode } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50 p-4"
      onClick={onClose}
    >
      <div 
        className="relative bg-gray-900 border border-yellow-500/50 rounded-lg shadow-xl w-full max-w-4xl max-h-[90vh] flex flex-col"
        onClick={e => e.stopPropagation()}
      >
        <div className="flex justify-between items-center p-4 border-b border-gray-700">
          <h3 className="text-2xl font-bold text-yellow-300">{title}</h3>
          <button onClick={onClose} className="text-gray-400 hover:text-white text-3xl">&times;</button>
        </div>
        <div className="p-6 overflow-y-auto text-gray-300">
          {children}
        </div>
        <div className="p-4 border-t border-gray-700 text-right">
            <button 
                onClick={onClose} 
                className="bg-yellow-500 text-black font-bold py-2 px-6 rounded-md hover:bg-yellow-600 transition-colors"
            >
                Close
            </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
