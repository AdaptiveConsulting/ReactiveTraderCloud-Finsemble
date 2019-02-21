import React from 'react'

export default () => (
  
<svg className="finsemble-toolbar-window-controls" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 22 22">
    <defs>
        <path id="a" d="M5.926 12.605h13.71v14.062H5.926z"/>
        <mask id="b" width="13.71" height="14.062" x="0" y="0" fill="#fff">
            <use href="#a"/>
        </mask>
    </defs>
    <g fill="none" fillRule="nonzero" transform="translate(-5 -5)">
        <path d="M0 0h32v32H0z"/>
        <use stroke="#FFF" strokeDasharray="2.808" strokeWidth="2.106" mask="url(#b)" href="#a"/>
        <path fill="#FFF" d="M12.957 5.926h13.71v14.061h-13.71V5.926z"/>
    </g>
</svg>
)
