import { forwardRef } from 'react';

const About = (props: any, ref: any) => {
  return (
    <section className="bg-[#FFC700] dark:bg-neutral-900 py-20 lg:py-32" ref={ref}>
      <div className="relative grid auto-cols-fr gap-10 max-w-screen-xl px-4 mx-auto lg:grid-cols-12">
        <div className="mx-auto place-self-center lg:col-span-6 text-left">
          <h2 className="lg:max-w-2xl mb-4 text-3xl font-normal tracking-normal md:text-4xl xl:text-5xl">
            About Me
          </h2>
          <p className="lg:max-w-xl mb-6 font-normal leading-relaxed text-black-400 lg:mb-8 text-l mt-10">
            Hi, I'm Nour Tawfik, a rising junior at Northeastern University, majoring in Computer Science and Design, with an expected graduation in 2026. My passion lies in both user experience design and front-end development, where I enjoy creating seamless and intuitive user experiences.
          </p>
          <p className="lg:max-w-xl mb-6 font-normal leading-relaxed text-black-400 lg:mb-8 text-l">
            This portfolio reflects my dedication to these fields, showcasing projects designed on Figma with high-fidelity and coded using React and TypeScript. From January to June 2024, I had the opportunity to work as a UX designer at Dawn Foods during my co-op, where I delved into e-commerce and UX website research.
          </p>
          <p className="lg:max-w-xl mb-6 font-normal leading-relaxed text-black-400 lg:mb-8 text-l">
            I aspire to continue advancing in both front-end development and UX design, creating innovative solutions that enhance user interactions. This portfolio highlights my journey, featuring a mix of projects from work, classes, student organizations and personal endeavors.
          </p>
          <p className="lg:max-w-2xl font-normal leading-relaxed text-black-500 text-l">
            <strong>LinkedIn:</strong> <a href="https://linkedin.com/in/nour-tawfik/" className="underline">linkedin.com/in/nour-tawfik/</a><br />
            <strong>Email:</strong> <a href="mailto:tawfik.n@northeastern.edu" className="underline">tawfik.n@northeastern.edu</a>
          </p>
        </div>
        <div className="relative lg:block hidden lg:mt-0 lg:col-span-6 max-w-sm justify-self-end self-end mr-6">
          <img src="/images/nour.png" alt="about-1" className="transition-all duration-700 opacity-0 animating-image" />
          <div className="bg-neutral-950 absolute inset-0 transition-all duration-700 animating-bg w-full" />
        </div>
      </div>
    </section>
  );
}

export default forwardRef(About);
