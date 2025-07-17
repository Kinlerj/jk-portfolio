/**
 * Shared TypeScript types and interfaces for the Joseph Kinler Portfolio
 * Centralizes type definitions to improve maintainability and consistency
 */

// =============================================================================
// COMMON TYPES
// =============================================================================

export type AnimationVariant = 'fadeIn' | 'fadeInUp' | 'fadeInDown' | 'slideIn';
export type ButtonVariant = 'primary' | 'secondary';
export type ExperienceType = 'Professional' | 'Recent' | 'Hobby' | 'Academic' | 'Personal';
export type SkillLevel = 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';
export type TimelineIcon = 'school' | 'work';

// =============================================================================
// COMPONENT INTERFACES
// =============================================================================

/**
 * Props for animated components that support custom animations
 */
export interface AnimatedComponentProps {
  animatedStyle?: any;
  delay?: number;
}

/**
 * Configuration for navigation buttons
 */
export interface ButtonConfig {
  to: string;
  label: string;
  variant?: ButtonVariant;
}

/**
 * Contact information item structure
 */
export interface ContactInfo {
  iconName: string;
  details: string;
}

/**
 * Navigation menu item structure
 */
export interface MenuItem {
  label: string;
  path: string;
}

/**
 * Skills data structure for portfolio display
 */
export interface SkillData {
  skillName: string;
  experience: string;
  experienceType: ExperienceType;
  level: SkillLevel;
  proficiencyPercent: number; // 0-100
}

/**
 * Timeline item structure for experience display
 */
export interface TimelineItem {
  icon: TimelineIcon;
  title: string;
  subtitle: string;
  text: string;
  period?: string;
  location?: string;
  skills?: string[];
}

// =============================================================================
// FORM TYPES
// =============================================================================

/**
 * Contact form state structure
 */
export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

// =============================================================================
// STYLE TYPES
// =============================================================================

/**
 * Common view style properties used across components
 */
export interface CommonViewStyle {
  centered?: boolean;
  scrollable?: boolean;
  contentStyle?: any;
}

/**
 * Animation configuration options
 */
export interface AnimationOptions {
  duration?: number;
  delay?: number;
  translateY?: number;
}
