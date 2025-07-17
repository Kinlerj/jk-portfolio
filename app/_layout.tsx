/**
 * Root Layout Component - Main Application Structure
 * 
 * Features:
 * - Global navigation state management
 * - Menu button and side menu integration
 * - Consistent layout across all pages
 * - Stack navigation configuration
 */

import MenuButton from '@/components/menu_button';
import SideMenu from '@/components/side_menu';
import { AppStyles } from '@/constants/design-system';
import { Stack } from 'expo-router';
import React, { useState } from 'react';
import { View } from 'react-native';

export default function RootLayout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <View style={AppStyles.rootContainer}>
      <MenuButton onIconClick={toggleMenu} />
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      />
      <SideMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </View>
  );
}
