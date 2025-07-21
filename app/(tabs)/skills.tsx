/**
 * Skills Page - Technical Expertise Display
 * 
 * Features:
 * - Animated skill cards with proficiency levels
 * - Responsive grid layout for different screen sizes
 * - Experience types and skill categories
 * - Smooth entrance animations with staggered timing
 */

import NavigationButtons from '@/components/common/navigation_buttons';
import PageHeader from '@/components/common/page_header';
import PageWrapper from '@/components/common/page_wrapper';
import SkillItem from '@/components/skill_item';
import { SKILLS_BUTTONS, SKILLS_DATA } from '@/constants';
import { useFadeInWithTranslateAnimation, usePageAnimations } from '@/constants/animations';
import { Spacing, useAppStyles } from '@/constants/design-system';
import React from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import Animated from 'react-native-reanimated';

export default function Skills() {
  const isMobile = Dimensions.get('window').width < 992;
  const { buttons, container, content, header } = usePageAnimations();
  
  // Get theme-aware styles
  const AppStyles = useAppStyles();

  return (
    <PageWrapper
      centered
      scrollable 
      contentStyle={isMobile ? styles.skillsMobile : styles.skills}
    >
      <Animated.View style={container.animatedStyle}>
        <PageHeader animatedStyle={header.animatedStyle}>
          My <Animated.Text style={AppStyles.contentPageHeaderHighlight}>Skills</Animated.Text>
        </PageHeader>

        <Animated.View style={[styles.skillsContainer, content.animatedStyle]}>
          <View style={AppStyles.section}>
            <Animated.Text style={AppStyles.sectionHeader}>Technical Expertise</Animated.Text>
            <View style={styles.skillsGrid}>
              {SKILLS_DATA.map((skill, index) => (
                <SkillItem
                  key={skill.skillName}
                  skillName={skill.skillName}
                  experience={skill.experience}
                  experienceType={skill.experienceType}
                  level={skill.level}
                  proficiencyPercent={skill.proficiencyPercent}
                  animatedStyle={useFadeInWithTranslateAnimation(10, 700 + (index * 100)).animatedStyle}
                />
              ))}
            </View>
          </View>
        </Animated.View>

        <NavigationButtons buttons={SKILLS_BUTTONS} style={buttons.animatedStyle} />
      </Animated.View>
    </PageWrapper>
  );
};

const styles = StyleSheet.create({
  skillsMobile: {
    // Additional mobile-specific styling (padding handled by global styles)
    paddingBottom: 80, // Fixed padding to account for floating footer height
  },
  skills: {
    textAlign: 'left',
    // Additional desktop-specific styling (padding handled by global styles)  
    paddingBottom: 80, // Fixed padding to account for floating footer height
  },
  // Skills-focused layout
  skillsContainer: {
    width: '100%',
    maxWidth: 800, // Limit max width for better readability
    alignSelf: 'center', // Center the container
  },
  skillsGrid: {
    // Grid layout for skills - responsive
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: Spacing.md,
  },
});