import { DRIVE_CENTERS } from "@/entities/DriverCenter";
import { Map } from "@/widgets/Map";
import * as S from "./DriveCenterMap.style";
import { Text } from "@/shared/ui/Text";
import { DriveCenter } from "@/entities/DriverCenter";
import { Button } from "@/shared/ui/Button";
import { useCallback, useMemo, useState } from "react";
import { useNavermaps } from "react-naver-maps";
import { useCurrentDriveCenter } from "../model/useCurrentDriveCenter";
import { useNavigate } from "react-router-dom";

export function DriveCenterMap() {
  const {
    deafultId,
    defaultLatitude,
    defaultLongtitude,
    currentLat,
    currentLong,
  } = useCurrentDriveCenter();
  const navermaps = useNavermaps();
  const [map, setMap] = useState<any>(null);
  const [selectedCenter, setSelectedCenter] = useState<number>(deafultId);
  const navigate = useNavigate();

  const centerClick = useCallback(
    (id: number, lat: number, long: number) => {
      const center = new navermaps.LatLng(lat, long);
      map.setCenter(center);
      setSelectedCenter(id);
    },
    [map]
  );

  const moveToReservation = () => {
    navigate("/reservation", {
      state: {
        id: selectedCenter,
        type: "driveCenterMap",
      },
    });
  };

  const selectedCenterName = useMemo(() => {
    return DRIVE_CENTERS.filter((center) => center.id === selectedCenter)[0]
      .name;
  }, [selectedCenter]);

  return (
    <>
      <S.MapContainer>
        <Text fontType="title">시승소 찾기</Text>
        <Map
          map={map}
          selectedCenterName={selectedCenterName}
          setMap={setMap}
          navermaps={navermaps}
          defaultLatitude={defaultLatitude}
          defaultLongtitude={defaultLongtitude}
          currentLat={currentLat}
          currentLong={currentLong}
          setSelectedCenter={setSelectedCenter}
        />
      </S.MapContainer>
      <S.DriveCentersContainer>
        <div style={{ height: "48px", display: "flex", alignItems: "center" }}>
          <Text fontType="subTitle">전국 12 곳</Text>
        </div>
        {DRIVE_CENTERS.map((center) => {
          return (
            <DriveCenter
              key={center.id}
              id={center.id}
              name={center.name}
              address={center.address}
              onClick={centerClick}
              latitude={center.latitude}
              longitude={center.longitude}
              isChecked={center.id === selectedCenter}
            />
          );
        })}
      </S.DriveCentersContainer>
      <div
        style={{
          maxWidth: "600px",
          position: "fixed",
          bottom: "64px",
          width: "100%",
        }}
      >
        <Button size="full" text="시승 예약" buttonClick={moveToReservation} />
      </div>
    </>
  );
}
