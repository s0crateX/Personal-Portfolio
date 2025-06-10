'use client';
import { useState } from 'react';
import AnimationContainer from '../utils/AnimationContainer';
import SectionContainer from '../utils/SectionContainer';
import TitleSectionPageContainer from '../utils/TitleSectionPageContainer';
import CertificateCard from '@/src/components/content/CardCertificate';
import SearchInput from '@/src/components/ui/SearchInput';

// Define the Certificate interface
interface Certificate {
  id: string;
  title: string;
  description: string;
  imagePath: string;
  issuer: string;
  issueDate: string;
  credentialLink?: string;
}

// Certificate data
const certificatesData: Certificate[] = [
  {
    id: 'python-intermediate',
    title: 'Programming for Intermediate Users Using Python',
    description: 'Completed comprehensive training in intermediate Python programming concepts and applications through the Modern Academics Convergence Hub (MACH).',
    imagePath: '/cert/Programming For Intermediate User Using Python.jpg',
    issuer: 'Department of Information and Communications Technology',
    issueDate: 'November 13, 2021',
    
  },
  {
    id: 'python-statistics',
    title: 'Learn Basic Statistics with Python',
    description: 'Completed training in statistical analysis using Python programming language, covering fundamental statistical concepts and their implementation.',
    imagePath: '/cert/Learn Basic Statistics with Python.jpg',
    issuer: 'Department of Information and Communications Technology',
    issueDate: 'December 09, 2021',
    
  },
  {
    id: 'python-data-analysis',
    title: 'Analyze Data with Python',
    description: 'Completed advanced training in data analysis techniques using Python, including data manipulation, visualization, and interpretation of results.',
    imagePath: '/cert/Analyze Data With Python.jpg',
    issuer: 'Department of Information and Communications Technology',
    issueDate: 'June 11, 2022',
    
  },
  {
    id: 'cybersecurity-basics',
    title: 'Cybersecurity 101: Back to Basic',
    description: 'Participated in a comprehensive webinar covering fundamental cybersecurity principles, threat awareness, and basic security practices for digital protection.',
    imagePath: '/cert/Cybersecurity 101.jpg',
    issuer: 'ZYBERPH RESPONSE TEAM',
    issueDate: 'April 29, 2023'
  },
  {
    id: 'ccna-enterprise',
    title: 'CCNA: Enterprise Networking, Security, and Automation',
    description: 'Successfully achieved student level credential for completing the CCNA course, covering network configuration, security implementation, and automation techniques.',
    imagePath: '/cert/CCNAENSA.jpg',
    issuer: 'Cisco Networking Academy',
    issueDate: 'December 13, 2023',
    credentialLink: 'https://www.credly.com/badges/ccna-enterprise'
  },
  {
    id: 'ccna-itn',
    title: 'CCNA: Introduction to Networks',
    description: 'Successfully completed the first course in the CCNA curriculum, covering network fundamentals, access, IP addressing, and basic security concepts.',
    imagePath: '/cert/CCNAITN.jpg',
    issuer: 'Cisco Networking Academy',
    issueDate: 'May 15, 2023',
    credentialLink: 'https://www.credly.com/badges/ccna-introduction-to-networks'
  },
  {
    id: 'ccna-srwe',
    title: 'CCNA: Switching, Routing, and Wireless Essentials',
    description: 'Successfully completed the second course in the CCNA curriculum, covering switching technologies, VLANs, inter-VLAN routing, and wireless LAN concepts.',
    imagePath: '/cert/CCNASRWE.jpg',
    issuer: 'Cisco Networking Academy',
    issueDate: 'August 30, 2023',
    credentialLink: 'https://www.credly.com/badges/ccna-switching-routing-wireless-essentials'
  },
  {
    id: 'cybersecurity-essentials',
    title: 'Cybersecurity Essentials',
    description: 'Completed comprehensive training in cybersecurity fundamentals, including threat detection, network security, and cybersecurity principles.',
    imagePath: '/cert/CybersecurityEssentials.jpg',
    issuer: 'Cisco Networking Academy',
    issueDate: 'February 20, 2023',
    credentialLink: 'https://www.credly.com/badges/cybersecurity-essentials'
  },
  {
    id: 'devnet-associate',
    title: 'DevNet Associate',
    description: 'Successfully completed the Cisco DevNet Associate certification program, covering software development, APIs, automation, and programmability skills for network engineers.',
    imagePath: '/cert/DevNetAssociate.jpg',
    issuer: 'Cisco Networking Academy',
    issueDate: 'March 10, 2024',
    credentialLink: 'https://www.credly.com/badges/devnet-associate'
  },
  {
    id: 'intro-to-cybersecurity',
    title: 'Introduction to Cybersecurity',
    description: 'Completed introductory course in cybersecurity, covering basic concepts, principles, and best practices in the field of cybersecurity.',
    imagePath: '/cert/I2CS.jpg',
    issuer: 'Cisco Networking Academy',
    issueDate: 'January 15, 2023',
    credentialLink: 'https://www.credly.com/badges/introduction-to-cybersecurity'
  },
  {
    id: 'network-security',
    title: 'Network Security',
    description: 'Successfully completed advanced training in network security, covering security protocols, firewall configuration, intrusion detection, and network defense strategies.',
    imagePath: '/cert/NetworkSecurity.jpg',
    issuer: 'Cisco Networking Academy',
    issueDate: 'April 5, 2023',
    credentialLink: 'https://www.credly.com/badges/network-security'
  }
];

const CertificatesSection = () => {
  const [certificateSearch, setCertificateSearch] = useState<string>('');

  // Filter certificates based on search term
  const filteredCertificates = certificatesData.filter(certificate =>
    certificate.title.toLowerCase().includes(certificateSearch.toLowerCase()) ||
    certificate.description.toLowerCase().includes(certificateSearch.toLowerCase()) ||
    certificate.issuer.toLowerCase().includes(certificateSearch.toLowerCase())
  );

  return (
    <SectionContainer>
      <div className="w-full flex flex-col gap-6">
        <TitleSectionPageContainer title="Certificates" />

        <AnimationContainer customClassName="w-full flex flex-col gap-5 mb-8">
          <p className="w-full text-base text-black dark:text-white">
          These are all the certificates I've earned from seminars, course completions, networking events, and various tech-related programs. They represent my commitment to continuous learning and professional development in the fields of networking, cybersecurity, and software development.
          </p>

          {/* Search Input */}
          <SearchInput
            value={certificateSearch}
            onChange={(e) => setCertificateSearch(e.target.value)}
            placeholder="Search certificates (title, description, issuer...)"
            ariaLabel="Search certificates"
          />
        </AnimationContainer>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
          {filteredCertificates.length > 0 ? (
            filteredCertificates.map(certificate => (
              <div key={`certificate-${certificate.id}`} className="w-full flex justify-center">
                <CertificateCard
                  title={certificate.title}
                  description={certificate.description}
                  imagePath={certificate.imagePath}
                  issuer={certificate.issuer}
                  issueDate={certificate.issueDate}
                  credentialLink={certificate.credentialLink}
                />
              </div>
            ))
          ) : (
            <div className="col-span-full w-full flex justify-center items-center text-black dark:text-white p-4">
              <h2>No certificates found matching your search</h2>
            </div>
          )}
        </div>
      </div>
    </SectionContainer>
  );
};

export default CertificatesSection;