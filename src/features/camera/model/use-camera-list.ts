import { rqClient } from "@/shared/api/instance"

export const useCameraList = () => {
  const { data, isLoading } = rqClient.useQuery("get", "/api/v1/cameras/list")

  return {
    data, isLoading
  }
}