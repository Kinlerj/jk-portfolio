import { MaterialIcons } from '@expo/vector-icons';
import React, { useEffect } from 'react'; // Import useEffect
import { ScrollView, Text, View } from 'react-native';
import Animated, { useSharedValue, useAnimatedStyle, withTiming, withDelay } from 'react-native-reanimated'; // Import reanimated
import { AppStyles } from '@/styles/global';
import { ExperienceStyles } from '@/styles/experience';

// You'll need to map your Material-UI icons to @expo/vector-icons
// Example: School becomes <MaterialIcons name="school" size={24} color="#FFF" />
// Work becomes <MaterialIcons name="work" size={24} color="#FFF" />

const timelineItems = [
  { icon: 'school', title: "University of Texas at Arlington", subtitle: "Bachelor's Degree: 2012 - 2016", text: "Lorem ipsum..." },
  { icon: 'work', title: "Bottle Rocket Studios", subtitle: "Jun 2016 - Nov 2016", text: "Lorem ipsum..." },
  { icon: 'work', title: "Wipro Limited", subtitle: "Nov 2016 - Aug 2018", text: "Lorem ipsum..." },
  { icon: 'work', title: "Capgemini", subtitle: "Aug 2018 - Present", text: "Lorem ipsum..." },
];

const Experience: React.FC = () => {
  // 1. Shared Values for Animations
  // Main container fade-in
  const containerOpacity = useSharedValue(0);

  // Section Header animation (fade and slight slide down)
  const headerOpacity = useSharedValue(0);
  const headerTranslateY = useSharedValue(-20);

  // "Start of timeline" animation
  const startTextOpacity = useSharedValue(0);
  const startTextTranslateY = useSharedValue(20);

  // Array of shared values for each timeline item
  const timelineItemAnimations = timelineItems.map(() => ({
    opacity: useSharedValue(0),
    translateY: useSharedValue(20),
  }));

  // "End of timeline" animation
  const endTextOpacity = useSharedValue(0);
  const endTextTranslateY = useSharedValue(20);

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

  const animatedStartTextStyle = useAnimatedStyle(() => {
    return {
      opacity: startTextOpacity.value,
      transform: [{ translateY: startTextTranslateY.value }],
    };
  });

  const animatedEndTextStyle = useAnimatedStyle(() => {
    return {
      opacity: endTextOpacity.value,
      transform: [{ translateY: endTextTranslateY.value }],
    };
  });

  // Animated styles for each timeline item
  const getAnimatedTimelineItemStyle = (index: number) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    return useAnimatedStyle(() => {
      return {
        opacity: timelineItemAnimations[index].opacity.value,
        transform: [{ translateY: timelineItemAnimations[index].translateY.value }],
      };
    });
  };

  // 3. Animation Logic on Mount
  useEffect(() => {
    // Sequence of animations
    containerOpacity.value = withTiming(1, { duration: 500 }); // Main container fades in

    headerOpacity.value = withDelay(200, withTiming(1, { duration: 500 }));
    headerTranslateY.value = withDelay(200, withTiming(0, { duration: 500 }));

    startTextOpacity.value = withDelay(500, withTiming(1, { duration: 500 }));
    startTextTranslateY.value = withDelay(500, withTiming(0, { duration: 500 }));

    // Animate each timeline item sequentially
    let delay = 800; // Starting delay for the first timeline item
    timelineItems.forEach((_, index) => {
      timelineItemAnimations[index].opacity.value = withDelay(delay, withTiming(1, { duration: 500 }));
      timelineItemAnimations[index].translateY.value = withDelay(delay, withTiming(0, { duration: 500 }));
      delay += 300; // Increment delay for the next item
    });

    // Animate "End of timeline" after all items
    endTextOpacity.value = withDelay(delay, withTiming(1, { duration: 500 }));
    endTextTranslateY.value = withDelay(delay, withTiming(0, { duration: 500 }));

  }, [
    containerOpacity,
    headerOpacity,
    headerTranslateY,
    startTextOpacity,
    startTextTranslateY,
    endTextOpacity,
    endTextTranslateY,
    // Add all timelineItemAnimations dependencies
    ...timelineItemAnimations.flatMap(anim => [anim.opacity, anim.translateY])
  ]);


  return (
    <Animated.View // Replace MotiView with Animated.View
      style={[
        AppStyles.page,
        animatedContainerStyle,
      ]}
    >
      <Animated.View style={[AppStyles.sectionHeader, animatedHeaderStyle]}>
        <Text style={AppStyles.sectionHeaderH2}>
          My <Text style={AppStyles.colorText}>Journey</Text>
        </Text>
      </Animated.View>

      <ScrollView contentContainerStyle={ExperienceStyles.resumeTimeline}>
        {/* Start of timeline */}
        <Animated.View style={[ExperienceStyles.timelineContent, AppStyles.subSection, animatedStartTextStyle]}>
          <Text style={AppStyles.subSectionH5}>The start of the universe...</Text>
        </Animated.View>

        {timelineItems.map((item, index) => {
          const animatedItemStyle = getAnimatedTimelineItemStyle(index); // Get animated style for each item
          return (
            <Animated.View key={index} style={[animatedItemStyle]}>
              {/* You'd build out your custom timeline item structure here */}
              {/* This replaces Material-UI Timeline components */}
              <View style={ExperienceStyles.timelineContent}>
                {item.icon === 'school' ? (
                  <MaterialIcons name="school" size={24} color="#FFF" style={{ marginBottom: 8 }} />
                ) : (
                  <MaterialIcons name="work" size={24} color="#FFF" style={{ marginBottom: 8 }} />
                )}
                <Text style={AppStyles.subSectionH4}>{item.title}</Text>
                <Text style={AppStyles.subSectionH5}>{item.subtitle}</Text>
                <Text style={AppStyles.textBlock}>{item.text}</Text>
              </View>
            </Animated.View>
          );
        })}

        {/* End of timeline */}
        <Animated.View style={[ExperienceStyles.timelineContent, AppStyles.subSection, animatedEndTextStyle]}>
          <Text style={AppStyles.subSectionH5}>The end of time...</Text>
        </Animated.View>
      </ScrollView>
    </Animated.View>
  );
};

export default Experience;