import React from 'react';
import loadingGif from '../../assets/images/loading.gif';
import './style.scss'
function Loading() {
    return (
        <div id="loading">
            <img src={loadingGif} alt="loading" />
        </div>
    );
}

export default Loading;