import AnimatedButton from '@/components/animated_button';
import { useFadeInWithTranslateAnimation, usePageAnimations } from '@/styles/animations';
import { AppStyles, Colors, Fonts, FontSizes, Spacing } from '@/styles/global';
import { Href, useRouter } from 'expo-router';
import React from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import Animated from 'react-native-reanimated';

const aboutButtons = [
  { to: '/experience', label: 'My Experience' },
  { to: '/contact', label: 'Contact Me' },
];

const About: React.FC = () => {
  const router = useRouter();
  const isMobile = Dimensions.get('window').width < 992;
  
  const { container, header, content, buttons } = usePageAnimations();
  
  // Additional animation for skills section with different delay
  const skillsAnimation = useFadeInWithTranslateAnimation(20, 600);

  return (
    <View
      style={[
        AppStyles.page,
        isMobile ? styles.aboutMobile : styles.about,
      ]}
    >
      <Animated.View style={container.animatedStyle}>
        <Animated.View style={[AppStyles.sectionHeader, header.animatedStyle]}>
          <Animated.Text style={AppStyles.sectionHeader2}>
            I'm a <Animated.Text style={AppStyles.coloredText}>Programmer</Animated.Text>
          </Animated.Text>
        </Animated.View>

        <View style={{ flexDirection: isMobile ? 'column' : 'row', flexWrap: 'wrap' }}>
          {/* Info List Section */}
          <Animated.View
            style={[
              isMobile ? styles.aboutChild : AppStyles.leftColumnSmall,
              styles.aboutSectionChild,
              content.animatedStyle,
            ]}
          >
            <View style={AppStyles.subSection}>
              <Animated.Text style={AppStyles.subSectionHeader}>Name: </Animated.Text>
              <Animated.Text style={AppStyles.subSectionContent}>Joseph Kinler</Animated.Text>
            </View>
          </Animated.View>

          {/* Skills Section */}
          <Animated.View
            style={[
              isMobile ? styles.aboutChild : AppStyles.rightColumnLarge,
              styles.aboutSectionChild,
              skillsAnimation.animatedStyle,
            ]}
          >
            <View style={AppStyles.subSection}>
              <Animated.Text style={AppStyles.subSectionHeader}>HTML/CSS</Animated.Text>
              <Animated.Text style={AppStyles.subSectionContent}>5 Years</Animated.Text>
              <View style={styles.skillsSectionBar}>
                <View style={[styles.skillsSectionBarPercent, { width: '80%' }]} />
              </View>
            </View>
          </Animated.View>
        </View>

        <Animated.View style={buttons.animatedStyle}>
          {aboutButtons.map(({ to, label }) => (
            <AnimatedButton
              title={label}
              key={to}
              onPress={() => router.push(to as Href)}
            />
          ))}
      </Animated.View>
    </Animated.View>
  </View>
  );
};

const styles = StyleSheet.create({
  aboutMobile: {
    padding: Spacing.xl,
  },
  about: {
    textAlign: 'left',
    padding: Spacing.xxl,
  },
  aboutChild: {
    fontSize: FontSizes.sm,
    paddingHorizontal: '5%',
  },
  aboutSectionChild: {
    minHeight: 1,
    paddingRight: Spacing.md,
    paddingLeft: Spacing.md,
  },
  infoList: {
    margin: 0,
    marginBottom: Spacing.xl,
  },
  infoListItemStrong: {
    color: Colors.text,
    fontFamily: Fonts.robotoMono,
    textTransform: 'uppercase',
    letterSpacing: 4,
  },
  infoListItemSpan: {
    color: Colors.text,
    fontFamily: Fonts.lora,
  },
  skillsSectionBar: {
    backgroundColor: Colors.skillBarBackground,
  },
  skillsSectionBarPercent: {
    backgroundColor: Colors.skillBarFill,
    height: 6,
  },
});

export default About;