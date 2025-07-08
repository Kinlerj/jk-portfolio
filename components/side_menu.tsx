import React, { useEffect } from 'react';
import { View, Text, TouchableOpacity, Dimensions } from 'react-native';
import Animated, { useSharedValue, useAnimatedStyle, withTiming } from 'react-native-reanimated';
import { SideMenuStyles } from '@/styles/side_menu'; // Adjust path if SideMenu is not in the same directory as global.ts
import { Href, useRouter } from 'expo-router'; // If your menu items navigate using expo-router

interface SideMenuProps {
  isOpen: boolean;
  onClose: () => void; // Function to call when menu is closed (e.g., by backdrop press)
}

const menuItems = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' },
  // Add more menu items as needed
];

const SideMenu: React.FC<SideMenuProps> = ({ isOpen, onClose }) => {
  const router = useRouter();

  // Shared values for animating width and opacity
  const menuWidth = useSharedValue(0); // Starts closed
  const menuOpacity = useSharedValue(0); // Starts invisible

  // Define animated styles for the menu container
  const animatedMenuContainerStyle = useAnimatedStyle(() => {
    return {
      width: menuWidth.value,
      opacity: menuOpacity.value,
    };
  });

  // Define animated style for the backdrop (if you have one)
  const animatedBackdropStyle = useAnimatedStyle(() => {
    return {
      opacity: menuOpacity.value * 0.7, // Adjust backdrop opacity as needed
      display: menuOpacity.value > 0.01 ? 'flex' : 'none', // Hide backdrop when menu is fully closed
    };
  });

  // Effect to run animation when isOpen prop changes
  useEffect(() => {
    if (isOpen) {
      // Animate to open state (width: 300, opacity: 0.9)
      menuWidth.value = withTiming(300, { duration: 300 }); // Match your MenuStyles.sideMenuOpen.width
      menuOpacity.value = withTiming(0.9, { duration: 300 }); // Match your MenuStyles.sideMenuOpen.opacity
    } else {
      // Animate to closed state (width: 0, opacity: 0)
      menuWidth.value = withTiming(0, { duration: 300 });
      menuOpacity.value = withTiming(0, { duration: 300 });
    }
  }, [isOpen, menuWidth, menuOpacity]);

  return (
    <>
      {/* Backdrop (optional, for clicking outside to close) */}
      {isOpen && ( // Only render backdrop if menu is conceptually open
        <Animated.View
          style={[SideMenuStyles.backdrop, animatedBackdropStyle]} // Assume you add a backdrop style to global.ts
          onTouchEnd={onClose} // Close menu on backdrop press
        />
      )}

      {/* Side Menu Container */}
      <Animated.View style={[SideMenuStyles.sideMenuClosed, animatedMenuContainerStyle]}>
        <View style={SideMenuStyles.menuItems}>
          {menuItems.map((item) => (
            <TouchableOpacity
              key={item.label}
              style={SideMenuStyles.menuItem}
              onPress={() => {
                onClose(); // Close menu
                router.push(item.path as Href); // Navigate
              }}
            >
              <Text style={SideMenuStyles.menuItemLink}>{item.label}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </Animated.View>
    </>
  );
};

export default SideMenu;