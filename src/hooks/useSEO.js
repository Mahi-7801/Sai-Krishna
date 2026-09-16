import { useEffect } from 'react';

export function useSEO({ title, description }) {
  useEffect(() => {
    // Update title
    document.title = title ? `${title} | Sai Krishna Photography` : 'Sai Krishna Photography | 30 Years Legacy';

    // Update meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.name = 'description';
      document.head.appendChild(metaDescription);
    }
    
    metaDescription.content = description || 'Sai Krishna Photography - 30 Years of Capturing Life\'s Most Precious Moments. Premium photography services.';
  }, [title, description]);
}
