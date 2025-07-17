/**
 * Page Wrapper Component - Consistent Page Layout
 * 
 * Features:
 * - Decorative corner cuts for visual appeal
 * - Flexible content containers (scrollable/static)
 * - Centered layout option for specific pages
 * - Consistent frame styling across all pages
 * - Responsive design with overflow handling
 * - Theme-aware styling
 */

import { useAppStyles } from '@/constants/design-system';
import { useThemeColor } from '@/hooks/useThemeColor';
import { CommonViewStyle } from '@/types';
import React, { ReactNode } from 'react';
import { ScrollView, View } from 'react-native';

interface PageWrapperProps extends CommonViewStyle {
  children: ReactNode;
}

const PageWrapper: React.FC<PageWrapperProps> = ({ 
  children, 
  scrollable = false, 
  centered = false,
  contentStyle 
}) => {
  const backgroundColor = useThemeColor({}, 'background');
  const borderColor = useThemeColor({}, 'text');
  const frameBackground = useThemeColor({}, 'text');
  
  // Get theme-aware styles
  const AppStyles = useAppStyles();
  
  const ContentContainer = scrollable ? ScrollView : View;
  const containerStyle = scrollable 
    ? [AppStyles.pageScrollView] 
    : [AppStyles.pageContent, centered && { justifyContent: 'center' as const }];
  const innerStyle = scrollable 
    ? [AppStyles.pageScrollContent, contentStyle] 
    : [contentStyle];

  return (
    <View style={[AppStyles.page, { backgroundColor: frameBackground }]}>
      <View style={[AppStyles.pageFrame, { 
        borderColor: borderColor, 
        backgroundColor: backgroundColor 
      }]}>
        {/* Corner cut overlays - positioned to create the cut effect */}
        <View style={[AppStyles.cornerCutTopLeft, { borderTopColor: frameBackground }]} />
        <View style={[AppStyles.cornerCutTopRight, { borderTopColor: frameBackground }]} />
        <View style={[AppStyles.cornerCutBottomLeft, { borderBottomColor: frameBackground }]} />
        <View style={[AppStyles.cornerCutBottomRight, { borderBottomColor: frameBackground }]} />
        
        <ContentContainer 
          style={containerStyle}
          contentContainerStyle={scrollable ? innerStyle : undefined}
          showsVerticalScrollIndicator={scrollable ? false : undefined}
        >
          {!scrollable ? (
            <View style={innerStyle}>
              {children}
            </View>
          ) : (
            children
          )}
        </ContentContainer>
      </View>
    </View>
  );
};

export default PageWrapper;
