import React, {useCallback} from 'react';
import ContentEditable from 'react-contenteditable';
import { Typography } from "@material-ui/core";
import { useNode } from "@craftjs/core";

export const TextPara = ({text, classStyle}) => {
  const { actions: {setProp} } = useNode();
  return (
      <div>
         {/* <p className={classStyle}>{text}</p> */}
         <ContentEditable
          html={text} onChange={e => setProp(props => props.text = e.target.value.replace(/<\/?[^>]+(>|$)/g, ""))} tagName="p" className={classStyle}
         />
      </div>
  )
}

TextPara.craft = {
  rules: {
    canDrag: (node) => node.data.props.text !== "Drag"
  }
}
