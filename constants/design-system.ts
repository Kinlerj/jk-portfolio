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

// Legacy AppStyles object for backward compatibility
export const AppStyles = {
  get rootContainer() { throw new Error('Use useAppStyles() hook instead'); },
  get page() { throw new Error('Use useAppStyles() hook instead'); },
  get pageFrame() { throw new Error('Use useAppStyles() hook instead'); },
  get pageContent() { throw new Error('Use useAppStyles() hook instead'); },
  get pageScrollView() { throw new Error('Use useAppStyles() hook instead'); },
  get pageScrollContent() { throw new Error('Use useAppStyles() hook instead'); },
  get cornerCutTopLeft() { throw new Error('Use useAppStyles() hook instead'); },
  get cornerCutTopRight() { throw new Error('Use useAppStyles() hook instead'); },
  get cornerCutBottomLeft() { throw new Error('Use useAppStyles() hook instead'); },
  get cornerCutBottomRight() { throw new Error('Use useAppStyles() hook instead'); },
  get contentPageHeader() { throw new Error('Use useAppStyles() hook instead'); },
  get contentPageHeaderHighlight() { throw new Error('Use useAppStyles() hook instead'); },
  get section() { throw new Error('Use useAppStyles() hook instead'); },
  get sectionHeader() { throw new Error('Use useAppStyles() hook instead'); },
  get sectionHeaderHighlight() { throw new Error('Use useAppStyles() hook instead'); },
  get subSectionContent() { throw new Error('Use useAppStyles() hook instead'); },
  get bottomFadeOverlay() { throw new Error('Use useAppStyles() hook instead'); },
  get fadeElement() { throw new Error('Use useAppStyles() hook instead'); },
};
