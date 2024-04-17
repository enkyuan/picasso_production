import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import { HeaderMegaMenu } from "./components/HeaderMegaMenu";
import AppRouter from "./AppRouter";
import { FooterLinks } from "./components/FooterLinks";

export default function App() {
  return (
    <MantineProvider defaultColorScheme="dark">
      <HeaderMegaMenu />
      <AppRouter />
      <FooterLinks />
    </MantineProvider>
  );
}
