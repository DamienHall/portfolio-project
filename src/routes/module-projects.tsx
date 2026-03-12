import { createFileRoute } from '@tanstack/react-router'
import InteractiveBackground from '@/components/InteractiveBackground'
import ProjectCard from '@/components/ProjectCard'
import Carousel from '@/components/Carousel/Carousel'

export const Route = createFileRoute('/module-projects')({
  component: () => (
    <div id="root">
      <InteractiveBackground />
      <h1 className="text-3xl font-bold text-white p-8 w-fit backdrop-blur-sm rounded">
        Module Projects
      </h1>
      <Carousel>
        <ProjectCard
          imageURL="../../public/project1.jpg"
          title="DM-DriveAnalyzer Project"
          description="A drive migration tool built in .Net/C#."
          tags={['C#', '.Net', 'Linux', 'Raspberry Pi']}
        />
        <ProjectCard
          imageURL="../../public/project2.png"
          title="DM-DriveAnalyzer Project"
          description="A drive migration tool built in .Net/C#."
          tags={['C#', '.Net', 'Linux', 'Raspberry Pi']}
        />
        <ProjectCard
          imageURL="../../public/project1.jpg"
          title="DM-DriveAnalyzer Project"
          description="A drive migration tool built in .Net/C#."
          tags={['C#', '.Net', 'Linux', 'Raspberry Pi']}
        />
      </Carousel>
    </div>
  ),
})
