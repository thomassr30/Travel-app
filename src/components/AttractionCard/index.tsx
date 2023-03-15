import React from 'react'
import { Image, Text, View, TouchableOpacity } from 'react-native';
import styles from './styles';

const AttractionCard = ({imageSrc, title, subtitle, onPress, style}: any) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.card, style]}>
        <Image source={{uri: imageSrc}} style={styles.image} />
        <Text style={styles.title}>{title}</Text>
        <View style={styles.row}>
            <Image style={styles.icon} source={require('../../assets/location.png')} />
            <Text style={styles.subtitle}>{subtitle}</Text>
        </View>
    </TouchableOpacity>
  )
}

export default AttractionCard