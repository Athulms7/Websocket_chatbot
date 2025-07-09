import { useEffect, useState } from "react";

import "./App.css";

function App() {
  const [socket, setsocket] =useState<WebSocket | null>(null);
  const [msg, setmsg] = useState(["Welcome"]);
  const [messgefrominput, setsendmsg] = useState("");
  // const wsref=useRef();
  useEffect(() => {
    const ws= new WebSocket("ws://localhost:8080");
    
    setsocket(ws);
    ws.onmessage = (event) => {
      setmsg((m) => [...m, event.data]);
      // wsref.current=ws;
    };
    ws.onopen=()=>{
      ws.send(JSON.stringify({
        type: "join",
        payload: {
          roomid: "red",
        },
      }))
    }
  }, []);
  function send() {
    // wsref.current.send();
    if (!socket) {
      return;
    }
    //@ts-ignore
    socket.send(
      JSON.stringify({
        type: "chat",
        payload: {
          message: messgefrominput,
        },
      })
    );
  }

  return (
    <div className="h-screen bg-black ">
      <div className="h-[85vh] bg-black">
        {msg.map((mesage) => (
          <div key={Math.random()} className="m-8">
            <span className="bg-amber-50 text-black rounded-2xl p-3 m-8">
              {mesage}
            </span>
          </div>
        ))}
      </div>

      <div className="w-full bg-white flex fixed">
        <input
          type="text "
          onChange={(e) => {
            setsendmsg(e.target.value);
          }}
          className="flex-1 p-4 bg-gray-300 border-2 border-gray-500 "
        ></input>
        <button
          onClick={send}
          className="bg-white text-blue-400 p-3 rounded-2xl"
        >
          Send Message
        </button>
      </div>
    </div>
  );
}

export default App;
