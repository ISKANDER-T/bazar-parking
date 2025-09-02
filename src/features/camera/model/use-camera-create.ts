import { rqClient } from "@/shared/api/instance"
import { queryClient } from "@/shared/api/query-client"
import { ApiSchemas } from "@/shared/api/schema"
import { useApp } from "@/shared/hooks/useApp"

export const useCameraCreate = () => {
  const { notification } = useApp()

  const cameraCreateMutation = rqClient.useMutation("post", "/api/v1/cameras/create", {
    onSettled: async () => {
      await queryClient.invalidateQueries(rqClient.queryOptions("get", "/api/v1/cameras/list"))
    },
    onSuccess() {
      notification.success({ message: "Вы добавили камеру" })
    },
    onError() {
      notification.error({ message: "Не удалось добавить камеру" })
    }
  })

  const cameraCreate = (data: ApiSchemas["CameraCreate"]) => cameraCreateMutation.mutate({ body: data })

  return { cameraCreate, isPending: cameraCreateMutation.isPending }
}