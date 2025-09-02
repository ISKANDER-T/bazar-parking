// import { HomeOutlined, RightOutlined } from "@ant-design/icons"
// import { Link } from "@tanstack/react-router"
// import { Breadcrumb, theme, Typography } from "antd"
// import styled from "antd-style"
// import type { BreadcrumbItemType } from "antd/lib/breadcrumb/Breadcrumb"
// import type { FC } from "react"
//
// interface StyledPageHeaderProps {
// 	borderRadius: number
// 	backgroundColor: string
// }
//
// const StyledPageHeader = styled.div<StyledPageHeaderProps>`
// 	display: flex;
// 	align-items: center;
// 	justify-content: space-between;
// 	border-radius: ${({ borderRadius }) => borderRadius}px;
// 	background-color: ${({ backgroundColor }) => backgroundColor};
// 	padding: 16px;
// `
//
// interface UiPageHeaderProps {
// 	title: string
// 	paths: BreadcrumbItemType[]
// }
//
// const UiPageHeader: FC<UiPageHeaderProps> = ({ title, paths }) => {
// 	const { token } = theme.useToken()
//
// 	const itemRender = (currentRoute: BreadcrumbItemType) => {
// 		const isLast = currentRoute?.path === paths[paths.length - 1]?.path
//
// 		if (isLast || !currentRoute.path)
// 			return <span className={"ant-breadcrumb-link"}>{currentRoute.title}</span>
//
// 		return (
// 			<Link
// 				className={"ant-breadcrumb-link"}
// 				to={currentRoute.path || ""}
// 			>
// 				{currentRoute.title}
// 			</Link>
// 		)
// 	}
//
// 	return (
// 		<StyledPageHeader
// 			backgroundColor={token.colorBgContainer}
// 			borderRadius={token.borderRadiusLG}
// 		>
// 			<Typography.Title
// 				level={4}
// 				style={{ marginBottom: 0 }}
// 			>
// 				{title}
// 			</Typography.Title>
// 			<Breadcrumb
// 				separator={<RightOutlined style={{ fontSize: 12 }} />}
// 				itemRender={itemRender}
// 				items={[
// 					{
// 						path: "/",
// 						title: <HomeOutlined />,
// 					},
// 					...paths,
// 				]}
// 			/>
// 		</StyledPageHeader>
// 	)
// }
//
// export { UiPageHeader }
