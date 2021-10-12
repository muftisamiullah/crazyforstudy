import {useEffect,useState} from 'react';
import socketClient  from "socket.io-client";

export default function useSocket(url){
    const [socket, setSocket] = useState(null)

    useEffect(() => {
      const socketIo = socketClient (url);
  
      setSocket(socketIo)
  
        function cleanup() {
            socketIo.disconnect()
        }
        return cleanup
    }, [])
  
    return socket
}