/**
 * Page Header Component - Consistent Page Titles
 * 
 * Features:
 * - Consistent typography and spacing
 * - Animation support for smooth transitions
 * - Flexible content rendering
 * - Theme-aware styling
 */
import { AppStyles } from '@/constants/design-system';
import React from 'react';
import { ViewStyle } from 'react-native';
import Animated from 'react-native-reanimated';

interface PageHeaderProps {
  children: React.ReactNode;
  style?: ViewStyle;
  animatedStyle?: any;
}

const PageHeader: React.FC<PageHeaderProps> = ({ children, style, animatedStyle }) => {
  return (
    <Animated.View style={[AppStyles.contentPageHeader, style, animatedStyle]}>
      {children}
    </Animated.View>
  );
};

export default PageHeader;
