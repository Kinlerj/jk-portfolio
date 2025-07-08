import { StyleSheet } from 'react-native';

export const ContactStyles = StyleSheet.create({
  contactContainer: {
    padding: 15,
    borderRadius: 8,
    backgroundColor: '#333', // Dark background for the contact section
    marginBottom: 20, // Spacing below the section
  },
  contactForm: { // Styles for the form itself
    padding: 20,
    backgroundColor: '#444', // Slightly lighter background for the form
    borderRadius: 8,
    // Flex properties for layout are handled by parent (contentContainer) and responsive logic
  },  
  contactInfoIcons: {
    // In your original contact.css snippet, there wasn't a direct style defined
    // for `.contact-info-icons`. This View serves as the container for all
    // the individual contact details (like address, phone, email).
    // Its layout (e.g., column-wise arrangement, spacing) might be implicitly
    // handled by its parent column (e.g., `AppStyles.rightColumnSmall`).
    // If you want to explicitly center the items within this container, you might add:
    alignItems: 'center',
    justifyContent: 'center',
    // You might also add padding or margins specific to this block if needed.
  },
  contactInfo: {
    // This style maps to `.contact-info` from your contact.css.
    // Remember that text-related properties like 'textAlign' and 'fontSize'
    // are applied directly to <Text> components in React Native, not <View>s.
    // However, you can use `alignItems: 'center'` on the View to center its content.
    alignItems: 'center', // To center the icon and text horizontally within each info block
    marginBottom: 24, // From original CSS
  },
  // In your original CSS, `.contact-info > *` had `margin-bottom: 8px;`.
  // In React Native, you apply this directly to the child components (e.g., your <MaterialIcons> and <Text>).
  // So, you might add:
  contactInfoIcon: { // Apply this to your MaterialIcons component
    marginBottom: 8,
  },
  contactInfoText: { // Apply this to your Text component for the details
    fontSize: 16, // From original .contact-info
    // You might also specify fontFamily here if it's different from the default
  },
  // If you had any specific styles for the form elements that are unique to the
  // contact page (beyond what's in `AppStyles.formControl`), they would go here.
});