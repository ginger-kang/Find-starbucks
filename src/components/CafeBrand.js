import React, { useState } from 'react';
import starBucks from '../images/starbucks.png';
import ediya from '../images/ediya.png';
import hollys from '../images/hollys.png';
import tomNtoms from '../images/tom_n_toms.png';
import twoSome from '../images/twosome1.png';
import pascucci from '../images/pascucci.png';

import '../static/Brand.scss';

const CafeBrand = () => {

    return (
        <>
            <ul className='cafeBrand'>
                <li><img src={starBucks} alt='starbucks'/></li>
                <li><img src={ediya} alt='ediya'/></li>
                <li><img src={hollys} alt='hollys'/></li>
                <li><img src={tomNtoms} alt='tomNToms'/></li>
                <li><img src={twoSome} alt='twosome'/></li>
                <li><img src={pascucci} alt='pascucci'/></li>
            </ul>
        </>
    );
}

export default CafeBrand;