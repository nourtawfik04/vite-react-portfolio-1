import Button from "./Button";

interface Props {
  scrollToAbout: () => void;
}

const Hero = ({ scrollToAbout = () => {} }: Props) => {
  return (
    <section className="bg-[#FFC700] min-h-[100vh] py-20 lg:py-40 relative">
      <div className="grid max-w-screen-xl px-4 mx-auto lg:gap-8 xl:gap-0 lg:grid-cols-12">
        <div className="w-full place-self-center lg:col-span-7 text-left px-5">
          <h1 className="w-full mb-10 mt-20 text-4xl font-light tracking-normal md:text-3xl xl:text-5xl">
            Hi, I'm Nour Tawfik
          </h1>
          <p className="text-l w-full mb-5">Computer Science + Design Student</p>
          <p className="text-l w-full mb-10">UX Design Intern</p>
        </div>
      </div>
      <div className="absolute bottom-20 right-10">
        <Button runFunc={scrollToAbout} classNames="w-16 h-16 rounded-full bg-white shadow-lg flex items-center justify-center" />
      </div>
    </section>
  );
};

export default Hero;
