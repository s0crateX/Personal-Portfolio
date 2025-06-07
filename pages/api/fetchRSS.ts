// /pages/api/fetchRSS.ts
import Parser from 'rss-parser';
import { siteConfig } from '@/src/configs/config';

// Define the type for a blog post
interface BlogPost {
  guid: string;
  title: string;
  link: string;
  contentSnippet: string;
  categories: string[]; // Categories (tags)
  source: string; // Source blog title
}

// Cache setup
let cache: BlogPost[] | null = null;
let lastCacheTime: number = 0;
const CACHE_DURATION = 10 * 60 * 1000; // 10 minutes in milliseconds

export default async function handler(
  req: { method: string },
  res: { status: (statusCode: number) => any; json: (data: any) => void }
) {
  const currentTime = Date.now();

  // Check if data is available in the cache and still valid
  if (cache && currentTime - lastCacheTime < CACHE_DURATION) {
    console.log('Serving RSS feed from cache');
    return res.status(200).json({ items: cache });
  }

  console.log('Fetching new RSS feed data');
  console.log('Blog URL:', `${siteConfig.social.blog}/rss.xml`);

  try {
    // Check if blog URL is properly configured
    if (!siteConfig.social.blog) {
      console.error('Blog URL is not configured in siteConfig');
      return res.status(500).json({ 
        message: 'Blog URL is not configured', 
        items: [] 
      });
    }

    const parser = new Parser();
    const feed = await parser.parseURL(`${siteConfig.social.blog}/rss.xml`);

    // Check if feed has items
    if (!feed.items || feed.items.length === 0) {
      console.log('No items found in the RSS feed');
      return res.status(200).json({ items: [] });
    }

    // Assuming `feed.items` contains a `categories` field for tags
    const blogs: BlogPost[] = feed.items.map((item: any) => ({
      guid: item.guid || item.id || Math.random().toString(36).substring(2, 15),
      title: item.title || 'No Title',
      link: item.link || '',
      contentSnippet: item.contentSnippet || item.content || '',
      categories: item.categories || [], // Categories (tags)
      source: item.source?.title || 'Hashnode' // Get the source blog title
    }));

    // Update the cache
    cache = blogs;
    lastCacheTime = currentTime;

    res.status(200).json({ items: blogs });
  } catch (error) {
    console.error('Error fetching RSS feed:', error);
    // Return empty array instead of error to prevent UI from breaking
    res.status(200).json({ 
      message: 'Error fetching RSS feed', 
      items: [],
      error: error instanceof Error ? error.message : 'Unknown error'
    });
  }
}
