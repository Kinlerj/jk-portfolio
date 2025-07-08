/**
 * Home Screen - Portfolio Landing Page
 * 
 * Features:
 * - Animated introduction with name and tagline
 * - Navigation buttons to key sections
 * - Centered layout with fade-in animations
 * - Responsive typography and spacing
 * - Theme-aware styling
 */

import NavigationButtons from "@/components/common/navigation_buttons";
import PageWrapper from "@/components/common/page_wrapper";
import { HOME_BUTTONS, PERSONAL_INFO } from "@/constants";
import { useFadeInAnimation } from "@/constants/animations";
import { Fonts, FontSizes, Spacing } from '@/constants/design-system';
import { useThemeColor } from "@/hooks/useThemeColor";
import { StyleSheet } from "react-native";
import Animated from "react-native-reanimated";

export default function HomeScreen() {
  const { animatedStyle } = useFadeInAnimation();
  const textColor = useThemeColor({}, 'text');
  const highlightColor = useThemeColor({}, 'textHighlight');

  return (
    <PageWrapper centered>
      <Animated.View style={[styles.homeText, animatedStyle]}>
        <Animated.Text style={[styles.homeHeader, { color: textColor }]}>
          I'm <Animated.Text style={[styles.homeHeaderHighlight, { color: highlightColor }]}>{PERSONAL_INFO.name}</Animated.Text>
        </Animated.Text>
        <Animated.Text style={[styles.homeTextSubtitle, { color: textColor }]}>
          {PERSONAL_INFO.tagline}
        </Animated.Text>
        <NavigationButtons buttons={HOME_BUTTONS} style={styles.homeBtns} />
      </Animated.View>
    </PageWrapper>
  );
}

const styles = StyleSheet.create({
  homeText: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  homeHeader: {
    fontFamily: Fonts.robotoMono,
    fontSize: FontSizes.xxl,
    fontWeight: 'bold',
    letterSpacing: 8,
    textTransform: 'uppercase',
  },
  homeHeaderHighlight: {
    fontFamily: Fonts.robotoMono,
    fontSize: FontSizes.xxl,
    fontWeight: 'bold',
    letterSpacing: 8,
    textTransform: 'uppercase',
  },
  homeTextSubtitle: {
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
  },
});

