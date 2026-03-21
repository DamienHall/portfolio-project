export default function Link({ url, text }: { url: string; text: string }) {
  return (
		<span className="bg-almond px-2 font-semibold">
      <a className="text-coldfoam no-underline hover:underline" href={url} target="_blank">
        {text}
      </a>
    </span>
  )
}
