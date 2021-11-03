import React, { FC, useState } from 'react';
import style from './sidebar.module.scss';
import { formatDate } from '../../core/utils/utils';
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete';
import { useAppDispatch, useAppSelector } from '../../core/hooks/redux';
import { setCurrentName, setPlaceRequest } from '../../store/reducers/WeatherSlice';

const Sidebar: FC = () => {
	const { weather, currentName } = useAppSelector(state => state.weatherReducer);
	const [address, setAddress] = useState('');
	const dispatch = useAppDispatch();
	const handleSelect = async (value: any) => {
		// geocodeByAddress(value)
		// 	.then(results => getLatLng(results[0]))
		// 	.then(latLng => {
		// 		dispatch(setPlaceRequest(latLng));
		// 	})
		// 	.catch(error => console.error('Error', error));
		geocodeByAddress(value)
			.then(results => {
				dispatch(setCurrentName(results[0].formatted_address));
				return getLatLng(results[0]);
			})
			.then(latLng => {
				dispatch(setPlaceRequest(latLng));
			})
			.catch(error => console.error('Error', error));
	};
	return (
		<div className={style.sidebar}>
			<div className={style.search}>
				<label className={style.search__field}>
					<i className="fa fa-search"></i>
					<PlacesAutocomplete value={address} onChange={setAddress} onSelect={handleSelect}>
						{({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
							<div className={style.dropdown}>
								<input {...getInputProps({ placeholder: 'Type address' })} />
								<div className={style.dropdown__content}>
									{loading ? <div>...loading</div> : null}
									{suggestions.map(suggestion => {
										const style = suggestion.active
											? { backgroundColor: 'yellow', cursor: 'pointer' }
											: { backgroundColor: '#ffffff', cursor: 'pointer' };
										return <div {...getSuggestionItemProps(suggestion, { style })}>{suggestion.description}</div>;
									})}
								</div>
							</div>
						)}
					</PlacesAutocomplete>
				</label>
				<button className={style.search__btn}>
					<i className="fa fa-home"></i>
				</button>
			</div>
			{weather && (
				<div key={weather.current.dt}>
					<img
						className={style.icon}
						src={`http://openweathermap.org/img/wn/${weather.current.weather[0].icon}@2x.png`}
						alt=""
					/>
					<h1 className={style.title}>{Math.floor(weather.current.temp - 273)}°C</h1>
					<h3 className={style.city}>{currentName}</h3>
					<p className={style.date}>{formatDate(weather.current.dt)}</p>
					<div className={style.clouds}>
						<p className={style.clouds__visible}>Clouds {weather.current.clouds}%</p>
						<p className={style.clouds__status}>{weather.current.weather[0].description}</p>
					</div>
				</div>
			)}
		</div>
	);
};

export default Sidebar;
