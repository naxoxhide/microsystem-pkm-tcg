import React from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  card: {
    card_id: string;
    card_name: string;
    image_url: string;
    [key: string]: any; // Puedes extender para incluir otros campos de la carta
  } | null;
}

export function Modal({ isOpen, onClose, card }: ModalProps) {
  if (!isOpen || !card) return null;

  // Maneja el clic fuera del contenido
  const handleOutsideClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if ((event.target as HTMLElement).id === 'modal-container') {
      onClose();
    }
  };

  return (
    <div
      id="modal-container"
      onClick={handleOutsideClick}
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
    >
      <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-1 rounded-lg max-w-3xl relative flex flex-col md:flex-row gap-6">
        {/* Imagen de la carta */}
        <div className="flex-shrink-0">
          <img
            src={card.image_url}
            alt={card.card_name}
            className="w-full max-w-xs rounded-md"
          />
        </div>

        {/* Información de la carta */}
        <div className="flex flex-col justify-center">
          <h2 className="text-2xl font-bold mb-4">{card.card_name}</h2>
          <p className="text-gray-700 mb-2">
            <strong>ID:</strong> {card.card_id}
          </p>
          {/* Aquí puedes añadir más información de la carta */}
          {card.set_name && (
            <p className="text-gray-700 mb-2">
              <strong>Set:</strong> {card.set_name}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
