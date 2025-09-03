import { ApiSchemas } from "@/shared/api/schema"
import { Form, FormProps, Input } from "antd"
import { useCameraCreate } from "../model/use-camera-create"
import { UiDrawer } from "@/shared/ui"
import { useFormDevtoolsStore } from "@/shared/store"
import { useCameraEdit } from "../model/use-camera-edit"
import { useEffect } from "react"
type FormType = ApiSchemas["CameraCreate"]

export const CameraForm = () => {
  const [form] = Form.useForm<FormType>()
  const { cameraCreate, isPending: cameraCreateIsPending, isSuccess: cameraCreateIsSuccess } = useCameraCreate()
  const { cameraEdit, isPending: cameraEditIsPending, isSuccess: cameraEditIsSuccess } = useCameraEdit()

  const params = useFormDevtoolsStore((state) => state.getParams<ApiSchemas["CameraRead"]>())
  const onFinish: FormProps<FormType>["onFinish"] = (values) => {
    if (params) {
      cameraEdit({
        ...values,
        id: params.id
      })
      return
    }
    cameraCreate(values)
  }

  useEffect(() => {
    form.setFieldsValue({ ...params })
  }, [form, params])

  return <UiDrawer
    form={form}
    loading={cameraCreateIsPending || cameraEditIsPending}
    success={cameraCreateIsSuccess || cameraEditIsSuccess}
  >
    <Form
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
    </Form>
  </UiDrawer>
}