import React, { useState } from "react";
import resumePng from "/images/resume.png"; // Path relative to the public directory

const Resume = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="flex flex-col divide-y dark:divide-gray-600 md:max-w-5xl mx-auto">
      <section className="bg-[#FFC700] dark:bg-neutral-900 py-20 lg:py-32">
        <div className="flex flex-col gap-y-7 items-left justify-left text-left">
          <h1 className="mb-4 text-4xl font-normal tracking-normal md:text-5xl">
            Resume
          </h1>
        </div>
        <div className="flex justify-center py-10">
          <img
            src={resumePng}
            alt="Resume"
            className={`cursor-pointer ${
              isExpanded ? "w-full h-full" : "w-1/2 h-1/2"
            }`}
            onClick={toggleExpand}
          />
        </div>
      </section>
    </div>
  );
};

export default Resume;
