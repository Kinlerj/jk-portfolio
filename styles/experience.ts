import { StyleSheet } from 'react-native';

export const ExperienceStyles = StyleSheet.create({
  resumeTimeline: { // For .resume > .timeline
    paddingHorizontal: 90, // Adjusted padding based on context, 0 for top
    paddingTop: 0,
    margin: 0,
    // list-style: none handled by View/Text
    position: 'relative',
  },
  timelineContent: {
    marginBottom: 20,
    marginTop: 20,
    padding: 25,
    borderWidth: 1,
    borderColor: '#B6B6B6',
    position: 'relative',
  },
});