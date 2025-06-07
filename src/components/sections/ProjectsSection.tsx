'use client';
import React, { useEffect, useState } from 'react';
import AnimationContainer from '../utils/AnimationContainer';
import { siteConfig } from '@/src/configs/config';
import { CardProjectProps } from '@/src/types';
import SectionContainer from '../utils/SectionContainer';
import TitleSectionPageContainer from '../utils/TitleSectionPageContainer';
import CardProject from '@/src/components/content/CardProject';
import Link from 'next/link';
import { Skeleton } from '../ui/skeleton';
import Script from 'next/script';
import { usePathname } from 'next/navigation';
import SearchInput from '@/src/components/ui/SearchInput';

const ProjectsSection = () => {
  const [projectSearch, setProjectSearch] = useState<string>('');
  const [allProjectsInfo, setAllProjectsInfo] = useState<CardProjectProps[]>(
    []
  );
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [fetchError, setFetchError] = useState<string>(''); // New state for handling fetch errors

  const pathname = usePathname(); // Hook to track the current path

  // Fetch GitHub repositories when the component mounts or when the search or pathname changes
  useEffect(() => {
    const fetchProjects = async () => {
      setIsLoading(true);
      setFetchError(''); // Reset error message before fetching
      try {
        const response = await fetch(
          `/api/fetch-projects?search=${projectSearch}`
        );
        if (!response.ok) {
          throw new Error('Failed to fetch repositories');
        }
        const data = await response.json();
        // Ensure data is an array before setting it
        setAllProjectsInfo(Array.isArray(data) ? data : []);
      } catch (error) {
        console.error('Error fetching projects:', error);
        setFetchError('Failed to fetch projects'); // Set the error message
        setAllProjectsInfo([]); // Fallback to empty array if an error occurs
      } finally {
        setIsLoading(false);
      }
    };

    fetchProjects();
  }, [projectSearch, pathname]); // Re-run when either the projectSearch or pathname changes

  // Generate JSON-LD structured data for each individual project
  const generateJsonLdForProject = (project: CardProjectProps) => {
    const jsonLd = {
      '@context': 'https://schema.org',
      '@type': 'CreativeWork',
      name: project.title,
      description: project.des,
      url: project.repo,
      image: project.link,
      keywords: project.topics.join(', '),
      author: {
        '@type': 'Person',
        name: siteConfig.author
      },
      datePublished: project.date
    };

    return JSON.stringify(jsonLd);
  };

  return (
    <>
      <SectionContainer>
        <div className="w-full flex flex-col gap-6">
          <TitleSectionPageContainer title="Projects" />

          <AnimationContainer customClassName="w-full flex flex-col gap-5 mb-8">
            <p className="w-full text-base text-black dark:text-white">
              These are most of the projects I've done since I started
              programming, some of them are personal projects, freelance, work,
              practice, or for other situations. If you want to see absolutely
              all my projects, go to my{' '}
              <Link
                href={`https://github.com/${siteConfig.social.github}`}
                target="_blank"
                className="underline transition-all ease"
              >
                github page
              </Link>
              .
            </p>
          </AnimationContainer>

          {/* Under Construction Message */}
          <AnimationContainer customClassName="w-full flex flex-col items-center justify-center p-8 mb-4 border-2 border-dashed border-gray-300 dark:border-gray-700 rounded-lg">
            <div className="flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-gray-500 dark:text-gray-400 animate-spin-slow" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h2 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-2">Under Construction</h2>
            <p className="text-center text-gray-600 dark:text-gray-400">This page is currently under development and will be available soon. Please check back later!</p>
          </AnimationContainer>

          {/* Use SearchInput component */}
          <SearchInput
            value={projectSearch}
            onChange={(e) => setProjectSearch(e.target.value)}
            placeholder="Search projects (Languages, frameworks, libraries, etc...)"
            ariaLabel="Search projects"
          />

          {/* Display Projects or error message */}
          <article className="w-full flex justify-center items-center content-center flex-wrap gap-6 mx-auto">
            {isLoading ? (
              // Display skeleton loader instead of text or static content
              Array.from({ length: 6 }).map((_, index) => (
                <div key={`skeleton-${index}`} className="w-full h-auto p-4">
                  <Skeleton className="w-full h-10 mb-4 bg-gray-700 dark:bg-gray-600 rounded-md" />
                  <Skeleton className="w-full h-6 bg-gray-700 dark:bg-gray-600 rounded-md" />
                  <Skeleton className="w-3/4 h-4 bg-gray-700 dark:bg-gray-600 rounded-md mt-2" />
                  <Skeleton className="w-full h-10 bg-gray-700 dark:bg-gray-600 rounded-md mt-4" />
                </div>
              ))
            ) : fetchError ? (
              <AnimationContainer customClassName="w-full group flex flex-col justify-center items-center mb-8">
                <div className="text-center text-black dark:text-white p-4">
                  <h2>{fetchError}</h2> {/* Display the error message */}
                </div>
              </AnimationContainer>
            ) : allProjectsInfo.length > 0 ? (
              allProjectsInfo.map(
                ({ id, title, des, category, repo, link, topics }) => (
                  <React.Fragment key={id}>
                    {/* Add JSON-LD for each individual project */}
                    <Script
                      key={`json-ld-project-${id}`}
                      id={`json-ld-project-${id}`}
                      type="application/ld+json"
                      dangerouslySetInnerHTML={{
                        __html: generateJsonLdForProject({
                          id,
                          title,
                          des,
                          category,
                          repo,
                          link,
                          topics
                        })
                      }}
                    />
                    <CardProject
                      key={id}
                      title={title}
                      des={des}
                      category={category}
                      repo={repo}
                      link={link}
                      topics={topics}
                    />
                  </React.Fragment>
                )
              )
            ) : (
              <AnimationContainer customClassName="w-full group flex flex-col justify-center items-center mb-8">
                <div className="text-center text-black dark:text-white p-4">
                  <h2>No projects found</h2>
                </div>
              </AnimationContainer>
            )}
          </article>
        </div>
      </SectionContainer>
    </>
  );
};

export default ProjectsSection;
