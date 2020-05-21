import React, { useState } from 'react';
import CafeBrand from './CafeBrand';

import '../static/Left.scss';

const SearchPlace = () => {
    const [ inputText, setInputText ] = useState('');
    const [ place, setPlace ] = useState('');

    const onChange = (e) => {
        setInputText(e.target.value);
        //console.log(inputText);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setPlace(inputText);
        setInputText('');
    };

    return (
        <div className='view__left'>
            <div className='inputContainer'>
                <form className='inputForm' onSubmit={handleSubmit}>
                    <input placeholder='장소 검색 (ex 이태원역, 홍대)' onChange={onChange} value={inputText}/>
                </form>
            </div>
            <div className='CafeContainer'>
                <CafeBrand props={place}/>
            </div>
        </div>
        
    );
}

export default SearchPlace;