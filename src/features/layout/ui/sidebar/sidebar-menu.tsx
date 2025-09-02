import { ConfigProvider, Menu, type MenuProps } from "antd"
import { type FC } from "react"
import { useMenuStore } from "src/shared/store"
import { useSidebarStyles } from "./sidebar.style.ts"
import { useToken } from "@/shared/hooks/useToken.ts"

const SidebarMenu: FC<MenuProps> = (props) => {
	const { token } = useToken()
	const { collapsed } = useMenuStore()
	const { styles, cx } = useSidebarStyles()

	return (
		<>
			<ConfigProvider
				theme={{
					components: {
						Menu: {
							collapsedIconSize: 20,
							iconSize: 16,
							iconMarginInlineEnd: 20,
							itemHeight: 46,
							groupTitleColor: token.colorText,
						},
					},
				}}
			>
				<Menu
					{...props}
					className={cx(styles.menu, props?.className)}
					style={{
						paddingInline: collapsed ? token.paddingXS : token.paddingSM,
						...props?.style,
					}}
				/>
			</ConfigProvider>
		</>
	)
}

export { SidebarMenu }
