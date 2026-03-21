import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { createFileRoute } from '@tanstack/react-router'
import InteractiveBackground from '@/components/InteractiveBackground'
import ContentBackground from '@/components/ContentBackground'
import ProjectCard from '@/components/ProjectCard'
import CodeSnippet from '@/components/CodeSnippet'
import Link from '@/components/Link'

export const Route = createFileRoute('/')({
  component: () => (
    <div id="root" className="flex justify-center bg-chocolate">
			<InteractiveBackground />
      <ContentBackground>
        <ProjectCard
          imageURL="FrontEndProject.jpg"
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
              <Link
                url="http://www.brucelindbloom.com/index.html?Eqn_DeltaE_CIE2000.html"
                text="color similarity based on how eyes generally see color"
              />{' '}
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
          imageURL="BackEndProject.jpg"
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
                code={`type File struct {
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
}`}
                theme={dark}
              />
              Other skills like the Google UUID, JWT and Authorized routes can
              be easily seen with these code snippets as well, notice how routes
              that are used in the process of logging in don't require
              authorization and any route used in accessing, modifying or
              uploading files is behind the authorized router group:
              <CodeSnippet
                language="go"
                code={`// auth
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
authorized.DELETE("/files/:id", app.deleteFile)`}
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
          imageURL="DeploymentProject.jpg"
          title="Deployment Project"
          ghLink="https://github.com/EmmanuelDamienDustinDeploymentProject/DeploymentProject"
          description=<ul className="list-disc ml-4">
            <li>
              <strong>Purpose/Goal:</strong> With how much companies are
              focusing on AI in the workplace and using AI to create custom
              solutions of all kinds we thought it would be a great idea to
              learn more about it. What better way to learn than by creating
              your own MCP server? MCP servers can be used to allow AI agents to
              connect, manage, and modify anything you program in from accessing
              a database, to modifying a text file on your computer. Alongside
              this was the goal to learn more about CICD and deployment with
              Terraform and AWS.
            </li>
            <li>
              <strong>Features:</strong> This project features an MCP server
              that you can connect your AI of choice to in order to allow it to
              have some extra functionality. In this case, the added
              functionality for proof of concept is "get_city_time",
              "get_fortune" and "apr". The get_city_time functionality allows
              you to get the time in specific cities, the get_fortune
              functionality queries a fortune cookie API and returns the result
              and the apr function calculates APR!
            </li>
            <li>
              <strong>Contributions:</strong> I created the get_fortune
              functionality and added a tool registry handler to allow for easy
              implementation of future tools. I also created the initial
              terraform setup for our deployment.
            </li>
            <li>
              <strong>Skills:</strong> This project includes important skills
              such as OAuth, Terraform and Docker. In specific we are using
              Github OAuth and GitHub actions to handle deployments in AWS.
            </li>
            <li>
              <strong>How the project demonstrates these skills:</strong> These
              skills are best showcased by short descriptions of what all of our
              GitHub workflows do and code snippets relating to how OAuth
              implemented. Starting off with GitHub workflows I'll describe our
              GitHub actions setup. We have four yml files that tell GitHub what
              to do, those four being{' '}
              <Link
                url="https://github.com/EmmanuelDamienDustinDeploymentProject/DeploymentProject/blob/main/.github/workflows/deploy.yml"
                text="deploy.yml"
              />
              ,{' '}
              <Link
                url="https://github.com/EmmanuelDamienDustinDeploymentProject/DeploymentProject/blob/main/.github/workflows/go-build-lint-test.yml"
                text="go-build-lint-test.yml"
              />
              ,{' '}
              <Link
                url="https://github.com/EmmanuelDamienDustinDeploymentProject/DeploymentProject/blob/main/.github/workflows/iac-linting.yml"
                text="iac-linting.yml"
              />{' '}
              and{' '}
              <Link
                url="https://github.com/EmmanuelDamienDustinDeploymentProject/DeploymentProject/blob/main/.github/workflows/trivy.yml"
                text="trivy.yml"
              />
              . The deploy.yml configures a docker container with Ubuntu as its
              image to then deploy onto an AWS ECS cluster. For linting we
              created the go-build-lint-test.yml to catch code issues in our go
              files and iac-linting.yml to lint our Terraform configuration. To
              handle security and check for obvious vulnerabilities we used
              Trivy with the trivy.yml workflow. <br /> Now taking a look into
              the implementation of OAuth we can see that we are using GitHub
              OAuth here:
              <CodeSnippet
                language="go"
                code={`// Set up GitHub OAuth parameters
githubQuery := githubAuthURL.Query()
githubQuery.Set("client_id", h.config.GitHubClientID)
githubQuery.Set("redirect_uri", h.config.ServerURL+"/oauth/callback")
githubQuery.Set("scope", "read:user")
githubQuery.Set("state", internalState)
githubAuthURL.RawQuery = githubQuery.Encode()

// Redirect user to GitHub for authentication
http.Redirect(w, r, githubAuthURL.String(), http.StatusFound)`}
                theme={dark}
              />
            </li>
            <li>
              <strong>Takeaways:</strong> Overall I learned that GitHub actions
              are really useful and that you can create some cool setups with
              AWS for cheap. I think in the future I will continue using AWS and
              Terraform as it is pretty intuitive after reading the
              documentation. MCP servers are also really cool and I think I
              might run one locally alongside a locally ran LLM on my home lab.
            </li>
          </ul>
          ytEmbedURL="https://www.youtube.com/embed/KiemUgAqRN4?si=Qqsq7fgnScOpITYE"
          tags={[
            'MCP',
            'Terraform',
            'Docker',
            'Trivy',
            'OAuth',
            'Linting',
            'GitHub Actions',
          ]}
        />
        <ProjectCard
          imageURL="InventoryProject.jpg"
          title="Inventory Project"
          ghLink="https://github.com/DJP-SWE2526/inventory-app"
          description=<ul className="list-disc ml-4">
            <li>
              <strong>Purpose/Goal:</strong> This application was designed to
              showcase our abilities to interact with an external API, render
              its content dynamically and asynchronously, and handle that
              content using a SQL database.
            </li>
            <li>
              <strong>Features:</strong> The project includes search
              functionality using database query filtering, an SQL database with
              seeding capabilities and methods to add, edit, and delete entries
              in the database and is all contained within an SPA.
            </li>
            <li>
              <strong>Contributions:</strong> I mainly contributed on the UI
              portion of things, specifically on layout and stylization with
              MUI. Other areas I worked on were on the backend, I created the
              seeding functionality for the database and added multiple API
              routes.
            </li>
            <li>
              <strong>Skills:</strong> REST API, React, ORM and SQL skills were
              all demonstrated within the project. We used REST principles for
              the API we created and ensured that all elements on the page were
              correctly styled with MUI. When handling anything within the
              database we made sure to do it throught the Sequelize ORM.
            </li>
            <li>
              <strong>How the project demonstrates these skills:</strong> API
              skills were demonstrated within the{' '}
              <Link
                url="https://github.com/DJP-SWE2526/inventory-app/blob/main/server/routes/items.js"
                text="items.js route"
              />
              , for example you can see in this snippet how we created the "get
              item by id" functionality:
              <CodeSnippet
                language="javascript"
                code={`router.get("/:id", async (req,res) => {
  try{
      const findOneItem = await Item.findByPk(req.params.id);
      if(findOneItem) {
          res.status(200).json(findOneItem);
      } else{
          return res.status(404).json({ error : "Item not found in database"});
      }   
  } catch(error) {
      res.status(500).json({ error: "Failed to retrieve single item"});
  }
})`}
                theme={dark}
              />
              SQL and Sequelize ORM skills were shown in the{' '}
              <Link
                url="https://github.com/DJP-SWE2526/inventory-app/tree/main/server/models"
                text="models directory"
              />
              , example being the Item model:
              <CodeSnippet
                language="javascript"
                code={`const { DataTypes, Model } = require("sequelize");
const sequelize = require("../db");

class Item extends Model {}

Item.init(
  {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    price: DataTypes.INTEGER, 
    category: DataTypes.STRING,
    image: DataTypes.STRING,
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    }
  },
  {
    sequelize,
    modelName: "Item"
  }
);

module.exports = Item;`}
                theme={dark}
              />
              All React skills were all shown via the UI, you can see that it's
              all contained within a single page and has multiple screens to
              handle add, edit and delete functionality of data.
            </li>
            <li>
              <strong>Takeaways:</strong> Writing applications as an SPA is a
              great way to reduce complexity, especially when deploying your
              website and overall leads to a better structure if your
              application is has few pages. Another takeaway was that working
              with a team requires alot more awareness regarding what code you
              touch and how much you change, for example, I tried to let my team
              know when I was working on a refactor of the routing system for
              the pages so that we didn't have horrible merge conflicts. This
              lead to a clean refactor and allowed for the rest of the team to
              shift priorities onto writing out more of the API.
            </li>
          </ul>
          ytEmbedURL="https://www.youtube.com/embed/MFk8Emz2Ixg?si=xMCHvGBnbc5krV8o"
          tags={['SQL', 'Sequelize', 'REST API', 'React']}
        />
        <ProjectCard
          imageURL="HackathonProject.jpg"
          title="Final Bootcamp Hackathon Project"
          ghLink="https://github.com/DamienHall/DM-DriveAnalyzer"
          description=<ul className="list-disc ml-4">
            <li>
              <strong>Purpose/Goal:</strong> The reason I created this program
              was to handle the content on spare HDD and SSD's around my house.
              I wanted a way of handling these storage devices that was easy and
              took little effort on my end. Using this program I have migrated
              the data from all of my spare HDDs, SSDs, and USB drives around my
              house allowing me to quickly throw them in my computer and use
              them for whatever purpose I need.
            </li>
            <li>
              <strong>Features:</strong> With the goal of creating a program
              that can handle any storage device I throw at it I needed to add
              quite a few features. Firstly is the logging system that allows
              the user to see the processing that the program is doing. I am
              logging every necessary piece of information I can from errors
              regarding connecting to the FTP server or issues where the drive
              cannot be successfully mounted to status updates on what files the
              program is currently going through, including their depth and
              filepath. Secondly I also have settings handling for a
              settings.json file which can configure recursion depth for file
              searching and ignored files. All settings are also operating
              system specific unless thrown into the GlobalSettings object, so
              the program will automatically figure out if the drive contains
              and operating system with all three major operating systems being
              supported (Linux, Mac, Windows). To compliment all of this
              functionality I also have added a setting for FTP connection
              strings allowing you to connect to ANY FTP server you want to.
            </li>
            <li>
              <strong>Contributions:</strong> Due to this being the hackathon
              project I have completed all of this by myself. Everything from
              writing the C#/.NET code and implementing a custom FTP server in
              Python to throwing my C# program on a Raspberry PI with SSH
              connections enabled for easy status viewing.
            </li>
            <li>
              <strong>Skills:</strong> This project showcases skills in Linux
              (Ubuntu in specific), C#, .NET, Python, Bash, and Networking.
            </li>
            <li>
              <strong>How the project demonstrates these skills:</strong> Skills
              regarding programming languages were shown by the code itself,
              showing that I can perform all sorts of operations from recursion
              and shell script running to file handling and FTP connections.
              Linux and Networking specific skills were shown via the
              implementation of the C#/.NET code on a Raspberry PI where I had
              to setup a custom netplan configuration for wifi sharing through
              ethernet to easily develop and test the program using SSHFS and
              NeoVim.
            </li>
            <li>
              <strong>Takeaways:</strong> I've learned that I quite enjoy shell
              scripting, for example, here is the script I wrote to check the
              partition type on each drive:
              <CodeSnippet
                language="shell"
                code={`#!/bin/bash
blkid /dev/$1 | grep -o ' PTTYPE="[^"]*"' | awk -F'"' '{print $2}' | tr -d '[:space:]'`}
                theme={dark}
              />
              I think shell scripting is a really fun way to learn how to
              interact with an operating system via the terminal while also
              writing "code".
              <br />
              I've also learned that setting up a proper devloper environment is
              extremely important. It might not seem necessary to setup GitHub
              actions, write that README.md or install all the plugins for the
              language you are working on but it is. Without the proper tools
              for the job, the job WILL take longer to complete.
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
