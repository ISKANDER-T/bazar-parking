import { DeleteOutlined } from "@ant-design/icons"
import { type ButtonProps, Popconfirm } from "antd"
import { type FC } from "react"
import { UiButton } from "./UiButton"

interface DeleteButtonProps extends ButtonProps {
  title?: string
  data?: string
  onConfirm?: () => void
}

export const UiDeleteButton: FC<DeleteButtonProps> = ({
  title,
  onConfirm,
  data,
  ...props
}) => {
  return (
    <>
      <Popconfirm
        title={
          title || (
            <div style={{ width: 300 }}>
              Вы действительно хотите удалить "{data || ""}"?
            </div>
          )
        }
        okText={"Удалить"}
        okButtonProps={{
          danger: true
        }}
        placement={"bottomRight"}
        onConfirm={onConfirm}
      >
        <UiButton
          type="text"
          icon={<DeleteOutlined style={{ color: "red" }} />}
          {...props}
        />
      </Popconfirm>
    </>
  )
}
