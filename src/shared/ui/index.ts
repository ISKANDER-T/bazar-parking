import { Layout, Typography } from "antd"

const { Text, Title, Paragraph } = Typography
const {
	Header: LayoutHeader,
	Content: LayoutContent,
	Footer: LayoutFooter,
	Sider: LayoutSider,
} = Layout

export * from "./drawer"
export * from "./menu"
export * from "./sider"
export * from "./button"
export * from "./input"
export * from "./divider"
export * from "./header"
export * from "./container"
export * from "./loader"

export { Text, Title, Paragraph, LayoutHeader, LayoutContent, LayoutFooter, LayoutSider }
