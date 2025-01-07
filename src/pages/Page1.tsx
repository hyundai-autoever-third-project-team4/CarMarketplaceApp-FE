import { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

function Page1() {
  const [str] = useState<string>("");
  return <Container>차량 조회 페이지 입니다. {str}</Container>;
}

export default Page1;
