import React from "react";

const viewportThreshold = 0.1
const useIntersectionObserver = ({
   target,
   onIntersect,
   threshold = viewportThreshold,
   rootMargin = "0px"
}) => {
    React.useEffect(() => {
        const observer = new IntersectionObserver(onIntersect, {
            rootMargin,
            threshold
        });
        const current = target.current;
        observer.observe(current);
        return () => {
            observer.unobserve(current);
        };
    });
};

export default useIntersectionObserver;