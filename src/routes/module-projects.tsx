import { createFileRoute } from '@tanstack/react-router'
import InteractiveBackground from '@/components/InteractiveBackground'

export const Route = createFileRoute('/module-projects')({
	component: () => <div id="root">
		<InteractiveBackground />
		<h1 className="text-3xl font-bold text-white p-8 w-fit">Module Projects</h1>
	</div>,
})
