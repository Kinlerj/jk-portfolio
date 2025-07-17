/**
 * Experience Page - Professional Timeline
 * 
 * Features:
 * - Animated timeline with career progression
 * - Detailed work history with skills and locations
 * - Smooth entrance animations with staggered timing
 * - Educational background integration
 */

import AnimatedTimelineItem from '@/components/animated_timeline_item';
import NavigationButtons from '@/components/common/navigation_buttons';
import PageHeader from '@/components/common/page_header';
import PageWrapper from '@/components/common/page_wrapper';
import { EXPERIENCE_BUTTONS, TIMELINE_ITEMS } from '@/constants';
import { AnimationConfig, useFadeInWithTranslateAnimation, usePageAnimations } from '@/constants/animations';
import { AppStyles, Spacing } from '@/constants/design-system';
import { AnimationTimings } from '@/constants/theme';
import React from 'react';
import { StyleSheet } from 'react-native';
import Animated from 'react-native-reanimated';

export default function Experience() {
  const { buttons, container, header, content } = usePageAnimations();
  
  // Timeline end text with extended delay
  const endTextAnimation = useFadeInWithTranslateAnimation(
    AnimationConfig.translate.small, 
    AnimationTimings.TIMELINE_END
  );

  return (
    <PageWrapper centered scrollable>
      <Animated.View style={container.animatedStyle}>
        <PageHeader animatedStyle={header.animatedStyle}>
          My <Animated.Text style={AppStyles.contentPageHeaderHighlight}>Journey</Animated.Text>
        </PageHeader>

        <Animated.View style={[styles.timelineContent, AppStyles.section, content.animatedStyle]}>
          <Animated.Text style={AppStyles.subSectionContent}>The start of the universe...</Animated.Text>
        </Animated.View>

        {TIMELINE_ITEMS.map((item, index) => (
          <AnimatedTimelineItem
            key={index}
            icon={item.icon}
            title={item.title}
            subtitle={item.subtitle}
            text={item.text}
            delay={AnimationTimings.TIMELINE_START + (index * AnimationTimings.TIMELINE_ITEM_SPACING)}
            period={item.period}
            location={item.location}
            skills={item.skills}
          />
        ))}

        <Animated.View style={[styles.timelineContent, AppStyles.section, endTextAnimation.animatedStyle]}>
          <Animated.Text style={AppStyles.subSectionContent}>The end of time...</Animated.Text>
        </Animated.View>
        
        <NavigationButtons buttons={EXPERIENCE_BUTTONS} style={buttons.animatedStyle}/>
      </Animated.View>
    </PageWrapper>
  );
};

const styles = StyleSheet.create({
  timelineContent: {
    marginBottom: Spacing.xxl,
  },
});