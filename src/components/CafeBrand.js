import React, { useState, useRef } from 'react';
import CafeMap from './CafeMap';

import starBucks from '../images/starbucks.png';
import ediya from '../images/ediya.png';
import hollys from '../images/hollys.png';
import tomNtoms from '../images/tom_n_toms.png';
import twoSome from '../images/twosome1.png';
import pascucci from '../images/pascucci.png';
import coffeeBean from '../images/coffee_bean.png';

import '../static/Brand.scss';

function CafeBrand(props) {
    const [ place, setPlace ] = useState('');
    const [ cafe, setCafe ] = useState('');
    const [ result, setResult ] = useState({
        placeName: '',
        cafeName: ''
    });

    const brands = [
        { id: 1, src: pascucci, alt: '파스구찌' },
        { id: 2, src: ediya, alt: '이디야' },
        { id: 3, src: hollys, alt: '할리스' },
        { id: 4, src: starBucks, alt: '스타벅스' },
        { id: 5, src: twoSome, alt: '투썸' },
        { id: 6, src: tomNtoms, alt: '탐앤탐스' },
        { id: 7, src: coffeeBean, alt: '커피빈' } 
    ];

    const brandClick = (id, brandName) => {
        //console.log(brandName);
        setCafe(brandName);
        setPlace(props.props);
        console.log(place);
        console.log(cafe);
    };

    const handleClick = () => {
        setResult({
            ...result,
            placeName: place,
            cafeName: cafe
        });
        console.log(result.placeName, result.cafeName);
    }

    return (
        <>
            <ul className='cafeBrand'>
                { brands.map((brand) => (
                    <li key={brand.id}>
                        <img src={brand.src} 
                            alt={brand.alt} 
                            onClick={() => brandClick(brand.id, brand.alt)}
                        />
                    </li>
                )) }
            </ul>
            <div className='buttonContainer'>
                <button onClick={handleClick}>검색</button>
                <button>초기화</button>
            </div>
            <CafeMap props={`${place} ${cafe}`}/>
        </>
    );
}

export default CafeBrand;