## Running Locally
I use expo for implement this proyect execute:
* npm install
* expo init
* run in IOS

Have some problems using import MapboxGL from '@react-native-mapbox-gl/maps';(null is not an object (evaluating 'MapboxGL.StyleURL').) 
Have to change to import MapGL, { GeolocateControl } from 'react-map-gl';

Mapbox API Token: To run this locally you will need to create a file called `.env.local` and in it put an environment variable called `REACT_APP_MAPBOX_TOKEN` that has as its value a token created on the Mapbox website.
