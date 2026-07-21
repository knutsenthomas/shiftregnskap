import React, { useState } from 'react';
import { useContent } from '@/contexts/ContentContext';

export const EditableImage = ({ 
  pageKey, 
  fieldKey, 
  defaultSrc = '', 
  alt = '', 
  className = '' 
}) => {
  const { isEditMode, content, updateContent } = useContent();
  const currentSrc = content?.[pageKey]?.[fieldKey] || defaultSrc;
  const [showModal, setShowModal] = useState(false);
  const [inputUrl, setInputUrl] = useState(currentSrc);

  const handleSave = (e) => {
    e.preventDefault();
    if (inputUrl.trim()) {
      updateContent(pageKey, fieldKey, inputUrl.trim());
    }
    setShowModal(false);
  };

  const presetImages = [
    { title: 'Kontor 1', url: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80' },
    { title: 'Kontor 2', url: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1200&q=80' },
    { title: 'Møterom', url: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1200&q=80' },
    { title: 'Regnskapsfører', url: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1200&q=80' },
    { title: 'Team', url: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80' },
    { title: 'Teknologi', url: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=80' }
  ];

  if (!isEditMode) {
    return <img src={currentSrc} alt={alt} className={className} />;
  }

  return (
    <div className="relative group/img-edit inline-block w-full h-full">
      <img src={currentSrc} alt={alt} className={`${className} ring-4 ring-primary/40`} />
      <button 
        type="button"
        onClick={() => { setInputUrl(currentSrc); setShowModal(true); }}
        className="absolute inset-0 bg-primary/60 backdrop-blur-xs text-white font-bold text-sm flex items-center justify-center opacity-0 group-hover/img-edit:opacity-100 transition-opacity z-20 rounded-xl cursor-pointer"
      >
        <span className="material-symbols-outlined mr-2">edit</span> Endre bilde
      </button>

      {showModal && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl p-6 max-w-lg w-full shadow-2xl text-on-surface">
            <h3 className="font-bold text-xl text-primary mb-4 flex items-center justify-between">
              <span>Endre Bilde URL</span>
              <button onClick={() => setShowModal(false)} className="text-on-surface-variant hover:text-primary">
                <span className="material-symbols-outlined">close</span>
              </button>
            </h3>

            <form onSubmit={handleSave} className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase mb-1">Bilde URL</label>
                <input 
                  type="text" 
                  value={inputUrl}
                  onChange={(e) => setInputUrl(e.target.value)}
                  className="w-full bg-surface-low border border-surface-highest rounded-xl p-3 text-sm focus:outline-none focus:border-primary"
                  placeholder="https://..."
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase mb-2">Velg eksempelbilde</label>
                <div className="grid grid-cols-3 gap-2">
                  {presetImages.map((p, idx) => (
                    <button 
                      key={idx}
                      type="button"
                      onClick={() => setInputUrl(p.url)}
                      className="group/p border border-surface-highest rounded-lg overflow-hidden text-left hover:border-primary transition-all"
                    >
                      <img src={p.url} alt={p.title} className="w-full h-16 object-cover" />
                      <span className="block text-[10px] p-1 truncate font-semibold text-center">{p.title}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex gap-3 pt-2">
                <button 
                  type="button" 
                  onClick={() => setShowModal(false)}
                  className="flex-1 bg-surface-low text-on-surface py-3 rounded-xl font-bold hover:bg-surface-highest"
                >
                  Avbryt
                </button>
                <button 
                  type="submit" 
                  className="flex-1 bg-primary text-white py-3 rounded-xl font-bold hover:bg-primary-dark shadow-md"
                >
                  Lagre bilde
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
