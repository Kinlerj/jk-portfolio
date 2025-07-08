import { StyleSheet } from 'react-native';

export const SideMenuStyles = StyleSheet.create({
  backdrop: { // New style for the overlay behind the menu
    ...StyleSheet.absoluteFillObject, // Covers the whole screen
    backgroundColor: 'black',
    // opacity will be animated by reanimated
    zIndex: 2, // Ensure it's behind the menu but above other content
  },
  sideMenuClosed: {
    height: '100%',
    width: 0,
    position: 'absolute', // Use absolute for fixed-like behavior
    top: 0,
    right: 0,
    backgroundColor: '#111',
    opacity: 0.9,
    // transition needs to be implemented with Animated API or Moti
    zIndex: 3,
  },
  sideMenuOpen: {
    height: '100%',
    width: 300,
    position: 'absolute', // Use absolute for fixed-like behavior
    top: 0,
    right: 0,
    backgroundColor: '#111',
    opacity: 0.9,
    // transition needs to be implemented with Animated API or Moti
    zIndex: 3,
  },
  menuItems: { // For * > .menu-items (nav)
    // list-style: none handled by View/Text
    margin: 0,
    padding: 0,
    position: 'absolute',
    width: '100%',
    top: '50%',
    left: 0,
    transform: [{ translateY: -50 }], // translateY with absolute value, not percentage in RN
  },
  menuItem: { // For * > .menu-items > li
    marginBottom: 16,
  },
  menuItemLink: { // For * > .menu-items > li > a (NavLink)
    letterSpacing: 4,
    padding: 8,
    // textDecoration: 'none' is default for Text in RN
    textTransform: 'uppercase',
    color: '#cacaca',
    // These styles need to be applied to the Text component INSIDE the TouchableOpacity/Pressable
  },
  // :hover effect needs to be handled with TouchableOpacity on* events
  menuItemLinkHover: { // Example of how hover style would be applied in JS logic
    color: '#f1f1f1',
  },
});