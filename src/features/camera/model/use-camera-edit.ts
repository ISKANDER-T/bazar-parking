import { rqClient } from "@/shared/api/instance"
import { queryClient } from "@/shared/api/query-client"
import { ApiSchemas } from "@/shared/api/schema"
import { useApp } from "@/shared/hooks/useApp"

export const useCameraEdit = () => {
  const { notification } = useApp()

  const cameraEditMutation = rqClient.useMutation("put", "/api/v1/cameras/{camera_id}", {
    onSettled: async () => {
      await queryClient.invalidateQueries(rqClient.queryOptions("get", "/api/v1/cameras/list"))
    },
    onSuccess() {
      notification.success({ message: "Камера обновлена!" })
    },
    onError() {
      notification.error({ message: "Не удалось обновить камеру" })
    }
  })

  const cameraEdit = (data: ApiSchemas["CameraUpdate"] & { id: number }) => {
    cameraEditMutation.mutate({ body: data, params: { path: { camera_id: data.id } } })
  }
  return {
    cameraEdit,
    isPending: cameraEditMutation.isPending,
    isSuccess: cameraEditMutation.isSuccess
  }
}