'use client';
import ExternalLink from '../ui/ExternalLink';
import AnimationContainer from '../utils/AnimationContainer';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { Button } from '@heroui/react';

type CertificateCardProps = {
  title: string;
  description: string;
  imagePath: string;
  issuer: string;
  issueDate: string;
  credentialLink?: string;
};

const CertificateCard = ({ 
  title, 
  description, 
  imagePath, 
  issuer, 
  issueDate, 
  credentialLink 
}: CertificateCardProps) => {
  const [showFullDescription, setShowFullDescription] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [showImagePreview, setShowImagePreview] = useState(false);

  const maxDescriptionLength = 80; // Reduced for more compact display

  // Detect screen size
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleImageClick = () => {
    setShowImagePreview(true);
  };

  const closeImagePreview = () => {
    setShowImagePreview(false);
  };

  return (
    <>
      <AnimationContainer customClassName="w-full max-w-sm mx-auto flex flex-col rounded-lg border border-gray-200 hover:border-gray-300 bg-white dark:bg-gray-900 dark:border-gray-700 dark:hover:border-gray-600 shadow-sm hover:shadow-md p-3 transition-all ease-in-out duration-300 hover:scale-[1.02] text-black dark:text-white min-h-[420px] relative">
        <div className="w-full flex flex-col gap-3 flex-1 pb-16">
          {/* Certificate Image - Increased size */}
          <div className="w-full flex justify-center cursor-pointer group" onClick={handleImageClick}>
            <div className="relative w-48 h-48 sm:w-52 sm:h-52 md:w-56 md:h-56 transition-transform duration-300 group-hover:scale-105">
              <Image 
                src={imagePath} 
                alt={title} 
                fill 
                className="object-contain rounded-md shadow-sm hover:shadow-md transition-shadow duration-300" 
                sizes="(max-width: 640px) 192px, (max-width: 768px) 208px, 224px"
                priority
              />
              {/* Compact overlay hint */}
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300 rounded-md flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-75 text-white px-2 py-1 rounded text-xs">
                  View
                </div>
              </div>
            </div>
          </div>
          
          {/* Title - Centered */}
          <h3 className="text-lg font-semibold leading-tight text-center">
            {title}
          </h3>

          {/* Description - Compact */}
          <div className="text-sm text-gray-600 dark:text-gray-300">
            {!isMobile || showFullDescription || description.length <= maxDescriptionLength
              ? description
              : `${description.slice(0, maxDescriptionLength)}...`}
            {isMobile && description.length > maxDescriptionLength && (
              <Button
                onClick={() => setShowFullDescription(!showFullDescription)}
                className="ml-1 text-xs text-blue-500 hover:underline bg-transparent p-0 min-w-0 h-auto"
              >
                {showFullDescription ? 'Less' : 'More'}
              </Button>
            )}
          </div>

          {/* Issuer and Date - Left aligned */}
          <div className="w-full space-y-2">
            <div className="text-sm text-gray-600 dark:text-gray-300">
              <div className="flex justify-between items-center">
                <span>Issued by: <span className="font-medium text-gray-800 dark:text-gray-200">{issuer}</span></span>
              </div>
              <div className="flex justify-between items-center mt-1">
                <span>Date: <span className="font-medium text-gray-800 dark:text-gray-200">{issueDate}</span></span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Centered button at bottom with proper sizing */}
        {credentialLink && (
          <div className="absolute bottom-3 left-3 right-3 flex justify-center">
            <ExternalLink
              href={credentialLink}
              customClassName="text-white inline-flex items-center justify-center rounded-lg bg-black dark:bg-white dark:text-black px-6 py-2.5 text-sm font-medium hover:bg-gray-900 dark:hover:bg-gray-200 transition-all ease-in-out duration-300 hover:scale-105 min-w-[140px]"
            >
              <span>View Credential</span>
            </ExternalLink>
          </div>
        )}
      </AnimationContainer>

      {/* Full-Screen Image Preview Modal */}
      {showImagePreview && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black bg-opacity-90 backdrop-blur-sm">
          <button 
            onClick={closeImagePreview} 
            className="absolute top-4 right-4 z-[10000] text-white bg-black bg-opacity-50 hover:bg-opacity-75 rounded-full p-2 transition-all duration-300"
            aria-label="Close image preview"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div className="flex items-center justify-center max-w-[90vw] max-h-[90vh] p-4">
            <Image 
              src={imagePath} 
              alt={`${title} - Full Size Preview`} 
              width={1200}
              height={800}
              className="object-contain max-w-full max-h-full rounded-lg shadow-2xl"
              unoptimized
            />
          </div>

          <div 
            className="absolute inset-0 z-[-1]" 
            onClick={closeImagePreview}
          />
        </div>
      )}
    </>
  );
};

export default CertificateCard;