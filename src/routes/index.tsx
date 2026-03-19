import { createFileRoute } from '@tanstack/react-router'
import Header from '@/components/Header'

export const Route = createFileRoute('/')({
  component: () => (
    <div id="root" className="flex justify-center">
      <InteractiveBackground />
      <ContentBackground>
        <ProjectCard
          imageURL="./public/project1.jpg"
          title="Front End Project"
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
					ytEmbedURL="https://www.youtube.com/embed/JYqmLZ5Zfgg?si=bccPXxfU1uSmxypk"
          tags={['SQLite', 'MySQL', 'Golang', "API's"]}
        />
        <ProjectCard
          imageURL="../../public/project1.jpg"
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
          tags={['SQLite', 'MySQL', 'Golang', "API's"]}
        />
        <ProjectCard
          imageURL="../../public/project1.jpg"
          title="Deployment Project"
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
					ytEmbedURL="https://www.youtube.com/embed/KiemUgAqRN4?si=Qqsq7fgnScOpITYE"
          tags={['SQLite', 'MySQL', 'Golang', "API's"]}
        />
        <ProjectCard
          imageURL="../../public/project1.jpg"
          title="Inventory Project"
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
					ytEmbedURL="https://www.youtube.com/embed/MFk8Emz2Ixg?si=xMCHvGBnbc5krV8o"
          tags={['SQLite', 'MySQL', 'Golang', "API's"]}
        />
        <ProjectCard
          imageURL="./public/project1.jpg"
          title="Final Bootcamp Hackathon Project"
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
					ytEmbedURL="https://www.youtube.com/embed/AhUHOpptB3k?si=CTnTOLhMLHSfdL8_"
          tags={['SQLite', 'MySQL', 'Golang', "API's"]}
        />
      </ContentBackground>
    </div>
  ),
})
