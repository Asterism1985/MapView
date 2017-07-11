/**
 * Map App
 * @asterism
 */

import React, { Component, propTypes } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Dimensions,
  Image,
  Text,
  View
} from 'react-native';
import MapView from 'react-native-maps';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import CustomCallout from './components/CustomCallout';
import PinMark from './assets/pin_marker2.png';
import image1 from './assets/templete1.png';

const { width, height } = Dimensions.get('window');

const ASPECT_RATIO = width / height;
const LATITUDE = 37.78825;
const LONGITUDE = -122.4324;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
const SPACE = 0.01;

export default class Map extends Component {

  static propTypes = {
    provider: MapView.ProviderPropType,
  };

  constructor(props) {
    super(props);

    this.state = {
      region: {
        latitude: LATITUDE,
        longitude: LONGITUDE,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA,
      },
      markers1: [
        {
          coordinate: {
            latitude: LATITUDE + 2*SPACE,
            longitude: LONGITUDE + 2*SPACE,
          },
        },
        {
          coordinate: {
            latitude: LATITUDE - 2*SPACE,
            longitude: LONGITUDE - 2*SPACE,
          },
        }],
      markers: [
        {
          coordinate: {
            latitude: LATITUDE + SPACE,
            longitude: LONGITUDE + SPACE,
          },
        },
        {
          coordinate: {
            latitude: LATITUDE,
            longitude: LONGITUDE,
          },
        },
        {
          coordinate: {
            latitude: LATITUDE + SPACE,
            longitude: LONGITUDE - SPACE,
          },
        },
      ],
    };
  }

  onRegionChange(region) {
    this.state.region.setValue(region);
  }

  render() {
    const { region, markers1, markers } = this.state;
    return (
      <View style={styles.container}>
        <MapView
          provider={this.props.provider}
          style={styles.map}
          initialRegion={region}
        >
          <MapView.Marker
            ref={ref => { this.marker1 = ref; }}
            coordinate={markers1[0].coordinate}
            title="This is a native view"
            description="This is a default information description view type" // eslint-disable-line max-len
          />

          {this.state.markers.map(marker => (
            <MapView.Marker
              coordinate={marker.coordinate}
              image={PinMark}
            >
              <MapView.Callout style={styles.plainView}>
                <View>
                  <Image style={styles.imageView} resizeMode='stretch' source={require('./assets/templete2.jpg')} />
                  <Text>Title: This is a plain view</Text>
                  <Text>Description: This is a plain view</Text>
                </View>
              </MapView.Callout>
            </MapView.Marker>
          ))}

          <MapView.Marker
            coordinate={markers1[1].coordinate}
            calloutOffset={{ x: -8, y: 28 }}
            calloutAnchor={{ x: 0.5, y: 0.4 }}
          >
            <MapView.Callout tooltip style={styles.customView}>
              <CustomCallout>
                <Text>This is a custom callout bubble view</Text>
              </CustomCallout>
            </MapView.Callout>
          </MapView.Marker>
        </MapView>
        {/*<View style={styles.buttonContainer}>
          <View style={styles.bubble}>
            <Text>Tap on markers to see different callouts</Text>
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={() => this.show()} style={[styles.bubble, styles.button]}>
            <Text>Show</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.hide()} style={[styles.bubble, styles.button]}>
            <Text>Hide</Text>
          </TouchableOpacity>
        </View>*/}
      </View>
    );
  }
  
}

const styles = StyleSheet.create({
  customView: {
    width: 140,
    height: 100,
  },
  plainView: {
    width: 150,
  },
  imageView: {
    width: 150,
    height: 90,
    padding: 5,
  },
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  bubble: {
    flex: 1,
    backgroundColor: 'rgba(255,255,255,0.7)',
    paddingHorizontal: 18,
    paddingVertical: 12,
    borderRadius: 20,
  },
  latlng: {
    width: 200,
    alignItems: 'stretch',
  },
  button: {
    width: 80,
    paddingHorizontal: 12,
    alignItems: 'center',
    marginHorizontal: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginVertical: 20,
    backgroundColor: 'transparent',
  },
});


