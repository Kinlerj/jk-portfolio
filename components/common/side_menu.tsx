/**
 * Side Menu Component - Mobile Navigation
 * 
 * Features:
 * - Animated slide-in menu with backdrop
 * - Smooth transitions with React Native Reanimated
 * - Touch-friendly navigation items
 * - Theme toggle integration
 * - Responsive design for mobile devices
 */

import ThemeToggle from '@/components/theme_toggle';
import { MENU_ITEMS } from '@/constants';
import { Spacing } from '@/constants/design-system';
import { useThemeColor } from '@/hooks/useThemeColor';
import { MenuItem } from '@/types';
import { Href, useRouter } from 'expo-router';
import React, { useEffect } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';

interface SideMenuProps {
	isOpen: boolean;
	onClose: () => void;
}

const SideMenu: React.FC<SideMenuProps> = ({ isOpen, onClose }) => {
	const router = useRouter();

	const menuWidth = useSharedValue(0);
	const menuOpacity = useSharedValue(0);

	// Theme colors
	const backgroundColor = useThemeColor({}, 'cardBackground');
	const textColor = useThemeColor({}, 'text');

	const animatedMenuContainerStyle = useAnimatedStyle(() => ({
		width: menuWidth.value,
		opacity: menuOpacity.value,
	}));

	const animatedBackdropStyle = useAnimatedStyle(() => ({
		opacity: menuOpacity.value * 0.7,
		pointerEvents: menuOpacity.value > 0.01 ? 'auto' : 'none',
	}));

	useEffect(() => {
		if (isOpen) {
			menuWidth.value = withTiming(300, { duration: 300 });
			menuOpacity.value = withTiming(0.95, { duration: 300 });
		} else {
			menuWidth.value = withTiming(0, { duration: 300 });
			menuOpacity.value = withTiming(0, { duration: 300 });
		}
	}, [isOpen, menuWidth, menuOpacity]);

	return (
		<>
			<Animated.View
				style={[styles.backdrop, animatedBackdropStyle]}
				onTouchEnd={onClose}
			/>
			<Animated.View style={[
				styles.sideMenuClosed,
				animatedMenuContainerStyle,
				{ backgroundColor }
			]}>
				<View style={styles.menuItems}>
					{MENU_ITEMS.map((item: MenuItem) => (
						<TouchableOpacity
							key={item.label}
							style={styles.menuItem}
							onPress={() => {
								onClose();
								router.push(item.path as Href);
							}}
						>
							<Animated.Text style={[
								styles.menuItemLink,
								{ color: textColor }
							]}>
								{item.label}
							</Animated.Text>
						</TouchableOpacity>
					))}

					{/* Theme Toggle */}
					<View style={styles.themeToggleContainer}>
						<ThemeToggle />
					</View>
				</View>
			</Animated.View>
		</>
	);
};

const styles = StyleSheet.create({
	backdrop: {
		...StyleSheet.absoluteFillObject,
		backgroundColor: 'black',
		zIndex: 2,
	},
	sideMenuClosed: {
		height: '100%',
		width: 0,
		position: 'absolute',
		top: 0,
		right: 0,
		opacity: 0.9,
		zIndex: 3,
	},
	sideMenuOpen: {
		height: '100%',
		width: '20%',
		position: 'absolute',
		top: 0,
		right: 0,
		opacity: 0.9,
		zIndex: 3,
	},
	menuItems: {
		alignContent: 'flex-start',
		margin: 0,
		padding: 0,
		paddingLeft: Spacing.lg,
		position: 'absolute',
		width: '100%',
		top: '50%',
		left: 0,
		transform: [{ translateY: -50 }],
	},
	menuItem: {
		marginBottom: 16,
	},
	menuItemLink: {
		letterSpacing: 4,
		padding: 8,
		textTransform: 'uppercase',
		fontSize: 16,
		fontWeight: '500',
	},
	menuItemLinkHover: {
		color: '#f1f1f1',
	},
	themeToggleContainer: {
		marginTop: Spacing.xl,
		alignItems: 'flex-start',
	},
});

export default SideMenu;