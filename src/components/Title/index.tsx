import React from 'react'
import { Text } from 'react-native';
import styles from './styles';

const Title = ({text, style}: any):JSX.Element => {

  return (
    <Text style={[styles.title, style]}>{text}</Text>
  )
}

export default React.memo(Title) ;
