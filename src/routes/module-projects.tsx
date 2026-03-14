import { createFileRoute } from '@tanstack/react-router'
import InteractiveBackground from '@/components/InteractiveBackground'
import ProjectCard from '@/components/ProjectCard'
import ContentBackground from '@/components/ContentBackground'

export const Route = createFileRoute('/module-projects')({
  component: () => (
    <div id="root" className="flex justify-center">
      <InteractiveBackground />
			<ContentBackground>
        <ProjectCard
          imageURL="../../public/project1.jpg"
          title="Front End Project"
          description={`> This project was created to show my learned skills in Backend Development, specifically regarding <tagsstart>SQLite, MySQL, Golang, API's, Google UUID, gorm<tagsend>. This project was inspired by the various open-source self-hosted media server projects out there on the internet. After learning more and more about how easy it is to track people through their data and how companies like Google use our data to train AI we came up with the thought to try our hand at making our own self-hosted media server with tagging capabilities.\n> This project includes a SQL database to store not only photos but videos as well. Alongside the video storage and retrieval methods we have also added the ablitiy to interact with that data by tagging it. Tags can be added, edited, and attached to different type of media and be used to filter results when calling to the database. What good is all of this functionality if only one person can use it? The answer is not much, that's why we also used Google UUID and JWT's to allow for specific users to see their specific data in the database.\n> I contributed mostly in the creation of the tagging system, both on the API route side and the database side. I created a database that is tag specific and related it to the media data using GORM. I also helped with the authentication side of everything mostly in regards to implementing the JWT and middleware handling for the authorized routes.`}
					ghLink="https://github.com/DamienAndDustinBackend/backend-project"
          tags={["SQLite", "MySQL", "Golang", "API's"]}
        />
        <ProjectCard
          imageURL="../../public/project1.jpg"
          title="Back End Project"
          description=""
          tags={[]}
        />
        <ProjectCard
          imageURL="../../public/project1.jpg"
          title="Deployment Project"
          description=""
          tags={[]}
        />
        <ProjectCard
          imageURL="../../public/project1.jpg"
          title="Final Bootcamp Project"
          description=""
          tags={[]}
        />
        <ProjectCard
          imageURL="../../public/project1.jpg"
          title="Inventory Full Stack Project"
          description=""
          tags={[]}
        />
        <ProjectCard
          imageURL="../../public/project1.jpg"
          title="Backend Project"
          description=""
          tags={[]}
        />
			</ContentBackground>
    </div>
  ),
})
