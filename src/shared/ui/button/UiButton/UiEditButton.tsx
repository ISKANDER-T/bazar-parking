import { EditTwoTone } from "@ant-design/icons"
import { type ButtonProps } from "antd"
import { type FC } from "react"
import {
  type FormKeys,
  type FormParams,
  useFormDevtoolsStore
} from "src/shared/store"
import { UiButton } from "./UiButton"

interface EditButtonProps extends ButtonProps {
  params?: FormParams
  formKey?: FormKeys
  disableForm?: boolean
}

export const UiEditButton: FC<EditButtonProps> = ({
  params,
  formKey,
  disableForm,
  ...props
}) => {
  const setParams = useFormDevtoolsStore((state) => state.setParams)
  const onChangeParams = () => {
    if (disableForm) return
    if (!params) return
    setParams(params, formKey)
  }

  return (
    <>
      <UiButton
        type="text"
        icon={<EditTwoTone style={{ fontSize: 18 }} />}
        onClick={onChangeParams}
        {...props}
      />
    </>
  )
}

