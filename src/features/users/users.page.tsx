import { Card, Tabs } from "antd"
import { UserProfile } from "./ui/user-profile"
import { Title } from "@/shared/ui"

export const UsersPage = () => {
  return <Card title={<Title level={4}>Настройки аккаунта</Title>}>
    <Tabs
      tabPosition="left"
      type="line"
      size="large"
      tabBarStyle={{ width: "320px" }}
      items={[
        {
          label: <>Профиль</>,
          key: 'profile',
          children: <UserProfile />,
        }
      ]}
    />
  </Card>
}

export const Component = UsersPage