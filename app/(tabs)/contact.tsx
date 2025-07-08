import { MaterialIcons } from '@expo/vector-icons';
import React, { useState, useEffect } from 'react'; // Import useEffect
import { Alert, Platform, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Animated, { useSharedValue, useAnimatedStyle, withTiming, withDelay } from 'react-native-reanimated'; // Import reanimated

import { AppStyles } from '@/styles/global';
import { ContactStyles } from '@/styles/contact';

interface ContactInfoItem {
  iconName: keyof typeof MaterialIcons.glyphMap; // Type for MaterialIcons names
  details: string;
}

const contactInfo: ContactInfoItem[] = [
  { iconName: 'place', details: 'Richland Hills, TX' },
  { iconName: 'phone', details: '(xxx)xxx-xxxx' },
  { iconName: 'email', details: 'kinlerj@gmail.com' },
  { iconName: 'link', details: 'www.linkedin.com/in/kinlerj/' }
];

const Contact: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  // 1. Shared Values for Animations
  // Main container fade-in
  const containerOpacity = useSharedValue(0);

  // Section Header animation (fade and slight slide down)
  const headerOpacity = useSharedValue(0);
  const headerTranslateY = useSharedValue(-20);

  // Contact form animation (fade and slide up)
  const formOpacity = useSharedValue(0);
  const formTranslateY = useSharedValue(20);

  // Contact info icons animation (fade and slide up)
  const iconsOpacity = useSharedValue(0);
  const iconsTranslateY = useSharedValue(20);

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

  const animatedFormStyle = useAnimatedStyle(() => {
    return {
      opacity: formOpacity.value,
      transform: [{ translateY: formTranslateY.value }],
    };
  });

  const animatedIconsStyle = useAnimatedStyle(() => {
    return {
      opacity: iconsOpacity.value,
      transform: [{ translateY: iconsTranslateY.value }],
    };
  });

  // 3. Animation Logic on Mount
  useEffect(() => {
    // Sequence of animations
    containerOpacity.value = withTiming(1, { duration: 500 }); // Main container fades in

    headerOpacity.value = withDelay(200, withTiming(1, { duration: 500 }));
    headerTranslateY.value = withDelay(200, withTiming(0, { duration: 500 }));

    formOpacity.value = withDelay(400, withTiming(1, { duration: 500 }));
    formTranslateY.value = withDelay(400, withTiming(0, { duration: 500 }));

    iconsOpacity.value = withDelay(600, withTiming(1, { duration: 500 }));
    iconsTranslateY.value = withDelay(600, withTiming(0, { duration: 500 }));

  }, [
    containerOpacity,
    headerOpacity,
    headerTranslateY,
    formOpacity,
    formTranslateY,
    iconsOpacity,
    iconsTranslateY,
  ]);

  const handleSubmit = async () => {
    // Basic validation
    if (!name || !email || !subject || !message) {
      Alert.alert('Error', 'Please fill in all fields.');
      return;
    }

    Alert.alert('Success', 'Message sent (placeholder)'); // Placeholder for actual submission
    setName('');
    setEmail('');
    setSubject('');
    setMessage('');
  };

  return (
    <Animated.View // Replaced MotiView with Animated.View
      style={[
        AppStyles.page,
        ContactStyles.contactContainer, // Assuming contactContainer is a style in global.ts
        animatedContainerStyle,
      ]}
    >
      <Animated.View style={[AppStyles.sectionHeader, animatedHeaderStyle]}>
        <Text style={AppStyles.sectionHeaderH2}>
          <Text style={AppStyles.colorText}>Contact </Text>Me
        </Text>
      </Animated.View>

      <View style={[AppStyles.contentContainer, Platform.OS === 'web' ? {flexDirection: 'row', flexWrap: 'wrap'} : {}]}> {/* Added responsive layout for web */}
        {/* Contact Form Section */}
        <Animated.View
          style={[
            Platform.OS === 'web' ? AppStyles.leftColumnLarge : {width: '100%'}, // Responsive width for web
            ContactStyles.contactForm,
            animatedFormStyle,
          ]}
        >
          <View style={AppStyles.formGroup}>
            <TextInput
              style={AppStyles.textInput}
              placeholder="Name"
              placeholderTextColor="rgba(255,255,255,0.7)"
              value={name}
              onChangeText={setName}
            />
          </View>
          <View style={AppStyles.formGroup}>
            <TextInput
              style={AppStyles.textInput}
              placeholder="Email"
              placeholderTextColor="rgba(255,255,255,0.7)"
              keyboardType="email-address"
              value={email}
              onChangeText={setEmail}
            />
          </View>
          <View style={AppStyles.formGroup}>
            <TextInput
              style={AppStyles.textInput}
              placeholder="Subject"
              placeholderTextColor="rgba(255,255,255,0.7)"
              value={subject}
              onChangeText={setSubject}
            />
          </View>
          <View style={AppStyles.formGroup}>
            <TextInput
              style={AppStyles.textInput}
              placeholder="Message"
              placeholderTextColor="rgba(255,255,255,0.7)"
              multiline
              numberOfLines={5}
              value={message}
              onChangeText={setMessage}
            />
          </View>
          <TouchableOpacity style={[AppStyles.btnCustom, AppStyles.btnColor]} onPress={handleSubmit}>
            <Text style={{color: AppStyles.btnCustom.color, fontSize: AppStyles.btnCustom.fontSize, letterSpacing: AppStyles.btnCustom.letterSpacing, fontWeight: AppStyles.btnCustom.fontWeight, textTransform: AppStyles.btnCustom.textTransform}}>
                Send Message
            </Text>
          </TouchableOpacity>
        </Animated.View>

        {/* Contact Info Icons Section */}
        <Animated.View
          style={[
            Platform.OS === 'web' ? AppStyles.rightColumnSmall : {width: '100%', paddingHorizontal: 16}, // Responsive width for web
            animatedIconsStyle,
          ]}
        >
          <View style={ContactStyles.contactInfoIcons}>
            {contactInfo.map((item, index) => (
              <View key={index} style={ContactStyles.contactInfo}>
                <MaterialIcons name={item.iconName} size={32} color="#FFF" />
                <Text style={AppStyles.textBlock}>{item.details}</Text>
              </View>
            ))}
          </View>
        </Animated.View>
      </View>
    </Animated.View>
  );
};

export default Contact;