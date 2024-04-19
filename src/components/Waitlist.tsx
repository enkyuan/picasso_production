import {
  Text,
  Title,
  SimpleGrid,
  TextInput,
  Button,
  Group,
} from "@mantine/core";
import { useState, MouseEvent, Suspense } from "react";
import Spline from "@splinetool/react-spline";
import { useNavigate } from "react-router-dom";
import classes from "../styles/Waitlist.module.css";
import { writeUserData } from "../firebase";

export function Waitlist() {
  const [username, setUsername] = useState(" ");
  const [email, setEmail] = useState(" ");

  const navigate = useNavigate();

  const handleFormSubmit = async (
    e: MouseEvent<HTMLButtonElement | HTMLAnchorElement>,
  ) => {
    e.preventDefault();

    if (!username || !email || username === " " || email === " ") {
      alert("Both fields are required");
      return;
    }

    try {
      writeUserData(username, email);

      alert("Thanks for joining the waitlist");
      navigate("/");
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div
      style={{
        position: "relative",
        height: "100vh",
        color: "#ffffff",
      }}
    >
      <div style={{ top: 0, left: 0, width: "100%", height: "100%" }}>
        <Suspense fallback={<div>Loading...</div>}>
          <Spline scene="https://prod.spline.design/YnU4FEWtt8lgtv4v/scene.splinecode" />
        </Suspense>
      </div>
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          alignItems: "center",
          width: "100%",
        }}
      >
        <div className={classes.wrapper}>
          <SimpleGrid cols={{ base: 1, sm: 2 }} spacing={50}>
            <div className={classes.centeredContent}>
              <Title className={classes.title}>Join the Waitlist</Title>
              <Text className={classes.description} mt="sm" mb={30}>
                Join the exclusive circle of early Picasso Card holders. Sign up
                now for early access and unlock a special offer when we launch!
              </Text>
            </div>
            <div className={classes.form}>
              <TextInput
                label="Name"
                placeholder="Enter your name"
                mt="md"
                required
                classNames={{ input: classes.input, label: classes.inputLabel }}
                onChange={(e) => setUsername(e.currentTarget.value)}
              />
              <TextInput
                label="Email"
                placeholder="Enter your email address"
                mt="md"
                required
                classNames={{ input: classes.input, label: classes.inputLabel }}
                onChange={(e) => setEmail(e.currentTarget.value)}
              />
              <Group justify="flex-end" mt="md">
                <Button
                  className={classes.control}
                  style={{ backgroundColor: "#242424" }}
                  onClick={handleFormSubmit}
                >
                  Join
                </Button>
              </Group>
            </div>
          </SimpleGrid>
        </div>
      </div>
    </div>
  );
}
