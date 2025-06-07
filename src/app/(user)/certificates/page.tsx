import CertificatesSection from '@/src/components/sections/CertificatesSection';
import { generateMetadata as getPageMetadata } from '@/src/components/utils/generateMetadata';

export async function generateMetadata() {
  return getPageMetadata({
    title: 'Certificates',
    description: 'View my professional certificates and credentials in networking, cybersecurity, and software development.',
    path: '/certificates'
  });
}

const Certificates = () => <CertificatesSection />;

export default Certificates;