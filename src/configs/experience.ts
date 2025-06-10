'use client';
import { siteConfig } from '@/src/configs/config';

export interface ExperienceEntry {
  title: string;
  description: string;
  startDate: string;
  endDate: string;
  isActive?: boolean;
  companyUrl?: string;
}

export const experienceEntries: ExperienceEntry[] = [
  {
  title: 'Looking for Job Opportunities | Present',
  description:
    "Enthusiastic Full Stack Developer seeking opportunities to grow and contribute in **Software Engineering**, **Web & Mobile Development**, and other **IT-related fields**. Experienced in building functional and user-friendly applications with a willingness to learn and improve continuously. Open to full-time roles, internships, freelance work, and collaborative side projects. Eager to work with teams and develop practical solutions using modern development tools and practices.",
  startDate: 'Present',
  endDate: 'Present',
  isActive: true,
  companyUrl: siteConfig.social.linkedin
  },
  {
    title: 'Philippine Statistics Authority - Map Data Processor | Feb. 2025 - Apr. 2025',
    description:
      'Processed and validated geographic data, including data from the 2024 Service Facilities and Government Projects Geotagging (SFGP) and List of Building Construction (LoBC) operations, to support census mapping and ensure accuracy in spatial databases. Generated maps used by Map Data Collectors (MDC) in the field for data collection. Processed and reviewed maps returned by MDC to verify data integrity and completeness.',
    startDate: 'Feb 2025',
    endDate: 'Apr 2025',
    isActive: false
  },
  {
    title: 'Philippine Statistics Authority - On-the-Job Trainee | Sep. 2024 - Jan. 2025',
    description:
      'Developed PSA Inventory Management System using VB.NET and MS Access to digitize inventory tracking. Supported IT productivity by resolving hardware/software issues. Streamlined census data workflows and updated POPCBM systems across employee desks.',
    startDate: 'Sep 2024',
    endDate: 'Jan 2025',
    isActive: false
  },
  {
    title: 'Independent Bug Bounty Hunter - HackerOne | 2021 - 2022',
    description:
      'Actively participated as an independent bug bounty hunter on HackerOne. Identified and reported security vulnerabilities in various web applications and platforms. Gained hands-on experience in ethical hacking, responsible disclosure, and cybersecurity practices.',
    startDate: '2021',
    endDate: '2022',
    isActive: false
  }
];
