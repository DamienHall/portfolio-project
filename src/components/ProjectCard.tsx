export default function ProjectCard({
  imageURL,
  title,
  description,
	tags=[],
}: {
  imageURL: string
  title: string
  description: string
	tags: Array<string>
}) {
  return (
    <div className="particleInteractive">
      <div className="max-w-sm rounded overflow-hidden shadow-lg backdrop-blur-sm bg-white/30">
        <img className="" src={imageURL} alt="Project Image" />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{title}</div>
          <p className="text-gray-700 text-base">{description}</p>
        </div>
        <div className="px-6 pt-4 pb-2">
					{
						tags.map((tag, index) => {
							return <span key={index} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
								{tag}
							</span>
						})
					}
        </div>
      </div>
    </div>
  )
}
