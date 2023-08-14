import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import SText from './common/SText';
import {Bakery, FastFood, Pickup, SoftDrinks} from '../assests';

const categoriesData = [
  {
    id: 1,
    itemName: <Pickup height={30} width={30} />,
    title: 'Pickup',
  },
  {
    id: 2,
    itemName: <SoftDrinks height={30} width={30} />,
    title: 'Soft Drinks',
  },
  {
    id: 3,
    itemName: <Bakery height={30} width={30} />,
    title: 'Bakery Items',
  },
  {
    id: 4,
    itemName: <FastFood height={30} width={30} />,
    title: 'Fast Food',
  },
  {
    id: 5,
    itemName: <Bakery height={30} width={30} />,
    title: 'Bakery Items',
  },
  {
    id: 6,
    itemName: <FastFood height={30} width={30} />,
    title: 'Fast Food',
  },
  {
    id: 7,
    itemName: <Bakery height={30} width={30} />,
    title: 'Bakery Items',
  },
  {
    id: 8,
    itemName: <FastFood height={30} width={30} />,
    title: 'Fast Food',
  },
];

const Categories = () => {
  return (
    <View
      style={{
        backgroundColor: '#ffffff',
        paddingVertical: 10,
        paddingLeft: 5,
      }}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>

        {/* loop started for rendering icons */}
        
        {categoriesData.map((item, index) => (
          <View
          key={index}
            style={{
              flexDirection: 'column',
              alignItems: 'center',
              paddingHorizontal: 15,
            }}>
            <TouchableOpacity key={item.id} style={styles.btn}>
              {item.itemName}
            </TouchableOpacity>
            <SText text={item.title} size={14} weight={600} />
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default Categories;

const styles = StyleSheet.create({
  btn: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#eeeeee',
    width: 60,
    height: 60,
    borderRadius: 30,
    marginVertical: 5,
  },
});
