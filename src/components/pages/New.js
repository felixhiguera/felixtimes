import React from 'react'

const New = ({ n }) => {

    const { image, url, title } = n;

    const imagen = (image) ?
        <div className="image">
            <img src={image} alt="" />
        </div> :
        null

    return (
        <div className="card ">
            <a href={url} target="_blank">
                {imagen}
                <div>
                    <h2>{title}</h2>

                </div>
            </a>

        </div>
    )
}

export default New
