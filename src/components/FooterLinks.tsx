import { Text, Container, ActionIcon, Group, rem } from "@mantine/core";
import {
  IconBrandLinkedin,
  IconBrandTwitter,
  IconBrandInstagram,
} from "@tabler/icons-react";
import classes from "../styles/FooterLinks.module.css";
import logo from "../assets/gradient_02.svg";

const data = [
  {
    title: "Picasso",
    links: [
      { label: "Home", link: "/" },
      { label: "Contact", link: "/contact" },
      { label: "Waitlist", link: "/waitlist" },
    ],
  },
  {
    title: "Community",
    links: [
      { label: "Email", link: "mailto:contact@picassocard.co" },
      {
        label: "LinkedIn",
        link: "https://www.linkedin.com/company/picasso-card",
      },
      { label: "X (Twitter)", link: "https://twitter.com/Picasso_Card" },
      { label: "Instagram", link: "https://www.instagram.com/picasso_card/" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", link: "#" },
      { label: "Terms of Use", link: "#" },
    ],
  },
];

export function FooterLinks() {
  const groups = data.map((group) => {
    const links = group.links.map((link, index) => (
      <Text<"a">
        key={index}
        className={classes.link}
        component="a"
        href={link.link}
      >
        {link.label}
      </Text>
    ));

    return (
      <div className={classes.wrapper} key={group.title}>
        <Text className={classes.title}>{group.title}</Text>
        {links}
      </div>
    );
  });

  return (
    <footer className={classes.footer}>
      <Container className={classes.inner}>
        <div className={classes.logo}>
          <img src={logo} height="48px" />
        </div>
        <div className={classes.groups}>{groups}</div>
      </Container>
      <Container className={classes.afterFooter}>
        <Text c="dimmed" size="sm">
          © 2024 Picasso
        </Text>
        <Group
          gap={0}
          className={classes.social}
          justify="flex-end"
          wrap="nowrap"
        >
          <a href="https://www.linkedin.com/company/picasso-card">
            <ActionIcon size="lg" color="gray" variant="subtle">
              <IconBrandLinkedin
                style={{ width: rem(18), height: rem(18) }}
                stroke={1.5}
              />
            </ActionIcon>
          </a>
          <a href="https://twitter.com/Picasso_Card">
            <ActionIcon size="lg" color="gray" variant="subtle">
              <IconBrandTwitter
                style={{ width: rem(18), height: rem(18) }}
                stroke={1.5}
              />
            </ActionIcon>
          </a>
          <a href="https://www.instagram.com/picasso_card/">
            <ActionIcon size="lg" color="gray" variant="subtle">
              <IconBrandInstagram
                style={{ width: rem(18), height: rem(18) }}
                stroke={1.5}
              />
            </ActionIcon>
          </a>
        </Group>
      </Container>
    </footer>
  );
}
