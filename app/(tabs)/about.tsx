import { Href, useRouter } from 'expo-router';
import React, { useEffect } from 'react';
import { Dimensions, View, StyleSheet } from 'react-native';
import Animated, { useSharedValue, useAnimatedStyle, withTiming, withDelay } from 'react-native-reanimated';
import { AppStyles } from '@/styles/global';
import AnimatedButton from '@/components/animated_button';

const aboutButtons = [
  { to: '/experience', label: 'My Experience' },
  { to: '/contact', label: 'Contact Me' },
];

const About: React.FC = () => {
  const router = useRouter();
  const isMobile = Dimensions.get('window').width < 992; // Responsive breakpoint

  // Shared Values for Animations
  const containerOpacity = useSharedValue(0);
  const headerOpacity = useSharedValue(0);
  const headerTranslateY = useSharedValue(-20);
  const infoSectionOpacity = useSharedValue(0);
  const infoSectionTranslateY = useSharedValue(20);
  const skillsSectionOpacity = useSharedValue(0);
  const skillsSectionTranslateY = useSharedValue(20);
  const buttonsOpacity = useSharedValue(0);

  // Animated Styles
  const animatedContainerStyle = useAnimatedStyle(() => ({
    opacity: containerOpacity.value,
  }));

  const animatedHeaderStyle = useAnimatedStyle(() => ({
    opacity: headerOpacity.value,
    transform: [{ translateY: headerTranslateY.value }],
  }));

  const animatedInfoSectionStyle = useAnimatedStyle(() => ({
    opacity: infoSectionOpacity.value,
    transform: [{ translateY: infoSectionTranslateY.value }],
  }));

  const animatedSkillsSectionStyle = useAnimatedStyle(() => ({
    opacity: skillsSectionOpacity.value,
    transform: [{ translateY: skillsSectionTranslateY.value }],
  }));

  const animatedButtonsStyle = useAnimatedStyle(() => ({
    opacity: buttonsOpacity.value,
  }));

  // Animation Logic on Mount
  useEffect(() => {
    containerOpacity.value = withTiming(1, { duration: 500 });
    headerOpacity.value = withDelay(200, withTiming(1, { duration: 500 }));
    headerTranslateY.value = withDelay(200, withTiming(0, { duration: 500 }));
    infoSectionOpacity.value = withDelay(400, withTiming(1, { duration: 500 }));
    infoSectionTranslateY.value = withDelay(400, withTiming(0, { duration: 500 }));
    skillsSectionOpacity.value = withDelay(600, withTiming(1, { duration: 500 }));
    skillsSectionTranslateY.value = withDelay(600, withTiming(0, { duration: 500 }));
    buttonsOpacity.value = withDelay(800, withTiming(1, { duration: 500 }));
  }, []);

  return (
    <Animated.View
      style={[
        AppStyles.page,
        isMobile ? styles.aboutMobile : styles.about,
        animatedContainerStyle,
      ]}
    >
      <Animated.View style={[AppStyles.sectionHeader, animatedHeaderStyle]}>
        <Animated.Text style={AppStyles.sectionHeaderH2}>
          I'm a <Animated.Text style={AppStyles.colorText}>Programmer</Animated.Text>
        </Animated.Text>
      </Animated.View>

      <View style={{ flexDirection: isMobile ? 'column' : 'row', flexWrap: 'wrap' }}>
        {/* Info List Section */}
        <Animated.View
          style={[
            isMobile ? styles.aboutChild : AppStyles.leftColumnSmall,
            styles.aboutSectionChild,
            animatedInfoSectionStyle,
          ]}
        >
          <View style={styles.infoList}>
            <Animated.Text style={styles.infoListItemStrong}>Name: </Animated.Text>
            <Animated.Text style={styles.infoListItemSpan}>Joseph Kinler</Animated.Text>
          </View>
        </Animated.View>

        {/* Skills Section */}
        <Animated.View
          style={[
            isMobile ? styles.aboutChild : AppStyles.rightColumnLarge,
            styles.aboutSectionChild,
            animatedSkillsSectionStyle,
          ]}
        >
          <View style={AppStyles.subSection}>
            <Animated.Text style={AppStyles.subSectionH4}>HTML/CSS</Animated.Text>
            <Animated.Text style={AppStyles.subSectionH5}>5 Years</Animated.Text>
            <View style={styles.skillsSectionBar}>
              <View style={[styles.skillsSectionBarPercent, { width: '80%' }]} />
            </View>
          </View>
        </Animated.View>
      </View>

      <Animated.View>
        {aboutButtons.map(({ to, label }) => (
          <AnimatedButton
            title={label}
            key={to}
            onPress={() => router.push(to as Href)}
          />
        ))}
      </Animated.View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  aboutMobile: {
    padding: 24,
  },
  about: {
    textAlign: 'left',
    padding: 42,
  },
  aboutChild: {
    fontSize: 14,
    paddingHorizontal: '5%',
  },
  aboutSectionChild: {
    minHeight: 1,
    paddingRight: 16,
    paddingLeft: 16,
  },
  infoList: {
    margin: 0,
    marginBottom: 24,
  },
  infoListItemStrong: {
    fontFamily: 'RobotoMono',
    textTransform: 'uppercase',
    letterSpacing: 4,
  },
  infoListItemSpan: {
    fontFamily: 'Lora',
  },
  skillsSectionBar: {
    backgroundColor: '#E0E0E0',
  },
  skillsSectionBarPercent: {
    backgroundColor: '#1D220D',
    height: 6,
  },
});

export default About;