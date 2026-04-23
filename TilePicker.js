import React from 'react';

const tiles = [
  { id: 1, name: 'Carrara White', url: 'https://example.com/carrara.jpg', type: 'Glossy' },
  { id: 2, name: 'Rustic Grey', url: 'https://example.com/rustic.jpg', type: 'Matte' },
  { id: 3, name: 'Modern Wood', url: 'https://example.com/wood.jpg', type: 'Textured' }
];

const TilePicker = ({ onSelect, currentRepeat, setRepeat }) => {
  return (
    <div className="absolute right-5 top-5 w-64 bg-white/90 backdrop-blur shadow-2xl rounded-xl p-5 font-sans">
      <h2 className="text-xl font-bold mb-4 text-gray-800">Tile Gallery</h2>
      
      <div className="space-y-3 mb-6">
        {tiles.map((tile) => (
          <button
            key={tile.id}
            onClick={() => onSelect(tile.url)}
            className="w-full flex items-center p-2 border rounded-lg hover:bg-blue-50 transition-colors group"
          >
            <div className="w-12 h-12 rounded bg-gray-200 mr-3 overflow-hidden">
                <img src={tile.url} alt={tile.name} className="w-full h-full object-cover" />
            </div>
            <div className="text-left">
              <p className="text-sm font-medium text-gray-700">{tile.name}</p>
              <span className="text-xs text-gray-400">{tile.type}</span>
            </div>
          </button>
        ))}
      </div>

      <div className="border-t pt-4">
        <label className="text-sm font-bold text-gray-700">Tiling Scale (Repeat)</label>
        <input 
          type="range" min="1" max="20" 
          value={currentRepeat} 
          onChange={(e) => setRepeat(parseInt(e.target.value))}
          className="w-full mt-2 cursor-pointer"
        />
        <p className="text-xs text-center text-gray-500 mt-1">{currentRepeat} x {currentRepeat} Grid</p>
      </div>
    </div>
  );
};

export default TilePicker;