import { useEffect } from 'react';
import AOS from 'aos';

export function useTemplateInit() {
  useEffect(() => {
    AOS.init();
  }, []);
}