import { motion, useScroll, useTransform } from "framer-motion";
import Form from "./components/Form";
import Heading from "./components/Heading";
import Nav from "./components/Nav";
import Sample from "./components/Sample";

function App() {
  const { scrollY } = useScroll();

  const bgY = useTransform(scrollY, [0, 500], ["0%", "50%"]);

  return (
    <>
      {/* Background Section */}
      <motion.div
        style={{
          position: "relative",
          backgroundImage: `url(${process.env.PUBLIC_URL + "/backimg.png"})`,
          backgroundSize: "cover",
          backgroundPositionY: bgY,
          backgroundRepeat: "no-repeat",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
        }}
        initial={{ scale: 1.05, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 2, ease: "easeInOut" }}
      />

      <Nav />

      {/* Heading Overlay */}
      <div
        style={{
          marginTop: 120,
          color: "white",
          marginLeft: 20,
          position: "absolute",
          top: 0,
          left: 0,
          height: "100%",
        }}
      >
        <Heading />
      </div>

      {/* Form in Corner */}
      <div
        style={{
          position: "absolute",
          bottom: 20,
          right: 20,
          backgroundColor: "#AF6118",
          color: "white",
          padding: "15px 20px",
          borderRadius: "8px",
          zIndex: 2,
          maxWidth: "90vw",
          fontSize: "14px",
          boxShadow: `
              0 4px 10px rgba(0,0,0,0.3),
              0 8px 24px rgba(0,0,0,0.25),
              0 12px 48px rgba(0,0,0,0.2)
            `,
        }}
      >
        <Form />
      </div>

      <Sample />
      <Sample />
      <Sample />
      <Sample />
      <Sample />
      <Sample />
    </>
  );
}

export default App;
