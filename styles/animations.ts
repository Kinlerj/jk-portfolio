import { useEffect } from 'react';
import { useAnimatedStyle, useSharedValue, withDelay, withTiming } from 'react-native-reanimated';

// Common animation configurations
export const AnimationConfig = {
  duration: 500,
  delays: {
    none: 0,
    short: 200,
    medium: 400,
    long: 600,
    veryLong: 800,
    timeline: 2000,
  },
  translate: {
    small: 20,
    medium: 30,
    large: 50,
  },
} as const;

// Shared animation hooks
export const useFadeInAnimation = (delay: number = 0) => {
  const opacity = useSharedValue(0);

  const animatedStyle = useAnimatedStyle(() => ({
    opacity: opacity.value,
  }));

  useEffect(() => {
    opacity.value = withDelay(delay, withTiming(1, { duration: AnimationConfig.duration }));
  }, [delay, opacity]);

  return { animatedStyle, opacity };
};

export const useFadeInWithTranslateAnimation = (
  translateY: number = AnimationConfig.translate.small,
  delay: number = 0
) => {
  const opacity = useSharedValue(0);
  const translateYValue = useSharedValue(translateY);

  const animatedStyle = useAnimatedStyle(() => ({
    opacity: opacity.value,
    transform: [{ translateY: translateYValue.value }],
  }));

  useEffect(() => {
    opacity.value = withDelay(delay, withTiming(1, { duration: AnimationConfig.duration }));
    translateYValue.value = withDelay(delay, withTiming(0, { duration: AnimationConfig.duration }));
  }, [delay, opacity, translateYValue]);

  return { animatedStyle, opacity, translateY: translateYValue };
};

// Pre-configured common animations
export const usePageAnimations = () => {
  const container = useFadeInAnimation(AnimationConfig.delays.none);
  const header = useFadeInWithTranslateAnimation(-AnimationConfig.translate.small, AnimationConfig.delays.short);
  const content = useFadeInWithTranslateAnimation(AnimationConfig.translate.small, AnimationConfig.delays.medium);
  const buttons = useFadeInAnimation(AnimationConfig.delays.long);

  return {
    container,
    header,
    content,
    buttons,
  };
};

export const useStaggeredAnimations = (itemCount: number, baseDelay: number = AnimationConfig.delays.long) => {
  return Array.from({ length: itemCount }, (_, index) => 
    useFadeInWithTranslateAnimation(
      AnimationConfig.translate.small, 
      baseDelay + index * 300
    )
  );
};

// Manual animation triggers (for complex cases)
export const createFadeInAnimation = (delay: number = 0) => {
  const opacity = useSharedValue(0);
  
  const animatedStyle = useAnimatedStyle(() => ({
    opacity: opacity.value,
  }));

  const trigger = () => {
    opacity.value = withDelay(delay, withTiming(1, { duration: AnimationConfig.duration }));
  };

  return { animatedStyle, trigger, opacity };
};

export const createFadeInWithTranslateAnimation = (
  translateY: number = AnimationConfig.translate.small,
  delay: number = 0
) => {
  const opacity = useSharedValue(0);
  const translateYValue = useSharedValue(translateY);

  const animatedStyle = useAnimatedStyle(() => ({
    opacity: opacity.value,
    transform: [{ translateY: translateYValue.value }],
  }));

  const trigger = () => {
    opacity.value = withDelay(delay, withTiming(1, { duration: AnimationConfig.duration }));
    translateYValue.value = withDelay(delay, withTiming(0, { duration: AnimationConfig.duration }));
  };

  return { animatedStyle, trigger, opacity, translateY: translateYValue };
};
