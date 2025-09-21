import yussifImage from "../assets/yusif.jpg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

const Bio: React.FC = () => {
  return (
    <section
      id="bio"
      className="min-h-[80vh] flex items-center justify-center py-16 px-4 sm:px-16 mx-auto text-center sm:text-left"
    >
      <div className="flex flex-col md:flex-row items-center sm:items-start lg:gap-16 px-8">
        <div className="m-auto text-center order-2 md:order-1">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Hi There, I&apos;m a Passionate Frontend Developer
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl m-6">
            My name is <span className="font-semibold">Yousef Ayman</span>. I
            create modern, user-friendly interfaces.
            <br />
            Find me on
            <a
              href="https://github.com/Yussif20"
              className=" mx-3 text-githubColor hover:text-gray-700 dark:text-githubColorDark dark:hover:text-gray-300 transition-colors duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} size="lg" />
            </a>
            or
            <a
              href="https://www.linkedin.com/in/yussif-ayman/"
              className="text-linkedinColor mx-3 hover:text-blue-500 transition-colors duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} size="lg" />
            </a>
          </p>
          <div className="flex mb-8 sm:mb-2 flex-col sm:flex-row sm:items-center justify-center gap-6  text-2xl font-medium leading-6">
            <a
              href="#contact"
              className="px-6 py-2 bg-black text-white dark:bg-greenColor"
            >
              Say Hi
            </a>
            <a
              href="/yousef-ayman.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download CV{" "}
              <i className="ml-1 fa-solid fa-arrow-down fa-bounce"></i>
            </a>
          </div>
        </div>
        <div className=" flex items-center justify-center bg-black dark:bg-greenColor rounded-bioPic order-1 md:order-2 mb-6 md:mb-0">
          <img
            src={yussifImage as string}
            alt="Yusif Ayman"
            className="w-[24rem] object-cover rounded-bioPic"
          />
        </div>
      </div>
    </section>
  );
};

export default Bio;
