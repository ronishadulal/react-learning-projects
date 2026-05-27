'use client'
import React, { useState } from 'react'
import { TiThumbsUp } from 'react-icons/ti';

const Like = () => {
    const [liked, setLiked] = useState(false);
    function handleLike(){
    //     if(liked== true){
    //         setLiked(false)
    //     }
    //     else{
    //         setLiked(true)
    //     }
    // }
    setLiked(liked== true ? false:true)
}
  return (
    <div>
        <button onClick={handleLike} className={`p-4 m-4 shadow-md ${liked? 'text-blue-700' : 'text-gray-700'}`}>
            <TiThumbsUp/>Like
        </button>
    </div>
  )
}

export default Like