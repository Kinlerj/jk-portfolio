/**
 * Unified Style System
 * 
 * Central export for all application styles:
 * - Theme tokens (colors, fonts, spacing)
 * - Component styles (layout, typography, utilities)
 * - Legacy AppStyles for backward compatibility
 */

// Export all theme tokens
export * from './theme';

// Export all component styles
export {
	DecorationStyles, LayoutStyles, TypographyStyles,
	UtilityStyles
} from './styles';

// Create unified AppStyles object for backward compatibility
import { DecorationStyles, LayoutStyles, TypographyStyles, UtilityStyles } from './styles';

/**
 * Legacy AppStyles object for backward compatibility
 * Combines all style categories into a single object
 */
export const AppStyles = {
  // Layout styles
  ...LayoutStyles,
  
  // Decoration styles
  ...DecorationStyles,
  
  // Typography styles
  ...TypographyStyles,
  
  // Utility styles
  ...UtilityStyles,
};
