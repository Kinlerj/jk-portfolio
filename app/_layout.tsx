import { Stack } from 'expo-router';
import React, { useState } from 'react';
import { View } from 'react-native';
import { AppStyles } from '@/styles/global'; // Assuming global.ts is in styles folder
import Border from '@/components/border';
import MenuButton from '@/components/menu_button';
import SideMenu from '@/components/side_menu';

// You will need to create these components in your new structure
// For example:
// import Border from './components/Border';
// import MenuButton from './components/MenuButton';
// import SideMenu from './components/SideMenu'; // This is the SideMenu we updated earlier

export default function RootLayout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <View style={AppStyles.rootContainer}> {/* Apply your root background and base styles */}
      {/* Border Component */}
      <Border />

      {/* Menu Button - typically top right/left */}
      <MenuButton onIconClick={toggleMenu} />

      {/* Main content area managed by Expo Router's Stack */}
      <Stack
        screenOptions={{
          headerShown: false, // Hide default header if you want a custom one
          // Add other common header styles here if you have a header
        }}
      />

      {/* Side Menu - typically absolute positioned */}
      <SideMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </View>
  );
}
