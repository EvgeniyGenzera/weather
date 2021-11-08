import { FC, useState } from 'react';
import style from './sidebar.module.scss';
import { formatDate } from '../../core/utils/utils';
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete';
import { useAppDispatch, useAppSelector } from '../../core/hooks/redux';

import { setPlaceRequest } from '../../store/reducers/WeatherSlice';
import { weatherAPI } from '../../core/services/WeatherSerices';
export interface sidebarProps {
	sidebarOpened: boolean;
}
const Sidebar: FC<sidebarProps> = ({ sidebarOpened }) => {
	const { weather, currentName, placeRequest } = useAppSelector(state => state.weatherReducer);
	const { data: singleDay } = weatherAPI.useFetchOneDayQuery(placeRequest);
	const [address, setAddress] = useState('');
	const dispatch = useAppDispatch();
	const getUserLocation = () => {
		navigator.geolocation.getCurrentPosition(
			position => {
				dispatch(setPlaceRequest({ lat: position.coords.latitude, lng: position.coords.longitude }));
			},
			error => {
				if (error.code === 1) {
					alert('To determine your geolocation, you must allow this action in the browser settings');
				}
			}
		);
	};
	const handleSelect = async (value: any) => {
		geocodeByAddress(value)
			.then(results => {
				return getLatLng(results[0]);
			})
			.then(latLng => {
				dispatch(setPlaceRequest(latLng));
			})
			.catch(error => console.error('Error', error));
	};
	return (
		<div className={sidebarOpened ? `${style.activeSidebar} ${style.sidebar}` : `${style.sidebar}`}>
			<div className={style.search}>
				<label className={style.search__field}>
					<i className="fa fa-search"></i>
					<PlacesAutocomplete value={address} onChange={setAddress} onSelect={handleSelect}>
						{({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
							<div className={style.dropdown}>
								<input {...getInputProps({ placeholder: 'Type address' })} />

								<ul className={style.dropdown__content}>
									{loading ? <div>...loading</div> : null}
									{suggestions.map(suggestion => {
										const style = suggestion.active
											? { color: '#808080', cursor: 'pointer', listStyle: 'none' }
											: { backgroundColor: 'transparent', cursor: 'pointer', listStyle: 'none' };
										return <li {...getSuggestionItemProps(suggestion, { style })}>{suggestion.description}</li>;
									})}
								</ul>
							</div>
						)}
					</PlacesAutocomplete>
				</label>
				<button className={style.search__btn} onClick={() => getUserLocation()}>
					<i className="fa fa-home"></i>
				</button>
			</div>
			{weather && (
				<div key={weather.current.dt}>
					<div className={style.info}>
						<h1 className={style.title}>{Math.floor(weather.current.temp - 273)}°</h1>
						<div>
							<h3 className={style.city}>{currentName}</h3>
							<p className={style.date}>{formatDate(weather, weather?.timezone)}</p>
						</div>
						<img
							className={style.icon}
							src={`http://openweathermap.org/img/wn/${weather.current.weather[0].icon}@2x.png`}
							alt=""
						/>
					</div>

					<div className={style.clouds}>
						<p>Weather Details:</p>
						<ul>
							<li>
								<span>Clouds</span> <span>{weather.current.clouds}%</span>
							</li>
							<li>
								<span>Description</span>
								<span>{weather.current.weather[0].description}</span>
							</li>
						</ul>
					</div>
				</div>
			)}
		</div>
	);
};

export default Sidebar;
