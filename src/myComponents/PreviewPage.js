import React from 'react'
import Template1Page from '../template1components/Template1Page';
import Template2Page from '../template2components/Template2Page';
import Template3Page from '../template3components/Template3Page';
import Template4Page from '../template4components/Template4Page';
export default function PreviewPage({temp}) {
   let assetPreview = null;
   if (temp === 1){
     assetPreview = <Template1Page/>

   }
   else if (temp === 2){
   assetPreview =<Template2Page/>
   }
   else if (temp === 3)
   {
    assetPreview=<Template3Page />
   }
   else if (temp === 4)
   {
    assetPreview=<Template4Page />
   }
    return (
        <>
        {assetPreview}
        </>
    )
}
