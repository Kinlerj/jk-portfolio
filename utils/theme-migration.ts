/**
 * Theme Migration Utility
 * 
 * Helper functions to migrate from legacy color references to theme-aware colors
 * Use this during the transition period to maintain consistency
 */

import { useThemeColor } from '@/hooks/useThemeColor';

/**
 * Hook to get theme-aware versions of legacy colors
 * Makes it easy to migrate existing components
 */
export function useLegacyColors() {
  const textHighlight = useThemeColor({}, 'textHighlight');
  const background = useThemeColor({}, 'background');
  const text = useThemeColor({}, 'text');
  const placeholder = useThemeColor({}, 'placeholder');
  const border = useThemeColor({}, 'border');
  const cardBackground = useThemeColor({}, 'cardBackground');
  const skillBarBackground = useThemeColor({}, 'skillBarBackground');
  const skillBarFill = useThemeColor({}, 'skillBarFill');

  return {
    textHighlight,
    background,
    white: text, // Legacy 'white' maps to 'text'
    placeholder,
    border,
    cardBackground,
    skillBarBackground,
    skillBarFill,
  };
}

/**
 * Legacy color mapping for quick reference
 */
export const LegacyColorMap = {
  textHighlight: 'textHighlight',
  background: 'background',
  white: 'text',
  placeholder: 'placeholder',
  border: 'border',
  cardBackground: 'cardBackground',
  skillBarBackground: 'skillBarBackground',
  skillBarFill: 'skillBarFill',
} as const;
