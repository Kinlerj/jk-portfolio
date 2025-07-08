import { CONTACT_INFO } from '@/constants';
import { useThemeColor } from '@/hooks/useThemeColor';
import { MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import Animated from 'react-native-reanimated';

export default function Footer() {
	const textColor = useThemeColor({}, 'text');
	const borderColor = useThemeColor({}, 'border');

	return (
		<Animated.View style={[styles.footerContainer, { borderTopColor: borderColor }]}>
			{CONTACT_INFO.map((item, index) => (
				<View key={index} style={styles.contactItem}>
					<MaterialIcons name={item.icon as any} size={20} color={textColor} style={styles.icon} />
					<Animated.Text style={[styles.contactDetail, { color: textColor }]}>
						{item.details}
					</Animated.Text>
				</View>
			))}
		</Animated.View>
	);
}

const styles = StyleSheet.create({
	footerContainer: {
		position: 'absolute',
		bottom: 0,
		left: 0,
		right: 0,
		flexDirection: 'row',
		justifyContent: 'space-around',
		alignItems: 'center',
		paddingVertical: 16,
		paddingHorizontal: 16,
		borderTopWidth: 1,
		zIndex: 1000, // Ensure it stays on top
	},
	contactItem: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	icon: {
		marginRight: 8,
	},
	contactDetail: {
		fontSize: 14,
		fontFamily: 'Lora', // Ensure this matches your design system
	},
});