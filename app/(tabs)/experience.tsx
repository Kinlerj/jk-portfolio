import React, { useEffect } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import Animated, { useSharedValue, useAnimatedStyle, withTiming, withDelay } from 'react-native-reanimated';
import AnimatedTimelineItem from '@/components/animated_timeline_item';

const timelineItems: { icon: 'school' | 'work'; title: string; subtitle: string; text: string }[] = [
  { icon: 'school', title: "University of Texas at Arlington", subtitle: "Bachelor's Degree: 2012 - 2016", text: "Lorem ipsum..." },
  { icon: 'work', title: "Bottle Rocket Studios", subtitle: "Jun 2016 - Nov 2016", text: "Lorem ipsum..." },
  { icon: 'work', title: "Wipro Limited", subtitle: "Nov 2016 - Aug 2018", text: "Lorem ipsum..." },
  { icon: 'work', title: "Allstate", subtitle: "Aug 2018 - Present", text: "Lorem ipsum..." },
];

const Experience: React.FC = () => {
  const containerOpacity = useSharedValue(0);
  const headerOpacity = useSharedValue(0);
  const headerTranslateY = useSharedValue(-20);
  const startTextOpacity = useSharedValue(0);
  const startTextTranslateY = useSharedValue(20);
  const endTextOpacity = useSharedValue(0);
  const endTextTranslateY = useSharedValue(20);

  const animatedContainerStyle = useAnimatedStyle(() => ({
    opacity: containerOpacity.value,
  }));

  const animatedHeaderStyle = useAnimatedStyle(() => ({
    opacity: headerOpacity.value,
    transform: [{ translateY: headerTranslateY.value }],
  }));

  const animatedStartTextStyle = useAnimatedStyle(() => ({
    opacity: startTextOpacity.value,
    transform: [{ translateY: startTextTranslateY.value }],
  }));

  const animatedEndTextStyle = useAnimatedStyle(() => ({
    opacity: endTextOpacity.value,
    transform: [{ translateY: endTextTranslateY.value }],
  }));

  useEffect(() => {
    containerOpacity.value = withTiming(1, { duration: 500 });
    headerOpacity.value = withDelay(200, withTiming(1, { duration: 500 }));
    headerTranslateY.value = withDelay(200, withTiming(0, { duration: 500 }));
    startTextOpacity.value = withDelay(500, withTiming(1, { duration: 500 }));
    startTextTranslateY.value = withDelay(500, withTiming(0, { duration: 500 }));
    endTextOpacity.value = withDelay(2000, withTiming(1, { duration: 500 }));
    endTextTranslateY.value = withDelay(2000, withTiming(0, { duration: 500 }));
  }, []);

  return (
    <Animated.View style={[styles.page, animatedContainerStyle]}>
      <Animated.View style={[styles.sectionHeader, animatedHeaderStyle]}>
        <Animated.Text style={styles.sectionHeaderH2}>
          My <Animated.Text style={styles.colorText}>Journey</Animated.Text>
        </Animated.Text>
      </Animated.View>

      <ScrollView contentContainerStyle={styles.resumeTimeline}>
        <Animated.View style={[styles.timelineContent, styles.subSection, animatedStartTextStyle]}>
          <Animated.Text style={styles.subSectionH5}>The start of the universe...</Animated.Text>
        </Animated.View>

        {timelineItems.map((item, index) => (
          <AnimatedTimelineItem
            key={index}
            icon={item.icon}
            title={item.title}
            subtitle={item.subtitle}
            text={item.text}
            delay={800 + index * 300}
          />
        ))}

        <Animated.View style={[styles.timelineContent, styles.subSection, animatedEndTextStyle]}>
          <Animated.Text style={styles.subSectionH5}>The end of time...</Animated.Text>
        </Animated.View>
      </ScrollView>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  page: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    opacity: 1,
    position: 'absolute',
    top: 22,
    right: 22,
    bottom: 22,
    left: 22,
  },
  sectionHeader: {
    fontFamily: 'RobotoMono',
    fontSize: 28,
    fontWeight: '200',
    letterSpacing: 4,
    textTransform: 'uppercase',
    marginTop: 80,
    marginBottom: 80,
  },
  sectionHeaderH2: {
    fontWeight: '200',
    margin: 0,
  },
  colorText: {
    color: '#72B626',
  },
  resumeTimeline: {
    padding: 20,
  },
  timelineContent: {
    marginBottom: 40,
  },
  subSection: {
    fontFamily: 'RobotoMono',
    fontSize: 14,
    letterSpacing: 2,
    marginBottom: 40,
  },
  subSectionH5: {
    fontFamily: 'Lora',
    fontWeight: '400',
    textTransform: 'capitalize',
    marginTop: 0,
    marginBottom: 8,
  },
});

export default Experience;