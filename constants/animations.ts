/**
 * Animation Utilities and Hooks
 * 
 * Provides reusable animation patterns and configurations for:
 * - Fade in effects
 * - Slide and translate animations
 * - Page transition animations
 * - Staggered element animations
 */

import { AnimationTimings } from '@/constants/theme';
import { useEffect } from 'react';
import { useAnimatedStyle, useSharedValue, withDelay, withTiming } from 'react-native-reanimated';

// =============================================================================
// ANIMATION CONFIGURATION
// =============================================================================

/**
 * Centralized animation configuration for consistent timing and behavior
 */
export const AnimationConfig = {
	duration: 500,
	delays: {
		none: AnimationTimings.IMMEDIATE,
		short: AnimationTimings.SHORT,
		medium: AnimationTimings.MEDIUM,
		long: AnimationTimings.LONG,
		veryLong: AnimationTimings.VERY_LONG,
		timeline: AnimationTimings.TIMELINE_END,
	},
	translate: {
		small: 20,
		medium: 30,
		large: 50,
	},
} as const;

// =============================================================================
// ANIMATION HOOKS
// =============================================================================

/**
 * Simple fade-in animation hook
 * @param delay - Animation delay in milliseconds
 * @returns Animated style and opacity value
 */
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

/**
 * Fade-in with translate animation hook
 * @param translateY - Initial Y offset for slide effect
 * @param delay - Animation delay in milliseconds
 * @returns Animated style and shared values
 */
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

// =============================================================================
// PRE-CONFIGURED ANIMATIONS
// =============================================================================

/**
 * Comprehensive page animation hook with staggered elements
 * @returns Animation objects for container, header, content, and buttons
 */
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

/**
 * Creates staggered animations for multiple items
 * @param itemCount - Number of items to animate
 * @param baseDelay - Base delay before animations start
 * @returns Array of animation objects
 */
export const useStaggeredAnimations = (itemCount: number, baseDelay: number = AnimationConfig.delays.long) => {
	return Array.from({ length: itemCount }, (_, index) =>
		useFadeInWithTranslateAnimation(
			AnimationConfig.translate.small,
			baseDelay + index * 300
		)
	);
};

// =============================================================================
// MANUAL ANIMATION TRIGGERS
// =============================================================================

/**
 * Creates a fade-in animation that can be triggered manually
 * @param delay - Animation delay in milliseconds
 * @returns Animation object with trigger function
 */
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

/**
 * Creates a fade-in with translate animation that can be triggered manually
 * @param translateY - Initial Y offset for slide effect
 * @param delay - Animation delay in milliseconds
 * @returns Animation object with trigger function
 */
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
