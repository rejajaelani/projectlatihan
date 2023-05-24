import React, {Component, useEffect, useState} from 'react';
import {View, Text, Alert} from 'react-native';

// class FlexBox extends Component {
//   constructor(props) {
//     super(props);
//     console.log('--> constructor');
//     this.state = {
//       subcriber: 100,
//     };
//   }

//   componentDidMount() {
//     console.log('--> componentDidMount');
//     setTimeout(() => {
//       this.setState({
//         subcriber: 400,
//       });
//     }, 2000);
//   }

//   componentDidUpdate() {
//     console.log('--> componentDidUpdate');
//     return Alert.alert('Simple Button pressed');
//   }

//   componentWillUnmount() {
//     console.log('--> compentWillUnmount');
//   }

//   render() {
//     console.log('--> render');
//     return (
//       <View>
//         <Text>Materi Flex Box</Text>
//         <Text>Subcriber {this.state.subcriber}</Text>
//         <View
//           style={{
//             marginBottom: 50,
//             flexDirection: 'row',
//             flexWrap: 'wrap',
//             justifyContent: 'space-between',
//             backgroundColor: 'grey',
//           }}>
//           <View style={{backgroundColor: '#ee5253', width: 50, height: 50}} />
//           <View style={{backgroundColor: '#feca57', flex: 1, height: 100}} />
//           <View style={{backgroundColor: '#1dd1a1', flex: 2, height: 150}} />
//           <View style={{backgroundColor: '#5f27cd', flex: 3, height: 200}} />
//         </View>
//         <View
//           style={{
//             flexDirection: 'row',
//             flexWrap: 'wrap',
//             justifyContent: 'space-between',
//             backgroundColor: 'grey',
//             alignItems: 'center',
//           }}>
//           <View style={{backgroundColor: '#ee5253', width: 50, height: 50}} />
//           <View style={{backgroundColor: '#feca57', width: 50, height: 100}} />
//           <View style={{backgroundColor: '#1dd1a1', width: 50, height: 150}} />
//           <View style={{backgroundColor: '#5f27cd', width: 50, height: 200}} />
//         </View>
//       </View>
//     );
//   }
// }

const FlexBox = () => {
  const [subcriber, setSubcriber] = useState(200);
  useEffect(() => {
    console.log('--> component did mount');
    setTimeout(() => {
      setSubcriber(400);
    }, 3000);
    return () => {
      console.log('--> componet did update');
    };
  }, [subcriber]);
  // useEffect(() => {
  //   console.log('--> component did update');
  //   setTimeout(() => {
  //     setSubcriber(400);
  //   }, 3000);
  // }, [subcriber]);
  return (
    <View>
      <Text>Materi Flex Box</Text>
      <Text>Subcriber {subcriber}</Text>
      <View
        style={{
          marginBottom: 50,
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          backgroundColor: 'grey',
        }}>
        <View style={{backgroundColor: '#ee5253', width: 50, height: 50}} />
        <View style={{backgroundColor: '#feca57', flex: 1, height: 100}} />
        <View style={{backgroundColor: '#1dd1a1', flex: 2, height: 150}} />
        <View style={{backgroundColor: '#5f27cd', flex: 3, height: 200}} />
      </View>
      <View
        style={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          backgroundColor: 'grey',
          alignItems: 'center',
        }}>
        <View style={{backgroundColor: '#ee5253', width: 50, height: 50}} />
        <View style={{backgroundColor: '#feca57', width: 50, height: 100}} />
        <View style={{backgroundColor: '#1dd1a1', width: 50, height: 150}} />
        <View style={{backgroundColor: '#5f27cd', width: 50, height: 200}} />
      </View>
    </View>
  );
};

export default FlexBox;
