type ReponseGetCookie = string | null;

const ACCESS_TOKEN = "accessToken";
const REFRESH_TOKEN = "refreshToken";
const EXPIRED_DATE = "Thu, 01 Jan 1970 00:00:00 GMT";

// 쿠키의 accessToken 에 접근
export const getCookie = (): ReponseGetCookie => {
  const decodedCookie = decodeURIComponent(document.cookie);
  const cookieArray = decodedCookie.split("; ");

  const accessToken = cookieArray.find((cookie) =>
    cookie.startsWith(ACCESS_TOKEN)
  );

  return accessToken ? accessToken.split("=")[1] : null;
};

// 쿠키의 refreshToken 에 접근
export const getRefresh = (): ReponseGetCookie => {
  const decodedCookie = decodeURIComponent(document.cookie);
  const cookieArray = decodedCookie.split("; ");

  const refreshToken = cookieArray.find((cookie) =>
    cookie.startsWith(REFRESH_TOKEN)
  );
  return refreshToken ? refreshToken.split("=")[1] : null;
};

// Token 저장하는 과정
export const setCookies = (
  val: string,
  refresh: string,
  exp: number = 1000
): void => {
  const d = new Date();
  // Create a cookie
  document.cookie = `${ACCESS_TOKEN}=; Max-Age=0`;
  d.setTime(d.getTime() + exp * 24 * 60 * 60 * 1000);
  const expires = `expires=${d.toUTCString()};`;
  // Set a cookie
  document.cookie = `${ACCESS_TOKEN}=${val.toString()};${expires}`;
  document.cookie = `${REFRESH_TOKEN}=${refresh.toString()};${expires}`;
};

// 쿠키 전부 삭제
export const deleteAllCookies = (): void => {
  const cookies = document.cookie.split(";");

  for (let i = 0; i < cookies.length; i += 1) {
    const cookie = cookies[i];
    const eqPos = cookie.indexOf("=");
    const name = eqPos > -1 ? cookie.substr(0, eqPos).trim() : cookie.trim();
    document.cookie = `${name}=;expires=${EXPIRED_DATE}; path=/`;
  }
};
