// src/components/MenuButton/MenuButton.tsx
import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { MenuButtonStyles } from '@/styles/menu_button'; // Import component-specific styles

interface MenuButtonProps {
  onIconClick: () => void;
  // You might add an 'isOpen' prop here to animate the lines based on menu state
}

const MenuButton: React.FC<MenuButtonProps> = ({ onIconClick }) => {
  return (
    <TouchableOpacity onPress={onIconClick} style={MenuButtonStyles.menuBtn}>
      <View style={MenuButtonStyles.menuBtnLines}>
        <View style={MenuButtonStyles.menuBtnLine} />
        <View style={[MenuButtonStyles.menuBtnLine, MenuButtonStyles.menuBtnLine2]} />
        <View style={MenuButtonStyles.menuBtnLine} />
      </View>
    </TouchableOpacity>
  );
};

export default MenuButton;