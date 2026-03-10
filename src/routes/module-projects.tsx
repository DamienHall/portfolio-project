import { createFileRoute } from '@tanstack/react-router'
import InteractiveBackground from '@/components/InteractiveBackground'
import ProjectCard from '@/components/ProjectCard'

export const Route = createFileRoute('/module-projects')({
	component: () => <div id="root" className="m-8">
		<InteractiveBackground />
		<h1 className="text-3xl font-bold text-white p-8 w-fit fixed top-40 left-200 border">Module Projects</h1>
		<ProjectCard />
		<ProjectCard />
		<ProjectCard />
	</div>,
})
