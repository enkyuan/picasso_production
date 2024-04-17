import {
  Text,
  Title,
  SimpleGrid,
  TextInput,
  Button,
  Group,
} from "@mantine/core";
import { useState, MouseEvent } from "react";
import { useNavigate } from "react-router-dom";
import classes from "../styles/Waitlist.module.css";
import { writeUserData } from "../firebase";

export function Waitlist() {
  const [username, setUsername] = useState(" ");
  const [email, setEmail] = useState(" ");

  const navigate = useNavigate();

  const handleFormSubmit = async (e: MouseEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      writeUserData(username, email);

      alert("Thanks for joining the wailtlist");
      navigate("/");
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div className={classes.wrapper}>
      <SimpleGrid cols={{ base: 1, sm: 2 }} spacing={50}>
        <div className={classes.centeredContent}>
          <Title className={classes.title}>Join the Waitlist</Title>
          <Text className={classes.description} mt="sm" mb={30}>
            Be one of the first to own a Picasso Card. Sign up to get early
            access.
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
  );
}
