import {StyleSheet, Image, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import Octicons from 'react-native-vector-icons/Octicons';
import SText from './common/SText';

function ResturantImage({image}) {
  return (
    <>
      <Image
        source={
          image ? {uri: image} : {uri:'https://www.pngkey.com/png/detail/365-3654131_cart-empty-image-your-cart-is-empty.png'} }
        style={{height: 200, width: '100%', borderRadius: 15}}
      />
      <TouchableOpacity style={{position: 'absolute', top: 20, right: 20}}>
        <Octicons name="heart" size={30} color="#ffffff" />
      </TouchableOpacity>
    </>
  );
}

const ResturantInfo = ({name, rating, time}) => (
  <View
    style={{
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginTop: 10,
      paddingLeft: 5,
    }}>
    <View>
      <SText text={name} size={16} weight={600} lineHeight={21} />
      <SText
        text={`${time} min`}
        size={14}
        weight={400}
        color="#6B6B6B"
        lineHeight={21}
      />
    </View> 
    <View
      style={{
        // justifyContent: '',
        backgroundColor: '#eeeeee',
        // width: 40,
        // height: 40,
        padding:10,
        borderRadius: 20,
        alignItems: 'center',
        flexDirection:"row"
      }}>
      
      <SText text={rating} size={12} weight={600} containerStyle={{marginRight:3}} />
      <SText text='⭐' size={14}/>
    </View>
    
  </View>
);

const ResturantItem = ({item}) => {
  const {
    id,
    name,
    distance,
    rating,
    image_url
  } = item;
  let result = distance / 30;
  let roundedResult = Math.floor(result).toString();

  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.8}>
      <ResturantImage image={image_url} />
      <ResturantInfo name={name} rating={rating} time={roundedResult}/>
    </TouchableOpacity>
  );
};

export default ResturantItem;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    marginTop: 10,
    paddingHorizontal: 8,
    paddingVertical: 10,
    borderRadius: 15,
    marginHorizontal: 10,
    marginBottom: 10,
  },
});
