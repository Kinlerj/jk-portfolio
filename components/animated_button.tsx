import { Colors, Fonts, FontSizes, Spacing } from '@/styles/global';
import React from 'react';
import { Platform, StyleSheet, Text, TouchableOpacity } from 'react-native';
import Animated, {
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming
} from 'react-native-reanimated';

interface AnimatedButtonProps {
  title: string;
  onPress: () => void;
  variant?: 'primary' | 'secondary';
}

const AnimatedButton: React.FC<AnimatedButtonProps> = ({ 
  title, 
  onPress, 
  variant = 'secondary' 
}) => {
  const scale = useSharedValue(1);
  const rotate = useSharedValue(0);
  const darkenValue = useSharedValue(0);
  const isPressed = useSharedValue(false);

  const handlePressIn = () => {
    'worklet';
    isPressed.value = true;
    
    if (Platform.OS === 'web') {
      // Web: subtle press effect
      scale.value = withSpring(0.98, { damping: 15, stiffness: 200 });
      rotate.value = withSpring(-1, { damping: 15, stiffness: 200 });
      darkenValue.value = withTiming(0.3, { duration: 100 });
    } else {
      // Mobile: more dramatic press effect for touch feedback
      scale.value = withSpring(0.92, { damping: 12, stiffness: 150 });
      rotate.value = withSpring(-3, { damping: 12, stiffness: 150 });
      darkenValue.value = withTiming(0.5, { duration: 100 });
    }
  };

  const handlePressOut = () => {
    'worklet';
    isPressed.value = false;
    
    // Return to original state for all platforms
    scale.value = withSpring(1, { damping: 15, stiffness: 150 });
    rotate.value = withSpring(0, { damping: 15, stiffness: 150 });
    darkenValue.value = withTiming(0, { duration: 200 });
  };

  const handlePress = () => {
    'worklet';
    runOnJS(onPress)();
  };

  // Web-only hover effects
  const handleHoverIn = () => {
    if (Platform.OS === 'web' && !isPressed.value) {
      'worklet';
      scale.value = withSpring(1.02, { damping: 20, stiffness: 200 }); // Reduced from 1.05 to 1.02
      rotate.value = withSpring(-2, { damping: 20, stiffness: 200 });
      darkenValue.value = withTiming(0.2, { duration: 150 });
    }
  };

  const handleHoverOut = () => {
    if (Platform.OS === 'web' && !isPressed.value) {
      'worklet';
      scale.value = withSpring(1, { damping: 20, stiffness: 200 });
      rotate.value = withSpring(0, { damping: 20, stiffness: 200 });
      darkenValue.value = withTiming(0, { duration: 200 });
    }
  };

  // Animated style for the inner content (background + text)
  const animatedContentStyle = useAnimatedStyle(() => {
    const baseColor = variant === 'primary' ? Colors.textHighlight : 'transparent';
    
    return {
      transform: [
        { rotate: `${rotate.value}deg` }
      ],
      backgroundColor: baseColor,
    };
  });

  // Animated style for darkening overlay
  const animatedOverlayStyle = useAnimatedStyle(() => {
    return {
      backgroundColor: `rgba(0, 0, 0, ${darkenValue.value})`,
      ...StyleSheet.absoluteFillObject, // Cover the entire content area
      borderRadius: 3, // Match the content border radius
    };
  });

  // Animated style for the entire button (scale only)
  const animatedButtonStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { scale: scale.value }
      ],
    };
  });

  return (
    <TouchableOpacity
      onPress={handlePress}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      // Web-specific hover handlers
      {...(Platform.OS === 'web' && {
        onMouseEnter: handleHoverIn,
        onMouseLeave: handleHoverOut,
      })}
      activeOpacity={0.9}
      style={styles.touchableContainer}
    >
      <Animated.View style={[
        styles.btnBorder, 
        variant === 'primary' && { borderColor: Colors.textHighlight },
        animatedButtonStyle
      ]}>
        <Animated.View style={[styles.btnContent, animatedContentStyle]}>
          <Text style={[
            styles.btnText, 
            variant === 'primary' && styles.btnTextPrimary
          ]}>
            {title}
          </Text>
          <Animated.View style={animatedOverlayStyle} pointerEvents="none" />
        </Animated.View>
      </Animated.View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  touchableContainer: {
    marginRight: Spacing.md,
    marginBottom: Spacing.xs,
  },
  btnBorder: {
    // Static border container - holds the border and defines overall button shape
    borderWidth: 1,
    borderColor: Colors.button,
    borderRadius: 4,
    overflow: 'hidden',
  },
  btnContent: {
    // Inner content container - this is what gets animated (rotated/darkened)
    fontFamily: Fonts.robotoMono,
    letterSpacing: 4,
    textAlign: 'center',
    textTransform: 'uppercase',
    fontSize: FontSizes.sm,
    fontWeight: 'bold',
    paddingVertical: Spacing.md,
    paddingHorizontal: Spacing.xl,
    backgroundColor: 'transparent',
    borderRadius: 3, // Slightly smaller to fit inside border
  },
  btnCustom: {
    fontFamily: Fonts.robotoMono,
    letterSpacing: 4,
    textAlign: 'center',
    textTransform: 'uppercase',
    fontSize: FontSizes.sm,
    fontWeight: 'bold',
    paddingVertical: Spacing.md,
    paddingHorizontal: Spacing.xl,
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: Colors.button,
    borderRadius: 4,
    overflow: 'hidden',
  },
  btnPrimary: {
    backgroundColor: Colors.textHighlight,
    borderColor: Colors.textHighlight,
  },
  btnText: {
    color: Colors.text,
    fontSize: FontSizes.sm,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  btnTextPrimary: {
    color: Colors.background, // Dark text on bright background for better contrast
  },
});

export default AnimatedButton;