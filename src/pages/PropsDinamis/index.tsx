import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Story = props => {
  return (
    <View style={{alignItems: 'center'}}>
      <Image
        source={{
          uri: props.gambar,
        }}
        style={{width: 70, height: 70, borderRadius: 70 / 2}}
      />
      <Text style={{maxWidth: 70, textAlign: 'center'}}>{props.judul}</Text>
    </View>
  );
};

export default function PropsDinamis() {
  return (
    <View>
      <Text>Materi Component Dinamis dengan Props</Text>
      <ScrollView horizontal>
        <View
          style={{
            margin: 20,
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'flex-start',
            gap: 20,
          }}>
          <Story
            judul="sample 1"
            gambar="https://play-lh.googleusercontent.com/UELcKakJhwKhdDJIwpdvd1RjE3ClRXiG0nhChs69fBv-nn5ZkgSp2EkkRTnJYFtYoZyu=w240-h480-rw"
          />
          <Story
            judul="sample 2"
            gambar="https://play-lh.googleusercontent.com/UELcKakJhwKhdDJIwpdvd1RjE3ClRXiG0nhChs69fBv-nn5ZkgSp2EkkRTnJYFtYoZyu=w240-h480-rw"
          />
          <Story
            judul="sample 3"
            gambar="https://play-lh.googleusercontent.com/UELcKakJhwKhdDJIwpdvd1RjE3ClRXiG0nhChs69fBv-nn5ZkgSp2EkkRTnJYFtYoZyu=w240-h480-rw"
          />
          <Story
            judul="sample 4"
            gambar="https://play-lh.googleusercontent.com/UELcKakJhwKhdDJIwpdvd1RjE3ClRXiG0nhChs69fBv-nn5ZkgSp2EkkRTnJYFtYoZyu=w240-h480-rw"
          />
          <Story
            judul="sample 5"
            gambar="https://play-lh.googleusercontent.com/UELcKakJhwKhdDJIwpdvd1RjE3ClRXiG0nhChs69fBv-nn5ZkgSp2EkkRTnJYFtYoZyu=w240-h480-rw"
          />
          <Story
            judul="sample 6"
            gambar="https://play-lh.googleusercontent.com/UELcKakJhwKhdDJIwpdvd1RjE3ClRXiG0nhChs69fBv-nn5ZkgSp2EkkRTnJYFtYoZyu=w240-h480-rw"
          />
          <Story
            judul="sample 7"
            gambar="https://play-lh.googleusercontent.com/UELcKakJhwKhdDJIwpdvd1RjE3ClRXiG0nhChs69fBv-nn5ZkgSp2EkkRTnJYFtYoZyu=w240-h480-rw"
          />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({});
