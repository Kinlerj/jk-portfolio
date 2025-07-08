import { StyleSheet } from 'react-native';

// --- App.css Conversion ---
export const AppStyles = StyleSheet.create({
  // Equivalent to #root and .App styles
  rootContainer: { // This would be applied to your main App.js View
    backgroundColor: '#3B451B',
    minHeight: '100%', // Equivalent to 100vh
    fontSize: 16, // Base font size, adjust as calc(10px + 2vmin) is dynamic
    textAlign: 'center',
    color: 'white',
    flex: 1, // Ensures it takes full height
  },
  appContainer: { // Applied to the div with className="App"
    padding: 22,
    flex: 1, // Allows content to fill space within rootContainer
  },
  appLogo: {
    height: '40%', // 40vmin is tricky; using percentage relative to parent height or fixed value
    // pointerEvents is not a style prop in React Native directly, manage with Touchable components
  },
  // Animation for App-logo-spin would need react-native-reanimated or similar
  appLink: {
    color: '#61dafb',
	},
  colorText: {
    color: '#72B626', // This is the color from your original .color CSS class
  },

  contentContainer: {
    // This style is often overridden or extended based on the specific page layout
    // For example, in Contact.tsx, it's combined with flexDirection: 'row' for web
    width: '100%',
    padding: 20,
    flexGrow: 1, // Allows content to grow within scroll views if needed
    alignItems: 'center', // Center content horizontally by default
  },

  // --- Columns (Converted to Flexbox) ---
  // These media queries imply a breakpoint at 992px.
  // In React Native, you'd typically use Dimensions API to conditionally apply styles.
  // The following styles are for 'min-width: 992px' scenario.
  // You'd use a ternary operator or StyleSheet.flatten based on `width` from Dimensions.
  leftColumn: {
    width: '48%',
    // float: 'left' is replaced by flexDirection: 'row' on parent
    paddingHorizontal: 8,
  },
  leftColumnSmall: {
    width: '30%',
    paddingHorizontal: 8,
  },
  leftColumnLarge: {
    width: '60%',
    paddingHorizontal: 8,
  },
  rightColumn: {
    width: '48%',
    // float: 'left' is replaced by flexDirection: 'row' on parent
    paddingHorizontal: 8,
  },
  rightColumnSmall: {
    width: '30%',
    paddingHorizontal: 8,
  },
  rightColumnLarge: {
    width: '60%',
    paddingHorizontal: 8,
  },
  subLeftColumn: {
    width: '60%',
    paddingHorizontal: 8,
  },
  subRightColumn: {
    width: '30%',
    paddingHorizontal: 8,
	},
  
  // Forms
  formGroup: {
    marginBottom: 24, // Corresponds to .form-group in App.css
  },
  textInput: {
    // This style combines properties from .form-control in App.css.
    // Use this for both <TextInput> and <TextArea> (then merge with textArea for minHeight).
    fontFamily: 'Lora', // Ensure Lora font is loaded in App.tsx
    width: '100%',
    height: 48,
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.1)',
    color: '#FFF',
    fontSize: 14,
    lineHeight: 14 * 1.8, // '1.8em' is converted to an absolute value based on fontSize
    // 'outline: none;' from CSS is a browser-specific property and doesn't
    // have a direct StyleSheet equivalent in React Native. Focus styles are handled
    // differently (e.g., via onFocus/onBlur props or specific TextInput props).
  },
  textArea: {
    // This style maps to textarea.form-control in App.css.
    // It's typically merged with the 'textInput' style for text areas.
    minHeight: 144,
  },

  // --- Page Style ---
  page: {
    flex: 1, // Ensures page takes up available space
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    opacity: 1,
    // top/right/bottom/left as '22px' for fixed positioning relative to parent, if parent is rootContainer
    position: 'absolute', // Use absolute for fixed-like positioning relative to parent
    top: 22,
    right: 22,
    bottom: 22,
    left: 22,
  },

  // --- Section Header ---
  sectionHeader: {
    fontFamily: 'RobotoMono', // Ensure font is loaded with expo-font
    fontSize: 28,
    fontWeight: '200', // Use string for font weight if font file specifies
    letterSpacing: 4,
    textTransform: 'uppercase',
    marginTop: 80,
    marginBottom: 80,
  },
  sectionHeaderH2: { // For h2 inside section-header
    fontWeight: '200',
    margin: 0,
  },

  // --- Sub Section Header ---
  subSection: {
    fontFamily: 'RobotoMono', // Ensure font is loaded
    fontSize: 14,
    letterSpacing: 2,
    marginBottom: 40,
  },
  subSectionH4: { // For h4 inside sub-section
    fontWeight: 'bold',
    textTransform: 'uppercase',
    marginTop: 0,
    marginBottom: 8,
  },
  subSectionH5: { // For h5 inside sub-section
    fontFamily: 'Lora', // Ensure font is loaded
    fontWeight: '400',
    textTransform: 'capitalize',
    marginTop: 0,
    marginBottom: 8,
  },

  // --- Text Block ---
  textBlock: {
    fontFamily: 'Lora', // Ensure font is loaded
    fontSize: 14,
    lineHeight: 1.8 * 14, // Line height is a multiplier or specific pixel value
    marginBottom: 24,
  },

	// --- App Button Style ---
  btnColor: {
    // This style maps to .btn-custom.btn-color in App.css
    backgroundColor: '#72B626',
    borderColor: '#72B626',
    color: '#FFF', // Ensure text color is white for this button variant
  },
  btnCustom: {
    fontFamily: 'OpenSans', // Ensure font is loaded
    letterSpacing: 4,
    textAlign: 'center',
    // textDecoration: 'none' is default for Text in RN
    textTransform: 'uppercase',
    fontSize: 10,
    fontWeight: 'bold',

    // display: 'inline-block' replaced by default flex behavior for View/TouchableOpacity
    lineHeight: 10, // Must be specific value for Text component or set on Text component within Touchable
    marginRight: 16, // Adjusted margin 0 16px 8px 0
    marginBottom: 8,
    paddingVertical: 16,
    paddingHorizontal: 32,
    position: 'relative', // For styling children relative to this view

    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#FFF',
    color: '#FFF', // This applies to Text inside the button
  },
  // :hover effect needs to be handled with TouchableOpacity onPressIn/onPressOut
  btnCustomHover: { // Example of how hover style would be applied in JS logic
    backgroundColor: '#111',
    opacity: 0.8,
    transform: [{ rotate: '-4deg' }], // Use an array for multiple transforms
    // transition needs to be implemented with Animated API or Moti
  },
  noselect: {
    // These properties are web-specific and have no direct RN equivalent as user selection is different
  },
});

// --- index.css (Global styles, mainly body/html) ---
export const GlobalStyles = StyleSheet.create({
  // body styles typically apply to the root View in RN
  body: {
    margin: 0,
    fontFamily: 'RobotoSlab', // Ensure font is loaded with expo-font
  },
  // code styles for <Text> components that represent code
  code: {
    fontFamily: 'SourceCodePro', // Ensure font is loaded with expo-font
  },
  // Fonts from @import url will need to be loaded via expo-font:
  // Lora, Open Sans, Roboto Mono, Source Code Pro, Roboto Slab
});