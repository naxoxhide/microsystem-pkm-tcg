import React, { useEffect, useState } from 'react';
import { type Image } from '../types.d';
import { Modal } from './Modal';
import './card.css';

export function CardsBySetList({ routeParams }: any) {
  const [image, setCards] = useState<Image[]>([]);
  const [selectedCard, setSelectedCard] = useState<Image | null>(null);
  const [isModalOpen, setModalOpen] = useState(false);
  const [filters, setFilters] = useState({ rarity: '', type: '', subtype: '' });

  useEffect(() => {
    const queryParams = new URLSearchParams();

    if (filters.rarity) queryParams.append('rarity', filters.rarity);
    if (filters.type) queryParams.append('type', filters.type);
    if (filters.subtype) queryParams.append('subtype', filters.subtype);

    const url = `http://localhost:3000/card/set/${routeParams.setCode.setId}?${queryParams.toString()}`;
    console.log('Fetching data from:', url); // Debug

    fetch(url)
      .then(async (response) => await response.json())
      .then((data) => setCards(data))
      .catch((err) => console.error(err));
  }, [routeParams.setCode.setId, filters]);

  const handleFilterChange = (filterKey: string, value: string) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [filterKey]: prevFilters[filterKey] === value ? '' : value, // Deselecciona si ya está seleccionado
    }));
  };

  const handleCardClick = (card: Image) => {
    setSelectedCard(card);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedCard(null);
  };

  return (
    <div>
      {/* Filtros */}
      <div className="flex justify-center space-x-4 mb-6">
        <button
          onClick={() => handleFilterChange('rarity', 'Common')}
          className={`px-4 py-2 rounded-md bg-red-400 ${filters.rarity === 'Common' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
        >
          Common
        </button>
        <button
          onClick={() => handleFilterChange('rarity', 'Uncommon')}
          className={`px-4 py-2 rounded-md bg-red-400 ${filters.rarity === 'Uncommon' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
        >
          Uncommon
        </button>
        <button
          onClick={() => handleFilterChange('rarity', 'Rare')}
          className={`px-4 py-2 rounded-md bg-red-400 ${filters.rarity === 'Rare' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
        >
          Rare
        </button>
        <button
          onClick={() => handleFilterChange('rarity', 'Double Rare')}
          className={`px-4 py-2 rounded-md bg-red-400 ${filters.rarity === 'Double Rare' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
        >
          Pokémon EX
        </button>
        <button
          onClick={() => handleFilterChange('rarity', 'Illustration Rare')}
          className={`px-4 py-2 rounded-md bg-red-400 ${filters.rarity === 'Illustration Rare' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
        >
          Special Art
        </button>
        <button
          onClick={() => handleFilterChange('rarity', 'ACE SPEC Rare')}
          className={`px-4 py-2 rounded-md bg-red-400 ${filters.rarity === 'ACE SPEC Rare' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
        >
          ACE SPEC
        </button>
      </div>

      {/* Grid de imágenes */}
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
        {image.map((image) => (
          <img
            key={`${image.card_id}-${image.i_id}`}
            src={image.image_url}
            className="card cursor-pointer"
            onClick={() => handleCardClick(image)}
          />
        ))}
      </div>

      {/* Modal */}
      <Modal isOpen={isModalOpen} onClose={closeModal} card={selectedCard} />
    </div>
  );
}
