import { StyleSheet } from 'react-native';

export const AboutStyles = StyleSheet.create({
  // Media query for max-width: 992px
  aboutMobile: { // Apply conditionally if width < 992
	padding: 24,
  },
  about: { // Default desktop styles (or base for all)
	textAlign: 'left',
	// alignItems: 'unset' / justifyContent: 'unset' are not direct RN values,
	// they imply default flex behavior. flex-start is usually default.
	padding: 42,
  },
  aboutChild: { // For .about > *
	fontSize: 14,
	paddingHorizontal: '5%', // Use string for percentage
  },
  aboutSectionChild: { // For .about > .about-section > *
	minHeight: 1, // RN doesn't have min-height: 1px for divs, usually just height
	paddingRight: 16,
	paddingLeft: 16,
  },
  infoList: { // For .about > .about-section > .info-list
	margin: 0,
	marginBottom: 24,
	// list-style: none handled by using View/Text instead of ul/li
  },
  infoListItem: { // For .about > .about-section > .info-list > li
	paddingVertical: 14,
	borderBottomWidth: 1,
	borderBottomColor: 'rgba(255, 255, 255, 0.1)',
  },
  infoListItemStrong: { // For .about > .about-section > .info-list > * > strong
	fontFamily: 'RobotoMono', // Ensure font is loaded
	textTransform: 'uppercase',
	letterSpacing: 4,
  },
  infoListItemSpan: { // For .about > .about-section > .info-list > * > span
	fontFamily: 'Lora', // Ensure font is loaded
  },
  skillsSectionBar: { // For .about > .skills-section > * > .sub-section > .bar
	backgroundColor: '#E0E0E0',
  },
  skillsSectionBarPercent: { // For .about > .skills-section > * > .sub-section > .bar > .percent
	backgroundColor: '#1D220D',
	height: 6,
  },
});