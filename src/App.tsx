import React, { useCallback, useState } from 'react';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Widgets from './components/Widgets/Widgets';
import { weatherAPI } from './core/services/WeatherSerices';
import { useAppDispatch, useAppSelector } from './core/hooks/redux';
import { setWeather } from './store/reducers/WeatherSlice';
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';

const App = () => {
	const { placeRequest, weather } = useAppSelector(state => state.weatherReducer);
	const { data: oneCall } = weatherAPI.useFetchOneCallApiQuery(placeRequest);
	const dispatch = useAppDispatch();
	const containerStyle = {
		width: '400px',
		height: '400px',
	};
	const { isLoaded } = useJsApiLoader({
		id: 'google-map-script',
		googleMapsApiKey: 'AIzaSyDUILv-EyaZ4PI2RmOCbvxDudIIozWF5io',
	});
	const [map, setMap] = useState(null);
	const onLoad = useCallback(function callback(map) {
		const bounds = new window.google.maps.LatLngBounds();
		map.fitBounds(bounds);
		setMap(map);
	}, []);
	const onUnmount = useCallback(function callback(map) {
		setMap(null);
	}, []);
	const center = {
		lat: placeRequest.lat,
		lng: placeRequest.lng,
	};
	if (oneCall) {
		dispatch(setWeather(oneCall));
	}
	return (
		<div className="container">
			{oneCall && <Sidebar />}
			<div>
				{oneCall && <Header />}
				<h2>Today`s Highlights</h2>
				<div className="container__content">
					<Widgets />
					<div>
						<GoogleMap
							mapContainerStyle={containerStyle}
							center={center}
							zoom={11}
							onLoad={onLoad}
							onUnmount={onUnmount}
						>
							<Marker position={center} />
						</GoogleMap>
					</div>
				</div>
			</div>
		</div>
	);
};

export default App;
