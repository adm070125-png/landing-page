
import React, { useState } from 'react';

interface HeaderProps {
  name: string;
  bio: string;
  coverPhoto: string;
  profilePhoto: string;
}

const Header: React.FC<HeaderProps> = ({ name, bio, coverPhoto, profilePhoto }) => {
  const [coverError, setCoverError] = useState(false);
  const [profileError, setProfileError] = useState(false);

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: name,
          text: bio,
          url: window.location.href,
        });
      } catch (err) {
        console.log('Error sharing:', err);
      }
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Link copiado para a área de transferência!');
    }
  };

  return (
    <header className="relative w-full text-center pb-6">
      {/* Share Button Overlay */}
      <button 
        onClick={handleShare}
        className="absolute top-4 right-4 z-20 p-2 bg-white/20 backdrop-blur-md rounded-full border border-white/30 text-white hover:bg-white/40 transition-all active:scale-90"
        aria-label="Compartilhar"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path>
          <polyline points="16 6 12 2 8 6"></polyline>
          <line x1="12" y1="2" x2="12" y2="15"></line>
        </svg>
      </button>

      {/* Cover Image */}
      <div className="relative w-full h-[200px] overflow-hidden bg-gray-100">
        {!coverError ? (
          <img 
            src={coverPhoto} 
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
            onError={() => setCoverError(true)}
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
            <span className="text-gray-300 font-bold text-lg tracking-widest opacity-50 uppercase">{name}</span>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-transparent" />
      </div>

      {/* Profile Photo Overlap */}
      <div className="relative -mt-[64px] flex justify-center">
        <div 
          className="w-[128px] h-[128px] rounded-full border-4 border-white shadow-xl overflow-hidden bg-white animate-zoom-in cursor-pointer group hover:shadow-2xl transition-shadow duration-500"
          style={{ animationDelay: '0.2s' }}
        >
          {!profileError ? (
            <img 
              src={profilePhoto} 
              alt={name} 
              className="w-full h-full object-cover animate-profile-settle group-hover:scale-110 transition-transform duration-700 ease-out"
              onError={() => setProfileError(true)}
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gray-50 text-gray-400 text-3xl font-bold">
              {name.charAt(0)}
            </div>
          )}
        </div>
      </div>

      {/* Name and Bio */}
      <div className="mt-4 px-4">
        <h1 className="text-xl font-bold tracking-tight text-black uppercase">
          {name}
        </h1>
        <p className="mt-1 text-sm text-gray-500 font-medium">
          {bio}
        </p>
      </div>
    </header>
  );
};

export default Header;
