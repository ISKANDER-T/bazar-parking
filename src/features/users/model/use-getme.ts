import { rqClient } from "@/shared/api/instance"

export const useGetMe = () => {
  const { data, isLoading } = rqClient.useQuery("get", "/api/v1/users/me")
  return { data, isLoading }
}