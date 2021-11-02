import React from 'react';
import Header from './components/Header.vue/Header';
import Sidebar from './components/Sidebar/Sidebar';
import { GoogleMap, Marker, withScriptjs, withGoogleMap } from 'react-google-maps';
import Widgets from './components/Widgets/Widgets';
import { weatherAPI } from './core/services/WeatherSerices';

const App = () => {
	const { data: oneDay } = weatherAPI.useFetchOneDayQuery('Kyiv');
	const Map = () => {
		if (oneDay) {
			return (
				<GoogleMap defaultZoom={10} defaultCenter={{ lat: oneDay.coord.lat, lng: oneDay.coord.lon }}>
					<Marker key={oneDay.sys.id} position={{ lat: oneDay.coord.lat, lng: oneDay.coord.lon }} />
				</GoogleMap>
			);
		}
		return <></>;
	};
	const WrappedMap = withScriptjs(withGoogleMap(Map));
	return (
		<div className="container">
			<Sidebar />
			<div>
				<Header />
				<h2>Today`s Highlights</h2>
				<div className="container__content">
					<Widgets />
					<div>
						<WrappedMap
							googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyDUILv-EyaZ4PI2RmOCbvxDudIIozWF5io"
							loadingElement={<div style={{ height: `100%` }} />}
							containerElement={<div style={{ height: `400px` }} />}
							mapElement={<div style={{ height: `100%` }} />}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default App;
