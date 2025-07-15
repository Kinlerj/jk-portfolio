import AnimatedTimelineItem from '@/components/animated_timeline_item';
import { AnimationConfig, useFadeInWithTranslateAnimation, usePageAnimations } from '@/styles/animations';
import { AppStyles, Spacing } from '@/styles/global';
import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import Animated from 'react-native-reanimated';

const timelineItems: { icon: 'school' | 'work'; title: string; subtitle: string; text: string }[] = [
  { icon: 'school', title: "University of Texas at Arlington", subtitle: "Bachelor's Degree: 2012 - 2016", text: "Lorem ipsum..." },
  { icon: 'work', title: "Bottle Rocket Studios", subtitle: "Jun 2016 - Nov 2016", text: "Lorem ipsum..." },
  { icon: 'work', title: "Wipro Limited", subtitle: "Nov 2016 - Aug 2018", text: "Lorem ipsum..." },
  { icon: 'work', title: "Allstate", subtitle: "Aug 2018 - Present", text: "Lorem ipsum..." },
];

const Experience: React.FC = () => {
  const { container, header, content } = usePageAnimations();
  
  // For the timeline end text with a longer delay
  const endTextAnimation = useFadeInWithTranslateAnimation(
    AnimationConfig.translate.small, 
    AnimationConfig.delays.timeline
  );

  return (
    <View style={AppStyles.page}>
      <Animated.View style={container.animatedStyle}>
        <Animated.View style={[AppStyles.sectionHeader, header.animatedStyle]}>
          <Animated.Text style={AppStyles.sectionHeader2}>
            My <Animated.Text style={AppStyles.coloredText}>Journey</Animated.Text>
          </Animated.Text>
        </Animated.View>

        <ScrollView contentContainerStyle={styles.resumeTimeline}>
          <Animated.View style={[styles.timelineContent, AppStyles.subSection, content.animatedStyle]}>
            <Animated.Text style={AppStyles.subSectionContent}>The start of the universe...</Animated.Text>
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

          <Animated.View style={[styles.timelineContent, AppStyles.subSection, endTextAnimation.animatedStyle]}>
            <Animated.Text style={AppStyles.subSectionContent}>The end of time...</Animated.Text>
          </Animated.View>
        </ScrollView>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  resumeTimeline: {
    padding: Spacing.lg,
  },
  timelineContent: {
    marginBottom: Spacing.xxl,
  },
});

export default Experience;