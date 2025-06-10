'use client';

import AnimationContainer from '../utils/AnimationContainer';
import { siteConfig } from '@/src/configs/config';
import SectionHeader from '@/src/components/ui/SectionHeader';

const AboutMe = () => {
  return (
    <AnimationContainer customClassName="w-full mb-16">
      <SectionHeader
        id="aboutme"
        title="About Me"
        content={`Here is a little bit about me and my journey as a developer.`}
      />

      <p className="text-sm sm:text-base md:text-lg text-foreground dark:text-white">
        Hey there! 👋 I'm{' '}
        <strong className="text-foreground dark:text-white">
          {siteConfig.author}
        </strong>
        , and I've been passionate about coding since childhood. I fell in
        love with programming at a young age, spending countless hours learning,
        experimenting, and creating small projects. Over the years, this passion
        has grown into a career as a Full Stack developer, where I continue to
        build innovative solutions that solve real-world problems.
      </p>

      <p className="text-sm sm:text-base md:text-lg text-foreground dark:text-white mt-4">
        As I've evolved in my career, I've expanded my expertise into exciting areas
        like cybersecurity and artificial intelligence, always staying curious about
        emerging technologies and how they can be leveraged to create meaningful impact.
        I believe in continuous learning and adapting to the ever-changing tech landscape.
      </p>

      <p className="text-sm sm:text-base md:text-lg text-foreground dark:text-white mt-4">
        When I'm not coding, you'll find me playing chess ♟️, enjoying online games 🎮, 
        or getting lost in a good book 📚 - I love reading any genre that catches my 
        attention! Whether you're interested in collaborating on development projects, 
        discussing cybersecurity, exploring AI possibilities, or just want to challenge 
        me to a chess match, feel free to reach out. Let's create something amazing together!
      </p>
    </AnimationContainer>
  );
};

export default AboutMe;