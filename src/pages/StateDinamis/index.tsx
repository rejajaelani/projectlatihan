import {Alert, Button, StyleSheet, Text, View} from 'react-native';
import React, {Component, useState} from 'react';

const Hitung = () => {
  const [number, setNumber] = useState(0);
  return (
    <View>
      <Text>{number}</Text>
      <Button title="Tambah" onPress={() => setNumber(number + 1)} />
    </View>
  );
};

class HitungClass extends Component {
  state = {
    number: 0,
  };
  render() {
    return (
      <View>
        <Text>{this.state.number}</Text>
        <Button
          title="Tambah"
          onPress={() => this.setState({number: this.state.number + 1})}
        />
      </View>
    );
  }
}

export default function StateDinamis() {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.textTitle}>
        Materi Component Dinamis dengan State
      </Text>
      <Text style={styles.textSection}>
        1. State Dinamis dengan Functional Component
      </Text>
      <Hitung />
      <Hitung />
      <Text style={styles.textSection}>
        2. State Dinamis dengan Class Component
      </Text>
      <HitungClass />
      <HitungClass />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    padding: 20,
  },
  textTitle: {
    marginBottom: 15,
    borderBottomWidth: 1,
    textAlign: 'center',
  },
  textSection: {
    marginTop: 10,
    marginBottom: 5,
    textAlign: 'center',
  },
});
