import { useEffect } from 'react';

export default function usePageMeta({ title, description }) {
  useEffect(() => {
    if (title) document.title = title;

    let descriptionMeta = document.querySelector('meta[name="description"]');
    if (!descriptionMeta) {
      descriptionMeta = document.createElement('meta');
      descriptionMeta.name = 'description';
      document.head.append(descriptionMeta);
    }
    if (description) descriptionMeta.content = description;
  }, [title, description]);
}
