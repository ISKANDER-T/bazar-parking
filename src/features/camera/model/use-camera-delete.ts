import { rqClient } from "@/shared/api/instance"
import { queryClient } from "@/shared/api/query-client"
import { useApp } from "@/shared/hooks/useApp"

export const useCameraDelete = () => {
  const { notification } = useApp()

  const deleteMutation = rqClient.useMutation("delete", "/api/v1/cameras/{camera_id}",
    {
      onSettled: async () => {
        await queryClient.invalidateQueries(rqClient.queryOptions("get", "/api/v1/cameras/list"))
      },
      onSuccess() {
        notification.success({ message: "Камера удалена" })
      },
      onError() {
        notification.error({ message: "Не удалось удалить камеру" })
      }
    })

  const cameraDelete = (id: number) => deleteMutation.mutate({ params: { path: { camera_id: id } } })

  return {
    cameraDelete
  }
}