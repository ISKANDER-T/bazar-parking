import { ApiSchemas } from "@/shared/api/schema"
import { Flex, Form, FormProps, Input } from "antd"
import { useCameraCreate } from "../model/use-camera-create"
import { UiButton } from "@/shared/ui"

type FormType = ApiSchemas["CameraCreate"]

export const CameraForm = () => {
  const [form] = Form.useForm<FormType>()
  const { cameraCreate, isPending } = useCameraCreate()
  const onFinish: FormProps<FormType>["onFinish"] = (values) => cameraCreate(values)

  return <Form
    name={"login"}
    form={form}
    onFinish={onFinish}
    size={"large"}
    variant={"filled"}
    layout={"vertical"}
  >
    <Form.Item<FormType>
      label="Название камеры"
      name="name"
      rules={[{ type: "string" }, { required: true }]}
    >
      <Input placeholder={"Укажите название камеры"} />
    </Form.Item>
    <Form.Item<FormType>
      label="Путь"
      name="path"
      rules={[{ required: true }]}
    >
      <Input placeholder={"Укажите путь"} />
    </Form.Item>
    <Form.Item>
      <Flex justify="flex-end">
        <UiButton
          loading={isPending}
          disabled={isPending}
          type={"primary"}
          htmlType={"submit"}
        >
          Добавить
        </UiButton>
      </Flex>
    </Form.Item>
  </Form>
}