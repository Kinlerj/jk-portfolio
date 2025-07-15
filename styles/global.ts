import { StyleSheet } from 'react-native';

// Theme Constants
export const Colors = {
  textHighlight: '#72B626',
  background: '#3B451B',
  text: '#FFF',
  button: '#FFF',
  placeholder: 'rgba(255, 255, 255, 0.7)',
  border: 'rgba(255, 255, 255, 0.1)',
  cardBackground: '#333',
  skillBarBackground: '#E0E0E0',
  skillBarFill: '#1D220D',
} as const;

export const Fonts = {
  robotoMono: 'RobotoMono',
  lora: 'Lora',
} as const;

export const Spacing = {
  xs: 8,
  sm: 12,
  md: 16,
  lg: 20,
  xl: 24,
  xxl: 36,
  xxxl: 72,
} as const;

export const FontSizes = {
  sm: 14,
  md: 16,
  lg: 18,
  xl: 28,
  xxl: 48,
} as const;

// Main App Styles
export const AppStyles = StyleSheet.create({
  // Layout Containers
  rootContainer: {
    backgroundColor: Colors.background,
    minHeight: '100%',
    fontSize: FontSizes.md,
    textAlign: 'center',
    color: Colors.text,
    flex: 1,
  },
  
  // Content Layout
  page: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.background,
    opacity: 1,
    position: 'absolute',
    top: Spacing.lg,
    right: Spacing.lg,
    bottom: Spacing.lg,
    left: Spacing.lg,
  },

  // Typography
  sectionHeader: {
    color: Colors.text,
    fontFamily: Fonts.robotoMono,
    fontSize: FontSizes.xl,
    fontWeight: '200',
    letterSpacing: 4,
    textTransform: 'uppercase',
    marginTop: Spacing.xxxl,
    marginBottom: Spacing.xxl,
  },
  sectionHeader2: {
    color: Colors.text,
    fontWeight: '200',
    margin: 0,
  },
  coloredText: {
    color: Colors.textHighlight,
  },

  // Column Layout System (used in about.tsx)
  leftColumnSmall: {
    width: '40%',
    paddingHorizontal: Spacing.xs,
  },
  rightColumnLarge: {
    width: '60%',
    paddingHorizontal: Spacing.xs,
  },

  // Sub Section (used in about.tsx)
  subSection: {
    fontFamily: Fonts.robotoMono,
    fontSize: FontSizes.sm,
    letterSpacing: 2,
    marginBottom: Spacing.xxl,
  },
  subSectionHeader: {
    color: Colors.text,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    marginTop: 0,
    marginBottom: Spacing.xs,
  },
  subSectionContent: {
    color: Colors.text,
    fontFamily: Fonts.lora,
    fontWeight: '400',
    textTransform: 'capitalize',
    marginTop: 0,
    marginBottom: Spacing.xs,
  },
});