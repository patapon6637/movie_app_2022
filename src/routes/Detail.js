import React from 'react';
import {useLocation} from 'react-router-dom';

function Detail() {
    const location = useLocation();
    console.log(location);
    const {poster, title, year, genres, summary} = location.state;
    return (
        <div className='detail'>
            <img src={poster} alt={title} title={title}/>
            <div className='detail_data'>
                <h3 className='detail_title' ></h3>
            </div>
        </div>
    );
}

export default Detail;