import { Button, Flex, Result } from "antd"
import type { FC } from "react"
import { useNavigate } from "react-router-dom"

interface NotFoundProps {
	data?: string | object
}

const NotFoundPage: FC<NotFoundProps> = ({ data }) => {
	const navigate = useNavigate()

	return (
		<Flex
			align={"center"}
			justify={"center"}
			flex={1}
		>
			<Result
				status={"404"}
				title={"404"}
				subTitle={"Sorry, the page you visited does not exist."}
				extra={
					<Button
						onClick={() => navigate("/")}
						type={"primary"}
					>
						Back Home
					</Button>
				}
				children={typeof data === "string" ? data : JSON.stringify(data)}
			/>
		</Flex>
	)
}

export const Component = NotFoundPage