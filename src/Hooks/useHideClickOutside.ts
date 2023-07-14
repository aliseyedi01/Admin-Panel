import { useEffect, useRef, RefObject } from "react";

function useHideClickOutside<T extends HTMLElement>(ref: RefObject<T>, handler: () => void): void {
  useEffect(() => {
    const listener = (event: MouseEvent) => {
      if (!ref.current || ref.current.contains(event.target as Node)) {
        return;
      }
      handler();
    };
    document.addEventListener("mousedown", listener);
    return () => {
      document.removeEventListener("mousedown", listener);
    };
  }, [ref, handler]);
}

export default useHideClickOutside;
