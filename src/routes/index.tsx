import { createFileRoute } from '@tanstack/react-router'
import InteractiveBackground from '@/components/InteractiveBackground'
import ContentBackground from '@/components/ContentBackground'
import ProjectCard from '@/components/ProjectCard'
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism'
import CodeSnippet from '@/components/CodeSnippet'

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
              <strong>Purpose/Goal:</strong> This project was created to
              demonstrate my skills learned during the Front End module. In
              specific, it showcases my knowledge of React, async functionality,
              and the usage of API's to handle authentication and session
              management. The project was inspired by the love of music and the
              lack of beautiful front ends for managing that music. With the
              goal of creating an application that would look good enough to
              justify letting it take up an entire second monitor while we work,
              we created this great looking circular music player.
            </li>
            <li>
              <strong>Features:</strong> This project has multiple neat features
              the most notable being the gradient generation that takes place
              per-album. Using Chroma.js and some simple pre-processing I was
              able to generate a nice gradient for any album art attached to a
              specific song on Spotify. Not only can this generation be done for
              any album art it also tries to avoid ugly colors leaving us with
              the most optimal color choices for the art. Another nice feature
              is the circular UI, created to be intuitive, sleek and nice to
              look at. Using some fancy math and some ease animations we were
              able to make a great looking player worthy of taking up space. The
              last notible feature is the playlist navigation. When logging into
              Spotify we are able to grab all of your playlist data and allow
              you to play it directly within our app.
            </li>
            <li>
              <strong>Contributions:</strong> My most notable contributions are
              on the front end. In specific I created the concept of the
              circular navigation, and the method in which the gradients are
              generated. Most of the Spotify integration done was accomplished
              by Juan, allowing me to grab the user's data and display it
              cleanly.
            </li>
            <li>
              <strong>Skills:</strong> The skills used within this project were
              React Material Design UI's that are dependent on async calls to
              the API. Other skills include the use of other libraries like
              Chroma.js to help calculate{' '}
              <span className="bg-almond px-2 text-coldfoam mr-1 font-semibold">
                <a href="http://www.brucelindbloom.com/index.html?Eqn_DeltaE_CIE2000.html">
                  color similarity based on how eyes generally see color
                </a>
              </span>
              and the usage of API's via Spotify.
            </li>
            <li>
              <strong>How the project demonstrates these skills:</strong>{' '}
              Regarding React pages styled with MUI, this is demonstrated from
              the main music player screen itself! With the pages created with
              React and the elements on those pages being styled with custom CSS
              along with MUI. Usage of Chroma.js would be demonstrated by the
              album art dependant background gradient calculated by the colors
              from the image itself. Usage of the Spotify API is what allows us
              to gather listening data in real time from your account! With this
              we can maintain the playstate between devices, including what song
              you're listening to and where you are in that song.
            </li>
            <li>
              <strong>Takeaways:</strong> My main takeaways with this project
              were the realization that you don't have to custom write your own
              CSS framework to get unique UI and custom functionality and if you
              have a cool idea you can make it happen quick if you don't
              re-invent every piece of the puzzle.
            </li>
          </ul>
          ytEmbedURL="https://www.youtube.com/embed/JYqmLZ5Zfgg?si=bccPXxfU1uSmxypk"
          tags={[
            'Spotify OAuth2',
            'React',
            'MUI',
            'Chroma.js',
            'Lodash',
            'Spotify API',
          ]}
        />
        <ProjectCard
          imageURL="./public/BackEndProject.jpg"
          title="Back End Project"
          ghLink="https://github.com/DamienAndDustinBackend/backend-project"
          description=<ul className="list-disc ml-4">
            <li>
              <strong>Purpose/Goal:</strong> This project was created to show my
              learned skills in backend devlopement, specifically regarding
              SQLite, MySQL, Golang, API's, Google UUID, Go JWT, gorm. This
              project was inspired by the various open-source self-hosted media
              server projects out there on the internet. After learning more and
              more about how easy it is to track people through their data and
              how companies like Google use our data to train AI we came up with
              the thought to try our hand at making our own self-hosted media
              server with tagging capabilities.
            </li>
            <li>
              <strong>Features:</strong> This project includes a Postgres
              database to store not only photos but videos as well. Alongside
              the video storage and retrieval methods we have also added the
              ablitiy to interact with that data by tagging it. Tags can be
              added, edited, and attached to different type of media and be used
              to filter results when calling to the database. What good is all
              of this functionality if only one person can use it? The answer is
              not much, that's why we also used Google UUID and JWT's to allow
              for specific users to see their specific data in the database.
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
              API implementation including authorized routes using JWTs and
              Google UUID to ensure a truly unique user ID. Alongside those
              skills is the showcase of my ablity to build relational databases
              capable of handling complex functionality with SQL (specifically
              PostgreSQL).
            </li>
            <li>
              <strong>How the project demonstrates these skills:</strong> The
              demonstration of my skills in Postgres relational databases can be
              seen in how the model of databases with GORM are handled. Note the
              many-to-many relationships that the File and Tag models have:
              <CodeSnippet
                language="go"
                code={`
type File struct {
	gorm.Model
	ID          uint 'gorm:"primarykey"'
	CreatedAt   time.Time
	UpdatedAt   time.Time
	DeletedAt   gorm.DeletedAt 'gorm:"index"'
	Name        string
	Description string
	FilePath    string 'gorm:"index"'
	Tags        []Tag  'gorm:"many2many:file_tags"'

	UserId uint
}

type Tag struct {
	ID        uint 'gorm:"primarykey"'
	CreatedAt time.Time
	UpdatedAt time.Time
	DeletedAt gorm.DeletedAt 'gorm:"index"'
	Name      string
	UserId    uint

	Files []File 'gorm:"many2many:file_tags"'
}
									`}
                theme={dark}
              />
              Other skills like the Google UUID, JWT and Authorized routes can
              be easily seen with these code snippets as well, notice how routes
              that are used in the process of logging in don't require
              authorization and any route used in accessing, modifying or
              uploading files is behind the authorized router group:
              <CodeSnippet
                language="go"
                code={`
	// auth
	router.POST("/register", app.register)
	router.POST("/login", app.login)
	router.GET("/logout", app.logout)

	// authorized
	authorized := router.Group("/")
	authorized.Use(app.AuthMiddleware)
	// files
	authorized.GET("/files/:id", app.getFile)
	authorized.GET("/files", app.getFiles)
	authorized.POST("/files", app.createFile)
	authorized.PATCH("/files/:id", app.updateFile)
	authorized.DELETE("/files/:id", app.deleteFile)

									`}
                theme={dark}
              />
            </li>
            <li>
              <strong>Takeaways:</strong> This project allowed me to learn more
              about relational databases and how I people use them. I also
              learned a ton about authorization and how API routes are secured.
              Overall I've become a much better backend devloper from this
              project by improving my skils in ORM's, relational databases, and
              JWT based user identification for authorized routes. In the future
              I will almost always use an ORM for my databases, GORM in specific
              was really nice to use.
            </li>
          </ul>
          ytEmbedURL="https://www.youtube.com/embed/CqL6b-xop0s?si=hseGL2OiEMrBuZtA"
          tags={['Golang', 'GORM', 'Gin', 'Postgres', 'Go JWT/Auth']}
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
          tags={['MCP', 'Terraform', 'Docker', 'Trivy', 'OAuth', 'Linting']}
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
          tags={['Sequelize', 'REST API', 'React']}
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
          tags={[
            'Raspberry PI',
            'C#',
            '.NET',
            'Shell',
            'Linux',
            'FTP',
            'Python',
          ]}
        />
      </ContentBackground>
    </div>
  ),
})
