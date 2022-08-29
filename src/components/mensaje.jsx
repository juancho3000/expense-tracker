import React, {useState} from "react";
import { EventEmitter } from "fbemitter";

export const emitter = new EventEmitter();
const Mensaje = () => {
    const [appear, setAppear] = useState(false);
    const [message, setMessage] = useState();

    const reset = () => {
        setAppear(false)
    }
    const hideAfterTime = () => {
        setTimeout(()=>reset(),3000)
    }
    emitter.addListener("NOTIFICATION", (msg)=>{
        setMessage(msg);
        setAppear(true);
        hideAfterTime()
    })
    if(!appear){
        return null
    }
    return <div className="added-message">
        <span>{message}</span>
    </div>
}
export default Mensaje;