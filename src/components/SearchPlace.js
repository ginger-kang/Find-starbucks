import React, { useState } from 'react';
import CafeBrand from './CafeBrand';

import '../static/Left.scss';

const SearchPlace = () => {
    const [ inputText, setInputText ] = useState('');
    const [ search, setSearch ] = useState('홍대');

    const onChange = (e) => {
        //console.log(e.target.value);
        setInputText(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setSearch(inputText);
        setInputText('');
    }

    return (
        <div className='view__left'>
            <div className='inputContainer'>
                <form className='inputForm' onSubmit={handleSubmit}>
                    <input type='text' placeholder='Search Place... (ex 이태원역, 홍대)' onChange={onChange} value={inputText}/>
                </form>
            </div>
            <div className='CafeContainer'>
                <CafeBrand props=
                {search}/>
            </div>
        </div> 
    );
}

export default SearchPlace;