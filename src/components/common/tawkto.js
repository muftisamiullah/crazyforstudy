import { useEffect } from "react";

function TawkTo() {

    useEffect(() => {
        const script = document.createElement("script");
        script.id    = 'tawkId';
        script.async = true;
        script.src   = 'https://embed.tawk.to/' + `${process.env.REACT_APP_tawkToPropertyId}` + '/default';
        script.charset = 'UTF-8';
        script.setAttribute('crossorigin', '*');
        document.body.appendChild(script);

        return ()=>{
            document.getElementById("tawkId").remove();
        }
    },[])

    return null;
}

export default TawkTo;
