import React from 'react';
import ContentEditable from 'react-contenteditable';
import { useNode } from "@craftjs/core";

export const TextPara = ({text, classStyle}) => {
  const { actions: {setProp} } = useNode();
  return (
        <ContentEditable
        html={text} onChange={e => setProp(props => props.text = e.target.value.replace(/<\/?[^>]+(>|$)/g, ""))} tagName="p" className={classStyle}
        />
  )
}

export const TextH1 = ({text, classStyle}) => {
  const {actions: {setProp}} = useNode();
  return (
    <ContentEditable
    html={text} onChange={e => setProp(props => props.text = e.target.value.replace(/<\/?[^>]+(>|$)/g, ""))} tagName="h1" className={classStyle}
    />
  )
}
export const TextH2 = ({text, classStyle}) => {
  const {actions: {setProp}} = useNode();
  return (
    <ContentEditable
    html={text} onChange={e => setProp(props => props.text = e.target.value.replace(/<\/?[^>]+(>|$)/g, ""))} tagName="h2" className={classStyle}
    />
  )
}
export const TextH3 = ({text, classStyle}) => {
  const {actions: {setProp}} = useNode();
  return (
    <ContentEditable
    html={text} onChange={e => setProp(props => props.text = e.target.value.replace(/<\/?[^>]+(>|$)/g, ""))} tagName="h3" className={classStyle}
    />
  )
}
export const TextH4 = ({text, classStyle}) => {
  const {actions: {setProp}} = useNode();
  return (
    <ContentEditable
    html={text} onChange={e => setProp(props => props.text = e.target.value.replace(/<\/?[^>]+(>|$)/g, ""))} tagName="h4" className={classStyle}
    />
  )
}
export const TextH5 = ({text, classStyle}) => {
  const {actions: {setProp}} = useNode();
  return (
    <ContentEditable
    html={text} onChange={e => setProp(props => props.text = e.target.value.replace(/<\/?[^>]+(>|$)/g, ""))} tagName="h5" className={classStyle}
    />
  )
}
export const TextH6 = ({text, classStyle}) => {
  const {actions: {setProp}} = useNode();
  return (
    <ContentEditable
    html={text} onChange={e => setProp(props => props.text = e.target.value.replace(/<\/?[^>]+(>|$)/g, ""))} tagName="h6" className={classStyle}
    />
  )
}

export const ButtonText = ({text, classStyle}) => {
  const {actions: {setProp}} = useNode();
  return (
    <ContentEditable
    html={text} onChange={e => setProp(props => props.text = e.target.value.replace(/<\/?[^>]+(>|$)/g, ""))} tagName="button" className={classStyle}
    />
  )
}

export const IconText = ({ text, classStyle }) => {
  const { actions: { setProp } } = useNode();
  return (
    <ContentEditable
      html={text} onChange={e => setProp(props => props.text = e.target.value.replace(/<\/?[^>]+(>|$)/g, ""))} tagName="i" className={classStyle}
    />
  )
}