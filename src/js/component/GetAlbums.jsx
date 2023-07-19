import React, { useState, useEffect } from "react";

export const GetAlbums = () => {
    const [albums, setAlbums] = useState([]);
    const host = 'https://jsonplaceholder.typicode.com/';

    const fetchAlbums = async () => {


        const response = await fetch('https://jsonplaceholder.typicode.com/photos/');
        if (response.ok) {
            const data = await response.json();
            setAlbums(data);
        } else {
            console.log('error:', response.status, response.statusText)
        }
    }
    useEffect(() => {
        fetchAlbums();
    }, []);


    return (
        <>
            <h3 className="mt-3">Get Albums</h3>
            <div className="card">
                <div className="card-header">
                    List Albums
                </div>
                <ul className="list-group list-group-flush">
                    {!albums ? <div className="spinner-border m-5" role="status">
                        <span className="visually-hidden">Loading...</span></div> :
                        albums.map((album, index) => {return <li className="list-group-item list-group list-group-action" key={index}>{album.id} - <strong>Title:</strong>  {album.title} </li>
                        })
                    }
                </ul>
            </div>


        </>
    )
}