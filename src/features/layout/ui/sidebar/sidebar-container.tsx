import { Drawer } from "antd"
import { useResponsive } from "antd-style"
import { type FC, type PropsWithChildren } from "react"
import { useMenuStore } from "src/shared/store"
import { LayoutSider } from "src/shared/ui"


const SidebarContainer: FC<PropsWithChildren> = ({ children }) => {
	const { md = true } = useResponsive()

	const { collapsed, toggleCollapsed } = useMenuStore()

	if (md)
		return (
			<LayoutSider
				theme={"light"}
				breakpoint={"lg"}
				width={260 + 8}
				collapsedWidth={72 + 8}
				collapsed={collapsed}
				onBreakpoint={(broken) => {
					if (broken && !collapsed) {
						toggleCollapsed()
					}
				}}
				style={{
					position: "sticky",
					height: "calc(100vh - 81px)",
					top: 80,
					left: 0,
					bottom: 0,
				}}
			>
				<div
					style={{
						position: "relative",
						height: "inherit",
					}}
				>
					{children}
				</div>
			</LayoutSider>
		)

	return (
		<Drawer
			placement={"left"}
			closable={false}
			open={collapsed}
			onClose={toggleCollapsed}
			title={<>logo</>}
			width={260}
			styles={{
				body: {
					padding: 0,
					overflow: "hidden",
					position: "relative",
				},
				header: {
					minHeight: 80,
					borderBottom: 0,
				},
			}}
		>
			{children}
		</Drawer>
	)
}

export { SidebarContainer }
