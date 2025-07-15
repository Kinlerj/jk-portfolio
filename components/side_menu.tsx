import React, { useEffect } from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import Animated, { useSharedValue, useAnimatedStyle, withTiming } from 'react-native-reanimated';
import { Href, useRouter } from 'expo-router';

interface SideMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const menuItems = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' },
  { label: 'Experience', path: '/experience' },
];

const SideMenu: React.FC<SideMenuProps> = ({ isOpen, onClose }) => {
  const router = useRouter();

  const menuWidth = useSharedValue(0);
  const menuOpacity = useSharedValue(0);

  const animatedMenuContainerStyle = useAnimatedStyle(() => ({
    width: menuWidth.value,
    opacity: menuOpacity.value,
  }));

  const animatedBackdropStyle = useAnimatedStyle(() => ({
    opacity: menuOpacity.value * 0.7,
    display: menuOpacity.value > 0.01 ? 'flex' : 'none',
  }));

  useEffect(() => {
    if (isOpen) {
      menuWidth.value = withTiming(300, { duration: 300 });
      menuOpacity.value = withTiming(0.9, { duration: 300 });
    } else {
      menuWidth.value = withTiming(0, { duration: 300 });
      menuOpacity.value = withTiming(0, { duration: 300 });
    }
  }, [isOpen, menuWidth, menuOpacity]);

  return (
    <>
      {isOpen && (
        <Animated.View
          style={[styles.backdrop, animatedBackdropStyle]}
          onTouchEnd={onClose}
        />
      )}
      <Animated.View style={[styles.sideMenuClosed, animatedMenuContainerStyle]}>
        <View style={styles.menuItems}>
          {menuItems.map((item) => (
            <TouchableOpacity
              key={item.label}
              style={styles.menuItem}
              onPress={() => {
                onClose();
                router.push(item.path as Href);
              }}
            >
              <Animated.Text style={styles.menuItemLink}>{item.label}</Animated.Text>
            </TouchableOpacity>
          ))}
        </View>
      </Animated.View>
    </>
  );
};

const styles = StyleSheet.create({
  backdrop: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'black',
    zIndex: 2,
  },
  sideMenuClosed: {
    height: '100%',
    width: 0,
    position: 'absolute',
    top: 0,
    right: 0,
    backgroundColor: '#111',
    opacity: 0.9,
    zIndex: 3,
  },
  sideMenuOpen: {
    height: '100%',
    width: 300,
    position: 'absolute',
    top: 0,
    right: 0,
    backgroundColor: '#111',
    opacity: 0.9,
    zIndex: 3,
  },
  menuItems: {
    margin: 0,
    padding: 0,
    position: 'absolute',
    width: '100%',
    top: '50%',
    left: 0,
    transform: [{ translateY: -50 }],
  },
  menuItem: {
    marginBottom: 16,
  },
  menuItemLink: {
    letterSpacing: 4,
    padding: 8,
    textTransform: 'uppercase',
    color: '#cacaca',
  },
  menuItemLinkHover: {
    color: '#f1f1f1',
  },
});

export default SideMenu;