import React, { useState } from 'react';
import CafeBrand from './CafeBrand';

import '../static/View.scss';

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
        <div className='view__center'>
            <div className='inputContainer'>
                <form className='inputForm' onSubmit={handleSubmit}>
                    <input placeholder='Search Place...' onChange={onChange} value={inputText}/>
                </form>
            </div>
            <div className='CafeContainer'>
                <CafeBrand props={place}/>
            </div>
        </div>

    );
}

export default SearchPlace;