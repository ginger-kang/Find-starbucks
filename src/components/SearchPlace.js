import React, { useState } from 'react';

const SearchPlace = () => {
    const [ inputText, setInputText ] = useState('');

    const onChange = (e) => {
        console.log(e.target.value);
        setInputText(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setInputText('');
    }

    return (
        <>
            <div className='inputContainer'>
                <form onSubmit={handleSubmit}>
                    <input type='text' placeholder='place' onChange={onChange} value={inputText}/>
                </form>
            </div>
        </> 
    );
}

export default SearchPlace;