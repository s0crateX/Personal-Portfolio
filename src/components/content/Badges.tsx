'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { siteConfig } from '@/src/configs/config';
import AnimationContainer from '@/src/components/utils/AnimationContainer';
import SectionHeader from '@/src/components/ui/SectionHeader';

// Add line-clamp utility styles
const customStyles = `
  .line-clamp-2 {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
`;

// Badge data structure with information about each badge
const badges = [
  {
    id: '2c97f387-7bad-4fab-92f3-6cab5ec2f4a0',
    name: 'Cisco Certified DevNet Associate',
    image: 'devnet-associate.png',
    issuer: 'Cisco',
    issuedDate: 'May 2023',
    verificationUrl: 'https://www.credly.com/badges/2c97f387-7bad-4fab-92f3-6cab5ec2f4a0',
    description: 'Earners of Cisco Certified DevNet Associate have demonstrated knowledge of software development and design including understanding and using APIs, Cisco platforms and development, application development and security, and infrastructure and automation.',
  },
  {
    id: 'e968b0db-de3b-4e41-9e8b-a0ce050889e0',
    name: 'CCNA: Enterprise Networking, Security, and Automation',
    image: 'ccna-enterprise-networking-security-and-automation.png',
    issuer: 'Cisco',
    issuedDate: 'April 2023',
    verificationUrl: 'https://www.credly.com/badges/e968b0db-de3b-4e41-9e8b-a0ce050889e0',
    description: 'Earners of this badge have a foundational understanding of enterprise networking, security, and automation.',
  },
  {
    id: '1bb11bff-fc81-4907-abbb-5f228a305cb2',
    name: 'CCNA: Switching, Routing, and Wireless Essentials',
    image: 'ccna-switching-routing-and-wireless-essentials.1.png',
    issuer: 'Cisco',
    issuedDate: 'March 2023',
    verificationUrl: 'https://www.credly.com/badges/1bb11bff-fc81-4907-abbb-5f228a305cb2',
    description: 'Earners of this badge have a foundational understanding of switching, routing, and wireless essentials.',
  },
  {
    id: '181732c6-53cd-4dba-a1c6-5f1cd4576ad6',
    name: 'CCNA: Introduction to Networks',
    image: 'ccna-introduction-to-networks.png',
    issuer: 'Cisco',
    issuedDate: 'February 2023',
    verificationUrl: 'https://www.credly.com/badges/181732c6-53cd-4dba-a1c6-5f1cd4576ad6',
    description: 'Earners of this badge have a foundational understanding of networking concepts.',
  },
  {
    id: 'fd6e9f05-0859-4e4d-98b4-beb3172afa84',
    name: 'Network Security',
    image: 'network-security.png',
    issuer: 'Cisco',
    issuedDate: 'January 2023',
    verificationUrl: 'https://www.credly.com/badges/fd6e9f05-0859-4e4d-98b4-beb3172afa84',
    description: 'Earners of this badge have a foundational understanding of network security concepts.',
  },
  {
    id: 'f0faf36d-88a5-4f00-8366-f3d9195f6860',
    name: 'Emerging Technologies Workshop - Model-Driven Programmability',
    image: 'emerging-technologies-workshop-model-driven-programmability.png',
    issuer: 'Cisco',
    issuedDate: 'December 2022',
    verificationUrl: 'https://www.credly.com/badges/f0faf36d-88a5-4f00-8366-f3d9195f6860',
    description: 'Earners of this badge have a foundational understanding of model-driven programmability.',
  },
  {
    id: 'f0f938a1-3a49-4419-a4f8-7359046e1557',
    name: 'Cybersecurity Essentials',
    image: 'cybersecurity-essentials.png',
    issuer: 'Cisco',
    issuedDate: 'November 2022',
    verificationUrl: 'https://www.credly.com/badges/f0f938a1-3a49-4419-a4f8-7359046e1557',
    description: 'Earners of this badge have a foundational understanding of cybersecurity concepts.',
  },
  {
    id: '04ff2ed1-c2f3-40f0-a615-bfe15345deb2',
    name: 'Introduction to Cybersecurity',
    image: 'introduction-to-cybersecurity.png',
    issuer: 'Cisco',
    issuedDate: 'October 2022',
    verificationUrl: 'https://www.credly.com/badges/04ff2ed1-c2f3-40f0-a615-bfe15345deb2',
    description: 'Earners of this badge have a foundational understanding of cybersecurity concepts.',
  },
];

const Badges: React.FC = () => {
  const [showAllMobile, setShowAllMobile] = useState(false);
  
  // For mobile, initially show only 4 badges (2 rows of 2)
  const displayedBadges = showAllMobile ? badges : badges.slice(0, 4);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: customStyles }} />
      <AnimationContainer customClassName="w-full mt-16">
      <div className="flex flex-col gap-5">
        <SectionHeader
          title="Professional Badges"
          content="These badges represent my professional certifications, achievements, and continuous learning journey. Each badge demonstrates verified skills and knowledge in various technology domains and industry-recognized programs."
        />

        <div className="flex justify-center mb-4">
          <Link 
            href="https://www.credly.com/users/s0cratex"
            className=" font-medium text-center text-gray-900 dark:text-gray-100 flex-1 flex items-center justify-center min-h-[30px] px-1 leading-tight overflow-hidden"
            target="_blank"
            rel="noopener noreferrer"
          >
            View all badges on Credly →
          </Link>
        </div>

        {/* Mobile Grid (below 768px) - 2 columns, reduced size */}
        <div className="md:hidden grid grid-cols-2 gap-3 justify-items-center mb-4">
          {displayedBadges.map((badge) => (
            <a 
              key={badge.id}
              href={badge.verificationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center p-3 py-3 rounded-lg bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-all duration-300 max-w-[120px] w-full h-[200px] cursor-pointer hover:scale-105 hover:bg-gray-50 dark:hover:bg-gray-700"
            >
              <div className="relative w-[110px] h-[110px] mb-2">
                <Image 
                  src={`/badges/${badge.image}`}
                  alt={badge.name}
                  fill
                  sizes="110px"
                  style={{ objectFit: 'contain' }}
                  className="rounded-md"
                />
              </div>
              <h3 className="text-xs font-medium text-center text-gray-900 dark:text-gray-100 flex-1 flex items-center justify-center min-h-[30px] px-1 leading-tight overflow-hidden">
                <span className="line-clamp-2 text-center">{badge.name}</span>
              </h3>
              <p className="text-xs text-gray-500 dark:text-gray-400 text-center">{badge.issuer}</p>
              <p className="text-xs text-gray-400 dark:text-gray-500 text-center">Issued: {badge.issuedDate}</p>
            </a>
          ))}
        </div>

        {/* Show All/Show Less Button for Mobile */}
        <div className="md:hidden flex justify-center mb-8">
          {!showAllMobile && badges.length > 4 ? (
            <button
              onClick={() => setShowAllMobile(true)}
              className="flex items-center justify-center rounded-xl px-3 py-2 text-sm text-white dark:text-black bg-black dark:bg-white hover:bg-gray-800 dark:hover:bg-gray-200 shadow-sm transition ease mx-auto"
            >
              Show All ({badges.length - 4} more)
            </button>
          ) : showAllMobile ? (
            <button
              onClick={() => setShowAllMobile(false)}
              className="flex items-center justify-center rounded-xl px-3 py-2 text-sm text-white dark:text-black bg-black dark:bg-white hover:bg-gray-800 dark:hover:bg-gray-200 shadow-sm transition ease mx-auto"
            >
              Show Less
            </button>
          ) : null}
        </div>

        {/* Tablet and Desktop Grid (768px and above) - Original layout */}
        <div className="hidden md:grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 justify-items-center mb-12">
          {badges.map((badge) => (
            <a 
              key={badge.id}
              href={badge.verificationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center p-4 py-4 rounded-lg bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-all duration-300 max-w-[150px] w-full h-[240px] cursor-pointer hover:scale-105 hover:bg-gray-50 dark:hover:bg-gray-700"
            >
              <div className="relative w-[140px] h-[140px] mb-2">
                <Image 
                  src={`/badges/${badge.image}`}
                  alt={badge.name}
                  fill
                  sizes="120px"
                  style={{ objectFit: 'contain' }}
                  className="rounded-md"
                />
              </div>
              <h3 className="text-xs font-medium text-center text-gray-900 dark:text-gray-100 flex-1 flex items-center justify-center min-h-[30px] px-1 leading-tight">{badge.name}</h3>
              <p className="text-xs text-gray-500 dark:text-gray-400 text-center">{badge.issuer}</p>
              <p className="text-xs text-gray-400 dark:text-gray-500 text-center">Issued: {badge.issuedDate}</p>
            </a>
          ))}
        </div>
      </div>
    </AnimationContainer>
    </>
  );
};

export default Badges;