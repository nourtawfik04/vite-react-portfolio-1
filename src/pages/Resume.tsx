import ResumeTab from "../components/ResumeTab"
import resumeOptions from '../../resumeOptions.json'

const Resume = () => {
  return (
    <div className="flex flex-col divide-y dark:divide-gray-600 md:max-w-5xl mx-auto">
      <section className="bg-[#FFC700]dark:bg-neutral-900 py-20 lg:py-32">
        <div className="flex flex-col gap-y-7 items-left justify-left text-left">
          <h1 className="mb-4 text-4xl font-normal tracking-normal md:text-5xl">
            Resume
          </h1>
          <p className="mb-6 font-normal leading-relaxed text-gray-500 lg:mb-8 text-xl">
            Insert File Here
          </p>
        </div>
      </section>
    </div>
  )
}

export default Resume