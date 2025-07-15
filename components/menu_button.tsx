// src/components/MenuButton/MenuButton.tsx
import React from 'react';
import { TouchableOpacity, View, StyleSheet } from 'react-native';

interface MenuButtonProps {
  onIconClick: () => void;
}

const MenuButton: React.FC<MenuButtonProps> = ({ onIconClick }) => {
  return (
    <TouchableOpacity onPress={onIconClick} style={styles.menuBtn}>
      <View style={styles.menuBtnLines}>
        <View style={styles.menuBtnLine} />
        <View style={[styles.menuBtnLine, styles.menuBtnLine2]} />
        <View style={styles.menuBtnLine} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  menuBtn: {
    position: 'absolute',
    top: 20,
    right: 20,
    padding: 16,
    zIndex: 5,
  },
  menuBtnLines: {
    width: 32,
  },
  menuBtnLine: {
    width: '100%',
    height: 3,
    backgroundColor: '#FFF',
  },
  menuBtnLine2: {
    marginVertical: 6,
  },
  menuBtnLineBorderDark: {
    backgroundColor: '#3B451B',
  },
});

export default MenuButton;