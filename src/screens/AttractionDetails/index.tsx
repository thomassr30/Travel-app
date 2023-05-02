import React from 'react'
import { Image, ImageBackground, SafeAreaView, Text, View, Pressable } from 'react-native';
import styles from './styles';
import Title from '../../components/Title';
import InfoCard from '../../components/Title';
import InfCard from '../../components/InfCard/InfCard';

const AttractionDetails = ({navigation, route}: any) => {
  const {item} = route?.params || {};
  const mainImage = item?.images?.length ? item?.images[0] : null;
  const slicedImage = item?.images?.length ? item?.images?.slice(0,5) : []
  const diffImages = item.images.length - slicedImage.length;

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

        <Pressable style={styles.footer}>
          {
            slicedImage.map((image: any, idx: number) => (
              <View key={image}>
                <Image style={styles.miniImage} source={{uri: image}} />
                {
                  diffImages > 0 && idx === slicedImage.length - 1 ? 
                  (<Text style={styles.moreImages}>{`+${item.images.length - slicedImage.length}`}</Text>) :
                  null
                }
              </View>
              
            ))
          }
        </Pressable>
      </ImageBackground>
      <View style={styles.headerContainer}>
        <View style={styles.textContainer}>
          <Title style={styles.title} text={item?.name} />
          <Text style={styles.city}>{item?.city}</Text> 
        </View>
        <Title style={styles.price} text={item?.entry_price} />
      </View>
      
      <InfCard text={item.address} icon={require('../../assets/location_circle.png')} />
        
    </SafeAreaView>
  )
}

export default React.memo(AttractionDetails)