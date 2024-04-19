import { Group, Button, Box } from "@mantine/core";
import classes from "../styles/HeaderMegaMenu.module.css";
import logo from "../assets/gradient_02.svg";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Burger } from "@mantine/core";

export function HeaderMegaMenu() {
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };

  return (
    <Box>
      <header className={classes.header}>
        <Group justify="space-between" h="100%" className={classes.webHeader}>
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
          <Burger
            hiddenFrom="sm"
            opened={isDropdownVisible}
            onClick={toggleDropdown}
          />
        </Group>
      </header>
      {isDropdownVisible ? (
        <div className={classes.fullScreenDiv}>
          <a
            href="/"
            className={classes.dropdownlink}
            style={{ fontWeight: "bold" }}
          >
            Home
          </a>
          <a
            href="/contact"
            className={classes.dropdownlink}
            style={{ fontWeight: "bold" }}
          >
            Contact
          </a>
          <Button
            variant="gradient"
            gradient={{
              from: "rgba(237, 189, 255, 1)",
              to: "rgba(159, 202, 253, 0.5)",
              deg: 210,
            }}
            component={Link}
            to="/waitlist"
            style={{
              height: "70px",
              width: "300px",
              borderRadius: "999px",
              fontSize: "24px",
            }}
            onClick={toggleDropdown}
          >
            Join the waitlist
          </Button>
        </div>
      ) : null}
    </Box>
  );
}
