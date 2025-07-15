import AnimatedButton from '@/components/animated_button';
import { useFadeInAnimation } from '@/styles/animations';
import { AppStyles, Colors, Fonts, FontSizes, Spacing } from '@/styles/global';
import React, { useState } from 'react';
import { Alert, StyleSheet, TextInput, View } from 'react-native';
import Animated from 'react-native-reanimated';

const contactInfo = [
  { iconName: 'place', details: 'Rochester, MN' },
  { iconName: 'phone', details: '(xxx)xxx-xxxx' },
  { iconName: 'email', details: 'kinlerj@gmail.com' },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });

  const handleSubmit = () => {
    if (Object.values(form).some((field) => !field)) {
      Alert.alert('Error', 'Please fill in all fields.');
      return;
    }
    Alert.alert('Success', 'Message sent (placeholder)');
    setForm({ name: '', email: '', subject: '', message: '' });
  };

  const { animatedStyle } = useFadeInAnimation();

  return (
    <View style={AppStyles.page}>
      <Animated.View style={ animatedStyle }>
        <View style={AppStyles.sectionHeader}>
          <Animated.Text style={AppStyles.sectionHeader2}>
            <Animated.Text style={AppStyles.coloredText}>Contact </Animated.Text>Me
          </Animated.Text>
        </View>
        <View style={ AppStyles.subSectionContent }>
          {contactInfo.map((item, index) => (
            <View key={index}>
              <Animated.Text style={styles.contactDetail}>{item.details}</Animated.Text>
            </View>
          ))}
        </View>
        <View style={styles.contactContainer}>
          <View style={styles.formContent}>
            {['Name', 'Email', 'Subject', 'Message'].map((placeholder) => (
              <TextInput
                key={placeholder}
                style={[
                  styles.textInput,
                  placeholder === 'Message' && styles.messageInput
                ]}
                placeholder={placeholder}
                placeholderTextColor={Colors.placeholder}
                multiline={placeholder === 'Message'}
                numberOfLines={placeholder === 'Message' ? 4 : 1}
                textAlignVertical={placeholder === 'Message' ? 'top' : 'center'}
                onChangeText={(text) => setForm((prev) => ({ ...prev, [placeholder.toLowerCase()]: text }))}
              />
            ))}
            <View style={styles.buttonContainer}>
              <AnimatedButton title="Send Message" onPress={handleSubmit} variant="primary"/>
            </View>
          </View>
        </View>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  contactContainer: {
    alignItems: 'center', // Center the container content
    borderRadius: 8,
    backgroundColor: Colors.cardBackground,
    marginBottom: Spacing.lg,
    marginTop: Spacing.md,
    padding: Spacing.lg, // Restore padding around the border
    marginHorizontal: Spacing.xs, // Add some horizontal margin for breathing room
  },
  formContent: {
    width: '100%',
    maxWidth: 500, // Make it wider but not too wide on large screens
  },
  buttonContainer: {
    alignItems: 'center', // Center the button
    marginTop: Spacing.sm,
  },
  contactDetail: {
    color: Colors.text,
    fontSize: FontSizes.md,
    fontFamily: Fonts.lora,
    marginBottom: Spacing.xs,
  },
  textInput: {
    fontFamily: Fonts.lora,
    width: '100%',
    height: 48,
    paddingHorizontal: Spacing.md,
    paddingVertical: Spacing.xs,
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: Colors.border,
    color: Colors.text,
    fontSize: FontSizes.sm,
    lineHeight: FontSizes.sm * 1.8,
    marginBottom: Spacing.md,
  },
  messageInput: {
    height: 120, // Make message input much taller
    paddingTop: Spacing.md, // Add top padding for better text positioning
  },
});