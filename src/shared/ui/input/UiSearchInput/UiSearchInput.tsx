import { SearchOutlined } from "@ant-design/icons"
import { ConfigProvider, Input } from "antd"
import type { SearchProps } from "antd/es/input"
import type { FC } from "react"

const UiSearchInput: FC<SearchProps> = (props) => {
	return (
		<ConfigProvider>
			<Input
				size={"large"}
				prefix={<SearchOutlined />}
				variant={"filled"}
				allowClear={true}
				placeholder={"Search"}
				{...props}
			/>
		</ConfigProvider>
	)
}

export { UiSearchInput }
