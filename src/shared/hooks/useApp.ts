import useGlobalApp from "antd/es/app/useApp"

export const useApp = () => {
  const { message, notification, modal } = useGlobalApp()

  return { message, notification, modal }
}
