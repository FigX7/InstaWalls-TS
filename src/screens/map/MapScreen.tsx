import React from "react";
import { View } from "react-native";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";
import Geolocation from "react-native-geolocation-service";



export default class Map extends React.Component {
  constructor(props) {
    super(props);
     this.state = {
        latitude: 0,
        longitude: 0,
        coordinates: [],
     };
   }
  componentDidMount() {
    Geolocation.getCurrentPosition(
      position => {
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          coordinates: this.state.coordinates.concat({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
          })
        });
      },
      error => {
        Alert.alert(error.message.toString());
      },
      {
        showLocationDialog: true,
        enableHighAccuracy: true,
        timeout: 20000,
        maximumAge: 0
      }
    );
 }
  render() {
    return (
      <View style={{ flex: 1 }}>
        <MapView
        provider={PROVIDER_GOOGLE}
        style={{flex: 1}}
        region={{
          latitude: this.state.latitude,
          longitude: this.state.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}>
        <Marker
        coordinate={{
          latitude: this.state.latitude,
          longitude: this.state.longitude,
        }}>
        </Marker>
            </MapView>
      </View>
    );
  }
}