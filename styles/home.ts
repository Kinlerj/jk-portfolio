import { StyleSheet } from 'react-native';

export const HomeStyles = StyleSheet.create({
  home: {
	position: 'absolute', // Relative to its parent
	flex: 1, // Allows content to stretch/fill within the absolute position
	alignItems: 'center', // Assuming home-text is centered
	justifyContent: 'center', // Assuming home-text is vertically centered
  },
  homeText: {
	// Styles for the home-text container
	alignItems: 'center', // Center text content
  },
  homeTextH1: { // For .home > .home-text > h1
	fontFamily: 'RobotoMono', // Ensure font is loaded
	fontSize: 48,
	fontWeight: 'bold', // 'bolder' is not a direct RN value, use 'bold'
	letterSpacing: 8,
	textTransform: 'uppercase',
  },
  homeTextP: { // For .home > .home-text > p
	fontFamily: 'Lora', // Ensure font is loaded
	fontSize: 18,
	marginTop: 16,
	marginBottom: 0,
	fontWeight: '300',
	fontStyle: 'italic',
	letterSpacing: 2,
  },
  homeBtns: { // For .home > .home-text > .home-btns
	marginTop: 45,
	flexDirection: 'row', // To arrange buttons side-by-side
	justifyContent: 'center',
	alignItems: 'center',
  },
});