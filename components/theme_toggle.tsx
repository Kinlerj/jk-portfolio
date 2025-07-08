/**
 * Theme Toggle Component
 * 
 * Allows users to switch between light and dark themes
 * Uses system preference by default with manual override option
 */

import { BorderRadius, Spacing } from '@/constants/theme';
import { useThemeColor } from '@/hooks/useThemeColor';
import { useTheme, type ThemePreference } from '@/hooks/useThemeProvider';
import { Ionicons } from '@expo/vector-icons';
import { Pressable, StyleSheet, useColorScheme as useSystemColorScheme } from 'react-native';

interface ThemeToggleProps {
	onThemeChange?: (theme: ThemePreference) => void;
}

export function ThemeToggle({ onThemeChange }: ThemeToggleProps) {
	const systemColorScheme = useSystemColorScheme();
	const { themePreference, setThemePreference } = useTheme();

	const iconColor = useThemeColor({}, 'textHighlight');
	const backgroundColor = useThemeColor({}, 'cardBackground');
	const borderColor = useThemeColor({}, 'border');

	const toggleTheme = () => {
		// Get current effective theme (resolve 'system' to actual theme)
		const currentEffectiveTheme = themePreference === 'system' ? systemColorScheme : themePreference;
		// Toggle between light and dark only
		const nextTheme: ThemePreference = currentEffectiveTheme === 'light' ? 'dark' : 'light';

		console.log('Theme toggle pressed:', {
			currentTheme: themePreference,
			currentEffectiveTheme,
			nextTheme,
			systemColorScheme
		});

		setThemePreference(nextTheme);
		onThemeChange?.(nextTheme);
	};

	const getIconName = (): keyof typeof Ionicons.glyphMap => {
		const currentTheme = themePreference === 'system' ? systemColorScheme : themePreference;
		return currentTheme === 'dark' ? 'moon' : 'sunny';
	};

	return (
		<Pressable
			style={[
				styles.container,
				{
					backgroundColor,
					borderColor,
				}
			]}
			onPress={toggleTheme}
			android_ripple={{ color: iconColor, borderless: true }}
		>
			<Ionicons
				name={getIconName()}
				size={20}
				color={iconColor}
			/>
		</Pressable>
	);
}

const styles = StyleSheet.create({
	container: {
		width: 44,
		height: 44,
		borderRadius: BorderRadius.md,
		borderWidth: 1,
		alignItems: 'center',
		justifyContent: 'center',
		margin: Spacing.xs,
	},
});

export default ThemeToggle;