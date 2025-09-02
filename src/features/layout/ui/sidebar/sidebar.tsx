import { useResponsive } from "antd-style"
import { type FC, useMemo } from "react"
import { useMenuStore } from "src/shared/store"
import { SidebarContainer } from "./sidebar-container.tsx"
import { SidebarMenu } from "./sidebar-menu.tsx"
import { useNavigate } from "react-router-dom"
import { menuData } from "../../model/menu.config.tsx"
import { useToken } from "@/shared/hooks/useToken.ts"

const Sidebar: FC = () => {
	const navigate = useNavigate()
	const { token } = useToken()
	const { collapsed } = useMenuStore()
	const { md = true } = useResponsive()
	const routes = useMemo(() => {
		if (!collapsed) return menuData
		if (!md) return menuData
		return (
			menuData?.filter((item) => {
				if (!item) return false
				if (item.type === "divider") return false
				if (item.type === "group") return false
				return item
			}) || []
		)
	}, [md, collapsed])

	return (
		<>
			<SidebarContainer>
				<div
					style={{
						position: "absolute",
						top: 0,
						left: 0,
						right: 0,
						height: 10,
						zIndex: 10,
						pointerEvents: "none",
						background: `linear-gradient(180deg, ${token.colorBgContainer}, transparent)`,
					}}
				></div>
				<nav
					style={{
						height: "calc(100vh - 80px)",
						overflowX: "hidden",
						overflowY: "auto",
					}}
				>
					<SidebarMenu
						mode={"inline"}
						items={routes}
						onClick={(item) =>
							navigate(item.key)
						}
					/>
				</nav>
			</SidebarContainer>
		</>
	)
}

export { Sidebar }
