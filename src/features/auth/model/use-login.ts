import { publicRqClient } from "@/shared/api/instance";
import { ApiSchemas } from "@/shared/api/schema";
import { useApp } from "@/shared/hooks/useApp";
import { ROUTES } from "@/shared/model/routes";
import { useSession } from "@/shared/model/session";
import { useNavigate } from "react-router-dom";

export function useLogin() {
  const navigate = useNavigate();
  const session = useSession();
  const { notification } = useApp()

  const loginMutation = publicRqClient.useMutation(
    "post",
    "/api/v1/auth/login",
    {
      onSuccess(data) {
        session.login(data.data);
        setTimeout(() => navigate(ROUTES.HOME), 0);
        notification.success({ message: "Добро пожаловать!" })
      },
      onError() {
        notification.error({ message: "Вы ввели неправильный номер или пароль" })
      }
    },
  );

  const login = (data: ApiSchemas["LoginViaPhone"]) => {
    loginMutation.mutate({ body: data });
  };

  const errorMessage = loginMutation.isError
    ? loginMutation.error.detail?.[0].msg
    : undefined;

  return {
    login,
    isPending: loginMutation.isPending,
    errorMessage,

  };
}
