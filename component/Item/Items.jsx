import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Space, Spin } from 'antd';
import "./Item.css"

const Items = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate()

  useEffect(() => {
    axios.get('https://5d76bf96515d1a0014085cf9.mockapi.io/product/')
      .then(response => {
        setData(response.data);
        // console.log(response.data)
      })
      .catch(error => {
        console.log(error)
      });
  }, []);

  return (
    <div className="card-container">
      <div>
        <h1 id="clothe-coll-heading">Clothing for Men and Women</h1>
        <div className='new-container'>
          {
            data.length ? data.map(el => (
              !el.isAccessory &&
              <div key={el.id} className="card-layout" onClick={() => navigate('product-detail/' + el.id)}>
                <img className='img' src={el.photos[0]} alt="image" />
                <div className='coll-content'>
                  <h3>{el.name}</h3>
                  <p className='coll-brand'>{el.brand}</p>
                  <p className='coll-price'><span>RS</span> {el.price}</p>
                </div>
              </div>
            )) : <Space size="middle"> <Spin size="large" /> </Space>
          }
        </div>
      </div>

      <h1 id="access-coll-heading">Accessories for Men and Women</h1>
      <div className='new-container padding-bottom'>
        {
          data.length ? data.map(el => (
            el.isAccessory &&
            <div key={el.id} className="card-layout" onClick={() => navigate('product-detail/'+ el.id)}>
              <img className='img' src={el.photos[0]} alt="img" />
              <div className='coll-content'>
                <h3>{el.name}</h3>
                <p className='coll-brand'>{el.brand}</p>
                <p className='coll-price'><span>RS</span>{el.price}</p>
              </div>
            </div>
          )) : <Space size="middle"> <Spin size="large" /> </Space>
        }
      </div>
    </div>
  );
};

export default Items

