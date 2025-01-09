import React from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  card: {
    card_id: string;
    card_name: string;
    image_url: string;
    [key: string]: any;
  } | null;
}

export function Modal({ isOpen, onClose, card }: ModalProps) {
  if (!isOpen || !card) return null;

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
      <div className="bg-slate-800 p-1 border-2 border-rose-500 rounded-lg max-w-3xl relative flex flex-col md:flex-row gap-6">
        <div className="flex-shrink-0">
          <img
            src={card.image_url}
            alt={card.card_name}
            className="w-full max-w-xs rounded-md"
          />
        </div>

        <div className="flex flex-col justify-center p-4">
          <h2 className="text-2xl font-bold mb-4">{card.card_name}</h2>
          <p className="text-white-700 mb-2">
            <strong>PKM Set ID:</strong> {card.card_id}
          </p>
          {card.set_name && (
            <p className="text-white-700 mb-2">
              <strong>Set:</strong> {card.set_name}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
