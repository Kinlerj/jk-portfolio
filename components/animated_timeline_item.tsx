import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Animated, { useSharedValue, useAnimatedStyle, withTiming, withDelay } from 'react-native-reanimated';
import { MaterialIcons } from '@expo/vector-icons';
import { Colors, FontSizes, Spacing } from '@/styles/global';

interface TimelineItemProps {
  icon: 'school' | 'work';
  title: string;
  subtitle: string;
  text: string;
  delay: number;
}

const AnimatedTimelineItem: React.FC<TimelineItemProps> = ({ icon, title, subtitle, text, delay }) => {
  const opacity = useSharedValue(0);
  const translateY = useSharedValue(20);

  const animatedStyle = useAnimatedStyle(() => ({
    opacity: opacity.value,
    transform: [{ translateY: translateY.value }],
  }));

  useEffect(() => {
    opacity.value = withDelay(delay, withTiming(1, { duration: 500 }));
    translateY.value = withDelay(delay, withTiming(0, { duration: 500 }));
  }, [delay]);

  return (
    <Animated.View style={[styles.container, animatedStyle]}>
      <View style={styles.iconContainer}>
        <MaterialIcons name={icon} size={24} color="#FFF" />
      </View>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
      <Text style={styles.text}>{text}</Text>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: Spacing.xxl,
  },
  iconContainer: {
    marginBottom: Spacing.xs,
  },
  title: {
    fontWeight: 'bold',
    textTransform: 'uppercase',
    marginTop: 0,
    marginBottom: Spacing.xs,
    color: Colors.text,
  },
  subtitle: {
    fontFamily: 'Lora',
    fontWeight: '400',
    textTransform: 'capitalize',
    marginTop: 0,
    marginBottom: Spacing.xs,
    color: Colors.text,
  },
  text: {
    fontFamily: 'Lora',
    fontSize: FontSizes.sm,
    lineHeight: 25.2, // 1.8 * 14
    marginBottom: Spacing.xl,
    color: Colors.text,
  },
});

export default AnimatedTimelineItem;