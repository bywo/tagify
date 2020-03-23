import { useMediaQuery } from "react-responsive";

export const isDesktop = useMediaQuery({
  query: "(min-width: 1024px)",
});
export const isTablet = useMediaQuery({
  query: "(min-width: 768px) and (max-width: 1024px)",
});
export const isPhone = useMediaQuery({
  query: "(max-width: 767px)",
});
