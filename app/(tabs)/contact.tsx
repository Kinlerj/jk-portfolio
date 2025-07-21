/**
 * 
 * Features:
 * - Contact form with validation
 * - Contact information display
 * - Form state management
 * - Animated elements with smooth transitions
 * - Theme-aware styling
 */

import PageHeader from '@/components/common/page_header';
import PageWrapper from '@/components/common/page_wrapper';
import { useFadeInAnimation, usePageAnimations } from '@/constants/animations';
import { Fonts, FontSizes, Spacing, useAppStyles } from '@/constants/design-system';
import { useThemeColor } from '@/hooks/useThemeColor';
import { ContactFormData } from '@/types';
import React, { useState } from 'react';
import { Alert, StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';
import Animated from 'react-native-reanimated';

export default function Contact() {
  const { buttons, header } = usePageAnimations();
  const [form, setForm] = useState<ContactFormData>({ 
    name: '', 
    email: '', 
    subject: '', 
    message: '' 
  });

  // Theme colors for styling
  const textColor = useThemeColor({}, 'text');
  const contrastColor = useThemeColor({}, 'textContrast');
  const highlightColor = useThemeColor({}, 'textHighlight');
  const cardBackground = useThemeColor({}, 'cardBackground');
  const borderColor = useThemeColor({}, 'border');
  const placeholderColor = useThemeColor({}, 'textPlaceholder');
  const headerBackground = useThemeColor({}, 'headerBackground');
  
  // Get theme-aware styles
  const AppStyles = useAppStyles();

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
      <Animated.View style={[animatedStyle, styles.containerWithPadding]}>
        <PageHeader animatedStyle={header.animatedStyle}>
          Let's <Animated.Text style={AppStyles.contentPageHeaderHighlight}>Talk</Animated.Text>
        </PageHeader>
        
        {/* Contact Form */}
        <Animated.View style={[styles.contactContainer, buttons.animatedStyle, { backgroundColor: cardBackground }]}>
          <View style={[styles.sectionHeaderContainer, { backgroundColor: headerBackground }]}>
            <Animated.Text style={AppStyles.sectionHeader}>
              Get In <Animated.Text style={AppStyles.sectionHeaderHighlight}>Touch</Animated.Text>
            </Animated.Text>
          </View>
          <View style={styles.formContent}>
            {['Name', 'Email', 'Subject', 'Message'].map((placeholder) => (
              <TextInput
                key={placeholder}
                style={[
                  styles.textInput,
                  placeholder === 'Message' && styles.messageInput,
                  { 
                    borderColor: borderColor, 
                    color: textColor 
                  }
                ]}
                placeholder={placeholder}
                placeholderTextColor={placeholderColor}
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
              <TouchableOpacity 
                style={[styles.sendButton, { backgroundColor: highlightColor }]} 
                onPress={handleSubmit}
              >
                <Animated.Text style={[styles.sendButtonText, { color: contrastColor }]}>
                  Send Message
                </Animated.Text>
              </TouchableOpacity>
            </View>
          </View>
        </Animated.View>
      </Animated.View>
    </PageWrapper>
  );
}

const styles = StyleSheet.create({
  containerWithPadding: {
    paddingBottom: 80, // Fixed padding to account for floating footer height
  },
  contactContainer: {
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 8,
    margin: Spacing.sm,
    maxWidth: '50%',
    minWidth: 500,
  },
  sectionHeaderContainer: {
    width: '100%',
    paddingHorizontal: Spacing.sm,
    paddingVertical: Spacing.xs,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    alignItems: 'center',
    marginTop: -1, // Seamlessly connect with container border
  },
  formContent: {
    width: '75%',
    maxWidth: 500, // Make it wider but not too wide on large screens
    paddingTop: Spacing.lg,
  },
  buttonContainer: {
    alignItems: 'center', // Center the button
    marginBottom: Spacing.sm,
  },
  contactDetail: {
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
    fontSize: FontSizes.sm,
    lineHeight: FontSizes.sm * 1.8,
    marginBottom: Spacing.md,
  },
  messageInput: {
    height: 120, // Make message input much taller
    paddingTop: Spacing.md, // Add top padding for better text positioning
  },
  sendButton: {
    paddingHorizontal: Spacing.xl,
    paddingVertical: Spacing.md,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 150,
  },
  sendButtonText: {
    fontFamily: Fonts.robotoMono,
    fontSize: FontSizes.md,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
});