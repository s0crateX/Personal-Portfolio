'use client';
import { siteConfig } from '@/src/configs/config';
import Link from 'next/link';
import { JSX } from 'react';

// Define a type for FAQ item
export interface FAQItem {
  title: string;
  content: JSX.Element;
}

// Define the faqData array with the FAQItem type
export const faqData: FAQItem[] = [
  {
    title: 'Who are you?',
    content: (
      <>
        Hey there! 👋 I'm Ryan Dave Chiva, a Full Stack developer passionate about
        coding since childhood. I build innovative solutions using a variety of
        technologies like Next.js, Flutter, Python, TypeScript, and GenAI. I'm also diving into CyberSec and always eager to learn
        new tools and techniques.
        <br className="mb-2" />
        For more about me, check out my{' '}
        <Link
          href={`https://github.com/${siteConfig.social.github}`}
          className="text-blue-500 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </Link>
        !
      </>
    )
  },
  
  {
    title: 'Can we hire you?',
    content: (
      <>
        Yes, I am currently looking for job opportunities! Feel free to reach
        out to me via email or Linkedin if you're interested in hiring me or
        collaborating on exciting projects.
        <br className="mb-2" />
        You can contact me through:
        <ul className="list-disc pl-6 text-black dark:text-white text-sm">
          <li>
            Email:{' '}
            <Link
              href={`mailto:${siteConfig.social.email}`}
              className="text-blue-500 hover:underline"
            >
              {siteConfig.social.email}
            </Link>
          </li>
          <li>
            {' '}
            Linkedin{' '}
            <Link
              href={`mailto:${siteConfig.social.linkedin}`}
              className="text-blue-500 hover:underline"
            >
              {siteConfig.social.linkedin}
            </Link>
          </li>
        </ul>
      </>
    )
  },
  {
    title: 'How can I collaborate with you?',
    content: (
      <>
        You can reach out to me via email or Discord. I'm open to collaboration
        on projects or ideas. Feel free to contact me through:
        <ul className="list-disc pl-6 text-black dark:text-white text-sm">
          <li>
            Email:{' '}
            <Link
              href={`mailto:${siteConfig.social.email}`}
              className="text-blue-500 hover:underline"
            >
              {siteConfig.social.email}
            </Link>
          </li>
          <li>
            Discord:{' '}
            <Link
              href={siteConfig.social.discord}
              className="text-blue-500 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              {siteConfig.social.discord}
            </Link>
          </li>
        </ul>
        <br className="mb-2" />
        For more details, you can check my contact information on my{' '}
        <Link
          href={`https://github.com/${siteConfig.social.github}`}
          className="text-blue-500 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub page
        </Link>
        .
      </>
    )
  },
  {
    title: 'What is your approach to new technologies?',
    content: (
      <>
        I'm always excited to learn new technologies! I typically start by
        building small projects to understand the fundamentals before diving
        deeper. I focus on adopting tools that improve my workflow and help me
        build better applications.
        <br className="mb-2" />
        For more about my tech journey, visit my{' '}
        <Link
          href={`https://github.com/${siteConfig.social.github}`}
          className="text-blue-500 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub page
        </Link>
        .
      </>
    )
  },
  {
    title: 'Do you have networking knowledge?',
    content: (
      <>
        Absolutely! I have a solid foundation in networking concepts and technologies. 🌐 My background includes essential networking topics such as network protocols, infrastructure design, network security, and troubleshooting.
        <br className="mb-2" />
        I understand various networking fundamentals like TCP/IP, OSI model, routing and switching, network topologies, and network administration. This knowledge complements my development and cybersecurity interests perfectly, especially when working on distributed systems or implementing security measures.
        <br className="mb-2" />
        Whether you need help with network-related development projects, understanding network architecture for your applications, or discussing networking solutions, I'm happy to collaborate and share my knowledge!
        <br className="mb-2" />
        Feel free to reach out through{' '}
        <Link
          href={`mailto:${siteConfig.social.email}`}
          className="text-blue-500 hover:underline"
        >
          email
        </Link>{' '}
        or{' '}
        <Link
          href={siteConfig.social.discord}
          className="text-blue-500 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Discord
        </Link>
        !
      </>
    )
  },  
  {
    title: 'What about your cybersecurity interests?',
    content: (
      <>
        I'm a cybersecurity enthusiast who's passionate about exploring the world of digital security! 🔐 I enjoy learning about various aspects of cybersecurity including penetration testing, vulnerability assessment, secure coding practices, and staying up-to-date with the latest security trends and threats.
        <br className="mb-2" />
        My interest in cybersecurity complements my development work perfectly - understanding security from both offensive and defensive perspectives helps me build more secure applications and understand potential vulnerabilities in systems.
        <br className="mb-2" />
        If you're interested in discussing cybersecurity topics, collaborating on security-related projects, or need assistance with security assessments, feel free to reach out through my{' '}
        <Link
          href={`mailto:${siteConfig.social.email}`}
          className="text-blue-500 hover:underline"
        >
          email
        </Link>{' '}
        or{' '}
        <Link
          href={siteConfig.social.discord}
          className="text-blue-500 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Discord
        </Link>
        !
      </>
    )
  },
  {
    title: 'How can I support your work?',
    content: (
      <>
        You can support me by starring my repositories, following my work on GitHub, or sharing your feedback. Every bit of encouragement makes a difference!
        <br className="mb-2" />
        If you'd like to support me directly, you can do so through:
        <ul className="list-disc pl-6 text-black dark:text-white text-sm">
          <li>
            <Link
              href={siteConfig.social.kofi}
              className="text-blue-500 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ko-fi
            </Link>{' '}
            – Buy me a coffee and help fuel my projects!
          </li>
          <li className="mt-2">
            GCash – Scan the QR code below to send your support:
            <br />
            <img
              src="/Gcash/gcash.jpeg"
              alt="GCash QR Code"
              className="w-28 mt-2 cursor-pointer hover:scale-105 transition-transform"
              onClick={() => {
                const modal = document.getElementById('gcash-modal') as HTMLDialogElement;
                if (modal) modal.showModal();
              }}
            />
          </li>
        </ul>

        {/* Modal */}
        <dialog
          id="gcash-modal"
          className="p-4 rounded-lg bg-white dark:bg-gray-900 shadow-xl"
        >
          <img
            src="/Gcash/gcash.jpeg"
            alt="Full GCash QR Code"
            className="w-64"
          />
          <form method="dialog" className="text-center mt-3">
            <button className="text-blue-500 hover:underline">Close</button>
          </form>
        </dialog>

        <br className="mb-2" />
        Visit my{' '}
        <Link
          href={`https://github.com/${siteConfig.social.github}`}
          className="text-blue-500 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub page
        </Link>{' '}
        to get started.
      </>
    )
  },  
  {
    title: 'Do you offer freelance services?',
    content: (
      <>
        Yes, I am available for freelance work. Please contact me{' '}
        <Link
          href={`mailto:${siteConfig.social.email}`}
          className="text-blue-500 hover:underline"
        >
          via email
        </Link>{' '}
        or{' '}
        <Link
          href={siteConfig.social.discord}
          className="text-blue-500 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Discord
        </Link>{' '}
        to discuss your project details. I would be happy to explore how we can
        collaborate!
        <br className="mb-2" />
        I also accept capstone projects for students. If you're a student looking for assistance with your capstone project, feel free to reach out and we can discuss your requirements and timeline.
        <br className="mb-2" />
        You can reach me through the contact information provided on my{' '}
        <Link
          href={`https://github.com/${siteConfig.social.github}`}
          className="text-blue-500 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub page
        </Link>
        .
      </>
    )
  },
  {
    title:
      "I tried to contact you but haven't received a response, what happened?",
    content: (
      <>
        I apologize if I missed your message or if I was slow to respond.
        Sometimes, messages get overlooked, or I may be caught up with other
        tasks. If I missed your message by mistake, please feel free to reach
        out again.
        <br className="mb-2" />
        To get a faster response, you can also create a notice through an issue on
        my{' '}
        <Link
          href={`https://github.com/${siteConfig.social.github}/${siteConfig.social.github}/issues`}
          className="text-blue-500 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub repository
        </Link>
        . I try to keep track of discussions and issues more actively.
      </>
    )
  },
  {
    title: 'Do you do vibe coding and AI exploration?',
    content: (
      <>
        Absolutely! I love vibe coding sessions where we can explore new ideas in a relaxed, creative atmosphere. 🎵💻 Whether it's experimenting with new frameworks, building fun side projects, or just coding for the pure joy of it - I'm always up for collaborative coding sessions!
        <br className="mb-2" />
        I'm also deeply fascinated by the future of AI and enjoy exploring cutting-edge AI technologies, discussing AI ethics, experimenting with new AI models, and building AI-powered applications. From GenAI integrations to machine learning experiments, I love diving into what's possible with artificial intelligence.
        <br className="mb-2" />
        If you're interested in a vibe coding session, want to brainstorm AI projects, or just want to chat about where AI is heading, feel free to reach out! Let's explore the intersection of creativity, technology, and artificial intelligence together.
        <br className="mb-2" />
        Hit me up through{' '}
        <Link
          href={`mailto:${siteConfig.social.email}`}
          className="text-blue-500 hover:underline"
        >
          email
        </Link>{' '}
        or{' '}
        <Link
          href={siteConfig.social.discord}
          className="text-blue-500 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Discord
        </Link>{' '}
        and let's create something awesome!
      </>
    )
  }
];