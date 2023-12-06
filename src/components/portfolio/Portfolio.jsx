import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Leadership",
    img: "https://plus.unsplash.com/premium_photo-1661414415246-3e502e2fb241?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    desc: "In software engineering, I lead with a collaborative and innovative mindset, fostering a positive work culture. Through strategic planning and mentorship, I ensure the delivery of high-quality software solutions. My leadership style emphasizes teamwork and individual growth, driving projects to success with a blend of logical analysis and creative problem-solving.",
  },
  {
    id: 2,
    title: "Problem-solving.",
    img: "https://images.unsplash.com/photo-1587093336587-eeca6cb17cf2?q=80&w=2179&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    desc: "In approaching challenges, I bring a problem-solving mindset to software engineering. Fueled by a blend of analytical thinking and creative solutions, I navigate complexities with a determined focus on finding effective resolutions. My ability to identify and address issues ensures a proactive and results-driven approach to project success.",
  },
  {
    id: 3,
    title: "Reliable and punctual.",
    img: "https://images.pexels.com/photos/6894528/pexels-photo-6894528.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    desc: "Known for being dependable and always on time, I consistently meet commitments and deadlines. I bring a strong work ethic to ensure a smooth and efficient workflow, earning the trust of colleagues and stakeholders.",
  },
  {
    id: 4,
    title: "Adaptable",
    img: "https://images.unsplash.com/photo-1635712707224-233b9a093808?q=80&w=3474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    desc: "My approach to software development is marked by adaptability. Whether facing new technologies or evolving project requirements, I navigate change with ease. This flexibility allows me to embrace challenges, learn quickly, and tailor solutions to meet the dynamic demands of the ever-changing tech landscape.",
  },
  {
    id: 5,
    title: "Customer centric",
    img: "https://images.unsplash.com/photo-1496115965489-21be7e6e59a0?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    desc: "I prioritize creating software with users in mind. Understanding their needs guides my development process. Actively seeking and incorporating user feedback ensures the end product not only meets but exceeds expectations, resulting in applications that are easy to use and tailored to user preferences.",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            {/* <button>See Demo</button> */}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Personal Competences</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
