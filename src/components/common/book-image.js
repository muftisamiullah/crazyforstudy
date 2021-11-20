import React,{ useEffect, useState} from 'react'
import axios from 'axios'

function BookImage({isbn,altText}) {
    const [image, setImage] = useState('');
    
    useEffect(() => {
        async function fetchCoverImage(){
            try{
                const response = await axios.get(`https://crazyforstudy.s3.ap-south-1.amazonaws.com/isbn/${isbn}-us-300.jpg`,{
                    header: {
                        "Cotnent-Type": 'application/json',
                        "Access-Control-Allow-Origin": "*",
                        "origin": "https://crazyforstudy.s3.ap-south-1.amazonaws.com/"
                     }
                });
                if(response.status === 200){
                    setImage(`https://crazyforstudy.s3.ap-south-1.amazonaws.com/isbn/${isbn}-us-300.jpg`);
                }
            }catch(e){
                setImage(`http://backup.crazyforstudy.com/uploads/book-images-with-text/IMG-${isbn}.jpg`);
                // setImage(`/images/book-img.jpg`);
            }
        }
       fetchCoverImage();
       return () => {setImage('')}
    },[isbn])
    return (
        <>
        {image && (<img src={image} style={{ width: "100%"}} alt={altText}/>)}
            {!image && (
                <div className="book_image_container">
                    <img src={image} style={{ width: "100%"}} alt={altText}/>
                </div>
            )}
        </>
    )
}

export default BookImage