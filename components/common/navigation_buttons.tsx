/**
 * Navigation Buttons Component - Reusable Button Group
 * 
 * Features:
 * - Consistent button styling and behavior
 * - Flexible button configuration
 * - Animated button interactions
 * - Router integration for navigation
 */

import AnimatedButton from '@/components/animated_button';
import { ButtonConfig } from '@/types';
import { Href, useRouter } from 'expo-router';
import React from 'react';
import { StyleSheet, View } from 'react-native';

interface NavigationButtonsProps {
  buttons: ButtonConfig[];
  style?: any;
}

const NavigationButtons: React.FC<NavigationButtonsProps> = ({ buttons, style }) => {
  const router = useRouter();

  return (
    <View style={[styles.container, style]}>
      {buttons.map(({ to, label, variant = 'secondary' }) => (
        <AnimatedButton
          key={to}
          title={label}
          variant={variant}
          onPress={() => router.push(to as Href)}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    maxWidth: 400,
    width: '100%',
  },
});

export default NavigationButtons;
