import {Alert, Button, Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import macbook from '../../images/macbook.jpg';

export default function Product(props) {
  return (
    <View style={styles.BoxStyle}>
      <Image
        style={styles.ImageStyle}
        // // Pemanggilan Image lewat URL
        // source={{
        //   uri: 'https://media.cnn.com/api/v1/images/stellar/prod/220715121407-macbook-air-m2-review-1.jpg?c=16x9&q=h_720,w_1280,c_fill',
        // }}
        // Pemanggilan Image local
        source={macbook}
      />
      <Text style={styles.TitleStyle}>New Macbook Pro M2 2023</Text>
      <Text style={styles.PriceStyle}>Rp. 25.000.000,-</Text>
      <Text style={styles.LocationStyle}>Jakarta Barat</Text>
      <View style={styles.ButtonStyle}>
        <Button onPress={props.clikTambahPrdk} color="#54A777" title="BELI" />
      </View>
      {/* <StylingComponent /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  BoxStyle: {
    margin: 20,
    padding: 10,
    width: 200,
    height: 250,
    backgroundColor: '#E2E0E2',
    borderRadius: 10,
  },
  ImageStyle: {
    marginBottom: 10,
    width: 180,
    height: 100,
    borderRadius: 10,
  },
  TitleStyle: {
    marginBottom: 10,
    color: '#000',
    fontSize: 12,
    fontWeight: 'bold',
  },
  PriceStyle: {
    marginBottom: 5,
    color: '#FF0000',
    fontSize: 12,
  },
  LocationStyle: {
    marginBottom: 15,
    fontSize: 12,
  },
  ButtonStyle: {
    borderRadius: 20,
    overflow: 'hidden',
  },
});
