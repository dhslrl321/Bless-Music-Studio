import React, { useEffect } from 'react'
import {
  Map, MapContainer, MapContent, HeaderSubtitle,
  MapDiv, HeaderLine, HeaderText, MapHeader
} from "./styles";

const { kakao } = window;

const KakaoMapSection = () => {
  useEffect(() => {
    const container = document.getElementById('map');
    const options = {
      center: new kakao.maps.LatLng(37.505021, 126.763911),
      level: 3
    };

    const map = new kakao.maps.Map(container, options);

    // 마커 띄우기 실패
    // const markerPosition = new kakao.maps.LatLng(37.505021, 126.763911);
    // const marker = new kakao.maps.Marker({
    //   position: markerPosition
    // });
    // marker.setMap(markerPosition);
  }, []);
  return (
    <MapContainer>
      <MapHeader>
        <HeaderText>Location</HeaderText>
        <HeaderSubtitle>경기 부천시 길주로 195 금영프라자2차 6층 블레스음악연습실</HeaderSubtitle>
        <HeaderLine></HeaderLine>
      </MapHeader>
      <MapContent>
        <MapDiv>
          <Map id="map"></Map>
        </MapDiv>
      </MapContent>
    </MapContainer>
  )
}

export default KakaoMapSection
