import React, {useContext} from "react"
import {Context} from "../Context"
import Image from "../components/Image"
import {getClass} from "../utils" 
import '../index.css';

function Photos() {

    const {allPhotos} = useContext(Context)
    
    const imgagesElment = allPhotos.map((photo,index) => <Image key={photo.id} img={photo} className={getClass(index)} />)

    return (
        <main className="photos">
            <h1>Images go here</h1>

            {imgagesElment}
        </main>
    )
}

export default Photos