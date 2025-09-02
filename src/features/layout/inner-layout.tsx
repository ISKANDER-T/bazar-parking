import { useToken } from "@/shared/hooks/useToken"
import { Layout } from "antd"
import { type FC, type PropsWithChildren } from "react"

const InnerLayout: FC<PropsWithChildren> = ({ children }) => {
	const { token } = useToken()

	return (
		<>
			<Layout
				hasSider={true}
				style={{
					backgroundColor: token.colorBgContainer,
				}}
			>
				{children}
			</Layout>
		</>
	)
}

export { InnerLayout }
