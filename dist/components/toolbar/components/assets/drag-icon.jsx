import React from 'react'

const DragIcon = () => (
<svg xmlns="http://www.w3.org/2000/svg" width="3" height="13" viewBox="0 0 4 18">
    <g fill="#444C5F" fill-rule="evenodd">
        <circle cx="2" cy="2" r="2"/>
        <circle cx="2" cy="9" r="2"/>
        <circle cx="2" cy="16" r="2"/>
    </g>
</svg>
)




export default () => (
   	<span className="cq-drag finsemble-toolbar-drag-handle">
      <DragIcon/>
       {/* look */}
   </span> 
)

