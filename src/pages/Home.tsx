import { Button } from "@mantine/core";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import Spline from "@splinetool/react-spline";

// The intro animation component
function Intro() {
  const isMobile = useMediaQuery({ query: "(max-width: 900px)" });

  return (
    <div>
      {isMobile ? (
        <Spline scene="https://prod.spline.design/ZROb8UaUTFFxmd2t/scene.splinecode" />
      ) : (
        <Spline scene="https://prod.spline.design/fU2f1Myk8B97Wt7h/scene.splinecode" />
      )}
    </div>
  );
}

// The cubic animation component
function Cubic() {
  const isMobile = useMediaQuery({ query: "(max-width: 900px)" });

  return (
    <div>
      {isMobile ? (
        <>
          <Spline scene="https://prod.spline.design/U0UYw6wAal2rJbHq/scene.splinecode" />
        </>
      ) : (
        <>
          <Spline scene="https://prod.spline.design/AlpxgttatjkQI-K9/scene.splinecode" />
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
            >
              Join the waitlist
            </Button>
          </div>
        </>
      )}
    </div>
  );
}

export default function Home() {
  return (
    <div>
      {/* The intro animation component */}
      {Intro()}
      {/* The cubic animation component */}
      {Cubic()}
    </div>
  );
}
