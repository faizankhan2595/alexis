import React from 'react'
import "../style/BackToTopButton.css";
import { useEffect, useState} from 'react'

const BackToTopButton = () => {
  const [backToTopButton, setbackToTopButton] = useState(false)

  useEffect(() => {
    window.addEventListener("scroll", () =>{
        if(window.scrollY > 100){
            setbackToTopButton(true)
        }

        else{
            setbackToTopButton(false);
        }
    })
  },[])

  const scrollUp = () =>{
    window.scrollTo({
        top : 0,
        behavior : "smooth"
    })
  }

  return (
    <div>
        {backToTopButton && (
            <button className='toTop' onClick={scrollUp}>
            <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2.12 6.70998L6 2.82998L9.88 6.70998C10.27 7.09998 10.9 7.09998 11.29 6.70998C11.68 6.31998 11.68 5.68998 11.29 5.29998L6.7 0.70998C6.31 0.31998 5.68 0.31998 5.29 0.70998L0.700001 5.29998C0.310001 5.68998 0.310001 6.31998 0.700001 6.70998C1.09 7.08998 1.73 7.09998 2.12 6.70998Z" fill="white"/>
            </svg>
            </button>
        )}
    </div>
  )
}

export default BackToTopButton