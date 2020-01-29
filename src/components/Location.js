import React from 'react';
import './Location.css';

export default function Location(props) {
  const dateBuilder = d => {
    const months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre',
    'Octubre', 'Noviembre', 'Diciembre'
    ];
    const days = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];

    const day = days[d.getDay()];
    const date = d.getDate();
    const month = months[d.getMonth()];
    const year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`;
  }

  return (
    <div className="location-box">
      <div className="location">{props.name}, {props.country}</div>
      <div className="date">{dateBuilder(new Date())}</div>
    </div>
  );
}