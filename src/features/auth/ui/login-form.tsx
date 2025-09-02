import { UiButton } from "@/shared/ui"
import { Form, type FormProps, Input } from "antd"
import type { FC } from "react"
import { useLogin } from "../model/use-login"
import { ApiSchemas } from "@/shared/api/schema"

type FormType = ApiSchemas["LoginViaPhone"]

export const LoginForm: FC = () => {
  const [form] = Form.useForm<FormType>()
  const { login, isPending } = useLogin()
  const onFinish: FormProps<FormType>["onFinish"] = (values) => login(values)

  return (
    <Form
      name={"login"}
      form={form}
      onFinish={onFinish}
      size={"large"}
      variant={"filled"}
      layout={"vertical"}
      labelCol={{
        style: {
          display: "none",
        },
      }}
    >
      <Form.Item<FormType>
        label="Телефон"
        name="phone_number"
        rules={[{ type: "string" }, { required: true }]}
      >
        <Input placeholder={"Укажите номер телефона"} />
      </Form.Item>
      <Form.Item<FormType>
        label="Пароль"
        name="password"
        rules={[{ required: true }]}
      >
        <Input.Password placeholder={"Введите пароль"} />
      </Form.Item>
      <Form.Item>
        <UiButton
          loading={isPending}
          disabled={isPending}
          block={true}
          type={"primary"}
          htmlType={"submit"}
        >
          Войти
        </UiButton>
      </Form.Item>
    </Form>
  )
}

