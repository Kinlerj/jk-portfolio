import React, { useState } from 'react';
import { Animated, TouchableOpacity, Text, StyleSheet } from 'react-native';

const AnimatedButton = ({ title, onPress }: { title: string; onPress: () => void }) => {
  const [hoverAnim] = useState(new Animated.Value(1)); // Initial scale value

  const handlePressIn = () => {
    Animated.timing(hoverAnim, {
      toValue: 0.95, // Slightly shrink the button
      duration: 150,
      useNativeDriver: true,
    }).start();
  };

  const handlePressOut = () => {
    Animated.timing(hoverAnim, {
      toValue: 1, // Return to original size
      duration: 150,
      useNativeDriver: true,
    }).start();
  };

  return (
    <TouchableOpacity
      onPress={onPress}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      activeOpacity={0.8}
    >
      <Animated.View
        style={[
          styles.btnCustom,
          {
            transform: [{ scale: hoverAnim }],
          },
        ]}
      >
        <Text style={styles.btnText}>{title}</Text>
      </Animated.View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btnCustom: {
    fontFamily: 'OpenSans',
    letterSpacing: 4,
    textAlign: 'center',
    textTransform: 'uppercase',
    fontSize: 10,
    fontWeight: 'bold',
    marginRight: 16,
    marginBottom: 8,
    paddingVertical: 16,
    paddingHorizontal: 32,
    position: 'relative',
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#FFF',
  },
  btnText: {
    color: '#FFF',
  },
});

export default AnimatedButton;