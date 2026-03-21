import type React from "react";

export default function ContentBackground({ children }: { children: React.ReactNode }) {
	
	return (
		<>
			<div className="flex items-center justify-center flex-col bg-coldfoam/20 backdrop-blur-[3px] lg:w-6/10 m-10 pb-8 rounded">
				{children}
			</div>
		</>
	)
}
