'use client';
import React from 'react';
import GitHubContributionHistory from '@/src/components/content/GitHubContributionHistory';
import SectionHeader from '@/src/components/ui/SectionHeader';
import AnimationContainer from '@/src/components/utils/AnimationContainer';

const StatsSection: React.FC = () => {
  return (
    <AnimationContainer customClassName="w-full mt-16">
      <div className=" w-full h-full  text-black dark:text-white bg-transparent">
        <SectionHeader
          title="GitHub Contributions"
          content="Explore my contributions on GitHub. Here's a snapshot of my journey on GitHub."
        />

        <GitHubContributionHistory />
      </div>
    </AnimationContainer>
  );
};

export default StatsSection;
