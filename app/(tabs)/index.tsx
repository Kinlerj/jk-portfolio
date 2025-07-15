import AnimatedButton from "@/components/animated_button";
import { AppStyles } from "@/styles/global";
import { Href, useRouter } from "expo-router";
import { useEffect } from "react";
import { View, StyleSheet } from "react-native";
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated";

const homeButtons = [
  { to: '/about', label: 'Discover More' },
  { to: '/contact', label: 'Hire Me' },
];

export default function HomeScreen() {
  const router = useRouter();

  // Create a shared value for opacity
  const opacity = useSharedValue(0);

  // Define an animated style
  const animatedStyle = useAnimatedStyle(() => {
    return {
      opacity: opacity.value,
    };
  });

  // Animate on mount (fade in)
  useEffect(() => {
    opacity.value = withTiming(1, { duration: 500 });
  }, [opacity]);

  return (
    <Animated.View style={[AppStyles.page, animatedStyle]}>
      <View style={styles.homeText}>
        <Animated.Text style={styles.homeTextH1}>I'm Joseph Kinler</Animated.Text>
        <Animated.Text style={styles.homeTextP}>
          A Friend, Dude and Buddy From Earth
        </Animated.Text>
        <View style={styles.homeBtns}>
          {homeButtons.map(({ to, label }) => (
            <AnimatedButton
              title={label}
              key={to}
              onPress={() => {
                router.push(to as Href);
              }}
            />
          ))}
        </View>
      </View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  home: {
    position: 'absolute', // Relative to its parent
    flex: 1, // Allows content to stretch/fill within the absolute position
    alignItems: 'center', // Assuming home-text is centered
    justifyContent: 'center', // Assuming home-text is vertically centered
  },
  homeText: {
    alignItems: 'center', // Center text content
  },
  homeTextH1: {
    fontFamily: 'RobotoMono', // Ensure font is loaded
    fontSize: 48,
    fontWeight: 'bold', // 'bolder' is not a direct RN value, use 'bold'
    letterSpacing: 8,
    textTransform: 'uppercase',
  },
  homeTextP: {
    fontFamily: 'Lora', // Ensure font is loaded
    fontSize: 18,
    marginTop: 16,
    marginBottom: 0,
    fontWeight: '300',
    fontStyle: 'italic',
    letterSpacing: 2,
  },
  homeBtns: {
    marginTop: 45,
    flexDirection: 'row', // To arrange buttons side-by-side
    justifyContent: 'center',
    alignItems: 'center',
  },
});

