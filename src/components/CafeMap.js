import React, { useEffect } from "react";
import "../static/Map.scss";

const { kakao } = window;

const CafeMap = ({ searchPlace }) => {
  useEffect(() => {
    const container = document.getElementById("myMap");
    const options = {
      center: new kakao.maps.LatLng(37.5511311, 126.9867407),
      level: 3,
    };
    const map = new kakao.maps.Map(container, options);

    const ps = new kakao.maps.services.Places();
    console.log(searchPlace);

    const placesSearchDB = (data, status, pagination) => {
      if (status === kakao.maps.services.Status.OK) {
        const bounds = new kakao.maps.LatLngBounds();

        for (let i = 0; i < data.length; i++) {
          displayMarker(data[i]);
          bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x));
        }

        map.setBounds(bounds);
      }
    };

    ps.keywordSearch(searchPlace, placesSearchDB);

    function displayMarker(place) {
      var marker = new kakao.maps.Marker({
        map: map,
        position: new kakao.maps.LatLng(place.y, place.x),
      });
    }
  }, [searchPlace]);

  return (
    <>
      <div
        id="myMap"
        style={{
          width: "350px",
          height: "350px",
        }}
      ></div>
    </>
  );
};

export default CafeMap;
