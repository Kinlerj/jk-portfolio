/**
 * Unified Style System
 * 
 * Central export for all application styles:
 * - Theme tokens (colors, fonts, spacing)
 * - Component styles (layout, typography, utilities)
 * - Hook-based styles for theme support
 */

// Export all theme tokens
export * from './theme';

// Export all component style hooks
export {
	useDecorationStyles,
	useLayoutStyles,
	useTypographyStyles,
	useUtilityStyles
} from './styles';

// Create unified AppStyles hook for backward compatibility
import {
	useDecorationStyles,
	useLayoutStyles,
	useTypographyStyles,
	useUtilityStyles
} from './styles';

/**
 * Hook to get all application styles
 * Combines all style categories into a single object
 */
export function useAppStyles() {
	const layoutStyles = useLayoutStyles();
	const decorationStyles = useDecorationStyles();
	const typographyStyles = useTypographyStyles();
	const utilityStyles = useUtilityStyles();

	return {
		// Layout styles
		...layoutStyles,

		// Decoration styles
		...decorationStyles,

		// Typography styles
		...typographyStyles,

		// Utility styles
		...utilityStyles,
	};
}
