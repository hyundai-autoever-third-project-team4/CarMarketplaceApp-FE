import { useEffect, useState } from "react";
import { DRIVE_CENTERS } from "@/entities/DriverCenter";
import { DriveCenterType } from "@/entities/DriverCenter";

function findNearestCenter(
  latitude: number,
  longitude: number
): DriveCenterType {
  let shortest = Infinity;
  let nearestCenter: DriveCenterType = DRIVE_CENTERS[0];

  DRIVE_CENTERS.forEach((center) => {
    const distance = Math.sqrt(
      Math.pow(center.latitude - latitude, 2) +
        Math.pow(center.longitude - longitude, 2)
    );

    if (distance < shortest) {
      shortest = distance;
      nearestCenter = center;
    }
  });

  return nearestCenter;
}

export const useCurrentDriveCenter = () => {
  const [nearestCenter, setNearestCenter] = useState<DriveCenterType>(
    DRIVE_CENTERS[0]
  );
  const [currentLat, setCurrentLat] = useState<number>(0);
  const [currentLong, setCurrentLong] = useState<number>(0);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      setCurrentLat(latitude);
      setCurrentLong(longitude);

      setNearestCenter(findNearestCenter(latitude, longitude));
    });
  }, []);

  return {
    nearestCenter,
    currentLat,
    currentLong,
  };
};
