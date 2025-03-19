import { useState } from "react";
import ThemeToggle from "./components/ThemeToggle";

import { Gallery, Item } from "react-photoswipe-gallery";
import "photoswipe/dist/photoswipe.css";

const projects = [
  {
    title: "Project Title 1",
    img: "https://picsum.photos/500/300?random=1",
    description:
      "This is a short description of Project 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    link: "https://example.com/project1",
  },
  {
    title: "Project Title 2",
    img: "https://picsum.photos/500/300?random=2",
    description:
      "This is a short description of Project 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    link: "https://example.com/project2",
  },
];

const certifications = [
  {
    title: "Certification 1",
    img: "https://picsum.photos/500/300?random=3",
    issuedDate: "January 2024",
    verificationLink: "#",
  },
  {
    title: "Certification 2",
    img: "https://picsum.photos/500/300?random=4",
    issuedDate: "March 2023",
    verificationLink: "#",
  },
];

function App() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <div className="flex justify-center text-base">
      <div className="justify-center pt-5 max-w-[650px] m-5">
        <ThemeToggle />

        <h1 className="font-bold text-[34px] mt-2 mb-2">Ari Kurniawan</h1>
        <p className="text-[18px] mb-5">
          👏 Hello, my name is Ari Kurniawan. I am a Web Developer.
        </p>
        <p className="text-[18px]">
          I've been working as a web developer with 1 year of experience.
        </p>

        {/* Featured Work */}
        <h1 className="mt-10 font-bold text-lg">Featured Work</h1>
        <div className="mt-5 grid grid-cols-1 gap-5 p-3 lg:grid-cols-2">
          {projects.map((project, index) => (
            <button
              key={index}
              className="rounded-lg shadow-md hover:shadow-xl transition"
              onClick={() => setSelectedProject(project)}
            >
              <img
                src={project.img}
                alt={project.title}
                className="rounded-t-lg w-full h-[215px]"
              />
              <h1 className="ml-3 text-sm font-medium my-3">{project.title}</h1>
            </button>
          ))}
        </div>

        {/* Project Modal */}
        {selectedProject && (
          <dialog open className="modal modal-open">
            <div className="modal-box w-full max-w-2xl">
              <div className="grid gap-4 lg:grid-cols-2">
                {/* Lightbox images */}
                <Gallery>
                  <Item
                    original={selectedProject.img}
                    thumbnail={selectedProject.img}
                    width="1200"
                    height="800"
                  >
                    {({ ref, open }) => (
                      <img
                        ref={ref}
                        src={selectedProject.img}
                        alt={selectedProject.title}
                        className="rounded-lg w-full h-auto cursor-pointer"
                        onClick={open}
                      />
                    )}
                  </Item>
                </Gallery>

                <div className="flex flex-col">
                  <h3 className="font-bold text-lg">{selectedProject.title}</h3>
                  <p className="py-2 max-h-[300px] overflow-y-auto pr-2">
                    {selectedProject.description}
                  </p>
                </div>
              </div>

              <div className="modal-action">
                <a
                  href={selectedProject.link}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-primary"
                >
                  Visit Project
                </a>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="btn"
                >
                  Close
                </button>
              </div>
            </div>
          </dialog>
        )}

        {/* Certification */}
        <h1 className="mt-10 font-bold text-lg">Certification</h1>
        <div className="mt-5 grid grid-cols-1 gap-5 p-3 lg:grid-cols-2">
          {certifications.map((cert, index) => (
            <button
              key={index}
              className="rounded-lg shadow-md hover:shadow-xl transition"
              onClick={() => setSelectedCert(cert)}
            >
              <img
                src={cert.img}
                alt={cert.title}
                className="rounded-t-lg w-full h-[215px]"
              />
              <h1 className="ml-3 text-sm font-medium my-3">{cert.title}</h1>
            </button>
          ))}
        </div>

        {/* Certification Modal */}
        {selectedCert && (
          <dialog open className="modal modal-open">
            <div className="modal-box">
              {/* Lightbox images */}
              <Gallery>
                <Item
                  original={selectedCert.img}
                  thumbnail={selectedCert.img}
                  width="1200"
                  height="800"
                >
                  {({ ref, open }) => (
                    <img
                      ref={ref}
                      src={selectedCert.img}
                      alt={selectedCert.title}
                      className="rounded-lg mb-3 cursor-pointer"
                      onClick={open}
                    />
                  )}
                </Item>
              </Gallery>

              <h3 className="font-bold text-lg">{selectedCert.title}</h3>
              <p className="text-sm text-gray-500">
                Issued: {selectedCert.issuedDate}
              </p>
              <div className="modal-action">
                {selectedCert.verificationLink && (
                  <a
                    href={selectedCert.verificationLink}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-primary"
                  >
                    Verify Certificate
                  </a>
                )}
                <button onClick={() => setSelectedCert(null)} className="btn">
                  Close
                </button>
              </div>
            </div>
          </dialog>
        )}

        {/* Skills & Tools */}
        <h1 className="mt-10 font-bold text-lg">Skills & Tools</h1>
        <div className="flex flex-wrap gap-3 p-5">
          {["PHP", "JavaScript", "Java", "Python", "Docker", "Git"].map(
            (skill) => (
              <span
                key={skill}
                className="badge badge-outline outline-1 outline-gray-400"
              >
                {skill}
              </span>
            )
          )}
        </div>

        {/* Footer */}
        <div className="flex flex-wrap justify-center mt-10 gap-5 m-1">
          <a
            href="https://www.instagram.com/arikurniawan.dev/"
            target="_blank"
            rel="noreferrer"
            className="link link-hover"
          >
            Instagram
          </a>
          <a
            href="https://www.linkedin.com/in/ariikurniawan/"
            target="_blank"
            rel="noreferrer"
            className="link link-hover"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/riikurniawan"
            target="_blank"
            rel="noreferrer"
            className="link link-hover"
          >
            GitHub
          </a>
          <a
            href="https://riikurniawan.github.io/arikurniawan-blogs"
            target="_blank"
            rel="noreferrer"
            className="link link-hover"
          >
            Blog
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
