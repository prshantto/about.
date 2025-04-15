import { motion } from "framer-motion";

const App = () => {
  return (
    <motion.div
      className="w-full min-h-screen flex flex-col items-center px-4 py-10 gap-6"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <motion.h1
        className="w-full max-w-3xl text-xl md:text-2xl font-bold flex flex-col md:flex-row gap-4 items-center justify-center rounded-3xl bg-transparent border border-gray-500 p-4"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2 }}
      >
        <img
          className="w-20 h-20 md:w-28 md:h-28 bg-contain rounded-full"
          src="/hello.gif"
          alt="Wave"
        />
        <div>
          Hi there! 👋 I'm{" "}
          <motion.span
            initial={{ rotateX: 720, opacity: 0 }} // 2 full spins
            animate={{ rotateX: 0, opacity: 1 }}
            transition={{
              duration: 1.5,
              ease: "easeOut",
            }}
            className="inline-block bg-gradient-to-r from-[#4c8cf0] to-[#3c76e8] bg-clip-text text-transparent"
          >
            Prashant Singh.
          </motion.span>
        </div>
      </motion.h1>

      <h3 className="text-xl md:text-2xl font-bold">Short Bio</h3>

      <p className="text-base md:text-xl max-w-3xl text-center">
        I’m a passionate 💻 Full Stack Developer who loves building dynamic,
        user-friendly web applications 🖥️. I specialize in the MERN stack and
        have experience with Node.js, Express, and React. My goal is to create
        seamless and intuitive user experiences while staying up-to-date with
        modern tools and trends 🌐.
      </p>

      <ul className="text-base md:text-lg list-disc pl-6 max-w-3xl space-y-2">
        <li>
          Frontend: HTML, CSS, Tailwind CSS, JavaScript, ReactJS, Recoil,
          Next.js
        </li>
        <li>
          Backend: Node.js, Express.js, REST APIs, WebSockets, Socket.IO,
          WebRTC, TypeScript, MongoDB, Postgres
        </li>
        <li>Auth/Validation: Appwrite, Zod, Firebase</li>
        <li>Tools: UI development, MERN stack, Git, GitHub</li>
      </ul>

      <div className="flex flex-col md:flex-row w-full max-w-4xl gap-10 mt-8">
        <div className="flex-1">
          <h3 className="text-xl font-bold mb-2">My Hobbies</h3>
          <ul className="list-disc pl-4 space-y-1">
            <li>Playing chess</li>
            <li>Travelling</li>
            <li>Listening to music in free time</li>
          </ul>
        </div>

        <div className="flex-1">
          <h3 className="text-xl font-bold mb-2">My Projects</h3>
          <ul className="list-disc pl-4 space-y-1">
            <li>YouTube Summarizer App</li>
            <li>MERN Chat App</li>
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

export default App;
