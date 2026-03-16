export default function ProjectCard({
  imageURL,
  title,
  description,
	ghLink,
	tags=[],
}: {
  imageURL: string
  title: string
  description: React.ReactNode
	ghLink: string,
	tags: Array<string>
}) {
  return (
    <div className="pt-8 w-4/5">
      <div className="particleInteractive rounded overflow-hidden shadow-lg bg-coldfoam">
        <img className="" src={imageURL} alt="Project Image" />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2 text-mocha border-b-2 p-6 w-2/5">{title}</div>
					<p className="text-mocha text-base font-semibold">
					Checkout the project here:
					<span className="text-almond"><a href={ghLink}> {ghLink}</a></span></p>
          <div className="pt-4 text-mocha text-base whitespace-pre-wrap">
						{description}
					</div>
        </div>
        <div className="px-6 pt-4 pb-2">
					{
						tags.map((tag, index) => {
							return <span key={index} className="inline-block bg-almond rounded-full px-3 py-1 text-sm font-semibold text-coldfoam mr-2 mb-2">
								{tag}
							</span>
						})
					}
        </div>
      </div>
    </div>
  )
}
