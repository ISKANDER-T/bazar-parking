import { Flex } from "antd"
import { useResponsive } from "antd-style"
import type { FC, ReactNode } from "react"
import { useToken } from "@/shared/hooks/useToken"
import { LayoutContent } from "src/shared/ui"

const MainContent: FC<{ children: ReactNode }> = ({ children }) => {
	const { token } = useToken()
	const { md = false } = useResponsive()
	return (
		<LayoutContent
			style={{
				borderRadius: token.borderRadiusLG,
				backgroundColor: token.colorBgLayout,
				display: "flex",
				marginRight: 20,
				padding: 20,
				overflowX: "hidden",
				overflowY: "auto",
				marginLeft: md ? 0 : 20,
				flexDirection: "column",
			}}
		>
			<Flex
				vertical={true}
				flex={1}
				gap={20}
				style={{
					padding: "0px 24px"
				}}
			>
				{children}
			</Flex>
		</LayoutContent>
	)
}

export { MainContent }
