import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      
      <View style={styles.topBar}>
        <Text style={styles.topbarText}>LIMITED OFFERS AVAILABLE</Text>
      </View>

      <View style={styles.actieContainer}>
        <View style={styles.card}>
        <Text h1 style={{fontSize: 18, fontWeight: 'bold'}}>THE TOUGH AND ROUGH BURGER</Text>
          <View style={styles.actieContent}>
            <Image
            source={require('../firstapp/assets/Burger-cut-out.jpg')}
            style={{width: 150, height: 150, resizeMode: 'contain'}}
              />
            <Text
            style={{fontSize: 12, marginLeft: 10, flex: 1,flexWrap: 'wrap'}}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
              labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam e</Text>
          </View>
        </View>
      </View>

      <View style={styles.gridContainer}>
        <View style={styles.gridItem}>
        <Text style={{fontSize: 14, fontWeight: 'bold'}}>Drinks</Text>
          <View style={styles.card}>
          <Image
          source={require('../firstapp/assets/jonny-caspari-sQNq223Rr54-unsplash.jpg')}
          style={styles.itemImage}
            />
          </View>
        </View>
        <View style={styles.gridItem}>
        <Text style={{fontSize: 14, fontWeight: 'bold'}}>Fries</Text>
          <View style={styles.card}>
          <Image
          source={require('../firstapp/assets/mockup-graphics-nXjvUlE8418-unsplash.jpg')}
          style={styles.itemImage}

            />
          </View>

        </View>
        <View style={styles.gridItem}>
        <Text style={{fontSize: 14, fontWeight: 'bold'}}>Burgers</Text>

          <View style={styles.card}>
          <Image
          source={require('../firstapp/assets/Burger-cut-out.jpg')}
          style={styles.itemImage}

            />
          </View>

        </View>
        <View style={styles.gridItem}>
        <Text style={{fontSize: 14, fontWeight: 'bold'}}>Food</Text>

          <View style={styles.card}>
          <Image
          source={require('../firstapp/assets/Burger-top-vies.png')}
          style={styles.itemImage}

            />
          </View>

        </View>
      </View>

      <View style={styles.navContainer}>
        <Text style={{fontSize: 14, fontWeight: 'bold', color: '#F2BE5C'}}>Home</Text>
        <Text style={{fontSize: 14, fontWeight: 'bold', color: '#F2BE5C'}}>Coupons</Text>
        <Text style={{fontSize: 14, fontWeight: 'bold', color: '#F2BE5C'}}>Profile</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  actieContent:{
    flexDirection: 'row',
    margin: 10,
  },
  container: {
    backgroundColor: '#F7F3E5',
    flex: 1,
  },
  topBar: {
    backgroundColor: '#8C2E2E',
    flex: 0.5,
    justifyContent: 'space-evenly',
  },
  topbarText: {
    color: '#F2BE5C',
    textAlign: 'center',
  },
  actieContainer: {
    flex: 3,
    padding: 20,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 10,
  },
  gridContainer: {
    flex: 5,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
  },
  gridItem: {
    height: '40%', 
    width: '40%',
    margin: 10,
    overflow: 'hidden',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },

  navContainer: {
    flex: 1,
    backgroundColor: '#2A3E59',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  itemImage: {
    maxHeight: 100,
    maxWidth: 100,
    resizeMode: 'contain',
  }
});
