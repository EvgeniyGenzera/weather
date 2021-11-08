import { useCallback, useState } from 'react';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Widgets from './components/Widgets/Widgets';
import { weatherAPI } from './core/services/WeatherSerices';
import { useAppDispatch, useAppSelector } from './core/hooks/redux';
import { setCurrentName, setWeather } from './store/reducers/WeatherSlice';
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';

const App = () => {
	const { placeRequest } = useAppSelector(state => state.weatherReducer);
	const { data: oneCall, isLoading } = weatherAPI.useFetchOneCallApiQuery(placeRequest);
	const { data: singleDay } = weatherAPI.useFetchOneDayQuery(placeRequest);
	const [sidebarOpened, setSidebarOpened] = useState(false);
	const dispatch = useAppDispatch();
	const containerStyle = {
		width: '100%',
		height: '100%',
		borderRadius: '30px',
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

	if (oneCall && singleDay) {
		dispatch(setWeather(oneCall));
		dispatch(setCurrentName(`${singleDay.name}, ${singleDay.sys.country}`));
	}
	return (
		<div className="container">
			{isLoading && (
				<div id="mdiv">
					<div className="cdiv">
						<div className="rot"></div>
						<h1 className="lh">Loading</h1>
					</div>
				</div>
			)}
			<Sidebar sidebarOpened={sidebarOpened} />
			<div className="content">
				<Header setSidebarOpened={setSidebarOpened} sidebarOpened={sidebarOpened} />
				<h2 className="page-title">Today`s Highlights</h2>
				<div className="container__content">
					<Widgets />
					<div className="googleMap">
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
