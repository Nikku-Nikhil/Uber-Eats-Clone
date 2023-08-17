import {
  FlatList,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image
} from 'react-native';
import React, { useState, useEffect } from 'react';
// import Notifications from '../components/Notifications'
import HeaderTabs from '../components/HeaderTabs';
import SearchBar from '../components/SearchBar';
import Categories from '../components/Categories';
import ResturantItem from '../components/ResturantItem';
// import {resturantData} from '../utils/DummyData';
import {BEARER_TOKEN} from "@env";
import axios from 'axios';
import SLoader from '../components/common/SLoader';
import SText from '../components/common/SText';



const renderItem = ({item, index}) => {
  return <ResturantItem item={item} />;
};

const Home = () => {
  const [resturantData, setResturantData]= useState([]);
  const [item, setItem]=useState('');
  const [loading, setLoading]= useState(false);

  const getData = async (itemVal) => {
    try {
      setLoading(true)
      const response = await axios.get(
        `https://api.yelp.com/v3/businesses/search?term=${itemVal}&latitude=37.786882&longitude=-122.399972`,
        {
          headers: {
            Authorization: `Bearer ${BEARER_TOKEN}`,
          },
        }
      ); 
      setResturantData(response.data.businesses);
      setLoading(false);
    } catch (error) {
      console.error('API Error:', error.message);
      setLoading(false);
    }
  };
  
    useEffect(()=>{
      getData('burger')
    },[])

  return (
    <SafeAreaView style={styles.container}>
      {/* <Notifications /> */}
      <View style={{backgroundColor: '#ffffff', padding: 15}}>
      <HeaderTabs />
      <SearchBar 
        value={item}
        onChangeText={(val)=>setItem(val)}
        onPress={()=>getData(item)}
      />
    </View>
    <Categories />
      {loading && <SLoader />}
      {
        resturantData.length > 0 ?
        
       
      <FlatList data={resturantData} renderItem={renderItem} />
        :
        <View style={styles.emptyPage}>
          <Image source={require('../assests/png/notfound.png')} />
          <SText text='Oopss...' size={20} containerStyle={{marginBottom:5}} />
          <SText text='Nothing found 😥' size={16} />
        </View>
      }
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eeeeee',
  },
  emptyPage:{
    borderRadius:10,
    height:300,
    width:300,
    elevation:30,
    backgroundColor:"#fff",
    alignSelf:"center",
    marginTop:100,
    justifyContent:"center",
    alignItems:"center"
  }
});
