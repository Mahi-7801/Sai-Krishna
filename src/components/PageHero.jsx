import { motion } from 'framer-motion';
import { hideOnError } from '../data/photos';

export default function PageHero({ heading, subheading, description, minHeight = "min-h-[70vh]", image }) {
  return (
    <div className={`relative ${minHeight} bg-brand-dark flex flex-col items-center justify-center overflow-hidden pt-20`}>
      {image && (
        <img 
          src={image}
          alt=""
          aria-hidden="true"
          onError={hideOnError}
          className="absolute inset-0 z-0 w-full h-full object-cover opacity-30"
        />
      )}
      {/* Background Gradient/Overlay */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-brand-charcoal/50 via-brand-dark to-brand-dark opacity-80" />
      
      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.25, 1, 0.5, 1] }}
        >
          <h1 className="text-5xl md:text-7xl font-serif text-brand-ivory font-light tracking-tight mb-6">
            {heading}
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.4, ease: [0.25, 1, 0.5, 1] }}
          className="w-12 h-[1px] bg-brand-gold mx-auto mb-6"
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.6, ease: [0.25, 1, 0.5, 1] }}
        >
          <h2 className="text-brand-gold text-sm tracking-widest font-sans uppercase mb-4">
            {subheading}
          </h2>
          {description && (
            <p className="text-brand-ivory/70 text-base md:text-lg font-sans leading-relaxed max-w-2xl mx-auto">
              {description}
            </p>
          )}
        </motion.div>
      </div>
    </div>
  );
}