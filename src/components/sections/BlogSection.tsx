'use client';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import AnimationContainer from '../utils/AnimationContainer';
import SectionContainer from '../utils/SectionContainer';
import TitleSectionPageContainer from '../utils/TitleSectionPageContainer';
import BlogCard from '@/src/components/content/CardBlog';
import { siteConfig } from '@/src/configs/config';
import Link from 'next/link';
import { Skeleton } from '@/src/components/ui/skeleton';
import Script from 'next/script';
import SearchInput from '@/src/components/ui/SearchInput';

interface Blog {
  guid: string;
  title: string;
  link: string;
  contentSnippet: string;
  categories: string[];
  source: string;
  thumbnail?: string;
  pubDate?: string;
}

const BlogSection = () => {
  const [blogSearch, setBlogSearch] = useState<string>(''); // Add search bar functionality
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const pathname = usePathname();

  useEffect(() => {
    const fetchBlogs = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await fetch(`/api/fetchRSS`);
        if (!response.ok) {
          throw new Error('Failed to fetch blogs');
        }
        const data = await response.json();

        // Check if data.items exists and is an array
        if (!data.items || !Array.isArray(data.items)) {
          console.error('Invalid response format:', data);
          setError('Invalid blog data format');
          setBlogs([]);
          return;
        }

        // If there's a message in the response, log it
        if (data.message) {
          console.log('API message:', data.message);
        }

        const filteredBlogs = data.items.filter((blog: Blog) =>
          blog.title.toLowerCase().includes(blogSearch.toLowerCase())
        );
        setBlogs(filteredBlogs);

        // If no blogs after filtering, set a specific message
        if (filteredBlogs.length === 0 && data.items.length > 0) {
          console.log('No blogs match the search criteria');
        } else if (data.items.length === 0) {
          console.log('No blogs available from the API');
        }
      } catch (error) {
        setError('Failed to fetch blogs');
        console.error('Error fetching blogs:', error);
        setBlogs([]); // Ensure blogs is always an array
      } finally {
        setIsLoading(false);
      }
    };

    fetchBlogs();
  }, [blogSearch, pathname]);

  return (
    <SectionContainer>
      <div className="w-full flex flex-col gap-6">
        <TitleSectionPageContainer title="Blogs" />

        <AnimationContainer customClassName="w-full flex flex-col gap-5 mb-8">
        <p className="w-full text-base text-black dark:text-white">
            I'll be sharing some of my write-ups here as I go through my cybersecurity journey. Stay tuned for more updates!
        </p>


          {/* Use SearchInput component */}
          <SearchInput
            value={blogSearch}
            onChange={(e) => setBlogSearch(e.target.value)}
            placeholder="Search blogs (Write-ups, topics, etc...)"
            ariaLabel="Search blogs"
          />
        </AnimationContainer>

        {/* Under Construction Message */}
        <AnimationContainer customClassName="w-full flex flex-col items-center justify-center p-8 mb-4 border-2 border-dashed border-gray-300 dark:border-gray-700 rounded-lg">
            <div className="flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-gray-500 dark:text-gray-400 animate-spin" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h2 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-2">Under Construction</h2>
            <p className="text-center text-gray-600 dark:text-gray-400">This page is currently under development and will be available soon. Please check back later!</p>
          </AnimationContainer>

        {!error && (
          <article className="w-full flex justify-center items-center content-center flex-wrap gap-6 mx-auto">
            {isLoading ? (
              Array.from({ length: 6 }).map((_, index) => (
                <div key={`skeleton-${index}`} className="w-full h-auto p-4">
                  <Skeleton className="w-full h-10 mb-4 bg-gray-700 dark:bg-gray-600 rounded-md" />
                  <Skeleton className="w-full h-6 bg-gray-700 dark:bg-gray-600 rounded-md" />
                  <Skeleton className="w-3/4 h-4 bg-gray-700 dark:bg-gray-600 rounded-md mt-2" />
                  <Skeleton className="w-full h-10 bg-gray-700 dark:bg-gray-600 rounded-md mt-4" />
                </div>
              ))
            ) : blogs.length > 0 ? (
              blogs.map(
                ({
                  guid,
                  title,
                  link,
                  contentSnippet,
                  categories,
                  source,
                  thumbnail,
                  pubDate
                }) => (
                  <div key={`blog-${guid}`} className="w-full">
                    {/* Individual JSON-LD for Each Blog Post */}
                    <Script
                      key={`json-ld-blog-${guid}`}
                      id={`json-ld-blog-${guid}`}
                      type="application/ld+json"
                      dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                          '@context': 'https://schema.org',
                          '@type': 'BlogPosting',
                          headline: title,
                          description: contentSnippet,
                          url: link,
                          image: thumbnail || undefined, // Optional field
                          author: {
                            '@type': 'Person',
                            name: siteConfig.author // Assuming the author's name is from siteConfig
                          },
                          datePublished: pubDate || undefined, // Optional field, fallback to undefined if not available
                          keywords: categories.join(', ')
                        })
                      }}
                    />
                    <BlogCard
                      key={guid}
                      title={title}
                      excerpt={contentSnippet}
                      tags={categories}
                      link={link}
                      source={source}
                    />
                  </div>
                )
              )
            ) : (
              <div
                key="no-blogs"
                className="w-full flex justify-center items-center text-black dark:text-white p-4"
              >
                <h2>No blogs found</h2>
              </div>
            )}
          </article>
        )}
      </div>
    </SectionContainer>
  );
};

export default BlogSection;
