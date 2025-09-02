import { createStyles } from "antd-style"

export const useSidebarStyles = createStyles(({ css }) => ({
	menu: css`
		.ant-menu-item.ant-menu-item-selected > .ant-menu-title-content {
			font-weight: 500;
		}

		.ant-menu-item-group > .ant-menu-item-group-title {
			font-weight: 500;
		}
	`,
}))
