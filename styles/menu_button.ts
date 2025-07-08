import { StyleSheet } from 'react-native';

export const MenuButtonStyles = StyleSheet.create({
  menuBtn: {
	fontSize: 0, // No direct RN equivalent for font-size:0, usually set on Text
	// display: 'block' is default for View
	position: 'absolute', // Use absolute for fixed-like behavior relative to a containing View
	top: 20,
	right: 20,
	padding: 16,
	zIndex: 5,
  },
  // :hover effect needs TouchableOpacity on* events
  // opacity for lines > span needs to be managed with state/animation

  menuBtnLines: { // For .menu-btn > .lines
	// display: 'block' is default for View
	width: 32,
  },
  menuBtnLine: { // For .menu-btn > .lines > span (l1, l2, l3)
	// display: 'block' is default for View
	width: '100%',
	height: 3,
	backgroundColor: '#FFF',
	// transition needs to be implemented with Animated API or Moti
  },
  menuBtnLine2: { // For .menu-btn > .lines > .l2
	marginVertical: 6, // margin:6px 0
  },
  // body.border-dark .menu-btn > .lines > span - this class conditional styling needs state management
  // e.g., if a prop `isBorderDark` is true, change background color
  menuBtnLineBorderDark: {
	backgroundColor: '#3B451B',
  },
});