import { Text } from "@/shared/ui/Text";
import * as S from "./Map.style";
import { Container as MapDiv, NaverMap, Marker } from "react-naver-maps";
import theme from "@/shared/styles/theme";
import { DRIVE_CENTERS } from "@/entities/DriverCenter";
import markerSvg from "@shared/assets/marker.svg";

interface MapProps {
  map: any;
  selectedCenterName: string;
  setMap: React.Dispatch<any>;
  navermaps: any;
  defaultLatitude: number;
  defaultLongtitude: number;
  currentLat: number;
  currentLong: number;
  setSelectedCenter: (id: number) => void;
}

export function Map({
  map,
  selectedCenterName,
  setMap,
  navermaps,
  defaultLatitude,
  defaultLongtitude,
  currentLat,
  currentLong,
  setSelectedCenter,
}: MapProps) {
  return (
    <S.MapContainer>
      <Text fontType="sub1">{selectedCenterName}</Text>

      <MapDiv
        style={{
          width: "100%",
          height: "300px",
          border: `1px solid ${theme.colors.primary4}`,
        }}
      >
        <NaverMap
          defaultCenter={
            new navermaps.LatLng(defaultLatitude, defaultLongtitude)
          }
          defaultZoom={15}
          ref={setMap}
        >
          {DRIVE_CENTERS.map((center) => {
            return (
              <Marker
                key={center.id}
                defaultPosition={
                  new navermaps.LatLng(center.latitude, center.longitude)
                }
                icon={{
                  url: markerSvg,
                  origin: new navermaps.Point(0, 0),
                  anchor: new navermaps.Point(12, 24),
                }}
                onClick={() => {
                  map.setCenter(
                    new navermaps.LatLng(center.latitude, center.longitude)
                  );
                  setSelectedCenter(center.id);
                }}
              />
            );
          })}
          <Marker
            defaultPosition={new navermaps.LatLng(currentLat, currentLong)}
          />
        </NaverMap>
      </MapDiv>
    </S.MapContainer>
  );
}
