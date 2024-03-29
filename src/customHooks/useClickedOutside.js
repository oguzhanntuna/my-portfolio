import { useEffect, useRef, useState } from "react";

export const useClickedOutside = () => {
  const [isClickedOutside, setIsClickedOutside] = useState(false);
  const ref = useRef(null);

  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setIsClickedOutside(true);
    } else {
      setIsClickedOutside(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return { ref, isClickedOutside };
};
