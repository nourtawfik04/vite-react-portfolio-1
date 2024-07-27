import { useMemo, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import projectsData from "../../portfolio.json";
import Button from "./Button";
import ArrowTopRight from "./ArrowTopRight";

// Define the Project interface
interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  url: string;
  category: string;
  company: string;
  slug: string;
  banner: string;
  content: string;
  images: { src: string; caption: string }[];
}

const ProjectDetails = () => {
  const { slug } = useParams();
  const targetElem = useRef<HTMLDivElement>(null);
  const [modalImage, setModalImage] = useState<string | null>(null);

  const projects = projectsData as Project[]; // Cast the projectsData to Project[]

  const selectedProject = useMemo<Project | undefined>(() => {
    return slug
      ? projects.find(
          (project: Project) =>
            project.slug.toLowerCase() === slug.toLowerCase()
        )
      : undefined;
  }, [slug, projects]);

  const scrollToDetails = () => {
    const elmnt = targetElem.current;
    if (elmnt) {
      elmnt.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "start",
      });
    }
  };

  const openModal = (image: string) => {
    setModalImage(image);
  };

  const closeModal = () => {
    setModalImage(null);
  };

  if (!selectedProject) {
    return <div>Project not found</div>;
  }

  return (
    <>
      <section className="bg-[#FFC700] dark:bg-neutral-900 py-20 lg:py-32">
        <div className="relative grid auto-cols-fr gap-10 max-w-screen-xl px-4 mx-auto lg:grid-cols-12">
          <div className="place-self-start lg:col-span-7">
            <h1 className="mb-4 text-2xl font-normal tracking-normal xl:text-6xl md:text-2xl">
              {selectedProject.title}
            </h1>
            <p className="mb-6 font-normal leading-relaxed text-gray-500 lg:mb-8 text-xl">
              {selectedProject.description}
            </p>
          </div>
          <Button
            runFunc={scrollToDetails}
            classNames="lg:col-span-5 lg:w-28 lg:h-28 w-24 h-24 lg:place-self-center"
          />
        </div>
      </section>
      <section
        className="py-64 bg-neutral-950 w-full bg-fixed bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${selectedProject.banner})`,
        }}
      />
      <div
        className="
          relative
          grid
          md:grid-cols-4
          grid-cols-2
          gap-8
          md:px-12
          px-8
          md:mx-auto
          mx-4
          md:py-12
          py-10
          -mt-16
          bg-white
          dark:bg-neutral-900
          md:max-w-2xl
          lg:max-w-4xl
          xl:max-w-5xl
        "
      >
        <div>
          <h3 className="font-semibold text-lg">Client</h3>
          <p className="text-xl mt-3 text-gray-500 font-normal">
            {selectedProject.company}
          </p>
        </div>
        <div>
          <h3 className="font-semibold text-lg">Services</h3>
          <p className="text-xl mt-3 text-gray-500 font-normal">
            {selectedProject.category}
          </p>
        </div>
        <div>
          <h3 className="font-semibold text-lg">Deliverables</h3>
          <p className="text-xl mt-3 text-gray-500 font-normal">
            {selectedProject.category}
          </p>
        </div>
        <div>
          <h3 className="font-semibold text-lg">Website</h3>
          <a
            href={selectedProject.url}
            target="_blank"
            rel="noopener noreferrer"
            className="
              font-semibold
              text-lg
              inline-flex
              items-center
              gap-2
              group
              dark:text-white
            "
          >
            Live Preview
            <ArrowTopRight
              classNames="
                w-5
                group-hover:translate-x-1
                group-hover:-translate-y-1
                transition-all
                duration-200
                dark:fill-gray-300
              "
            />
          </a>
        </div>
      </div>
      <div
        ref={targetElem}
        className="markdown mx-auto md:max-w-2xl py-32 md:px-0 px-4"
        dangerouslySetInnerHTML={{ __html: selectedProject.content }}
      />
      <hr className="my-12" />
      <section className="bg-[#FFC700] dark:bg-neutral-900 py-20 lg:py-32">
        <div className="relative grid auto-cols-fr gap-10 max-w-screen-xl px-4 mx-auto lg:grid-cols-12">
          <div className="place-self-start lg:col-span-7">
            <h3 className="mb-12 text-4xl font-normal tracking-normal xl:text-5xl md:text-4xl">
              Project gallery 
            </h3>
          </div>
        </div>
        <div className="grid gap-2 px-4 grid-cols-12">
          {selectedProject.images &&
            selectedProject.images.map((image, index) => (
              <div
                key={index}
                className="group overflow-hidden md:col-span-4 col-span-12 relative"
              >
                <img
                  src={image.src}
                  className="transition-all duration-700 animating-image cursor-pointer"
                  alt={`Project gallery ${index + 1}`}
                  onClick={() => openModal(image.src)}
                />
                <div className="bg-neutral-950 absolute inset-0 transition-all duration-700 animating-bg w-full" />
                <p className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white text-center py-2">
                  {image.caption}
                </p>
              </div>
            ))}
        </div>
      </section>
      {modalImage && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="relative">
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-white bg-black bg-opacity-50 rounded-full p-2"
            >
              &times;
            </button>
            <img
              src={modalImage}
              alt="Expanded view"
              className="max-w-full max-h-full"
            />
          </div>
        </div>
      )}
      <hr className="my-12" />
    </>
  );
};

export default ProjectDetails;
