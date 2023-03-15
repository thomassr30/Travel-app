import React from 'react'
import { Image, ImageBackground, SafeAreaView, Text, View, Pressable } from 'react-native';
import styles from './styles';

const AttractionDetails = ({navigation, route}: any) => {
  const {item} = route?.params || {};
  const mainImage = item?.images?.length ? item?.images[0] : null;

  const onGalleryNavigate = () => {
    navigation.navigate('Gallery', {images: item?.images});
  }

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={{uri: mainImage}} imageStyle={{borderRadius: 20}} style={styles.mainImage}>
        <View style={styles.header}>
          <Pressable hitSlop={8} onPress={() => navigation.goBack()}>
            <Image style={styles.icon} source={require('../../assets/back.png')} />
          </Pressable>
          <Pressable hitSlop={8}>
            <Image style={styles.icon} source={require('../../assets/share.png')} />
          </Pressable>
        </View>

        <Pressable onPress={onGalleryNavigate} style={styles.footer}>
          {
            item?.images?.length ? item?.images?.map((imag: any) => (
              <Image key={imag} style={styles.miniImage} source={{uri: imag}} />
            )):  null
          }
        </Pressable>
      </ImageBackground>
        
        <Text>{item?.name}</Text> 
    </SafeAreaView>
  )
}

export default React.memo(AttractionDetails)