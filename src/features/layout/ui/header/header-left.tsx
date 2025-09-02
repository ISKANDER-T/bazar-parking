import { MenuOutlined, SearchOutlined } from "@ant-design/icons"
import { Button, Flex } from "antd"
import { useResponsive } from "antd-style"
import type { FC } from "react"
import { useMenuStore } from "src/shared/store"
import { Title, UiSearchInput } from "src/shared/ui"

const HeaderLeft: FC = () => {
	const { md = true, xl = true } = useResponsive()
	const { toggleCollapsed } = useMenuStore()

	return (
		<Flex
			gap={16}
			align={"center"}
			style={{ flexGrow: 1 }}
		>
			{md && (
				<div style={{ flexBasis: 260 - 32 }}>
					<Title level={3}>AralHub</Title>
				</div>
			)}
			<div>
				<Button
					variant={"filled"}
					color={"purple"}
					icon={<MenuOutlined />}
					onClick={toggleCollapsed}
				/>
			</div>
			{!md ? (
				<div>
					<Button
						variant={"filled"}
						color={"purple"}
						icon={<SearchOutlined />}
					/>
				</div>
			) : (
				<div
					style={{
						flexBasis: xl ? 435 : 250,
						flexGrow: 1,
						display: "flex",
						alignItems: "center",
						maxWidth: xl ? 435 : 250,
					}}
				>
					<UiSearchInput
						suffix={
							<Button
								variant={"filled"}
								color={"purple"}
								onClick={(e) => e.stopPropagation()}

							/>
						}
					/>
				</div>
			)}
		</Flex>
	)
}

export { HeaderLeft }
