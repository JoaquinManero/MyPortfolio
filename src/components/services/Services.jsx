import { useRef } from "react";
import "./services.scss";
import { motion, useInView } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      // animate="animate"
      // whileInView="animate"
      ref={ref}
      animate={"animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          I am constantly evolving, seeking new knowledge
          <br /> and moving forward
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img
            src="https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&w=3473&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
          <h1>
            <motion.b whileHover={{ color: "orange" }}>Academic</motion.b>{" "}
            Training
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{ color: "orange" }}>Educational</motion.b>{" "}
            Growth
          </h1>
          <button>WHERE I STUDIED?</button>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Institution Escuti</h2>
          <h5>March 2012 - December 2018</h5>
          <p>
            I completed my high school education at Institución Escuti, where
            the curriculum was oriented towards business studies. This academic
            foundation equipped me with a strong understanding of business
            principles and provided a valuable framework for my journey into the
            dynamic field of software development.
          </p>
          <button
            onClick={() =>
              window.open("https://institucionescuti.edu.ar/", "_blank")
            }
          >
            Go
          </button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>English British Academy</h2>
          <h5>March 2012 - December 2018</h5>
          <p>
            At the English British Academy, affiliated with the University of
            Cambridge, I focused on honing my English language skills. This
            experience played a crucial role in developing my proficiency in the
            language.
          </p>
          <button
            onClick={() =>
              window.open("https://britishschoolcba.com.ar/", "_blank")
            }
          >
            Go
          </button>
        </motion.div>

        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2 style={{ marginBottom: "5px" }}>
            National Technological University (UTN-FRC)
          </h2>
          <h5>March 2019 - December 2023</h5>
          <p>
            I pursued my Bachelor's degree in Information Systems Engineering at
            the National Technological University (UTN-FRC). This academic
            journey provided a solid foundation in diverse areas of information
            technology, including software development, database management, and
            system architecture.
          </p>
          <button
            onClick={() => window.open("https://utn.edu.ar/es/", "_blank")}
          >
            Go
          </button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
