import React from 'react';
import { View, StyleSheet } from 'react-native';

const Border: React.FC = () => {
  return (
    <View> {/* This View acts as a container for the borders */}
      <View style={[styles.pageBorder, styles.borderLeft]} />
      <View style={[styles.pageBorder, styles.borderRight]} />
      <View style={[styles.pageBorder, styles.borderTop]} />
      <View style={[styles.pageBorder, styles.borderBottom]} />
    </View>
  );
};

const styles = StyleSheet.create({
  pageBorder: {
    position: 'absolute', // Use 'absolute' for fixed-like behavior relative to a containing View
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.4)',
  },
  borderTopBottom: { // For .border-top, .border-bottom
    height: 8,
    left: 12,
    right: 12,
  },
  borderTop: {
    top: 12,
  },
  borderBottom: {
    bottom: 12,
  },
  borderLeftRight: { // For .border-left, .border-right
    width: 8,
    top: 12,
    bottom: 12,
  },
  borderRight: {
    right: 12,
  },
  borderLeft: {
    left: 12,
  },
});

export default Border;