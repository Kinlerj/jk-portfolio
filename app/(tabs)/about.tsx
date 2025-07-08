import { Href, useRouter } from 'expo-router';
import React, { useEffect } from 'react'; // Import useEffect
import { Dimensions, Text, TouchableOpacity, View } from 'react-native';

// Import Animated and reanimated hooks
import Animated, { useSharedValue, useAnimatedStyle, withTiming, withDelay } from 'react-native-reanimated';
import { AppStyles } from '@/styles/global';
import { AboutStyles } from '@/styles/about';
import { HomeStyles } from '@/styles/home';

const aboutButtons = [
  { to: '/experience', label: 'My Experience' },
  { to: '/contact', label: 'Contact Me' },
];

const About: React.FC = () => {
  const router = useRouter();
  const isMobile = Dimensions.get('window').width < 992; // Responsive breakpoint

  // 1. Shared Values for Animations
  // Main container fade-in
  const containerOpacity = useSharedValue(0);

  // Section Header animation (fade and slight slide down)
  const headerOpacity = useSharedValue(0);
  const headerTranslateY = useSharedValue(-20);

  // Info List and Skills Section animations (fade and slide up)
  const infoSectionOpacity = useSharedValue(0);
  const infoSectionTranslateY = useSharedValue(20);

  const skillsSectionOpacity = useSharedValue(0);
  const skillsSectionTranslateY = useSharedValue(20);

  // Buttons group animation (fade in)
  const buttonsOpacity = useSharedValue(0);

  // 2. Animated Styles
  const animatedContainerStyle = useAnimatedStyle(() => {
    return {
      opacity: containerOpacity.value,
    };
  });

  const animatedHeaderStyle = useAnimatedStyle(() => {
    return {
      opacity: headerOpacity.value,
      transform: [{ translateY: headerTranslateY.value }],
    };
  });

  const animatedInfoSectionStyle = useAnimatedStyle(() => {
    return {
      opacity: infoSectionOpacity.value,
      transform: [{ translateY: infoSectionTranslateY.value }],
    };
  });

  const animatedSkillsSectionStyle = useAnimatedStyle(() => {
    return {
      opacity: skillsSectionOpacity.value,
      transform: [{ translateY: skillsSectionTranslateY.value }],
    };
  });

  const animatedButtonsStyle = useAnimatedStyle(() => {
    return {
      opacity: buttonsOpacity.value,
    };
  });

  // 3. Animation Logic on Mount
  useEffect(() => {
    // Sequence of animations
    containerOpacity.value = withTiming(1, { duration: 500 }); // Main container fades in

    headerOpacity.value = withDelay(200, withTiming(1, { duration: 500 }));
    headerTranslateY.value = withDelay(200, withTiming(0, { duration: 500 }));

    infoSectionOpacity.value = withDelay(400, withTiming(1, { duration: 500 }));
    infoSectionTranslateY.value = withDelay(400, withTiming(0, { duration: 500 }));

    skillsSectionOpacity.value = withDelay(600, withTiming(1, { duration: 500 }));
    skillsSectionTranslateY.value = withDelay(600, withTiming(0, { duration: 500 }));

    buttonsOpacity.value = withDelay(800, withTiming(1, { duration: 500 }));

  }, [
    containerOpacity,
    headerOpacity,
    headerTranslateY,
    infoSectionOpacity,
    infoSectionTranslateY,
    skillsSectionOpacity,
    skillsSectionTranslateY,
    buttonsOpacity,
  ]);

  return (
    <Animated.View // Replace MotiView with Animated.View
      style={[
        AppStyles.page, // Apply general page styles
        isMobile ? AboutStyles.aboutMobile : AboutStyles.about, // Apply responsive About styles
        animatedContainerStyle, // Apply the main container animation
      ]}
    >
      <Animated.View style={[AppStyles.sectionHeader, animatedHeaderStyle]}> {/* Apply header animation */}
        <Text style={AppStyles.sectionHeaderH2}>
          I'm a <Text style={AppStyles.colorText}>Programmer</Text> {/* Assuming colorText is defined in AppStyles */}
        </Text>
      </Animated.View>

      <View style={{ flexDirection: isMobile ? 'column' : 'row', flexWrap: 'wrap' }}> {/* Original responsive layout */}
        {/* Info List Section */}
        <Animated.View // Apply animation to this section's container
          style={[
            isMobile ? AboutStyles.aboutChild : AppStyles.leftColumnSmall, // Responsive width
            AboutStyles.aboutSectionChild, // General section child styles
            animatedInfoSectionStyle,
          ]}
        >
          <View style={AboutStyles.infoList}> {/* */}
            <View style={AboutStyles.infoListItem}> {/* */}
              <Text>
                <Text style={AboutStyles.infoListItemStrong}>Name: </Text> {/* */}
                <Text style={AboutStyles.infoListItemSpan}>Joseph Kinler</Text> {/* */}
              </Text>
            </View>
            {/* Add other info list items */}{/* */}
          </View>
        </Animated.View>

        {/* Skills Section */}
        <Animated.View // Apply animation to this section's container
          style={[
            isMobile ? AboutStyles.aboutChild : AppStyles.rightColumnLarge, // Responsive width
            AboutStyles.aboutSectionChild, // General section child styles
            animatedSkillsSectionStyle,
          ]}
        >
          <View style={AppStyles.subSection}> {/* */}
            <Text style={AppStyles.subSectionH4}>HTML/CSS</Text> {/* */}
            <Text style={AppStyles.subSectionH5}>5 Years</Text> {/* */}
            <View style={AboutStyles.skillsSectionBar}> {/* */}
              <View style={[AboutStyles.skillsSectionBarPercent, { width: '80%' }]} /> {/* */}
            </View>
          </View>
          {/* Add other skill sub-sections */}{/* */}
        </Animated.View>
      </View>

      <Animated.View style={[HomeStyles.homeBtns, animatedButtonsStyle]}> {/* Reusing homeBtns style for button group */}
        {aboutButtons.map(({ to, label }) => (
          <TouchableOpacity
            key={to}
            style={AppStyles.btnCustom} // Use the custom button styles from AppStyles
            onPress={() => router.push(to as Href)}
          >
            <Text style={{color: AppStyles.btnCustom.color, fontSize: AppStyles.btnCustom.fontSize, letterSpacing: AppStyles.btnCustom.letterSpacing, fontWeight: AppStyles.btnCustom.fontWeight, textTransform: AppStyles.btnCustom.textTransform}}>
                {label}
            </Text>
          </TouchableOpacity>
        ))}
      </Animated.View>
    </Animated.View>
  );
};

export default About;