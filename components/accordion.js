import { useState } from 'react';
import Image from 'next/image';
const Accordion = ({ title, artist, thumbnail, lyricsE, lyricsK, children }) => {
  const [isOpen, setIsOpen] = useState(false);
console.log(title, artist)
  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="my-6 rounded-lg accordion-items">
      <div
        className="cursor-pointer "
        onClick={toggleAccordion}
      >
        <div className="flex items-center justify-between">
          <span><Image className="rounded-lg" src={thumbnail} width={70}
      height={70}/></span>
          <h4 className="text-xl">{title} by {artist}</h4>
          <div className={`transform ${isOpen ? 'rotate-180' : 'rotate-0'} transition-transform`}>
            &#9660; {/* Down arrow */}
          </div>
        </div>
      </div>
      {isOpen && (
        <>
       
        {children}  

      
      
            </>
      )}
    </div>
  );
};

export default Accordion;
