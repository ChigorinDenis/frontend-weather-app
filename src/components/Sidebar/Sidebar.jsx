import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Close, Search } from '@material-ui/icons';
import axios from 'axios';
import classNames from 'classnames'
import './Sidebar.scss';
import routes from '../../routes.js';
import { addSearchResult } from '../../reducers/searchReducer.js';
import { sidebarClose } from '../../reducers/uiReducer.js';
import SearchResult from '../SearchResult/SearchResult.jsx'


function Sidebar() {
  const { sidebar } = useSelector((state) => state.ui);
  const { visible } = sidebar;
  const sidebarClass = classNames({
    'sidebar': true,
    visible,
  });
  const dispatch = useDispatch();
  const [value, setValue] = useState('');
  const [loading, setLoading] = useState(false);
  const handleChange = (e) => {
    setValue(e.target.value);
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    const searchRoute = routes['search'];
    const searchURL = searchRoute(value);
    setLoading(true);
    try {
      const response = await axios.get(searchURL);
      dispatch(addSearchResult(response.data));
      setValue('');
      setLoading(false);
    } catch(err) {
      console.log(err.message);
      setLoading(false);
    }
  }
  return (
    <div className={sidebarClass}>
      <Close 
        className='sidebar__close'
        onClick={() => dispatch(sidebarClose())} 
      />
      <form 
        className='sidebar__search'
        onSubmit={handleSubmit}
      >
        <div className='sidebar__search__input'>
          <Search className='sidebar__search__icon'/>
          <input
            type='text'
            name='search'
            placeholder='search location'
            onChange={handleChange}
            value={value}
          />
        </div>
        <input 
          className='sidebar__search__btn'
          type='submit'
          value='Search'
        />
      </form>
      { loading ? <span className='loading'>Loading...</span> : <SearchResult /> }
      
    </div>
  );
}

export default Sidebar;