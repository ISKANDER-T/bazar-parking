import type { ButtonProps } from "antd"
import { Button, ConfigProvider, theme } from "antd"
import type { FC } from "react"

const UiButton: FC<ButtonProps> = (props) => {
	const { color, ...rest } = props
	const { token } = theme.useToken()
	return (
		<ConfigProvider
			theme={{
				token: {
					colorPrimary: color || token.colorPrimary,
				},
			}}
		>
			<Button {...rest} />
		</ConfigProvider>
	)
}

export { UiButton }
