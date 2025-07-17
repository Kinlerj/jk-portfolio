/**
 * Contact Page - Get in Touch Form
 * 
 * Features:
 * - Contact form with validation
 * - Contact information display
 * - Form state management
 * - Animated elements with smooth transitions
 */

import AnimatedButton from '@/components/animated_button';
import PageHeader from '@/components/common/page_header';
import PageWrapper from '@/components/common/page_wrapper';
import { CONTACT_INFO } from '@/constants';
import { useFadeInAnimation, usePageAnimations } from '@/constants/animations';
import { AppStyles, Colors, Fonts, FontSizes, Spacing } from '@/constants/design-system';
import { ContactFormData } from '@/types';
import React, { useState } from 'react';
import { Alert, StyleSheet, TextInput, View } from 'react-native';
import Animated from 'react-native-reanimated';

export default function Contact() {
  const { buttons, content, header } = usePageAnimations();
  const [form, setForm] = useState<ContactFormData>({ 
    name: '', 
    email: '', 
    subject: '', 
    message: '' 
  });

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
    <PageWrapper centered scrollable>
      <Animated.View style={animatedStyle}>
        <PageHeader animatedStyle={header.animatedStyle}>
          Let's <Animated.Text style={AppStyles.contentPageHeaderHighlight}>Talk</Animated.Text>
        </PageHeader>
        
        {/* Contact Information */}
        <Animated.View style={[AppStyles.section, content.animatedStyle]}>
          <View style={AppStyles.subSectionContent}>
            {CONTACT_INFO.map((item, index) => (
              <View key={index}>
                <Animated.Text style={styles.contactDetail}>{item.details}</Animated.Text>
              </View>
            ))}
          </View>
        </Animated.View>
        
        {/* Contact Form */}
        <Animated.View style={[styles.contactContainer, buttons.animatedStyle]}>
          <Animated.Text style={AppStyles.sectionHeader}>
            Get <Animated.Text style={AppStyles.sectionHeaderHighlight}>In Touch</Animated.Text>
          </Animated.Text>
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
                onChangeText={(text) => setForm((prev) => ({ 
                  ...prev, 
                  [placeholder.toLowerCase()]: text 
                }))}
                value={form[placeholder.toLowerCase() as keyof ContactFormData]}
              />
            ))}
            <View style={styles.buttonContainer}>
              <AnimatedButton title="Send Message" onPress={handleSubmit} variant="primary"/>
            </View>
          </View>
        </Animated.View>
      </Animated.View>
    </PageWrapper>
  );
}

const styles = StyleSheet.create({
  contactContainer: {
    alignItems: 'center',
    borderRadius: 8,
    backgroundColor: Colors.cardBackground,
    marginBottom: Spacing.lg,
    marginTop: Spacing.md,
    //padding: Spacing.lg,
    marginHorizontal: Spacing.xs,
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
    color: Colors.white,
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
    color: Colors.white,
    fontSize: FontSizes.sm,
    lineHeight: FontSizes.sm * 1.8,
    marginBottom: Spacing.md,
  },
  messageInput: {
    height: 120, // Make message input much taller
    paddingTop: Spacing.md, // Add top padding for better text positioning
  },
});