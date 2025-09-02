import { Container } from "@/shared/ui"
import { Outlet } from "react-router-dom"
import { InnerLayout } from "./inner-layout"
import { MainContent } from "./main-content"
import { MainLayout } from "./main-layout"
import { Header } from "./ui/header"
import { Sidebar } from "./ui/sidebar"

export const Layout = () => {
  return <MainLayout>
    <Header />
    <InnerLayout>
      <Sidebar />
      <MainContent>
        <Container>
          <Outlet />
        </Container>
      </MainContent>
    </InnerLayout>
  </MainLayout>
}