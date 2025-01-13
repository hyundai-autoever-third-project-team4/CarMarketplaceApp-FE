import { Text } from "@/shared/ui/Text";
import * as S from "./My.style";
import useUserStore from "@/shared/store/userStore";
import { Button } from "@/shared/ui/Button";
import { useCallback } from "react";

export function My() {
  const { user } = useUserStore();

  const handleLogin = useCallback(() => {
    // 로그인 로직
  }, []);

  return (
    <S.Container>
      {user.id === null ? (
        <S.NotLogin>
          <S.LoginArea>
            <Text fontType="subTitle">로그인 후 이용 가능합니다.</Text>
            <Button size="login" text="로그인" buttonClick={handleLogin} />
          </S.LoginArea>
        </S.NotLogin>
      ) : (
        <></>
      )}
    </S.Container>
  );
}
