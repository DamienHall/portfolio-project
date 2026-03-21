export default function OverviewCard() {
  return (
    <div className="m-6 w-full px-6">
      <div className="particleInteractive rounded overflow-hidden shadow-lg bg-coldfoam">
        <div className="px-6 py-4">
          <div className="flex flex-col items-center">
            <div className="font-bold w-fit p-4 mb-6 text-4xl text-mocha border-b-2">
              Damien Hall - SWE Apprenticeship Portfolio
            </div>
            <div className="text-mocha max-w-200 text-center">
              This repository includes all of the projects I've completed
              throughout my time in the Multiverse / HP Full Stack SWE
              Apprenticeship.
            </div>
          </div>
          <div className="font-bold w-3/4 p-4 mt-12 text-xl text-mocha border-b-2">
            Apprenticeship Overview
          </div>
          <div className="pt-4 text-mocha text-base whitespace-pre-wrap ">
            <ul className="list-disc">
              <li>
                <strong>Host Company:</strong> HP
              </li>
              <li>
                <strong>Duration:</strong> 15 Months, January 27th to March 27th
              </li>
              <li>
                <strong>Who I am:</strong> I am a Full-Stack Engineer
              </li>
              <li>
                <strong>Why I do what I do:</strong> I love solving problems and
                learning about how things work. Programming acts as my outlet
                for both while keeping my mind strong and making me smarter
                every day. Programming has been a genuine passion of mine since
                I was in middleschool.
              </li>
              <li>
                <strong>My Team:</strong> Throughout this apprenticeship I've
                been working and learning on the job as a Back End Software
                Engineer helping my team write and maintain microservices
                written in Go. These microservices contain API's that need
                creating and updating, databases to manage and functionality
                that directly impacts users experience.
              </li>
              <li>
                <strong>Impact:</strong> On the Multiverse side I gained many
                skills that enhanced my previous programming experience like
                exploring the usage of ORMs, writing asynchronous code and
                learning how to properly implement CICD and deploy my code. On
                the job training with HP has helped me improve my skills in
                regards to working on a team, following AGILE principles and
                working with microservices to deliver production ready code.
              </li>
              <li>
                <strong>Areas of Interest:</strong> Front End and Back End
                programming have really stood out to me during this
                apprenticeship. I've realized that as a programmer who enjoys
                solving problems I don't take much interest in the CICD side of
                things, however I really enjoy creating database structures,
                figuring out how certain functionality should work and creating
                unique UI for people to use. Even though CICD didn't stand out
                much for me I will say I really enjoy working with Docker.
                Docker is such a great tool and using it during my apprenticehip
                has been wonderful.
              </li>
            </ul>
          </div>
          <div className="font-bold w-3/4 p-4 mt-12 text-xl text-mocha border-b-2">
            Reflection on Learning
          </div>
          <div className="pt-4 text-mocha text-base whitespace-pre-wrap ">
            This Full Stack SWE Apprenticeship has not only been a great way to
            challenge myself and learn skills perfect for real world SWE tasks
            but also a way to get my foot in the door at a large company like
            HP. Throughout this apprenticeship I learned many skills that help
            me take my programming knowledge and put it to use in a more
            efficient way. Skills like CICD, relational database design, core UI
            principles, REST principles and tools like ORMs, Tailwind, and React
            have really stood out to me as they allow me to create anything I
            could ever want. Outside of the skills I've learned It's also been a
            life changing experience and has allowed me to enter a company as
            large as HP. I look forward to using my skills gained here to
            continue to make a living and continue my SWE career.
          </div>
        </div>
        <div className="px-6 pt-4 pb-2 bg-almond flex justify-end"></div>
      </div>
    </div>
  )
}
