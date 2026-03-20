export default function ProjectCard({
  imageURL,
  title,
  ghLink,
  description,
  ytEmbedURL,
  tags = [],
}: {
  imageURL: string
  title: string
  ghLink: string
  description: React.ReactNode
  ytEmbedURL: string
  tags: Array<string>
}) {
  return (
    <div className="m-6">
      <div className="particleInteractive rounded overflow-hidden shadow-lg bg-coldfoam">
        <img className="" src={imageURL} alt="Project Image" />
        <div className="px-6 py-4">
          <div className="font-bold w-4/5 p-4 mb-6 text-xl text-mocha border-b-2">
            {title}
          </div>
						<p className="text-mocha text-base font-semibold truncate ...">
          	  Checkout the project here:
						<span className="text-coldfoam bg-almond px-2 py-1 ml-2">
          	  <a href={ghLink}>{ghLink}</a>
          	</span>
          	</p>
          <div className="pt-4 text-mocha text-base whitespace-pre-wrap">
            {description}
            <iframe
              src={ytEmbedURL}
              className="w-full h-full aspect-video mt-6 mb-4"
              title={title}
              allow="picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
        <div className="px-6 pt-4 pb-2 bg-almond flex justify-end">
          {tags.map((tag, index) => {
            return (
              <span
                key={index}
                className="inline-block bg-coldfoam rounded-full px-3 py-1 text-sm font-semibold text-mocha mr-2 mb-2"
              >
                {tag}
              </span>
            )
          })}
        </div>
      </div>
    </div>
  )
}
