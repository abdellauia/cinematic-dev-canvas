
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface TypewriterProps {
  phrases: string[];
  speed?: number;
  className?: string;
  delay?: number;
}

const Typewriter = ({
  phrases,
  speed = 100,
  className,
  delay = 1500
}: TypewriterProps) => {
  const [text, setText] = useState('');
  const [currentPhrase, setCurrentPhrase] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      // Current phrase to work with
      const phrase = phrases[currentPhrase];
      
      if (isDeleting) {
        // Deleting characters
        setText(phrase.substring(0, text.length - 1));
        
        // Move to next phrase when deleted
        if (text.length === 0) {
          setIsDeleting(false);
          setCurrentPhrase((currentPhrase + 1) % phrases.length);
        }
      } else {
        // Typing characters
        setText(phrase.substring(0, text.length + 1));
        
        // Start deleting when phrase is complete
        if (text.length === phrase.length) {
          // Wait before starting delete phase
          setTimeout(() => {
            setIsDeleting(true);
          }, delay);
        }
      }
    }, isDeleting ? speed / 2 : speed);
    
    return () => clearTimeout(timer);
  }, [text, isDeleting, currentPhrase, phrases, speed, delay]);

  return (
    <span className={cn("inline-block", className)}>
      {text}
      <span className="inline-block w-[2px] h-[1em] bg-secondary animate-pulse-slow align-middle ml-1"></span>
    </span>
  );
};

export default Typewriter;
