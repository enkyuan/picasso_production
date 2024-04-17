import { Button } from "@mantine/core";
import { Link } from "react-router-dom";

import Spline from "@splinetool/react-spline";

export default function Home() {
  return (
    <div>
      <Spline scene="https://prod.spline.design/fU2f1Myk8B97Wt7h/scene.splinecode" />
      <Spline
        style={{ height: "600px" }}
        scene="https://prod.spline.design/AlpxgttatjkQI-K9/scene.splinecode"
      />
      <div
        style={{
          height: "160px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "black",
        }}
      >
        <Button
          variant="gradient"
          gradient={{
            from: "rgba(213, 106, 252, 1)",
            to: "rgba(255, 255, 255, 1)",
            deg: 219,
          }}
          component={Link}
          to="/waitlist"
          style={{
            height: "70px",
            width: "300px",
            borderRadius: "999px",
            fontSize: "24px",
          }}
        >
          Join the waitlist
        </Button>
      </div>
    </div>
  );
}

// <Spline scene="https://prod.spline.design/9MR1xyQCeJECSg5p/scene.splinecode" />
