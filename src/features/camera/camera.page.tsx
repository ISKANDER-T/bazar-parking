import { Card, Flex, Table, TableProps } from "antd"
import { useCameraList } from "./model/use-camera-list"
import { ApiSchemas } from "@/shared/api/schema"
import { Title, UiAddButton, UiDeleteButton, UiEditButton } from "@/shared/ui"
import { CameraForm } from "./ui/camera-form"
import { useCameraDelete } from "./model/use-camera-delete"

export const CameraPage = () => {
  const { data, isLoading } = useCameraList()
  const { cameraDelete } = useCameraDelete()

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
      render: (_, res) => (
        <Flex gap={10}>
          <UiEditButton params={res} />
          <UiDeleteButton
            data={res.name}
            onConfirm={() => cameraDelete(res.id!)}
          />
        </Flex>
      )
    }
  ]

  return <>
    <Card styles={{ body: { padding: "20px 0px" } }} title={<Flex justify="space-between">
      <Title level={4}>Камера</Title><UiAddButton text="добавить камеру" /></Flex>}>
      <Table
        pagination={false}
        size="large"
        dataSource={data?.data}
        columns={columns}
        loading={isLoading} />
    </Card>
    <CameraForm />
  </>
}

export const Component = CameraPage