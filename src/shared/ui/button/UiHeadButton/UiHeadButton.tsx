// import { Button, ButtonProps, ConfigProvider, theme } from "antd"
// import { FC } from "react"
// import styled from "styled-components"
//
// interface StyledUiHeadButtonProps {
// 	colorPrimary: string
// 	colorPrimaryBg: string
// }
//
// const StyledUiHeadButton = styled(Button).withConfig({
// 	shouldForwardProp: (prop) => !["colorPrimary", "colorPrimaryBg"].includes(prop),
// })<StyledUiHeadButtonProps>`
// 	color: ${(props) => props.colorPrimary};
// 	background-color: ${(props) => props.colorPrimaryBg};
//
// 	&:hover {
// 		color: #fff;
// 	}
// `
//
// const UiHeadButton: FC<ButtonProps> = (props) => {
// 	const isDark = false
//
// 	const { color, ...rest } = props
//
// 	const { token } = theme.useToken()
// 	const colorToken = theme.getDesignToken({
// 		token: {
// 			colorPrimary: color || token.colorPrimary,
// 		},
// 	})
// 	const customToken = theme.getDesignToken({
// 		token: {
// 			...token,
// 			colorPrimary: color || token.colorPrimary,
// 			colorPrimaryBg: isDark
// 				? token.colorPrimaryBg
// 				: color
// 					? colorToken.colorPrimaryBg
// 					: token.colorPrimaryBg,
// 		},
// 	})
//
// 	return (
// 		<ConfigProvider
// 			theme={{
// 				token: {
// 					colorPrimary: color || token.colorPrimary,
// 					borderRadius: token.borderRadiusLG,
// 				},
// 			}}
// 		>
// 			<StyledUiHeadButton
// 				colorPrimary={customToken.colorPrimary}
// 				colorPrimaryBg={customToken.colorPrimaryBg}
// 				type={"primary"}
// 				{...rest}
// 			/>
// 		</ConfigProvider>
// 	)
// }
//
// export { UiHeadButton }
