import React from 'react'

const Message = (props) => {
  return (
    <div className="w-64 bg-white shadow-md rounded-xl p-4 m-4 border border-gray-200 hover:shadow-lg transition">
        <div>
            {props.data.name}
        </div>
         <div>
            {props.data.message}
        </div>



    </div>
  )
}

export default Message