import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import GifGridItem from './GifGridItem';

const GiftGrid = ({ categoria }) => {

    const { data:images, loading } = useFetchGifs( categoria );

    return (
        <>
            <h3 className="animate__animated animate__lightSpeedInRight"> { categoria } </h3>

            { loading && <p className="animate__animated animate__flash">Cargando gifs ...</p> }

            <div className="card-grid">
                {
                    images.map( ( img ) => (
                        <GifGridItem 
                            key={ img.id }
                            { ...img }
                        />
                    ) )
                }
            </div>
        </>
    )
}

export default GiftGrid
