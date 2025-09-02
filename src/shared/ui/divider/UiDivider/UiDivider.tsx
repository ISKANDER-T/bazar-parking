import { ConfigProvider, Divider } from "antd"
import type { FC } from "react"

const UiDivider: FC = () => {
	return (
		<ConfigProvider
			theme={{
				components: {
					Divider: {
						marginLG: 16,
					},
				},
			}}
		>
			<Divider />
		</ConfigProvider>
	)
}

export { UiDivider }
