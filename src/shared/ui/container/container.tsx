import { useToken } from "@/shared/hooks/useToken"
import { Flex, type FlexProps } from "antd"
import { type FC } from "react"

const Container: FC<FlexProps> = ({ children, ...props }) => {
	const { token } = useToken()

	return (
		<>
			<Flex
				vertical={true}
				flex={1}
				gap={token.paddingLG}
				style={{
					maxWidth: token.screenXL,
					width: "100%",
					margin: "0 auto",
				}}
				{...props}
			>
				{children}
			</Flex>
		</>
	)
}

export { Container }
