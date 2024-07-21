import AnimatedLink from './AnimatedLink'
import Position from './Position'
import pastRoles from '../../pastRoles.json'

const Experience = () => {
  return (
    <section className=" dark:bg-neutral-900 py-20 lg:py-32">
      <div className="grid auto-cols-fr gap-10 max-w-screen-xl px-4 mx-auto lg:grid-cols-12">
        <div className="mx-auto place-self-start lg:col-span-5 lg:sticky lg:top-8">
          <h2 className="mb-10 text-4xl font-light tracking-normal xl:text-5xl">
            My Past Experience
          </h2>
          <AnimatedLink title="View resume" link="/resume" isExternal={false}  />
        </div>
        <div className="lg:mt-0 lg:col-span-7 ">
          <div className="w-full flex flex-col gap-y-4 divide-y dark:divide-black-400">
            {
              pastRoles.map((role: any) => <Position key={role.id} job={role} />)
            }
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience