

import { all } from "axios";
import { WebSocketServer } from "ws";
import WebSocket from "ws";
const wss = new WebSocketServer({ port: 8080 });
interface User{
    socket:WebSocket;
    roomid:number;
}
let usercount = 0;
let allsockets:User[]=[];
wss.on("connection", function (socket) {
  
 
  socket.on("message", (message:string) => {
   const parsemsg=JSON.parse(message)
   console.log(parsemsg)
   if(parsemsg.type==="join"){
    allsockets.push({
        socket:socket,
        roomid:parsemsg.payload.roomid
    })
    
   }
   if(parsemsg.type==="chat"){
    // const currentroom=allsockets.find(x=>x.socket==socket)
    const parsemsg=JSON.parse(message)
    let currentroom=null;
    for(let i=0;i<allsockets.length;i++){
      if(allsockets[i].socket==socket){
        currentroom=allsockets[i].roomid
      }
    }
    for(let i=0;i<allsockets.length;i++){
      if(allsockets[i].roomid==currentroom){
        allsockets[i].socket.send(parsemsg.payload.message)
      }
    }

   }

  });
  
  
});
