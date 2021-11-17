import React, { useEffect, useState } from 'react'
import { Parser } from 'html-to-react'
import lz from 'lzutf8'


export default function PreviewPage({ temp }) {
  const [localStorageData, setLocalStorageData] = useState(null);
  const [previewTemp, setPreviewTemp] = useState(null);
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
    else if (temp === 0) {
      setLocalStorageData(lz.decompress(lz.decodeBase64(JSON.parse(localStorage.getItem('New-Template'))['templateData'])))
    }
    
  }, [temp])
  setTimeout(() => {
    let allParas = document.getElementsByTagName("p");
    let inde = 0;
    while (inde < allParas.length) {
      if (allParas[inde].innerHTML.length > 200) {
        console.log(allParas[inde].innerHTML)
      }
    }
  }, 10000)
  useEffect(() => {
    let main = Parser().parse(localStorageData)
    setPreviewTemp(main)
  }, [localStorageData])
  return (
    <>
      {previewTemp}
    </>
  )
}
