import React, { useState, useEffect } from "react";

export const GetPhotos = () => {
    const [photos, setPhotos] = useState([]);
    const host = 'https://jsonplaceholder.typicode.com/';

    const fetchPhotos = async () => {


        const response = await fetch('https://jsonplaceholder.typicode.com/photos/');
        if (response.ok) {
            const data = await response.json();
            setPhotos(data);
        } else {
            console.log('error:', response.status, response.statusText)
        }
    }
    useEffect(() => {
        fetchPhotos();
    }, []);


    return (
        <>
            <h3 className="mt-3">Get Photos</h3>
            <div className="card">
                <div className="card-header">
                    List Photos
                </div>
                <ul className="list-group list-group-flush">
                    {!photos ? <div className="spinner-grow" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div> :
                        photos.map((photos, index) => {
                            return <li className="list-group-item list-group list-group-action" key={index}>{photos.id} -<strong>Title:</strong>  {photos.title} - <strong>URL:</strong>  {photos.url} - <strong>URL Minuatura:</strong>  {photos.thumbnailUrl} </li>
                        })
                    }
                </ul>
            </div>


        </>
    )
}