import { useState, useEffect } from 'react';

export const useTypewriter = (titles, typingSpeed = 100, deletingSpeed = 50, pauseTime = 1200) => {
  const [displayText, setDisplayText] = useState('');
  const [titleIndex, setTitleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const currentTitle = titles[titleIndex];
    let timeout;

    if (isTyping) {
      if (charIndex < currentTitle.length) {
        timeout = setTimeout(() => {
          setDisplayText(currentTitle.substring(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        }, typingSpeed);
      } else {
        timeout = setTimeout(() => {
          setIsTyping(false);
        }, pauseTime);
      }
    } else {
      if (charIndex > 0) {
        timeout = setTimeout(() => {
          setDisplayText(currentTitle.substring(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        }, deletingSpeed);
      } else {
        setIsTyping(true);
        setTitleIndex((titleIndex + 1) % titles.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isTyping, titleIndex, titles, typingSpeed, deletingSpeed, pauseTime]);

  return displayText;
};

