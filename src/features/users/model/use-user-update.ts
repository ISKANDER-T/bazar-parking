import { rqClient } from "@/shared/api/instance"
import { queryClient } from "@/shared/api/query-client"
import { ApiSchemas } from "@/shared/api/schema"
import { useApp } from "@/shared/hooks/useApp"

export const useUserUpdate = () => {
  const { notification } = useApp()

  const userUpdateMutation = rqClient.useMutation("put", "/api/v1/users/me", {
    onSettled: async () => {
      await queryClient.invalidateQueries(rqClient.queryOptions("get", "/api/v1/users/me"))
    },
    onSuccess() {
      notification.success({ message: "Ваш профиль обновлен!" })
    },
    onError() {
      notification.error({ message: "Не удалось сохранить изменения" })
    }
  })

  const userUpdate = (data: ApiSchemas["UserUpdate"]) => {
    userUpdateMutation.mutate({ body: data })
  }

  return {
    userUpdate,
    isPending: userUpdateMutation.isPending
  }
}