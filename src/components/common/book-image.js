import React,{useEffect,useState} from 'react'
import axios from 'axios'

function BookImage({isbn,altText}) {
    const [image, setImage] = useState('');
    
    useEffect(() => {
        async function fetchCoverImage(){
            try{
                const response = await axios.get(`https://pictures.abebooks.com/isbn/${isbn}-us-300.jpg`);
                if(response.status === 200){
                    setImage(`https://pictures.abebooks.com/isbn/${isbn}-us-300.jpg`);
                }
            }catch(e){
                setImage(`https://backup.crazyforstudy.com/uploads/book-images-with-text/IMG-${isbn}.jpg`);
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