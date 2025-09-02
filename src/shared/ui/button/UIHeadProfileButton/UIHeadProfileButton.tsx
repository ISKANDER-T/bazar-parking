// import { SettingOutlined } from "@ant-design/icons";
// import { Button, ButtonProps, ConfigProvider, theme } from "antd";
// import { FC } from "react";
// import styled from "styled-components";
//
// interface StyledUiHeadProfileButtonProps {
// 	colorPrimary: string;
// 	colorPrimaryBg: string;
// }
//
// const StyledUiHeadProfileButton = styled(Button).withConfig({
// 	shouldForwardProp: prop => !["colorPrimary", "colorPrimaryBg"].includes(prop)
// })<StyledUiHeadProfileButtonProps>`
// 	color: ${(props) => props.colorPrimary};
// 	background-color: ${(props) => props.colorPrimaryBg};
// 	height: auto;
//
// 	&:hover
// 	{
// 		color: #fff;
// 	}
// ;
// `;
//
// const UiHeadProfileButton: FC<ButtonProps> = (props) => {
// 	const {
// 		color,
// 		children,
// 		...rest
// 	} = props;
//
// 	const { token } = theme.useToken();
// 	// const buttonToken = theme.useToken();
// 	const customToken = theme.getDesignToken({
// 		token: {
// 			...token,
// 			colorPrimary: color || token.colorPrimary
// 		}
// 	});
//
// 	return (
// 		<ConfigProvider
// 			theme={{
// 				token: {
// 					borderRadiusLG: 99,
// 					borderRadius: 99,
// 					borderRadiusSM: 99,
// 					colorPrimary: color || token.colorPrimary
// 				},
// 				components: {
// 					Button: {
// 						paddingBlock: 0,
// 						paddingBlockLG: 0,
// 						paddingInline: 0,
// 						paddingInlineLG: 0,
// 					}
// 				}
// 			}}
// 		>
// 			<StyledUiHeadProfileButton
// 				colorPrimary={customToken.colorPrimary}
// 				colorPrimaryBg={customToken.colorPrimaryBg}
// 				type={"primary"}
// 				size={"large"}
// 				{...rest}
// 			>
// 				{children}
// 				<SettingOutlined style={{ fontSize: 20, paddingInline: 11 }} />
// 			</StyledUiHeadProfileButton>
// 		</ConfigProvider>
// 	);
// };
//
// export { UiHeadProfileButton };
