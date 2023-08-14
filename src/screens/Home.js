import {
  FlatList,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
// import Notifications from '../components/Notifications'
import HeaderTabs from '../components/HeaderTabs';
import SearchBar from '../components/SearchBar';
import Categories from '../components/Categories';
import ResturantItem from '../components/ResturantItem';
import {resturantData} from '../utils/DummyData';

const MY_API_KEY =
  'mgkxFtn5-f76q4rxw8-0hNu3eYD0yEfYWlURXTU5_mc26oCN2oAUYW_cUYlKZlJd8Ps_4HN4I-sqyTCB8J-Jd__HWMSC0RLb0nphNQ3OSoVA4CXgnz-vua2jndaSZHYx';

const renderItem = ({item, index}) => {
  return <ResturantItem item={item} />;
};

const Home = () => {
  // const getResturantFromYelp

  return (
    <SafeAreaView style={styles.container}>
      {/* <Notifications /> */}
     
      <View style={{backgroundColor: '#ffffff', padding: 15}}>
        <HeaderTabs />
        <SearchBar />
      </View>
      <Categories />
      <FlatList data={resturantData} renderItem={renderItem} />
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eeeeee',
  },
});
