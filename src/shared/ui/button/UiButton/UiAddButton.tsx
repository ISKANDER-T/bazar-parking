import { FormKeys, useFormDevtoolsStore } from "@/shared/store"
import { PlusOutlined } from "@ant-design/icons"
import { type ButtonProps } from "antd"
import { useResponsive } from "antd-style"
import type { ReactNode } from "react"
import { type FC } from "react"
import { UiButton } from "./UiButton"

interface AddButtonProps extends ButtonProps {
  formKey?: FormKeys
  disableForm?: boolean
  text: string
  icon?: ReactNode
}

export const UiAddButton: FC<AddButtonProps> = ({
  formKey,
  disableForm,
  text,
  icon = <PlusOutlined />,
  ...props
}) => {
  const { mobile = false } = useResponsive()
  const toggleOpen = useFormDevtoolsStore((state) => state.toggleOpen)
  return (
    <>
      <UiButton
        type="primary"
        icon={icon}
        size="middle"
        onClick={() => {
          if (disableForm) return

          toggleOpen(formKey)
        }}
      >
        {mobile ? "" : props.children !== undefined ? props.children : text}
      </UiButton>
    </>
  )
}