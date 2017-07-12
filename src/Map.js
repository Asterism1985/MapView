/**
 * Map App
 * @asterism
 */

import React, { Component, propTypes } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Dimensions,
  ScrollView,
  TouchableOpacity,
  TouchableHighlight,
  Modal,
  Image,
  Text,
  View
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import * as Icons from './components/Icons';

const { width, height } = Dimensions.get('window');


const PinImage = (location, x, y, i, onPress) => (
  <View key={i} style={{ height: 60, width: 80, position: 'absolute', top: x, left: y, padding: 5, justifyContent: 'center', alignItems: 'center' }} >
    <View style={{ height: 35, width: 28 }} >
      <TouchableOpacity onPress={() => onPress(i)} >
        <Image style={{ height: 35, width: 28 }} resizeMode='stretch' source={require('./assets/pin1.png')} />
      </TouchableOpacity>
    </View>
    <Text style={{ fontSize: 10, color: 'white' }} >{location}</Text>
  </View>
);

export default class Map extends Component {

  static propTypes = {
  };

  constructor(props) {
    super(props);

    this.state = {
      markers: [
        {
          name: 'Bedford',
          lat: 372,
          long: 690,
        },
        {
          name: 'Plaza',
          lat: 0,
          long: 525,
        },
        {
          name: 'Times Square',
          lat: 40,
          long: 478,
        },
        {
          name: 'Grand Central',
          lat: 30,
          long: 555,
        },
        {
          name: 'Bryant',
          lat: 65,
          long: 520,
        },
        {
          name: 'Herald Square',
          lat: 96,
          long: 438,
        },
        {
          name: 'Madison',
          lat: 132,
          long: 455,
        },
        {
          name: 'Qlabs',
          lat: 138,
          long: 426,
        },
        {
          name: 'Park Ave South',
          lat: 132,
          long: 518,
        },
        {
          name: 'Meatpacking',
          lat: 160,
          long: 375,
        },
        {
          name: 'Flatiron',
          lat: 162,
          long: 475,
        },
        {
          name: 'Union Sq2',
          lat: 185,
          long: 415,
        },
        {
          name: 'Union Sq1',
          lat: 184,
          long: 435,
        },
        {
          name: 'Soho West',
          lat: 300,
          long: 350,
        },
        {
          name: 'Houston',
          lat: 280,
          long: 386,
        },
        {
          name: 'Cooper Square',
          lat: 283,
          long: 436,
        },
        {
          name: 'Lower East Side',
          lat: 353,
          long: 483,
        },
        {
          name: 'Dumbo',
          lat: 503,
          long: 485,
        },
        {
          name: 'Fidi',
          lat: 475,
          long: 323,
        },
        {
          name: 'Battery',
          lat: 503,
          long: 303,
        },
      ],
      isVisible: false,
      selected: 0,
    };

    this.onShowDetails = this.onShowDetails.bind(this);
  }

  onShowDetails(idx) {
    this.setState({
      isVisible: true,
      selected: idx
    });
  }

  onClose() {
    this.setState({
      isVisible: false
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.contentView}
          vertical={true}
          horizontal={true}
        >
          <Image resizeMode='stretch' source={require('./assets/bg.png')} >
          {this.state.markers.map((marker, i) => (
            PinImage(marker.name, marker.lat, marker.long, i, this.onShowDetails)
          ))}
          </Image>
        </ScrollView>

        <Modal
          animationType={"fade"}
          transparent={true}
          visible={this.state.isVisible}
          onRequestClose={() => {this.onClose()}}
        >
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.5)' }}>
            <TouchableHighlight onPress={() => this.onClose()}>
              <View style={styles.bubble}>
                <Image style={styles.imageView} resizeMode='stretch' source={require('./assets/templete2.jpg')} />
                <View style={{paddingTop: 10}}>
                  <Text>Title: {this.state.markers[this.state.selected].name} </Text>
                  <Text>Description: This is a plain view</Text>
                </View>
              </View>
            </TouchableHighlight>
          </View>
        </Modal>
      </View>
    );
  }
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent'
  },
  contentView: {
    flex: 1,
    backgroundColor: 'transparent'
  },
  customView: {
    width: 140,
    height: 100,
  },
  imageView: {
    width: 150,
    height: 90,
    padding: 15,
  },
  bubble: {
    width: 180,
    height: 200,
    backgroundColor: 'white',
    paddingHorizontal: 18,
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: 'center',
  },
});


