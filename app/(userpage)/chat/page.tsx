import Thinbar from '@/component/thinbar/page'
import Message from '@/component/UserMessage/usermessage';
import React from 'react'

const Chat = () => {
const data = [
  {
    id: "msg_001",
    name: "Aayush",
    message: "Hey, I want to buy Nike shoes."
  },
  {
    id: "msg_002",
    name: "Store",
    message: "Sure, here are some options."
  },
  {
    id: "msg_003",
    name: "Aayush",
    message: "Show me under $100."
  }
];
  return (
    <div>
     {
      data.map((item) => (
  <Message key={item.id} data={item} />
))
     }
   </div>
 
  )
}

export default Chat