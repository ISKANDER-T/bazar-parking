import type { FC } from "react"
import { LayoutHeader } from "src/shared/ui"
import { HeaderLeft } from "./header-left.tsx"
import { HeaderRight } from "./header-right"
import { useToken } from "@/shared/hooks/useToken.ts"

const Header: FC = () => {
	const { token } = useToken()

	return (
		<LayoutHeader
			style={{
				minHeight: 80,
				display: "flex",
				lineHeight: 1,
				alignItems: "center",
				padding: "16px 24px",
				gap: 16,
				backgroundColor: token.colorBgContainer,
				position: "sticky",
				top: 0,
				left: 0,
				right: 0,
				zIndex: 10,
			}}
		>
			<HeaderLeft />
			<HeaderRight />
		</LayoutHeader>
	)
}

export { Header }
