import React, { useEffect } from "react";
import {
  Map,
  MapContainer,
  MapContent,
  HeaderSubtitle,
  MapDiv,
  HeaderText,
  MapHeader,
} from "./styles";
import PlatformButton from "../../components/PlatformButton/index";

const { kakao } = window;

const KakaoMapSection = () => {
  useEffect(() => {
    const container = document.getElementById("map");
    const options = {
      center: new kakao.maps.LatLng(37.505021, 126.763911),
      level: 3,
    };

    const map = new kakao.maps.Map(container, options);
    let markerPosition = new kakao.maps.LatLng(37.505021, 126.763911);

    let marker = new kakao.maps.Marker({
      position: markerPosition,
    });
    marker.setMap(map);
  }, []);
  return (
    <main>
      <MapContainer>
        <MapHeader data-aos="zoom-in">
          <HeaderText>오시는 길</HeaderText>
          <HeaderSubtitle>
            경기 부천시 길주로 195 금영프라자2차 6층 블레스음악연습실
          </HeaderSubtitle>
        </MapHeader>
        <MapContent data-aos="zoom-in">
          <MapDiv>
            <Map id="map"></Map>
          </MapDiv>
          <PlatformButton
            text="카카오 맵"
            url="http://kko.to/w1pi-KbDH"
            isKakao={true}
          />
        </MapContent>
      </MapContainer>
    </main>
  );
};

export default KakaoMapSection;
