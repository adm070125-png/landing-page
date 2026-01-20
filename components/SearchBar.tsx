
import React from 'react';

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ value, onChange }) => {
  return (
    <div className="w-full px-4 mb-6 sticky top-2 z-30 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
      <div className="relative group">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <svg className="h-5 w-5 text-gray-400 group-focus-within:text-black transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
        <input
          type="text"
          className="block w-full pl-10 pr-3 py-3 border border-gray-100 bg-white/80 backdrop-blur-md rounded-2xl leading-5 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black/5 focus:border-gray-200 transition-all shadow-sm text-sm"
          placeholder="Buscar unidade ou serviço..."
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
        {value && (
          <button 
            onClick={() => onChange('')}
            className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-black"
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        )}
      </div>
    </div>
  );
};

export default SearchBar;
