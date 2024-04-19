import { Suspense, useState, useEffect } from "react";
import { FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import Spline from "@splinetool/react-spline";

export default function Contact() {
  const socialLinks = [
    {
      icon: <FaTwitter />,
      name: "Twitter (X)",
      url: "https://twitter.com/Picasso_Card",
    },
    // { icon: <FaFacebookF />, name: 'Facebook', url: 'https://facebook.com' },
    {
      icon: <FaLinkedinIn />,
      name: "LinkedIn",
      url: "https://www.linkedin.com/company/picasso-card/",
    },
    {
      icon: <FaInstagram />,
      name: "Instagram",
      url: "https://www.instagram.com/picasso_card/",
    },
  ];

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const fontSize = isMobile ? "12px" : "16px";
  const width = isMobile ? "90%" : "80%";
  const padding = isMobile ? "1rem" : "2rem";
  const h1Size = isMobile ? "2rem" : "3rem";
  const pSize = isMobile ? "0.8rem" : "1rem";

  return (
    <div
      style={{
        position: "relative",
        fontFamily: "Arial, sans-serif",
        fontSize,
        height: "100vh",
        color: "#ffffff",
      }}
    >
      <div style={{ top: 0, left: 0, width: "100%", height: "100%" }}>
        <Suspense fallback={<div>Loading...</div>}>
          <Spline scene="https://prod.spline.design/vbElfYt-iuI547e0/scene.splinecode" />
        </Suspense>
      </div>
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          justifyContent: "space-between",
          alignItems: "center",
          width,
          maxWidth: "1100px",
          pointerEvents: "auto",
        }}
      >
        <div
          style={{
            width: isMobile ? "100%" : "45%",
            padding,
            background: "rgba(255, 255, 255, 0.1)",
            borderRadius: "12px",
            textAlign: "center",
            marginBottom: isMobile ? "2rem" : "0",
          }}
        >
          <h1 style={{ fontSize: h1Size, marginBottom: "1rem" }}>Contact us</h1>
          <p style={{ fontSize: pSize }}>
            Any questions?
            <br />
            Feel free to email us and we'll get back to you :)
          </p>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "wrap",
              background: "rgba(255, 255, 255, 0.2)",
              borderRadius: "8px",
              padding: "1rem",
              fontSize: "1.25rem",
            }}
          >
            <a
              href="mailto:contact@company.com"
              style={{
                color: "#ffffff",
                textDecoration: "none",
                fontSize: pSize,
                wordWrap: "break-word",
                overflowWrap: "break-word",
                maxWidth: "100%",
              }}
            >
              contact@picassocard.com
            </a>
          </div>
        </div>
        <div
          style={{
            width: isMobile ? "100%" : "45%",
            padding: "2rem",
            background: "rgba(255, 255, 255, 0.1)",
            borderRadius: "12px",
            textAlign: "center",
            marginBottom: isMobile ? "2rem" : "0",
          }}
        >
          <div style={{ marginBottom: "2rem" }}>
            {socialLinks.map((link, index) => (
              <div
                key={index}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  margin: "10px 0",
                }}
              >
                <a
                  href={link.url}
                  style={{
                    color: "#ffffff",
                    textDecoration: "none",
                    display: "flex",
                    alignItems: "center",
                    fontSize: "1.25rem",
                  }}
                >
                  {link.icon}
                  <span style={{ marginLeft: "10px" }}>{link.name}</span>
                </a>
              </div>
            ))}
          </div>
          <p style={{ fontSize: "1rem" }}>
            Follow our Socials! <br />
            Stay up to date with our latest news and updates.
          </p>
        </div>
      </div>
    </div>
  );
}
