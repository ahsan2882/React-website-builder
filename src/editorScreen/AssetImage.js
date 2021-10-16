import React from 'react'
import { useDrag } from 'react-dnd'
import { ItemTypes } from '../utils/items'

export default function AssetImage({sourcePath, _id, classNameImage}) {
    const [{ isDragging }, drag] = useDrag({
        type: ItemTypes.SECTION,
        item: { _id },
        collect: monitor => ({
            isDragging: !!monitor.isDragging()
        })
    })
    return (
        <>
            <img src={sourcePath} alt={_id} ref={drag} className={classNameImage} style={isDragging ? { "cursor": "copy" } : { "cursor": "pointer" }} />
        </>
    )
}
