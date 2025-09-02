import { Button, Card, Flex, Table, TableProps } from "antd"
import { useCameraList } from "./model/use-camera-list"
import { ApiSchemas } from "@/shared/api/schema"
import {
  EditTwoTone,
  EyeTwoTone,
} from "@ant-design/icons"
import { useState } from "react"
import { Title, UiButton } from "@/shared/ui"
import { CameraForm } from "./ui/camera-form"

export const CameraPage = () => {
  const { data, isLoading } = useCameraList()
  const [formIsOpen, setFormIsOpen] = useState(false)
  const handleCloseForm = () => setFormIsOpen(false)
  const handleOpenForm = () => setFormIsOpen(true)
  const columns: TableProps<ApiSchemas["CameraRead"]>["columns"] = [
    {
      key: "name",
      dataIndex: ["name"],
      title: "Название камеры"
    },
    {
      key: "path",
      dataIndex: ["path"],
      title: "Путь камеры"
    },
    {
      key: "action",
      title: "Функции",
      render: () => (
        <Flex gap={10}>
          <Button type="link" icon={<EyeTwoTone style={{ fontSize: 18 }} />} />
          <Button type="link" icon={<EditTwoTone style={{ fontSize: 18 }} />} />
        </Flex>
      )
    }
  ]

  return <Card styles={{ body: { padding: "20px 0px" } }} title={<Flex justify="space-between">
    <Title level={4}>Камера</Title>{formIsOpen ? <UiButton type="primary" onClick={handleCloseForm}>Назад</UiButton> : <UiButton type="primary" onClick={handleOpenForm}>Добавить камеру</UiButton>}</Flex>}>
    {
      formIsOpen ? <Flex justify="center"><CameraForm /></Flex> : <Table
        pagination={false}
        size="large"
        dataSource={data?.data}
        columns={columns}
        loading={isLoading} />
    }
  </Card>
}

export const Component = CameraPage