import React from 'react';
import ContentEditable from 'react-contenteditable';
import { useNode } from "@craftjs/core";

export const DivText = ({text, classStyle}) => {
  const { actions: {setProp} } = useNode();
  return (
         <ContentEditable
          html={text} onChange={e => setProp(props => props.text = e.target.value.replace(/<\/?[^>]+(>|$)/g, ""))} tagName="div" className={classStyle}
         />
  )
}