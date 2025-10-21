import React from 'react';
import { Pressable, Text } from 'react-native';


export default function Button({ onPress, children, style, ...rest }) {
  return (
    <Pressable onPress={onPress} style={style} {...rest}>
      <Text>{children}</Text>
    </Pressable>
  );
}
