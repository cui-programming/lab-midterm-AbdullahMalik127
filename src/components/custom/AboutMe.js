import React from 'react';
import { View, Text } from 'react-native'; 
import { styles } from '../../styles/styles';

export default function AboutMe({ name, regNo }) {
  return (
    <View style={styles.header}>
      <Text style={styles.Text}>{name}</Text>
      <Text style={styles.Text}>{regNo}</Text>
    </View>
  );
}
