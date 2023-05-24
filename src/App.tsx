// import React, {useEffect, useState} from 'react';
import React from 'react';
import {View, ScrollView} from 'react-native';
import Communication from './pages/Communication';
// import PositionReactNative from './pages/Position';
// import BoxProduct from './pages/StylingComponent';
// import PropsDinamis from './pages/PropsDinamis';
// import StateDinamis from './pages/StateDinamis';
// import FlexBox from './pages/FlexBox/index';

const App = () => {
  // const [isShow, SetsShow] = useState(true);
  // useEffect(() => {
  //   setTimeout(() => {
  //     SetsShow(false);
  //   }, 10000);
  // });
  return (
    <View>
      <ScrollView>
        <Communication />
        {/* <StateDinamis /> */}
        {/* <PropsDinamis /> */}
        {/* {isShow && <FlexBox />} */}
        {/* <PositionReactNative /> */}
        {/* <BoxProduct /> */}
      </ScrollView>
    </View>
  );
};

export default App;
