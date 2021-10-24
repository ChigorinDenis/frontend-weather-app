import React from 'react';
import './SearchResult.scss';
import { useDispatch, useSelector } from 'react-redux';
import Preloader from '../Preloader/Preloader.jsx';
import { fetchWeather } from '../../utils/fetchData.js';
import { addLocation } from '../../reducers/locationReducer.js';
import { selectSearchItem } from '../../reducers/uiReducer.js';
import { addWeather } from '../../reducers/weatherReducer.js';
import { clearSearchResult } from '../../reducers/searchReducer.js';
import { sidebarClose } from '../../reducers/uiReducer.js'


function SearchResult() {
  const searchResult = useSelector((state) => state.search);
  const { measurement, selectedSearchItem } = useSelector((state) => state.ui);
  const dispatch = useDispatch();
  const handleClick = (woeid) => async () => {
    const [location] = searchResult.filter((item) => item.woeid === woeid);
    dispatch(selectSearchItem(woeid));
    const weather = await fetchWeather(woeid);
    dispatch(addLocation(location));
    dispatch(addWeather({ weather, measurement }));
    dispatch(sidebarClose());
    dispatch(selectSearchItem(''));
    dispatch(clearSearchResult());
  }
  return (
    <>
      {!!searchResult.length && <ul className='results'>
          {
            searchResult.map((item) => {
              const { title, woeid} = item;
              return (
                <li 
                  className="results__item" 
                  key={woeid}
                  onClick={handleClick(woeid)}
                >
                  <b>{title}</b>
                  {/* <span>{'>'}</span> */}
                  <span>
                    {
                      selectedSearchItem === woeid ? <Preloader size='small' /> : '>'
                    }
                  </span>
                </li>
              )
            })
          }
          
      </ul>}
    </>
  );
}

export default SearchResult;