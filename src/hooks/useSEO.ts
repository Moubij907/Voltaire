import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useConfig } from '@/context/ConfigContext';

// Updates document title and meta description per route + niche.
export function useSEO(overrides?: { title?: string; description?: string }) {
  const { seo, business } = useConfig();
  const { pathname } = useLocation();

  useEffect(() => {
    const title = overrides?.title ?? seo.title;
    const description = overrides?.description ?? seo.description;

    document.title = title;
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', description);

    // og tags
    const setOg = (property: string, content: string) => {
      let tag = document.querySelector(`meta[property="${property}"]`);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute('property', property);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    };
    setOg('og:title', title);
    setOg('og:description', description);
    setOg('og:type', 'website');
    setOg('og:image', seo.ogImage);
  }, [pathname, overrides?.title, overrides?.description, seo, business]);

  return { seo };
}
