import React, { useEffect, useState } from 'react'
import lz from 'lzutf8'

export default function PreviewPage({ temp }) {
  const [localStorageData, setLocalStorageData] = useState(null)
  const [htmlDocs, setHtmlDocs] = useState(null)
  useEffect(() => {
    if (temp === 1) {
      setLocalStorageData(lz.decompress(lz.decodeBase64(JSON.parse(localStorage.getItem('Template-1'))['templateData'])))
    }
    else if (temp === 2) {
      setLocalStorageData(lz.decompress(lz.decodeBase64(JSON.parse(localStorage.getItem('Template-2'))['templateData'])))
    }
    else if (temp === 3) {
      setLocalStorageData(lz.decompress(lz.decodeBase64(JSON.parse(localStorage.getItem('Template-3'))['templateData'])))
    }
    else if (temp === 4) {
      setLocalStorageData(lz.decompress(lz.decodeBase64(JSON.parse(localStorage.getItem('Template-4'))['templateData'])))
    }
    
  }, [temp])
  useEffect(() => {
    let htmlDoc = new DOMParser().parseFromString(localStorageData, 'text/html')
    let arr = JSON.parse(htmlDoc.getElementsByClassName("filterHTML")[0])
    // setHtmlDocs(arr)
    console.log("array", (arr))
    // console.log(htmlDoc)
  }, [localStorageData])
  const preview = () => {
  console.log(typeof(htmlDocs))
}
  
  return (
    <>
      <button onClick={() => {
        preview()
      }}>Preview</button>
      {/* {
        // new DOMParser().parseFromString(localStorageData, 'text/html')
        htmlDocs
      } */}
    </>
  )
}
