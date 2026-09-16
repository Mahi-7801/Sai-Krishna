import { themePhoto, hideOnError } from '../data/photos';

export default function ServiceGallery({ theme }) {
  const items = [1, 2, 3].map((index) => ({
    src: themePhoto(theme, index),
    aspect: index === 1 ? 'aspect-[4/3] md:aspect-square' : index === 2 ? 'aspect-[3/4] md:aspect-[3/4]' : 'aspect-[4/3]',
    span: index === 2 ? 'md:col-span-1 md:row-span-2' : '',
  }));

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {items.map((item) => (
        <div
          key={item.src}
          className={`relative overflow-hidden group bg-brand-charcoal/30 ${item.aspect} ${item.span} ${item.span ? 'md:h-full' : ''}`}
        >
          <img
            src={item.src}
            alt={`${theme} gallery ${item.src.split('/').pop()}`}
            onError={hideOnError}
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-custom"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-brand-gold/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-custom"></div>
          <div className="absolute inset-0 border border-brand-charcoal group-hover:border-brand-gold/30 transition-colors duration-700"></div>
        </div>
      ))}
    </div>
  );
}