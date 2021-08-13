import React, {Component} from 'react';
import {
  StyleSheet,
  View
} from 'react-native';
// Import library
import VlcPlayer from 'react-native-vlc-player';

export default class App extends Component {
  vlcplayer = React.createRef();

  componentDidMount() {
    console.log(this.vlcplayer)
  }

  render() {
    return (
       <View
          style={[
            styles.container
          ]}>
         <VlcPlayer
            ref={this.vlcplayer}
            style={{
              width: 300,
              height: 200,
            }}
            paused={false}
            autoplay={true}
            source={{
              uri: 'rtsp://admin:12345678@192.168.1.4:554/live2.sdp',
              autoplay: true,
              initOptions: ['--codec=avcodec'],
            }}  />
       </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'grey',
  },
});
