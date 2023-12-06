import { useRef } from "react";
import "./skills.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "React.js",
    img: "https://es.react.dev/images/og-home.png",
    desc: "With a focus on front-end development, I bring proficiency in React.js to create dynamic and responsive user interfaces. Leveraging the declarative syntax and component-based architecture, I craft scalable and maintainable applications. My experience with React.js includes building interactive web solutions that deliver a seamless and engaging user experience.",
  },
  {
    id: 2,
    title: "Angular",
    img: "https://miro.medium.com/v2/resize:fit:1358/1*cGDDA2mfYkjiIhGaN8gDoA.png",
    desc: "As a developer familiar with Angular, I excel in building robust and dynamic front-end solutions. Utilizing the powerful features of Angular, I create interactive user interfaces that enhance the overall user experience. My expertise lies in leveraging Angular's capabilities to develop scalable and efficient web applications.",
  },

  {
    id: 3,
    title: "Next.js",
    img: "https://i.imgur.com/V64B49d.png",
    desc: "With a focus on building performant and dynamic web applications, I bring expertise in Next.js. Leveraging the power of server-side rendering and React.js, I create seamless user experiences that prioritize speed and responsiveness. Whether optimizing for search engine visibility or crafting scalable applications, my proficiency in Next.js ensures the delivery of cutting-edge solutions.",
  },
  {
    id: 4,
    title: "NodeJS",
    img: "https://www.muylinux.com/wp-content/uploads/2022/04/nodejs.png",
    desc: "I specialize in building the server-side of websites using Node.js and Express.js. These technologies allow me to create fast and efficient backend solutions, ensuring smooth communication between the server and the user's browser. My focus includes designing robust logic for the server and creating interfaces that work seamlessly with web applications.",
  },

  {
    id: 5,
    title: "Databases",
    img: "https://weld.app/_next/image?url=https%3A%2F%2Fuploads-ssl.webflow.com%2F60d5e12b5c772dbf7315804e%2F63b6be39d64e148fd11afe95_sql-or-nosql-databases-which-one-is-best-for-storing-data-in-your-organisation.png&w=1200&q=75",
    desc: "Proficient in handling both MongoDB and SQL databases, I bring expertise in structuring and managing data effectively. With MongoDB, I excel in designing flexible and scalable NoSQL databases, while my SQL proficiency allows me to create structured and relational database solutions. This dual competency enables me to choose the right database approach based on project requirements, ensuring optimal data storage and retrieval.",
  },
  {
    id: 6,
    title: "TypeScript",
    img: "https://i0.wp.com/css-tricks.com/wp-content/uploads/2022/01/typescript-logo.png?fit=1200%2C600&ssl=1",
    desc: "And obviously, after mentioning all these technologies, it's worth noting that all of them seamlessly involve TypeScript. With its statically-typed nature, TypeScript enhances the development process by catching errors during the coding phase, leading to more robust and maintainable code. Whether working with React.js, Angular, Node.js, or Express.js, integrating TypeScript ensures a smoother and more predictable development experience.",
  },
  {
    id: 7,
    title: "Project Tools",
    img: "https://images.unsplash.com/photo-1541960071727-c531398e7494?q=80&w=2448&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    desc: "In project management, I am well-versed in Scrum methodologies, fostering agile collaboration and iterative development. Utilizing the power of Jira and Azure DevOps, I streamline task tracking, sprint planning, and overall project management. Additionally, my proficiency in Figma allows for seamless collaboration on design workflows, while leveraging Office 365 ensures efficient communication and document management throughout the project lifecycle.",
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
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Skills = () => {
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
    <div className="Skills" ref={ref}>
      <div className="progress">
        <h1>Technologies</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Skills;
