export function ButtonLeft({ onClick }: { onClick: () => void }) {
  return (
    <button
      type="button"
      className="w-10 h-10 p-2 rounded-xl backdrop-blur-sm hover:bg-gray-400"
      onClick={onClick}
    >
      <svg
        className="w-5 h-5 text-white rtl:rotate-180"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
        viewBox="0 0 24 24"
      >
        <path
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="m16 19-7-7 7-7"
        />
      </svg>
    </button>
  )
}

export function ButtonRight({ onClick }: { onClick: () => void }) {
  return (
    <button
      type="button"
      className="w-10 h-10 p-2 rounded-xl backdrop-blur-sm hover:bg-gray-400"
      onClick={onClick}
    >
      <svg
        className="w-5 h-5 text-white rtl:rotate-180"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
        viewBox="0 0 24 24"
      >
        <path
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="m12 5 7 7-7 7"
        />
      </svg>
    </button>
  )
}

export function BottomNavigation({ currentSlide, totalSlides }: { currentSlide: number; totalSlides: number }) {
	return (
		<div className="w-full p-2">
			<div className="flex items-center justify-center w-full h-2 space-x-2">
				{Array.from({ length: totalSlides }).map((_, index) => (
					<div
						key={index}
						className={`w-3 h-3 rounded-full ${
							index === currentSlide ? 'bg-white' : 'bg-gray-400'
						}`}
					></div>
				))}
			</div>
		</div>
	)
}
