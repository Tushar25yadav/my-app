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
          backgroundImage: "url('https://images.pexels.com/photos/8973132/pexels-photo-8973132.jpeg?_gl=1*g5fll9*_ga*MTg5NDAyOTgwMC4xNzUyNTgwNTgz*_ga_8JE65Q40S6*czE3NTI1ODA1ODMkbzEkZzAkdDE3NTI1ODA1ODMkajYwJGwwJGgw')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
        }}
      >
        {showOverlay && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              height: '100%',
              width: '100%',
              backgroundColor: 'rgba(0, 0, 0, 0.732)',
              zIndex: 1,
            }}
          >
            <div
              style={{
                marginTop: 120,
                color: 'white',
                marginLeft: 20,
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
        )}
      </motion.div>
      <Sample />
    </>
  );
}

export default App;