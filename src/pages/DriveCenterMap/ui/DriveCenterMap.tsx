import { DRIVE_CENTERS } from "@/entities/DriverCenter";
import { Map } from "@/widgets/Map";
import * as S from "./DriveCenterMap.style";
import { Text } from "@/shared/ui/Text";
import { DriveCenter } from "@/entities/DriverCenter";
import { Button } from "@/shared/ui/Button";
import { useCallback, useEffect, useMemo, useReducer, useState } from "react";
import { useNavermaps } from "react-naver-maps";
import { useCurrentDriveCenter } from "../model/useCurrentDriveCenter";
import { useNavigate } from "react-router-dom";
import { DefaultPopup } from "@/shared/ui/DefaultPopup";

export function DriveCenterMap() {
  const { nearestCenter, currentLat, currentLong } = useCurrentDriveCenter();
  const navermaps = useNavermaps();
  const [map, setMap] = useState<any>(null);
  const [selectedCenter, setSelectedCenter] = useState<number>(
    nearestCenter.id
  );
  const [loginPopup, setPopup] = useReducer((p) => !p, false);
  const navigate = useNavigate();

  useEffect(() => {
    if (map && nearestCenter) {
      const center = new navermaps.LatLng(
        nearestCenter.latitude,
        nearestCenter.longitude
      );
      map.setCenter(center);
      setSelectedCenter(nearestCenter.id);
    }
  }, [map, nearestCenter.id, navermaps]);

  const centerClick = useCallback(
    (id: number, lat: number, long: number) => {
      const center = new navermaps.LatLng(lat, long);
      map.setCenter(center);
      setSelectedCenter(id);
    },
    [map]
  );

  const moveToReservation = () => {
    if (localStorage.getItem("access_token")) {
      navigate("/reservation", {
        state: {
          id: selectedCenter,
          type: "driveCenterMap",
        },
      });
    } else {
      setPopup();
    }
  };

  const moveToMy = () => {
    navigate("/my");
  };

  const selectedCenterName = useMemo(() => {
    return DRIVE_CENTERS.filter((center) => center.id === selectedCenter)[0]
      .name;
  }, [selectedCenter, nearestCenter.id]);

  return (
    <>
      <S.MapContainer>
        <Text fontType="title">시승소 찾기</Text>
        <Map
          map={map}
          selectedCenterName={selectedCenterName}
          setMap={setMap}
          navermaps={navermaps}
          defaultLatitude={nearestCenter.latitude}
          defaultLongtitude={nearestCenter.longitude}
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
        <DefaultPopup
          open={loginPopup}
          isLoginPopup
          handleClose={setPopup}
          content={"로그인 후 가능합니다."}
          handleConfirmClick={moveToMy}
        />
      </div>
    </>
  );
}
