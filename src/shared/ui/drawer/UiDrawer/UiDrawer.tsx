import { FormKeys, useFormDevtoolsStore } from "@/shared/store"
import type { DrawerProps, FormInstance } from "antd"
import { Button, ConfigProvider, Drawer, Flex, theme } from "antd"
import { useCallback, useEffect, type FC } from "react"
import { useShallow } from "zustand/react/shallow"
import { UiButton } from "../../button/UiButton/UiButton"

interface FormDrawerProps extends DrawerProps {
	form: FormInstance
	formKey?: FormKeys
	formKeys?: FormKeys[]
	loading: boolean
	success: boolean
}

const UiDrawer: FC<FormDrawerProps> = ({
	form,
	formKey = "main",
	formKeys,
	loading,
	success,
	...props
}) => {
	const { token } = theme.useToken()
	const {
		open,
		resetParams,
		params,
		formKey: storeKey
	} = useFormDevtoolsStore(useShallow((state) => state))

	const onCloseDrawer = useCallback(() => {
		resetParams()
		form.resetFields()
	}, [resetParams, form])

	useEffect(() => {
		if (!loading && success) {
			onCloseDrawer()
			form.resetFields()
		}
	}, [form, loading, onCloseDrawer, success])
	return (
		<ConfigProvider
			theme={{
				components: {
					Drawer: {
						colorBgElevated: token.colorBgContainer,
					},
				},
			}}
		>
			<Drawer
				width={375}
				open={
					open && (formKeys ? formKeys?.includes(storeKey) : storeKey === formKey)
				}
				title={params ? "Изменить" : "Добавить"}
				onClose={onCloseDrawer}
				placement={"right"}
				styles={{
					body: {
						paddingBlock: 16
					}
				}}
				footer={
					<Flex gap={8} justify={"end"}>
						<Button onClick={onCloseDrawer}>Отмена</Button>
						<UiButton
							loading={loading}
							disabled={loading} onClick={form.submit}
							type={"primary"}
						>
							Сохранить
						</UiButton>
					</Flex>
				}
				{...props}
			/>
		</ConfigProvider>
	)
}

export { UiDrawer }
