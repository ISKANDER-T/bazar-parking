import { Card, Flex, Layout, theme, Typography } from "antd";
import { LoginForm } from "./ui/login-form";

function LoginPage() {
  const { token } = theme.useToken()
  return (
    <Layout
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Flex
        flex={1}
        justify={"center"}
        align={"center"}
      >
        <Flex align="center" justify="center"><Card
          style={{
            maxWidth: 480,
            width: "100%",
            margin: 24,
            overflow: "hidden",
            borderRadius: token.borderRadiusLG,
            display: "flex",
            flexDirection: "column",
            gap: 16,
          }}
          styles={{
            body: {
              padding: 40,
            },
          }}
        >
          <Flex
            align={"center"}
            justify={"center"}
            style={{
              marginBottom: 24,
            }}
          >
          </Flex>
          <Flex
            vertical={true}
            justify={"center"}
            align={"center"}
            style={{
              marginBottom: 24,
            }}
          >
            <Typography.Title
              level={3}
              style={{
                color: token.colorPrimary,
              }}
            >
              Привет! С возвращением!
            </Typography.Title>
            <Typography.Text style={{ color: token.colorTextTertiary, fontSize: 16 }}>
              Введите свои учётные данные, чтобы продолжить
            </Typography.Text>
          </Flex><LoginForm /></Card></Flex>
      </Flex>
    </Layout>



  );
}

export const Component = LoginPage;
