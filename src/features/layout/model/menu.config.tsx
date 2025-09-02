import {
	HomeOutlined,
} from "@ant-design/icons"
import type { MenuProps } from "antd"

type MenuItem = Required<MenuProps>["items"][number]

export const menuData: MenuItem[] = [
	{
		key: "/",
		label: "Страницы",
		type: "group",
	},
	{
		key: "/",
		label: "Главная",
		icon: <HomeOutlined />,
	},
].map((el) =>
	el?.type === "divider"
		? ({
			...el,
			style: {
				marginBlock: 8,
			},
		} as MenuItem)
		: (el as MenuItem)
)
