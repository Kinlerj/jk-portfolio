/**
 * Root Layout Component - Main Application Structure
 * 
 * Features:
 * - Global navigation state management
 * - Theme provider for light/dark mode support
 * - Menu button and side menu integration
 * - Consistent layout across all pages
 * - Stack navigation configuration
 */

import MenuButton from '@/components/menu_button';
import SideMenu from '@/components/side_menu';
import { useAppStyles } from '@/constants/design-system';
import { useThemeColor } from '@/hooks/useThemeColor';
import { ThemeProvider } from '@/hooks/useThemeProvider';
import { Stack } from 'expo-router';
import React, { useState } from 'react';
import { View } from 'react-native';

function RootLayoutContent() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const backgroundColor = useThemeColor({}, 'background');
  const AppStyles = useAppStyles();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <View style={[AppStyles.rootContainer, { backgroundColor }]}>
      <MenuButton onIconClick={toggleMenu} />
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      />
      <SideMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </View>
  );
}export default function RootLayout() {
  return (
    <ThemeProvider>
      <RootLayoutContent />
    </ThemeProvider>
  );
}
