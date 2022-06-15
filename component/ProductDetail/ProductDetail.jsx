import { React, useEffect } from "react"
import axios from "axios"
import { useState } from "react"
import './ProductDetail.css'
import { useParams } from "react-router-dom"

export const ProductDetail = () => {
  const [detail, setDetail] = useState({});
  const params = useParams()
  const id = params.id
  const [img, setImg] = useState("https://dummyimage.com/468x624/f5edf5/fff.png&text=please+wait");

  useEffect(() => {
    axios.get("https://5d76bf96515d1a0014085cf9.mockapi.io/product/" + id)
      .then(res => {
        setDetail(res.data)
        setImg(res.data.photos[0])
      })
      .catch(error => {
        console.log(error)
      })
  }, [])

  return (
    <>
      <div>
        {
          Object.keys(detail).length ?
            <div className="wrapper">
              <div><img className="image-decor" src={img} alt="img" /></div>
              <div className="info-about">
                <p className="name">{detail.name}.</p>
                <p className="fs-20">{detail.brand}</p>
                <p className="fs-20"><span>RS</span> {detail.price}</p>
                <p className="descrption">Description</p>
                <p className="descript-content">{detail.description}</p>
                <p className="fs-20">Product Preview</p>
                <div className="img-section">
                  {detail.photos.map((image, index) => {
                    return <img
                      style={{ border: img === image ? "2px solid  black" : " " }}
                      className="image-section"
                      src={[image]} alt='images'
                      key={index}
                      onClick={() => setImg(image)}
                    />
                  })}
                </div>
                <button className="add-card">Add To Cart</button>
              </div>
            </div> : <h1 style={{ marginTop: "250px", height: '100vh', textAlign: 'center' }}>Loading....</h1>
        }
      </div>
    </>
  )

}

  // const p = window.location.href.split("=")[1];


