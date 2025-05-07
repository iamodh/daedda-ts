import { RefObject, useEffect, useRef } from "react";

const useIntersectionObserver = (
  onIntersect: () => void
): RefObject<HTMLDivElement | null> => {
  const observerRef = useRef<IntersectionObserver | null>(null);
  const targetRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!targetRef.current) return;
    if (observerRef.current) observerRef.current.disconnect();

    observerRef.current = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          onIntersect();
        }
      },
      { threshold: 1.0 }
    );

    observerRef.current.observe(targetRef.current);
    return () => observerRef.current?.disconnect();
  }, [onIntersect]);

  return targetRef;
};

export default useIntersectionObserver;
