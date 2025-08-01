/**
 * Animated Timeline Item Component - Career History Display
 * 
 * Features:
 * - Animated entry with fade and translate effects
 * - Rich timeline data with period, location, and skills
 * - Visual hierarchy with icons and typography
 * - Skill tags with color coding
 * - Responsive card layout with shadow effects
 * - Theme-aware styling
 */

import { Fonts, FontSizes, Spacing } from '@/constants/design-system';
import { useThemeColor } from '@/hooks/useThemeColor';
import { TimelineIcon } from '@/types';
import { MaterialIcons } from '@expo/vector-icons';
import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withDelay, withTiming } from 'react-native-reanimated';

interface TimelineItemProps {
	icon: TimelineIcon;
	title: string;
	subtitle: string;
	text: string;
	delay: number;
	period?: string; // Optional period/duration
	location?: string; // Optional location
	skills?: string[]; // Optional skills array
}

const AnimatedTimelineItem: React.FC<TimelineItemProps> = ({
	icon,
	title,
	subtitle,
	text,
	delay,
	period,
	location,
	skills
}) => {
	const opacity = useSharedValue(0);
	const translateY = useSharedValue(20);

	// Theme colors
	const backgroundColor = useThemeColor({}, 'background');
	const cardBackgroundColor = useThemeColor({}, 'cardBackground');
	const textColor = useThemeColor({}, 'text');
	const textHighlight = useThemeColor({}, 'textHighlight');

	const animatedStyle = useAnimatedStyle(() => ({
		opacity: opacity.value,
		transform: [{ translateY: translateY.value }],
	}));

	useEffect(() => {
		opacity.value = withDelay(delay, withTiming(1, { duration: 500 }));
		translateY.value = withDelay(delay, withTiming(0, { duration: 500 }));
	}, [delay]);

	return (
		<Animated.View style={[styles.container, animatedStyle]}>
			{/* Card wrapper with enhanced styling */}
			<View style={[styles.card, { backgroundColor: cardBackgroundColor, borderLeftColor: textHighlight }]}>
				{/* Header section with icon and title */}
				<View style={styles.header}>
					<View style={[styles.iconContainer, { borderLeftColor: textHighlight }]}>
						<MaterialIcons name={icon} size={28} color={textHighlight} />
					</View>
					<View style={styles.headerText}>
						<Text style={[styles.title, { color: textColor }]}>{title}</Text>
						<Text style={[styles.subtitle, { color: textHighlight }]}>{subtitle}</Text>
					</View>
				</View>

				{/* Meta information */}
				{(period || location) && (
					<View style={styles.metaContainer}>
						{period && (
							<View style={styles.metaItem}>
								<MaterialIcons name="schedule" size={16} color={textHighlight} />
								<Text style={[styles.metaText, { color: textColor }]}>{period}</Text>
							</View>
						)}
						{location && (
							<View style={styles.metaItem}>
								<MaterialIcons name="place" size={16} color={textHighlight} />
								<Text style={[styles.metaText, { color: textColor }]}>{location}</Text>
							</View>
						)}
					</View>
				)}

				{/* Description */}
				<Text style={[styles.text, { color: textColor }]}>{text}</Text>

				{/* Skills section */}
				{skills && skills.length > 0 && (
					<View style={styles.skillsContainer}>
						<Text style={[styles.skillsLabel, { color: textHighlight }]}>Key Skills:</Text>
						<View style={styles.skillsGrid}>
							{skills.map((skill, index) => (
								<View key={index} style={[styles.skillTag, { backgroundColor: textHighlight }]}>
									<Text style={[styles.skillText, { color: backgroundColor }]}>{skill}</Text>
								</View>
							))}
						</View>
					</View>
				)}
			</View>
		</Animated.View>
	);
};

const styles = StyleSheet.create({
	container: {
		marginBottom: Spacing.xxl,
	},
	// Enhanced card styling
	card: {
		borderRadius: 8,
		padding: Spacing.lg,
		borderLeftWidth: 4,
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.1,
		shadowRadius: 4,
		elevation: 3,
	},
	// Header section
	header: {
		flexDirection: 'row',
		alignItems: 'flex-start',
		marginBottom: Spacing.md,
	},
	iconContainer: {
		marginRight: Spacing.md,
		marginTop: Spacing.xs,
	},
	headerText: {
		flex: 1,
	},
	title: {
		fontFamily: Fonts.robotoMono,
		fontWeight: 'bold',
		textTransform: 'uppercase',
		fontSize: FontSizes.lg,
		letterSpacing: 1,
		marginBottom: Spacing.xs,
	},
	subtitle: {
		fontFamily: Fonts.lora,
		fontWeight: '600',
		fontSize: FontSizes.md,
		marginBottom: 0,
	},
	// Meta information
	metaContainer: {
		flexDirection: 'row',
		flexWrap: 'wrap',
		marginBottom: Spacing.md,
		gap: Spacing.md,
	},
	metaItem: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	metaText: {
		fontFamily: Fonts.robotoMono,
		fontSize: FontSizes.sm,
		marginLeft: Spacing.xs,
		opacity: 0.8,
	},
	// Description text
	text: {
		fontFamily: Fonts.lora,
		fontSize: FontSizes.sm,
		lineHeight: 24,
		marginBottom: Spacing.md,
	},
	// Skills section
	skillsContainer: {
		marginTop: Spacing.sm,
	},
	skillsLabel: {
		fontFamily: Fonts.robotoMono,
		fontSize: FontSizes.sm,
		fontWeight: 'bold',
		textTransform: 'uppercase',
		letterSpacing: 1,
		marginBottom: Spacing.sm,
	},
	skillsGrid: {
		flexDirection: 'row',
		flexWrap: 'wrap',
		gap: Spacing.xs,
	},
	skillTag: {
		paddingHorizontal: Spacing.sm,
		paddingVertical: Spacing.xs,
		borderRadius: 12,
		marginRight: Spacing.xs,
		marginBottom: Spacing.xs,
	},
	skillText: {
		fontFamily: Fonts.robotoMono,
		fontSize: FontSizes.sm,
		fontWeight: '500',
		textTransform: 'uppercase',
		letterSpacing: 0.5,
	},
});

export default AnimatedTimelineItem;