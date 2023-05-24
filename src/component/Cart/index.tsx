import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

import BasketImage from '../../images/purchase.png';

export default function Cart(props) {
  return (
    <View style={styles.Wraper}>
      <View style={styles.BasketStyle}>
        <Text style={styles.BadgeStyle}>{props.kuantitas}</Text>
        <Image source={BasketImage} style={styles.ImageStyle} />
      </View>
      <Text style={styles.TitleStyle}>keranjang belanja anda</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  Wraper: {
    marginTop: 20,
    padding: 50,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f3f3',
  },
  BadgeStyle: {
    position: 'absolute',
    top: 10,
    right: 0,
    fontSize: 16,
    color: '#ffff',
    padding: 5,
    borderRadius: 20,
    backgroundColor: '#8BCFA9',
  },
  TitleStyle: {
    textTransform: 'capitalize',
    fontSize: 18,
    color: '#000',
  },
  BasketStyle: {
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
    width: 150,
    height: 150,
    borderRadius: 100,
    backgroundColor: '#f2f2f2f2',
    borderWidth: 2,
    borderColor: '#1C95F7',
  },
  ImageStyle: {
    marginTop: 15,
    width: 100,
    height: 100,
  },
});
