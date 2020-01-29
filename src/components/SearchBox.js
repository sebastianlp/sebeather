import React, { useState } from 'react';
import './SearchBox.css';

const api = {
  key: 'df5454b3868e5d00913a4061687e72b6',
  base: 'https://api.openweathermap.org/data/2.5/'
}

export default function SearchBox(props) {
  const [query, setQuery] = useState('');
  const search = evt => {
    if (evt.key === 'Enter') {
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}&lang=es`)
      .then(res => res.json())
      .then(result => {
        props.onSearch(result);
        setQuery('');
      });
    }
  }

  return(
    <div className="search-box">
      <input
        type="text"
        placeholder="Buscar..."
        className="search-bar"
        onChange={e => setQuery(e.target.value)}
        value={query}
        onKeyPress={search}
      />
    </div>
  );
}