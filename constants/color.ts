/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

import { Colors as ThemeColors } from './theme';

const tintColorLight = '#5d6b4f';  // Darker sage green for light theme
const tintColorDark = '#9da28d';   // Sage green for dark theme

export const Colors = {
  light: {
    text: ThemeColors.light.text,
    background: ThemeColors.light.background,
    tint: tintColorLight,
    icon: '#687076',
    tabIconDefault: '#687076',
    tabIconSelected: tintColorLight,
    textHighlight: ThemeColors.light.textHighlight,
    placeholder: ThemeColors.light.placeholder,
    border: ThemeColors.light.border,
    cardBackground: ThemeColors.light.cardBackground,
    skillBarBackground: ThemeColors.light.skillBarBackground,
    skillBarFill: ThemeColors.light.skillBarFill,
  },
  dark: {
    text: ThemeColors.dark.text,
    background: ThemeColors.dark.background,
    tint: tintColorDark,
    icon: '#9BA1A6',
    tabIconDefault: '#9BA1A6',
    tabIconSelected: tintColorDark,
    textHighlight: ThemeColors.dark.textHighlight,
    placeholder: ThemeColors.dark.placeholder,
    border: ThemeColors.dark.border,
    cardBackground: ThemeColors.dark.cardBackground,
    skillBarBackground: ThemeColors.dark.skillBarBackground,
    skillBarFill: ThemeColors.dark.skillBarFill,
  },
};
