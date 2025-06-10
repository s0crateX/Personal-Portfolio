'use client';
import AnimationContainer from '../utils/AnimationContainer';
import { siteConfig } from '@/src/configs/config';
import CurrentTimeLineExp from '../content/CurrentTimeLineExp';
import TitleSectionPageContainer from '../utils/TitleSectionPageContainer';
import SectionContainer from '../utils/SectionContainer';
import Link from 'next/link';
import ContactMe from '@/src/components/content/ContactMe';
import SupportMe from '@/src/components/content/SupportMe';
import FAQSection from '@/src/components/sections/FAQSection';
import SkillsSection from '@/src/components/sections/SkillsSection';

const AboutSection = () => {
  return (
    <SectionContainer>
      <div className="w-full flex flex-col gap-6">
        <TitleSectionPageContainer title="About Me" />

        <AnimationContainer customClassName="w-full flex flex-col gap-5 mb-8">
          <p className="text-base text-gray-600 dark:text-gray-400">
            Hey there! 👋 I'm <strong>{siteConfig.author}</strong>, a BSIT graduate and passionate Full Stack
            developer who loves to create innovative solutions. I have uploaded some
            pretty cool stuff, so make sure to check it out on my{' '}
            <Link
              href={`https://github.com/${siteConfig.social.github}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white hover:underline transition-all ease"
            >
              <span style={{ color: 'blue' }}>GitHub</span>
            </Link>{' '}
            ✌️.
          </p>

          <ul className="text-base text-gray-600 dark:text-gray-400 list-disc pl-6 space-y-2 mt-4">
            <li>
              ✨ I spend my spare time building and developing free Apps and Web
              Applications because I want to continue growing and honing my
              skills. My academic background in Information Technology provides me with a solid foundation in programming, networking, and system analysis 😄.
            </li>
            <li>
              🔐 As a cybersecurity enthusiast, I'm passionate about exploring digital security, penetration testing, vulnerability assessments, and secure coding practices. I believe understanding security from both offensive and defensive perspectives is crucial for building robust applications.
            </li>
            <li>
              🌐 My BSIT education gave me strong networking knowledge including TCP/IP, OSI model, routing, switching, and network security - skills that complement my development and cybersecurity interests perfectly.
            </li>
            <li>
              🤝 I'm always excited to collaborate with others and contribute to
              different projects. Whether it's web development, cybersecurity assessments, AI experiments, or just vibe coding sessions, feel free to reach out!
            </li>
            <li>
              🔧 I have experience working with various programming languages
              and technologies like Next.js, Flutter, Python, TypeScript, ensuring that I can adapt and contribute
              effectively to your project's tech stack.
            </li>
            <li>
              ♟️ When I'm not coding, you'll find me playing chess (always up for a good match!), enjoying online games, or getting lost in books of any genre that catches my attention - I'm quite the avid reader! 📚🎮
            </li>
            <li>
              📬 If you come across anything interesting in my projects, want to discuss cybersecurity, explore AI possibilities, or have a project you'd like me to collaborate on, please don't hesitate
              to get in touch. Let's create something awesome together!
            </li>
          </ul>

          <p className="text-base text-gray-600 dark:text-gray-400 mt-4">
            Feel free to explore my projects, challenge me to a chess game, recommend a good book, or reach out for collaborations in development, cybersecurity, or AI!
          </p>
        </AnimationContainer>
        <AnimationContainer customClassName="w-full ">
          <CurrentTimeLineExp />
        </AnimationContainer>

        <AnimationContainer customClassName="w-full">
          <SkillsSection />
        </AnimationContainer>
        {/* Contact Section */}
        <AnimationContainer customClassName="w-full mt-16">
          <ContactMe />
        </AnimationContainer>
        {/* FAQ Section */}
        <AnimationContainer customClassName="w-full mt-16">
          <FAQSection />
        </AnimationContainer>
      </div>
    </SectionContainer>
  );
};

export default AboutSection;
