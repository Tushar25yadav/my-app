import { motion } from "framer-motion";
import { useState } from "react";
import Form from "./components/Form";
import Heading from "./components/Heading";
import Nav from "./components/Nav";
import Sample from "./components/Sample";

function App() {
  const [showOverlay, setShowOverlay] = useState(false);

  return (
    <>
      <Nav />
      <motion.div
        initial={{ scale: 1.05, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 2, ease: "easeInOut" }}
        onAnimationComplete={() => setShowOverlay(true)}
        style={{
          position: 'relative',
          backgroundImage: `url(${process.env.PUBLIC_URL + '/backimg.png'})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            marginTop: 120,
            color: 'white',
            marginLeft: 20,
            position: 'absolute',
            top: 0,
            left: 0,
            height: '100%',
            width: '100%',
          }}
        >
          <Heading />
        </div>

        <div
          style={{
            position: 'absolute',
            bottom: 20,
            right: 20,
            backgroundColor: '#AF6118',
            color: 'white',
            padding: '15px 20px',
            borderRadius: '8px',
            zIndex: 2,
            maxWidth: '90vw',
            fontSize: '14px',
            boxShadow: `
                  0 4px 10px rgba(0,0,0,0.3),
                  0 8px 24px rgba(0,0,0,0.25),
                  0 12px 48px rgba(0,0,0,0.2)
                `,
          }}
        >
          <Form />
        </div>
      </motion.div>
      <Sample />
    </>
  );
}

export default App;