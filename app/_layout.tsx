import Border from '@/components/border';
import MenuButton from '@/components/menu_button';
import SideMenu from '@/components/side_menu';
import { AppStyles } from '@/styles/global';
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
      <Border />
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
