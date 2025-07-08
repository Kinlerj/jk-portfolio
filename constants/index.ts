/**
 * Application constants and configuration data
 * Centralizes all static data for easy maintenance and updates
 */

import { ButtonConfig, MenuItem, SkillData, TimelineItem } from '@/types';

// =============================================================================
// NAVIGATION DATA
// =============================================================================

/**
 * Main navigation menu items
 */
export const MENU_ITEMS: MenuItem[] = [
	{ label: 'Home', path: '/' },
	{ label: 'Skills', path: '/skills' },
	{ label: 'Experience', path: '/experience' },
	{ label: 'Contact', path: '/contact' },
];

/**
 * Navigation buttons for home page
 */
export const HOME_BUTTONS: ButtonConfig[] = [
	{ to: '/skills', label: 'Discover More' },
	{ to: '/contact', label: 'Contact Me' },
];

/**
 * Navigation buttons for skills page
 */
export const SKILLS_BUTTONS: ButtonConfig[] = [
	{ to: '/experience', label: 'My Experience' },
	{ to: '/contact', label: 'Contact Me' },
];

/**
 * Navigation buttons for experience page
 */
export const EXPERIENCE_BUTTONS: ButtonConfig[] = [
	{ to: '/contact', label: 'Contact Me' },
	{ to: '/', label: 'Home' },
];

// =============================================================================
// PERSONAL INFORMATION
// =============================================================================

/**
 * Contact information display data
 */
export const CONTACT_INFO = [
	{ details: 'email@example.com', icon: 'email' },
	{ details: '+123 456 7890', icon: 'phone' },
	{ details: '123 Main St, City, Country', icon: 'house' },
];

/**
 * Personal tagline and introduction
 */
export const PERSONAL_INFO = {
	name: 'Joseph Kinler',
	tagline: 'A Friend, Dude and Buddy From Earth',
	title: 'Software Developer',
} as const;

// =============================================================================
// SKILLS DATA
// =============================================================================

/**
 * Technical skills and proficiency levels
 */
export const SKILLS_DATA: SkillData[] = [
	{
		skillName: 'HTML/CSS',
		experience: '5+ Years',
		experienceType: 'Professional',
		level: 'Expert',
		proficiencyPercent: 90,
	},
	{
		skillName: 'JavaScript',
		experience: '4+ Years',
		experienceType: 'Professional',
		level: 'Advanced',
		proficiencyPercent: 85,
	},
	{
		skillName: 'React/React Native',
		experience: '3+ Years',
		experienceType: 'Professional',
		level: 'Advanced',
		proficiencyPercent: 80,
	},
	{
		skillName: 'TypeScript',
		experience: '2+ Years',
		experienceType: 'Recent',
		level: 'Intermediate',
		proficiencyPercent: 75,
	},
	{
		skillName: 'Node.js',
		experience: '2+ Years',
		experienceType: 'Professional',
		level: 'Intermediate',
		proficiencyPercent: 70,
	},
	{
		skillName: 'Python',
		experience: '1+ Year',
		experienceType: 'Personal',
		level: 'Intermediate',
		proficiencyPercent: 65,
	},
];

// =============================================================================
// EXPERIENCE DATA
// =============================================================================

/**
 * Career timeline and educational background
 */
export const TIMELINE_ITEMS: TimelineItem[] = [
	{
		icon: 'school',
		title: 'University of Texas at Arlington',
		subtitle: "Bachelor's Degree in Computer Science",
		text: 'Focused on software engineering, algorithms, and data structures. Participated in coding competitions and hackathons. Graduated with honors.',
		period: '2012 - 2016',
		location: 'Arlington, TX',
		skills: ['Java', 'C++', 'Python', 'Data Structures', 'Algorithms'],
	},
	{
		icon: 'work',
		title: 'Bottle Rocket Studios',
		subtitle: 'Junior Software Developer',
		text: 'Developed mobile applications for major retail clients. Worked on iOS and Android apps using native technologies and React Native.',
		period: 'Jun 2016 - Nov 2016',
		location: 'Dallas, TX',
		skills: ['React Native', 'iOS', 'Android', 'JavaScript', 'Swift'],
	},
	{
		icon: 'work',
		title: 'Wipro Limited',
		subtitle: 'Software Engineer',
		text: 'Built enterprise web applications and APIs. Collaborated with international teams on large-scale projects for Fortune 500 companies.',
		period: 'Nov 2016 - Aug 2018',
		location: 'Dallas, TX',
		skills: ['Node.js', 'React', 'MongoDB', 'Express', 'REST APIs'],
	},
	{
		icon: 'work',
		title: 'Allstate',
		subtitle: 'Senior Software Developer',
		text: 'Lead developer on customer-facing mobile applications. Implemented modern development practices and mentored junior developers.',
		period: 'Aug 2018 - Present',
		location: 'Remote',
		skills: ['React Native', 'TypeScript', 'AWS', 'Docker', 'CI/CD'],
	},
];

// =============================================================================
// ANIMATION TIMINGS
// =============================================================================

/**
 * Standardized animation delays for consistent timing
 * @deprecated Use AnimationTimings from theme.ts instead
 */
export const ANIMATION_DELAYS = {
	IMMEDIATE: 0,
	SHORT: 200,
	MEDIUM: 400,
	LONG: 600,
	VERY_LONG: 800,
	TIMELINE_START: 800,
	TIMELINE_ITEM_SPACING: 300,
	TIMELINE_END: 2000,
} as const;
