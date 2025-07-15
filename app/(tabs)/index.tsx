import AnimatedButton from "@/components/animated_button";
import { useFadeInAnimation } from "@/styles/animations";
import { AppStyles, Colors, Fonts, FontSizes, Spacing } from "@/styles/global";
import { Href, useRouter } from "expo-router";
import { StyleSheet, View } from "react-native";
import Animated from "react-native-reanimated";

const homeButtons = [
  { to: '/about', label: 'Discover More' },
  { to: '/contact', label: 'Hire Me' },
];

export default function HomeScreen() {
  const router = useRouter();
  const { animatedStyle } = useFadeInAnimation();

  return (
    <View style={AppStyles.page}>
      <Animated.View style={[styles.homeText, animatedStyle]}>
        <Animated.Text style={styles.homeTextHeader}>I'm Joseph Kinler</Animated.Text>
        <Animated.Text style={styles.homeTextSubtitle}>
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
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  homeText: {
    alignItems: 'center', // Center text content
  },
  homeTextHeader: {
    color: Colors.text,
    fontFamily: Fonts.robotoMono,
    fontSize: FontSizes.xxl,
    fontWeight: 'bold',
    letterSpacing: 8,
    textTransform: 'uppercase',
  },
  homeTextSubtitle: {
    color: Colors.text,
    fontFamily: Fonts.lora,
    fontSize: FontSizes.lg,
    marginTop: Spacing.md,
    marginBottom: 0,
    fontWeight: '300',
    fontStyle: 'italic',
    letterSpacing: 2,
  },
  homeBtns: {
    marginTop: Spacing.xxl,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

