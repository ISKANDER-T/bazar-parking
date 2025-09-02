import { useSession } from "@/shared/model/session"
import { LogoutOutlined } from "@ant-design/icons"
import type { FC } from "react"
import { useNavigate } from "react-router-dom"
import { UiMenu } from "src/shared/ui"

const Profile: FC = () => {
	const navigate = useNavigate()
	const { logout } = useSession()
	const handleNavigate = async (key: string) => {
		if (key === "/logout") {
			logout()
		} else {
			await navigate(key)
		}
	}

	return (
		<div
			style={{
				minWidth: 100,
			}}
		>
			<UiMenu
				onClick={(item) => handleNavigate(item.key)}
				items={[
					{
						key: "/logout",
						label: "Logout",
						icon: <LogoutOutlined />,
					},
				]}
			/>

		</div>
	)
}

export { Profile }
