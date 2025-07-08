/**
 * Menu Button Component - Hamburger Menu Toggle
 * 
 * Features:
 * - Three-line hamburger menu icon
 * - Touch-friendly interaction area
 * - Consistent positioning and styling
 * - Responsive design for mobile devices
 */

import { Spacing } from '@/constants/design-system';
import { useThemeColor } from '@/hooks/useThemeColor';
import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';

interface MenuButtonProps {
	onIconClick: () => void;
}

const MenuButton: React.FC<MenuButtonProps> = ({ onIconClick }) => {
	// Theme colors
	const lineColor = useThemeColor({}, 'text');

	return (
		<TouchableOpacity onPress={onIconClick} style={styles.menuBtn}>
			<View style={styles.menuBtnLines}>
				<View style={[styles.menuBtnLine, { backgroundColor: lineColor }]} />
				<View style={[styles.menuBtnLine, styles.menuBtnLine2, { backgroundColor: lineColor }]} />
				<View style={[styles.menuBtnLine, { backgroundColor: lineColor }]} />
			</View>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	menuBtn: {
		position: 'absolute',
		top: Spacing.xl,
		right: Spacing.xl,
		padding: Spacing.lg,
		zIndex: 5,
	},
	menuBtnLines: {
		width: 32,
	},
	menuBtnLine: {
		width: '100%',
		height: 3,
	},
	menuBtnLine2: {
		marginVertical: 6,
	},
});

export default MenuButton;