import AnimatedButton from '@/components/animated_button';
import React, { useState } from 'react';
import { Alert, TextInput, TouchableOpacity, View, StyleSheet } from 'react-native';
import Animated from 'react-native-reanimated';

const contactInfo = [
  { iconName: 'place', details: 'Rochester, MN' },
  { iconName: 'phone', details: '(xxx)xxx-xxxx' },
  { iconName: 'email', details: 'kinlerj@gmail.com' },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });

  const handleSubmit = () => {
    if (Object.values(form).some((field) => !field)) {
      Alert.alert('Error', 'Please fill in all fields.');
      return;
    }
    Alert.alert('Success', 'Message sent (placeholder)');
    setForm({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <View style={styles.page}>
      <View style={styles.sectionHeader}>
        <Animated.Text style={styles.sectionHeaderH2}>Contact Me</Animated.Text>
      </View>
      <View>
        {contactInfo.map((item, index) => (
          <View key={index}>
            <Animated.Text>{item.details}</Animated.Text>
          </View>
        ))}
      </View>
      <View style={styles.contactContainer}>
        <View style={{ width: '100%' }}>
          {['Name', 'Email', 'Subject', 'Message'].map((placeholder) => (
            <TextInput
              key={placeholder}
              style={styles.textInput}
              placeholder={placeholder}
              placeholderTextColor="rgba(255,255,255,0.7)"
              onChangeText={(text) => setForm((prev) => ({ ...prev, [placeholder.toLowerCase()]: text }))}
            />
          ))}
          <AnimatedButton title="Send Message" onPress={handleSubmit}/>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    opacity: 1,
    position: 'absolute',
    top: 22,
    right: 22,
    bottom: 22,
    left: 22,
  },
  sectionHeader: {
    fontFamily: 'RobotoMono',
    fontSize: 28,
    fontWeight: '200',
    letterSpacing: 4,
    textTransform: 'uppercase',
    marginTop: 80,
    marginBottom: 80,
  },
  sectionHeaderH2: {
    fontWeight: '200',
    margin: 0,
  },
  contactContainer: {
    padding: 15,
    borderRadius: 8,
    backgroundColor: '#333',
    marginBottom: 20,
  },
  textInput: {
    fontFamily: 'Lora',
    width: '100%',
    height: 48,
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.1)',
    color: '#FFF',
    fontSize: 14,
    lineHeight: 14 * 1.8,
    marginBottom: 16,
  },
  btnCustom: {
    fontFamily: 'OpenSans',
    letterSpacing: 4,
    textAlign: 'center',
    textTransform: 'uppercase',
    fontSize: 10,
    fontWeight: 'bold',
    marginRight: 16,
    marginBottom: 8,
    paddingVertical: 16,
    paddingHorizontal: 32,
    position: 'relative',
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#FFF',
    color: '#FFF',
  },
});