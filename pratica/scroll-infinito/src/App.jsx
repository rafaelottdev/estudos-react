import './App.css'

import Img from './assets/Img'

import { useRef, useEffect, useState } from 'react'

function App() {
  const [srcList, setSrcList] = useState([])

  const titleRef = useRef()
  const imgRefs = useRef({})
  
  function getNewImgSrc() {
    fetch(`https://api.dicebear.com/9.x/pixel-art/svg?seed=${new Date().getTime()}`)
    .then(resp => resp.blob())
    .then((blob) => {
      if(srcList.length > 0) {
        setSrcList([...srcList, URL.createObjectURL(blob)])
      }

      else {
        setSrcList([URL.createObjectURL(blob)])
      }
    })
    .catch(err => console.log(err))
  }

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 1.0
    }

    function callback([entry], observer) {
      if(entry.isIntersecting) {
        observer.disconnect()
        getNewImgSrc()
      }
    }

    const observer = new IntersectionObserver(callback, options)

    observer.observe(titleRef.current)

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if(entry.isIntersecting) {
        observer.disconnect()
        getNewImgSrc()
      }
    }, {root: null, rootMargin: "0px", threshold: 1.0})

    const lastImg = imgRefs.current[srcList.length - 1]
    
    if(lastImg) {
      observer.observe(lastImg)
    }

    return () => observer.disconnect()
  }, [srcList])

  return (
    <div className='container'>
      <h1>Role para ver as imagens</h1>
      <p>&darr;</p>
      <p>&darr;</p>
      <p>&darr;</p>
      <p>&darr;</p>
      <p>&darr;</p>
      <p>&darr;</p>
      <p>&darr;</p>
      <p>&darr;</p>

      <div>
        <h1 ref={titleRef}>Imagens</h1>

        {
            srcList.length > 0 &&
              srcList.map((src, index) => (
              <Img key={index} src={src} ref={el => imgRefs.current[index] = el} />
            ))
        }
      </div>
    </div>
  )
}

export default App
