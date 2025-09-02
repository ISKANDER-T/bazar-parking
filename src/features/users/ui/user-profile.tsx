import { Col, Flex, Form, FormProps, Input, Row } from "antd"
import { useGetMe } from "../model/use-getme"
import { useUserUpdate } from "../model/use-user-update"
import { ApiSchemas } from "@/shared/api/schema"
import { UiButton } from "@/shared/ui"
import { useEffect } from "react"

type FormType = ApiSchemas["UserUpdate"] & {
  phone_number: string | null
  email: string | null
}

export const UserProfile = () => {
  const [form] = Form.useForm<FormType>()
  const { data } = useGetMe()
  const { isPending, userUpdate } = useUserUpdate()
  const onFinish: FormProps<FormType>["onFinish"] = (values) => userUpdate({ name: values.name })

  useEffect(() => {
    if (data?.data) {
      form.setFieldsValue(data.data)
    }
  }, [data])

  return <Flex vertical gap={12}>
    <div>
      <div style={{ width: 80, height: 80, borderRadius: "50%", backgroundColor: "#555233" }} />
    </div>
    <Form
      name={"login"}
      form={form}
      onFinish={onFinish}
      size={"large"}
      variant={"filled"}
      layout={"vertical"}

    >
      <Row gutter={[20, 0]} style={{ padding: " 0px" }}>
        <Col span={12}>
          <Form.Item<FormType>
            label="Имя"
            name="name"
            rules={[{ type: "string" }, { required: true }]}
          >
            <Input />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item<FormType>
            label="Email"
            name="email"
            rules={[{ type: "string" }, { required: true }]}
          >
            <Input />
          </Form.Item>

        </Col>
        <Col span={12}>
          <Form.Item<FormType>
            label="Телефон"
            name="phone_number"
            rules={[{ type: "string" }, { required: true }]}
          >
            <Input />
          </Form.Item>
        </Col>
        <Col span={12} >
          <Form.Item style={{ paddingTop: 45 }}>
            <UiButton
              loading={isPending}
              disabled={isPending}
              block={true}
              type={"primary"}
              htmlType={"submit"}
            >
              Сохранить
            </UiButton>
          </Form.Item></Col>
      </Row>
    </Form>
  </Flex>
}