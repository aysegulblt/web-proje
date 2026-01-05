import { useState, useEffect } from "react";

/**
 * Typing animation hook - metinleri sırayla yazıp silen animasyon
 * @param {string[]} words - Döngüde gösterilecek kelimeler
 * @param {number} typingSpeed - Yazma hızı (ms)
 * @param {number} deletingSpeed - Silme hızı (ms)
 * @param {number} pauseTime - Kelime tamamlandıktan sonra bekleme (ms)
 */
export function useTypingAnimation(
    words,
    typingSpeed = 100,
    deletingSpeed = 50,
    pauseTime = 2000
) {
    const [displayText, setDisplayText] = useState("");
    const [wordIndex, setWordIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [isPaused, setIsPaused] = useState(false);

    useEffect(() => {
        if (!words || words.length === 0) return;

        const currentWord = words[wordIndex];

        const handleTyping = () => {
            if (isPaused) {
                // Bekleme süresi
                setTimeout(() => {
                    setIsPaused(false);
                    setIsDeleting(true);
                }, pauseTime);
                return;
            }

            if (isDeleting) {
                // Silme modu
                if (displayText.length > 0) {
                    setDisplayText((prev) => prev.slice(0, -1));
                } else {
                    setIsDeleting(false);
                    setWordIndex((prev) => (prev + 1) % words.length);
                }
            } else {
                // Yazma modu
                if (displayText.length < currentWord.length) {
                    setDisplayText((prev) => currentWord.slice(0, prev.length + 1));
                } else {
                    setIsPaused(true);
                }
            }
        };

        const speed = isPaused ? pauseTime : isDeleting ? deletingSpeed : typingSpeed;
        const timer = setTimeout(handleTyping, speed);

        return () => clearTimeout(timer);
    }, [displayText, isDeleting, isPaused, wordIndex, words, typingSpeed, deletingSpeed, pauseTime]);

    return displayText;
}
