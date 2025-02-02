import React from "react";

interface WelcomeModalProps {
  onClose: () => void;
}

const WelcomeModal: React.FC<WelcomeModalProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg text-center w-80">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Bem-vindo ao nosso site!
        </h2>
        <p className="text-gray-600 mb-6">
          É com alegria que recebemos você para compartilhar este momento
          inesquecível conosco. Fique à vontade para explorar e celebrar cada
          detalhe desse dia tão sonhado.
        </p>
        <button
          onClick={onClose}
          className="bg-lemon-dark text-white px-4 py-2 rounded-lg hover:bg-lemon focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          Fechar
        </button>
      </div>
    </div>
  );
};

export default WelcomeModal;
