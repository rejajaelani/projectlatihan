import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import Cart from '../../component/Cart';
import Product from '../../component/Product';

export default function Communication() {
  const [tambahProduct, setTambahProduct] = useState(0);
  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}>Materi Komunikasi antar Component</Text>
      <Cart kuantitas={tambahProduct} />
      <Product clikTambahPrdk={() => setTambahProduct(tambahProduct + 1)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
  textTitle: {
    textAlign: 'center',
  },
});
