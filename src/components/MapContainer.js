import React, { useEffect } from 'react';

const { kakao } = window;

const MapContainer = () => {

    const placeMap = () => {
        const container = document.getElementById('myMap');
		const options = {
			center: new kakao.maps.LatLng(33.450701, 126.570667),
			level: 3
		};
        const map = new kakao.maps.Map(container, options);

        const ps = new kakao.maps.services.Places(); 
        console.log(ps);

        const placesSearchDB = (( data,status,pagination ) => {
            if ( status === kakao.maps.services.Status.OK ) {
                const bounds = new kakao.maps.LatLngBounds();

                for ( let i=0; i<data.length; i++) {
                    displayMarker(data[i]);
                    bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x));
                }

                map.setBounds(bounds);
            }
        });

        ps.keywordSearch('신촌', placesSearchDB);

        function displayMarker(place) {
            var marker = new kakao.maps.Marker({
                map: map,
                position: new kakao.maps.LatLng(place.y, place.x) 
            });
        }

    };

    return (
        <>
            <button style={{width: '50px', height: '50px'}} onClick={placeMap}>dsdd</button>
            <div id='myMap' style={{
                width: '500px', 
                height: '500px'
            }}></div>
        </>
    );
}

export default MapContainer;