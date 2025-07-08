/**
 * App Color Configuration
 * Semantic color mappings for light and dark themes using the core design system.
 */

import { Colors as ThemeColors } from './theme';

const tintColorLight = '#5d6b4f';
const tintColorDark = '#9da28d';

export const Colors = {
	light: {
		// Core app colors
		background: ThemeColors.primary.subtle,
		border: ThemeColors.primary.light,
		frame: ThemeColors.primary.dark,
		headerBackground: ThemeColors.primary.dark,

		// Text colors
		text: ThemeColors.primary.harsh,
		textHighlight: ThemeColors.primary.darkest,
		textContrast: ThemeColors.primary.lightest,
		textPlaceholder: ThemeColors.primary.light,

		// Navigation colors
		tint: tintColorLight,
		icon: ThemeColors.neutral.iconLight,
		tabIconDefault: ThemeColors.neutral.iconLight,
		tabIconSelected: tintColorLight,

		// UI Specific
		cardBackground: ThemeColors.neutral.lightGray,
		skillBarBackground: ThemeColors.primary.lightest,
		skillBarFill: ThemeColors.primary.dark,

		// Skill levels - using darker, more saturated colors for prominence
		skillExpert: ThemeColors.accent.amber,
		skillAdvanced: ThemeColors.accent.rust,
		skillIntermediate: ThemeColors.accent.navy,
		skillBeginner: ThemeColors.accent.charcoal,

		// Experience types - using lighter, more muted tones for secondary info
		experienceProfessional: ThemeColors.primary.darkest,
		experienceRecent: ThemeColors.primary.dark,
		experienceAcademic: ThemeColors.primary.base,
		experienceHobby: ThemeColors.primary.light,
		experiencePersonal: ThemeColors.primary.lighter,
	},
	dark: {
		// Core app colors
		background: ThemeColors.primary.darker,
		border: ThemeColors.primary.dark,
		frame: ThemeColors.primary.light,
		headerBackground: ThemeColors.primary.light,

		// Text colors
		text: ThemeColors.primary.subtle,
		textHighlight: ThemeColors.primary.lightest,
		textContrast: ThemeColors.primary.darker,
		textPlaceholder: ThemeColors.primary.light,

		// Navigation colors
		tint: tintColorDark,
		icon: ThemeColors.neutral.iconDark,
		tabIconDefault: ThemeColors.neutral.iconDark,
		tabIconSelected: tintColorDark,

		// UI Specific
		cardBackground: ThemeColors.neutral.darkGray,
		skillBarBackground: ThemeColors.primary.lightest,
		skillBarFill: ThemeColors.primary.dark,

		// Skill levels - brighter colors for dark theme visibility
		skillExpert: ThemeColors.accent.amber,
		skillAdvanced: ThemeColors.accent.copper,
		skillIntermediate: ThemeColors.accent.slate,
		skillBeginner: ThemeColors.primary.base,

		// Experience types - using lighter greens for contrast on dark background
		experienceProfessional: ThemeColors.primary.lightest,
		experienceRecent: ThemeColors.primary.lighter,
		experienceAcademic: ThemeColors.primary.light,
		experienceHobby: ThemeColors.primary.base,
		experiencePersonal: ThemeColors.primary.dark,
	},
};
