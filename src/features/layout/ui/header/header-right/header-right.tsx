import {
	FullscreenExitOutlined,
	FullscreenOutlined,
	SettingOutlined,
	UserOutlined,
} from "@ant-design/icons"
import { Avatar, Button, Flex, Popover, Tooltip } from "antd"
import { useResponsive } from "antd-style"
import type { FC } from "react"
import { useState } from "react"
import screenfull from "screenfull"

import { Profile } from "./profile.tsx"

const HeaderRight: FC = () => {
	const { mobile } = useResponsive()
	const [fullScreen, setFullScreen] = useState(screenfull.isFullscreen)
	return (
		<Flex
			gap={16}
			align={"center"}
		>
			{!mobile && (
				<Tooltip title={"Fullscreen"}>
					<Button
						variant={"filled"}
						color={"blue"}
						onClick={() => {
							screenfull.toggle()
							setFullScreen(!screenfull.isFullscreen)
						}}
						icon={
							fullScreen ? (
								<FullscreenExitOutlined style={{ transform: "scale(1.2)" }} />
							) : (
								<FullscreenOutlined style={{ transform: "scale(1.2)" }} />
							)
						}
					/>
				</Tooltip>
			)}
			<Popover
				trigger={"click"}
				placement={"bottomRight"}
				arrow={false}
				content={<Profile />}
			>
				<Button
					variant={"filled"}
					color={"blue"}
					shape={"round"}
					size={"large"}
					style={{
						height: 48,
						alignItems: "center",
						paddingInline: 0,
						gap: 0,
					}}
				>
					<Flex
						style={{ marginTop: 8, marginBottom: 8, marginLeft: 8, flexShrink: 0 }}
						justify={"center"}
						align={"center"}
					>
						<Avatar
							alt={"User"}
							size={34}
							icon={<UserOutlined />}
						/>
					</Flex>
					<div
						style={{
							paddingRight: 12,
							paddingLeft: 12,
						}}
					>
						<SettingOutlined
							spin={true}
							style={{
								height: 24,
								fontSize: 20,
								animationDuration: "3s",
							}}
						/>
					</div>
				</Button>
			</Popover>
		</Flex>
	)
}

export { HeaderRight }
