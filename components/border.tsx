import React from 'react';
import { View } from 'react-native';
import { BorderStyles } from '@/styles/border'; // Import component-specific styles

const Border: React.FC = () => {
  return (
    <View> {/* This View acts as a container for the borders */}
      <View style={[BorderStyles.pageBorder, BorderStyles.borderLeft]} />
      <View style={[BorderStyles.pageBorder, BorderStyles.borderRight]} />
      <View style={[BorderStyles.pageBorder, BorderStyles.borderTop]} />
      <View style={[BorderStyles.pageBorder, BorderStyles.borderBottom]} />
    </View>
  );
};

export default Border;