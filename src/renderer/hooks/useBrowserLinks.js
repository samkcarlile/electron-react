import { useEffect, useRef } from 'react';
import { shell } from 'electron';

const openLink = (e, url) => {
  e.preventDefault();
  shell.openExternal(url);
};

/** Attaches click listeners to all anchor elements within a parent element
 * to intercept clicks and open links in the default external browser rather
 * than in the Electron wrapper.
 *
 * @returns a `ref` to be set on the parent element
 */
export default function useExternalLinks() {
  const root = useRef(null);

  useEffect(() => {
    const anchorElements = root.current.querySelectorAll('a[href^=http]');
    anchorElements.forEach(element => {
      element.addEventListener('click', e => openLink(e, element.href), true);
    });

    return () => {
      anchorElements.forEach(element => {
        element.removeEventListener(
          'click',
          e => openLink(e, element.href),
          true
        );
      });
    };
  }, [root]);

  return root;
}
