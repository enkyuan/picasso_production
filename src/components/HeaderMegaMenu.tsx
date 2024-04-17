import { Group, Button, Box } from "@mantine/core";
import classes from "../styles/HeaderMegaMenu.module.css";
import logo from "../assets/gradient_02.svg";
import { Link } from "react-router-dom";

export function HeaderMegaMenu() {
  return (
    <Box>
      <header className={classes.header}>
        <Group justify="space-between" h="100%">
          <Link to="/">
            <img src={logo} height="48px" />
          </Link>
          <Group h="100%" gap={0} visibleFrom="sm">
            <a href="/" className={classes.link} style={{ fontWeight: "bold" }}>
              Home
            </a>
            <a
              href="/contact"
              className={classes.link}
              style={{ fontWeight: "bold" }}
            >
              Contact
            </a>
          </Group>

          <Group visibleFrom="sm">
            <Button
              variant="gradient"
              gradient={{
                from: "rgba(237, 189, 255, 1)",
                to: "rgba(159, 202, 253, 0.5)",
                deg: 210,
              }}
              component={Link}
              to="/waitlist"
            >
              Join the waitlist
            </Button>
          </Group>
        </Group>
      </header>
    </Box>
  );
}
