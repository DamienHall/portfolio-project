import { createFileRoute } from '@tanstack/react-router'
import InteractiveBackground from '@/components/InteractiveBackground'
import ContentBackground from '@/components/ContentBackground'
import ProjectCard from '@/components/ProjectCard'

export const Route = createFileRoute('/')({
  component: () => (
    <div id="root" className="flex justify-center">
      <InteractiveBackground />
      <ContentBackground>
        <ProjectCard
          imageURL="./public/FrontEndProject.jpg"
          title="Front End Project"
          ghLink="https://github.com/FrontEndProjectMV/music-discovery-app/"
          description=<ul className="list-disc ml-4">
            <li>
              <strong>Purpose/Goal:</strong>
            </li>
            <li>
              <strong>Features:</strong>
            </li>
            <li>
              <strong>Contributions:</strong>
            </li>
            <li>
              <strong>Skills:</strong>
            </li>
						<li>
							<strong>How the project demonstrates these skills:</strong> 
						</li>
						<li>
							<strong>Takeaways:</strong>
						</li>
          </ul>
					ytEmbedURL="https://www.youtube.com/embed/JYqmLZ5Zfgg?si=bccPXxfU1uSmxypk"
          tags={["Spotify OAuth2", "React", "MUI", "Chroma.js", "Lodash", "Spotify API"]}
        />
        <ProjectCard
          imageURL="./public/BackEndProject.jpg"
          title="Back End Project"
          ghLink="https://github.com/DamienAndDustinBackend/backend-project"
          description=<ul className="list-disc ml-4">
            <li>
              <strong>Purpose/Goal:</strong> This project was created to show my
              learned skills in Backend Development, specifically regarding
              SQLite, MySQL, Golang, API's, Google UUID, gorm. This project was
              inspired by the various open-source self-hosted media server
              projects out there on the internet. After learning more and more
              about how easy it is to track people through their data and how
              companies like Google use our data to train AI we came up with the
              thought to try our hand at making our own self-hosted media server
              with tagging capabilities.
            </li>
            <li>
              <strong>Features:</strong> This project includes a SQL database to
              store not only photos but videos as well. Alongside the video
              storage and retrieval methods we have also added the ablitiy to
              interact with that data by tagging it. Tags can be added, edited,
              and attached to different type of media and be used to filter
              results when calling to the database. What good is all of this
              functionality if only one person can use it? The answer is not
              much, that's why we also used Google UUID and JWT's to allow for
              specific users to see their specific data in the database.
            </li>
            <li>
              <strong>Contributions:</strong> I contributed mostly in the
              creation of the tagging system, both on the API route side and the
              database side. I created a database that is tag specific and
              related it to the media data using GORM. I also helped with the
              authentication side of everything mostly in regards to
              implementing the JWT and middleware handling for the authorized
              routes.
            </li>
            <li>
              <strong>Skills:</strong> This project demonstrated my skills in
              API implementation including authorized routes using JWT and
              Google UUID to ensure the authorization. Alongside those skills is
              the showcase of my ablity to build relational databases capable of
              handling complex functionality.
            </li>
						<li>
							<strong>How the project demonstrates these skills:</strong> 
						</li>
						<li>
							<strong>Takeaways:</strong> Talk about the takeaways from this project
						</li>
          </ul>
					ytEmbedURL="https://www.youtube.com/embed/CqL6b-xop0s?si=hseGL2OiEMrBuZtA"
          tags={["Golang", "GORM", "Gin", "Postgres", "Custom JWT/Auth"]}
        />
        <ProjectCard
          imageURL="./public/DeploymentProject.jpg"
          title="Deployment Project"
          ghLink="https://github.com/EmmanuelDamienDustinDeploymentProject/DeploymentProject"
          description=<ul className="list-disc ml-4">
            <li>
              <strong>Purpose/Goal:</strong>
            </li>
            <li>
              <strong>Features:</strong>
            </li>
            <li>
              <strong>Contributions:</strong>
            </li>
            <li>
              <strong>Skills:</strong>
            </li>
						<li>
							<strong>How the project demonstrates these skills:</strong> 
						</li>
						<li>
							<strong>Takeaways:</strong>
						</li>
          </ul>
					ytEmbedURL="https://www.youtube.com/embed/KiemUgAqRN4?si=Qqsq7fgnScOpITYE"
          tags={["MCP", "Terraform", "Docker", "Trivy", "OAuth", "Linting"]}
        />
        <ProjectCard
          imageURL="./public/InventoryProject.jpg"
          title="Inventory Project"
          ghLink="https://github.com/DJP-SWE2526/inventory-app"
          description=<ul className="list-disc ml-4">
            <li>
              <strong>Purpose/Goal:</strong>
            </li>
            <li>
              <strong>Features:</strong>
            </li>
            <li>
              <strong>Contributions:</strong>
            </li>
            <li>
              <strong>Skills:</strong>
            </li>
						<li>
							<strong>How the project demonstrates these skills:</strong> 
						</li>
						<li>
							<strong>Takeaways:</strong>
						</li>
          </ul>
					ytEmbedURL="https://www.youtube.com/embed/MFk8Emz2Ixg?si=xMCHvGBnbc5krV8o"
          tags={["Sequelize", "REST API", "React"]}
        />
        <ProjectCard
          imageURL="./public/HackathonProject.jpg"
          title="Final Bootcamp Hackathon Project"
          ghLink="https://github.com/DamienHall/DM-DriveAnalyzer"
          description=<ul className="list-disc ml-4">
            <li>
              <strong>Purpose/Goal:</strong>
            </li>
            <li>
              <strong>Features:</strong>
            </li>
            <li>
              <strong>Contributions:</strong>
            </li>
            <li>
              <strong>Skills:</strong>
            </li>
						<li>
							<strong>How the project demonstrates these skills:</strong> 
						</li>
						<li>
							<strong>Takeaways:</strong>
						</li>
          </ul>
					ytEmbedURL="https://www.youtube.com/embed/AhUHOpptB3k?si=CTnTOLhMLHSfdL8_"
          tags={["Raspberry PI", "C#", ".NET", "Shell", "Linux", "FTP", "Python"]}
        />
      </ContentBackground>
    </div>
  ),
})
