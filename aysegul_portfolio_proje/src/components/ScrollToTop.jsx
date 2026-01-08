import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * ScrollToTop - Sayfa değişikliklerinde otomatik olarak sayfayı en üste kaydırır
 */
const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
};

export default ScrollToTop;
