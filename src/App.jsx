import React from 'react';
import MagicGreeting from './components/MagicGreeting';
import MemoryGallery from './components/MemoryGallery';

function App() {
  return (
    <div className="bg-brand-cream">
      <MagicGreeting />
      <MemoryGallery />
      
      {/* Footer */}
      <footer className="py-12 bg-brand-cream border-t border-brand-lavender/30 text-center">
        <p className="text-brand-purple/60 text-sm font-medium">
          Made with Magic and Love • 2026
        </p>
      </footer>
    </div>
  );
}

export default App;
