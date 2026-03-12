import React, { useState } from 'react'
import { ButtonLeft, ButtonRight, BottomNavigation } from './Navigation'

export default function Carousel({ children }: { children: React.ReactNode }) {
  const [currentSlide, setCurrentSlide] = useState<number>(0)
  const incrementSlide = () => {
    console.log('incrementing slide')
    if (currentSlide >= React.Children.count(children) - 1) {
      setCurrentSlide(0)
    } else {
      setCurrentSlide(currentSlide + 1)
    }

    wrappedChildren = wrapChildren()
  }
  const decrementSlide = () => {
    console.log('decrementing slide')
    if (currentSlide <= 0) {
      setCurrentSlide(React.Children.count(children) - 1)
    } else {
      setCurrentSlide(currentSlide - 1)
    }

    wrappedChildren = wrapChildren()
  }

  // handle children
  const wrapChildren = () => {
    if (!children) return null
    return React.Children.map(children, (child, index) => {
      let className = 'mx-4 duration-700 ease-in-out'
      if (index !== currentSlide) {
        className += ' hidden'
      }
      return (
        <div key={index} className={className}>
          {child}
        </div>
      )
    })
  }

  let wrappedChildren = wrapChildren()
	if (!wrappedChildren) return null

  return (
    <div className="space-x-4 p-4 backdrop-blur-sm bg-white/10 rounded">
      <div className="flex w-full">
        <div className="flex items-center">
          <ButtonLeft onClick={decrementSlide} />
        </div>
        <div className="flex flex-col w-full">
          <div className="flex overflow-x-hidden w-full justify-center mt-8">
            {wrappedChildren}
          </div>
          <div className="flex justify-center mt-4">
            <BottomNavigation currentSlide={currentSlide} totalSlides={wrappedChildren.length}/>
          </div>
        </div>
        <div className="flex items-center">
          <ButtonRight onClick={incrementSlide} />
        </div>
      </div>
    </div>
  )
}
