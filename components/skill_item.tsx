/**
 * Skill Item Component - Individual Skill Display
 * 
 * Features:
 * - Visual proficiency indicators with progress bars
 * - Experience type categorization with color coding
 * - Skill level classification system
 * - Responsive design with consistent spacing
 * - Animated entry effects
 * - Theme-aware styling
 */

import { Fonts, FontSizes, Spacing } from '@/constants/design-system';
import { ExperienceType, SkillLevel } from '@/types';
import { useLegacyColors } from '@/utils/theme-migration';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import Animated from 'react-native-reanimated';

interface SkillItemProps {
  skillName: string;
  experience: string;
  experienceType: ExperienceType;
  level: SkillLevel;
  proficiencyPercent: number; // 0-100
  animatedStyle?: any; // For animations
}

const SkillItem: React.FC<SkillItemProps> = ({
  skillName,
  experience,
  experienceType,
  level,
  proficiencyPercent,
  animatedStyle
}) => {
  const themeColors = useLegacyColors();
  
  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Expert': return themeColors.textHighlight;
      case 'Advanced': return '#4CAF50';
      case 'Intermediate': return '#FF9800';
      case 'Beginner': return '#F44336';
      default: return themeColors.white;
    }
  };

  const getExperienceTypeColor = (type: string) => {
    switch (type) {
      case 'Professional': return themeColors.textHighlight;
      case 'Recent': return '#2196F3';
      case 'Academic': return '#9C27B0';
      case 'Hobby': return '#FF5722';
      case 'Personal': return '#607D8B';
      default: return themeColors.white;
    }
  };

  const getProficiencyText = (percent: number) => {
    if (percent >= 90) return 'Expert';
    if (percent >= 80) return 'Proficient';
    if (percent >= 70) return 'Competent';
    if (percent >= 60) return 'Developing';
    if (percent >= 40) return 'Basic';
    return 'Learning';
  };

  return (
    <Animated.View style={[styles.skillContainer, animatedStyle, { backgroundColor: themeColors.cardBackground, borderLeftColor: themeColors.textHighlight }]}>
      <View style={styles.skillHeader}>
        <Animated.Text style={[styles.skillName, { color: themeColors.white }]}>{skillName}</Animated.Text>
        <View style={styles.skillInfo}>
          <Animated.Text style={[styles.experience, { color: themeColors.white }]}>{experience}</Animated.Text>
          <Animated.Text style={[styles.experienceType, { color: getExperienceTypeColor(experienceType) }]}>
            {experienceType}
          </Animated.Text>
        </View>
      </View>
      
      <View style={styles.skillMetrics}>
        <View style={styles.levelContainer}>
          <Animated.Text style={[styles.level, { color: getLevelColor(level) }]}>
            {level}
          </Animated.Text>
          <Animated.Text style={[styles.proficiencyText, { color: themeColors.textHighlight }]}>
            {getProficiencyText(proficiencyPercent)}
          </Animated.Text>
        </View>
      </View>
      
      <View style={styles.progressBarContainer}>
        <View style={[styles.progressBarBackground, { backgroundColor: themeColors.skillBarBackground }]}>
          <Animated.View 
            style={[
              styles.progressBarFill, 
              { width: `${proficiencyPercent}%`, backgroundColor: themeColors.textHighlight }
            ]} 
          />
        </View>
        <Animated.Text style={[styles.percentageText, { color: themeColors.white }]}>{proficiencyPercent}%</Animated.Text>
      </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  skillContainer: {
    marginBottom: Spacing.lg,
    padding: Spacing.md,
    borderRadius: 8,
    borderLeftWidth: 3,
    flex: 1,
    minWidth: 280,
    maxWidth: 320,
  },
  skillHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: Spacing.sm,
    flexWrap: 'wrap',
  },
  skillName: {
    fontFamily: Fonts.robotoMono,
    fontSize: FontSizes.lg,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: 2,
    flex: 1,
    minWidth: 120,
  },
  skillInfo: {
    alignItems: 'flex-end',
    flexShrink: 0,
  },
  experience: {
    fontFamily: Fonts.lora,
    fontSize: FontSizes.sm,
    marginBottom: Spacing.xs / 2,
  },
  experienceType: {
    fontFamily: Fonts.robotoMono,
    fontSize: FontSizes.sm - 2,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: 1,
    marginTop: Spacing.xs / 2,
  },
  level: {
    fontFamily: Fonts.robotoMono,
    fontSize: FontSizes.sm,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  skillMetrics: {
    marginBottom: Spacing.sm,
  },
  levelContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  proficiencyText: {
    fontFamily: Fonts.lora,
    fontSize: FontSizes.sm,
    fontStyle: 'italic',
    opacity: 0.9,
  },
  progressBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.sm,
  },
  progressBarBackground: {
    flex: 1,
    height: 8,
    borderRadius: 4,
    overflow: 'hidden',
  },
  progressBarFill: {
    height: '100%',
    borderRadius: 4,
  },
  percentageText: {
    fontFamily: Fonts.robotoMono,
    fontSize: FontSizes.sm,
    fontWeight: 'bold',
    minWidth: 35,
    textAlign: 'right',
  },
});

export default SkillItem;
