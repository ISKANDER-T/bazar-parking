import { App, ConfigProvider, theme } from "antd"
import localeRU from "antd/locale/ru_RU"
import "dayjs/locale/ru"
import dayjs from "dayjs"
import type { FC, PropsWithChildren } from "react"

dayjs.locale("ru")

const AntdProvider: FC<PropsWithChildren> = ({ children }) => {

	const { token } = theme.useToken()
	return (
		<ConfigProvider
			locale={localeRU}
			theme={{
				algorithm: theme.defaultAlgorithm,
				token: {
					fontFamily: `Roboto, ${token.fontFamily}`,
					colorPrimary: "rgb(103, 58, 183)",
					colorPrimaryBg: "rgb(237, 231, 246)",
					colorBgLayout: "#EEF2F6",
					colorBgContainer: "#FFFFFF",
					// colorBgElevated: isDark ? "#212946" : "#FFFFFF",
				},
			}}
			typography={{
				style: {
					marginBottom: 0,
				},
			}}
			menu={{
				style: {
					borderRight: 0,
				},
			}}
			form={{
				requiredMark: false,
			}}
		>
			<App>{children}</App>
		</ConfigProvider>
	)
}

export { AntdProvider }
