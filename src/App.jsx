import { useState, useEffect } from "react";
import ThemeToggle from "./components/ThemeToggle";
import LightGallery from "lightgallery/react";

// import styles
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

// import plugins if you need
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";

const projects = [
  {
    title: "SMOE International Women Day",
    img: "/work/smoe_international_women_day/1.jpg",
    description:
      "A web app for managing guest attendance, door prize payments, and winner status at SMOE International Women's Day 2025.",
    link: "#",
  },
  {
    title: "SMOE Carnival",
    img: "/work/smoe_carnival/1.jpg",
    description:
      "A web app for managing guest attendance, door prize payments, and winner status at SMOE Carnival 2025.",
    link: "#",
  },
  {
    title: "Seatrium HISS ",
    img: "/work/seatrium_hiss/1.jpg",
    description:
      "A web-based HISS system for hazard identification and safety suggestions, enhancing HSE reporting and risk mitigation at Seatrium (Singapore).",
    link: "#",
  },
  {
    title: "SMOE Gala Dinner",
    img: "/work/smoe_gala_dinner/1.jpg",
    description:
      "A web-based guest management system with QR code check-in, invitation validation, and random door prize drawing.",
    link: "#",
  },
  {
    title: "Supplier Oli Official Company Profile",
    img: "/work/supplieroli_compro/1.jpg",
    description:
      "Company profile website for Official Oil Supplier and showcase high quality lubricant products",
    link: "https://supplieroliofficial.com/",
  },
  {
    title: "ShineSkin Beauty Clinic Patient Management System",
    img: "/work/shineskin_patient_management_system/1.jpg",
    description:
      "A web-based clinic management system for Shineskin Beauty Clinic, featuring patient appointment tracking, staff management, and branch.",
    link: "#",
  },
  {
    title: "ShineSkin Beauty Clinic Company Profile",
    img: "/work/shineskin_compro/1.jpg",
    description:
      "A company profile website for Shine Skin Beauty Clinic, providing information on treatments, services, and online consultation bookings.",
    link: "https://shineskinbeautyclinic.com/",
  },
];

const certifications = [
  {
    title: "Red Hat Certified System Administrator",
    img: "/certificates/rhcsa/1.webp",
    issuedDate: "June 04, 2024",
    verificationLink: "https://rhtapps.redhat.com/verify?certId=240-096-156",
  },
  {
    title: "Junior Mobile Programmer",
    img: "/certificates/junior_mobile_programmer/1.webp",
    issuedDate: "October 07, 2022",
    verificationLink: "#",
  },
];

const gallery = [
  {
    title:
      "MSIB Infinite Learning Independent Study Program Batch 6 on IBM Academy : Hybrid Cloud & Red Hat Completion",
    img: "/gallery/1.jpg",
  },
  {
    title: "PT SMOE Indonesia Internship Completion",
    img: "/gallery/2.jpg",
  },
];

function App() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedCert, setSelectedCert] = useState(null);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const projectParam = urlParams.get("project");
    const certParam = urlParams.get("cert");

    if (projectParam) {
      const foundProject = projects.find(
        (p) =>
          p.title.toLowerCase().replace(/\s+/g, "_") ===
          projectParam.toLowerCase()
      );
      if (foundProject) setSelectedProject(foundProject);
    }

    if (certParam) {
      const foundCert = certifications.find(
        (c) =>
          c.title.toLowerCase().replace(/\s+/g, "_") === certParam.toLowerCase()
      );
      if (foundCert) setSelectedCert(foundCert);
    }
  }, []);

  return (
    <div className="flex justify-center text-base">
      <div className="justify-center pt-5 max-w-[650px] m-5">
        <ThemeToggle />

        <h1 className="font-bold text-[34px] mt-2 mb-2">Ari Kurniawan</h1>
        <p className="text-[18px] mb-5">👏 Hello, I am a Web Developer.</p>
        <p className="text-[18px]">
          I've been working as a web developer with 1 year of experience.
        </p>

        {/* Featured Work */}
        <h1 className="mt-10 font-bold text-lg">🧑🏻‍💻 Featured Works</h1>
        <div className="mt-5 grid grid-cols-1 gap-5 p-3 lg:grid-cols-2">
          {projects.map((project, index) => (
            <button
              key={index}
              className="rounded-lg shadow-md hover:shadow-xl transition"
              onClick={() => setSelectedProject(project)}
            >
              <div className="rounded-t-[7px] w-full h-[150px] overflow-hidden relative flex justify-center items-center">
                <img
                  src={project.img}
                  alt={project.title}
                  className="rounded-t-[7px] w-full h-auto object-center absolute inset-0 z-0 xs:top-0 sm:-top-24 lg:top-0"
                />
              </div>
              <h1 className="ml-3 text-sm font-medium my-3">{project.title}</h1>
            </button>
          ))}
        </div>

        {/* Project Modal */}
        {selectedProject && (
          <dialog open className="modal modal-open">
            <div className="modal-box w-full max-w-2xl">
              {/* Grid layout: 2 kolom di desktop, 1 kolom di mobile */}
              <div className="grid gap-4 lg:grid-cols-2">
                {/* Kiri: Gambar */}
                <LightGallery speed={500} plugins={[lgThumbnail, lgZoom]}>
                  <a href={selectedProject.img}>
                    <img
                      src={selectedProject.img}
                      alt={selectedProject.title}
                      className="rounded-lg w-full h-auto"
                    />
                  </a>
                </LightGallery>

                {/* Kanan: Deskripsi dengan scroll jika panjang */}
                <div className="flex flex-col">
                  <h3 className="font-bold text-lg">{selectedProject.title}</h3>
                  <p className="py-2 max-h-[300px] overflow-y-auto pr-2">
                    {selectedProject.description}
                  </p>
                </div>
              </div>

              <div className="modal-action">
                {/* Copy Link Button */}
                <button
                  onClick={() => {
                    const url = `${
                      window.location.origin
                    }?project=${selectedProject.title.replace(/\s+/g, "_")}`;
                    navigator.clipboard.writeText(url);
                    alert("Link copied to clipboard!");
                  }}
                  className="btn btn-outline"
                >
                  Copy Link
                </button>
                <button
                  onClick={() => {
                    if (selectedProject.link && selectedProject.link !== "#") {
                      window.open(selectedProject.link, "_blank");
                    }
                  }}
                  className={`btn btn-primary ${
                    !selectedProject.link || selectedProject.link === "#"
                      ? "cursor-not-allowed opacity-50"
                      : ""
                  }`}
                  disabled={
                    !selectedProject.link || selectedProject.link === "#"
                  }
                >
                  Visit Project
                </button>

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
        <h1 className="mt-10 font-bold text-lg">🏆 Certifications</h1>
        <div className="mt-5 grid grid-cols-1 gap-5 p-3 lg:grid-cols-2">
          {certifications.map((cert, index) => (
            <button
              key={index}
              className="rounded-lg shadow-md hover:shadow-xl transition"
              onClick={() => setSelectedCert(cert)}
            >
              <div className="rounded-t-[7px] w-full h-[150px] overflow-hidden relative flex justify-center items-center">
                <img
                  src={cert.img}
                  alt={cert.title}
                  className="rounded-t-[7px] w-full h-auto object-center absolute inset-0 z-0 xs:top-0 sm:-top-24 lg:top-0"
                />
              </div>
              <h1 className="ml-3 text-sm font-medium my-3">{cert.title}</h1>
            </button>
          ))}
        </div>

        {/* Certification Modal */}
        {selectedCert && (
          <dialog open className="modal modal-open">
            <div className="modal-box">
              <LightGallery speed={500} plugins={[lgThumbnail, lgZoom]}>
                <a href={selectedCert.img}>
                  <img
                    src={selectedCert.img}
                    alt={selectedCert.title}
                    className="rounded-lg mb-3 object-contain"
                  />
                </a>
              </LightGallery>
              <h3 className="font-bold text-lg">{selectedCert.title}</h3>
              <p className="text-sm text-gray-500">
                Issued: {selectedCert.issuedDate}
              </p>
              <div className="modal-action">
                {/* Copy Link Button */}
                <button
                  onClick={() => {
                    const url = `${
                      window.location.origin
                    }?cert=${selectedCert.title.replace(/\s+/g, "_")}`;
                    navigator.clipboard.writeText(url);
                    alert("Link copied to clipboard!");
                  }}
                  className="btn btn-outline"
                >
                  Copy Link
                </button>
                {selectedCert.verificationLink && (
                  <button
                    onClick={() => {
                      if (
                        selectedCert.verificationLink &&
                        selectedCert.verificationLink !== "#"
                      ) {
                        window.open(selectedCert.verificationLink, "_blank");
                      }
                    }}
                    className={`btn btn-primary ${
                      !selectedCert.verificationLink ||
                      selectedCert.verificationLink === "#"
                        ? "cursor-not-allowed opacity-50"
                        : ""
                    }`}
                    disabled={
                      !selectedCert.verificationLink ||
                      selectedCert.verificationLink === "#"
                    }
                  >
                    Verify Certificate
                  </button>
                )}
                <button onClick={() => setSelectedCert(null)} className="btn">
                  Close
                </button>
              </div>
            </div>
          </dialog>
        )}

        {/* Gallery */}
        <h1 className="mt-10 font-bold text-lg">🖼️ Gallery</h1>
        <LightGallery
          speed={500}
          plugins={[lgThumbnail, lgZoom]}
          elementClassNames="mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 p-3"
        >
          {gallery.map((item, index) => (
            <a
              key={index}
              href={item.img}
              className="rounded-[7px] w-full h-[150px] shadow-md hover:shadow-xl transition overflow-hidden relative flex justify-center items-center"
            >
              <img
                src={item.img}
                alt={item.title}
                className="lg:h-full w-full object-center absolute inset-0 z-0 xs:top-0 lg:top-0"
              />
            </a>
          ))}
        </LightGallery>

        {/* Skills & Tools */}
        <h1 className="mt-10 font-bold text-lg">🎯 Skills & Tools</h1>
        <div className="flex flex-wrap gap-3 p-5">
          {[
            "PHP",
            "Codeigniter",
            "JavaScript",
            "Java",
            "Python",
            "Node.js",
            "React.js",
            "Next.js",
            "Docker",
            "Git",
            "Bash",
            "VSCode"
          ].map((skill) => (
            <span
              key={skill}
              className="badge badge-outline outline-1 outline-gray-400"
            >
              {skill}
            </span>
          ))}
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
