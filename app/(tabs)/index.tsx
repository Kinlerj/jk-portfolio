import { AppStyles } from "@/styles/global";
import { HomeStyles } from "@/styles/home";
import { Href, useRouter } from "expo-router";
import { useEffect } from "react";
import { Text, TouchableOpacity, View } from "react-native";
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
    <Animated.View
          style={[AppStyles.page, animatedStyle]} // Apply both static styles and animated styles
        >
          <View style={HomeStyles.homeText}>
            <Text style={HomeStyles.homeTextH1}>I'm Joseph Kinler</Text>
            <Text style={HomeStyles.homeTextP}>
              A Friend, Dude and Buddy From Earth
            </Text>
            <View style={HomeStyles.homeBtns}>
              {homeButtons.map(({ to, label }) => (
                <TouchableOpacity
                  key={to}
                  style={AppStyles.btnCustom}
                  onPress={() => {
                    // You can add an exit animation here before navigating if needed
                    // For example: opacity.value = withTiming(0, { duration: 500 }, () => { runOnJS(router.push)(to as Href); });
                    router.push(to as Href);
                  }}
                >
                  <Text style={{color: AppStyles.btnCustom.color, fontSize: AppStyles.btnCustom.fontSize, letterSpacing: AppStyles.btnCustom.letterSpacing, fontWeight: AppStyles.btnCustom.fontWeight, textTransform: AppStyles.btnCustom.textTransform}}>
                    {label}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        </Animated.View>
  );
}

