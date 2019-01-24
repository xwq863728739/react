import React from 'react'
import { BackTop } from 'antd';

function BackToTop(){
    return (
        <div>
            <BackTop />
            Scroll down to see the bottom-right
            <strong style={{ color: 'rgba(64, 64, 64, 0.6)' }}> gray </strong>
            button.
        </div>
    )
}

export default BackToTop