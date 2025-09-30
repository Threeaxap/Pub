import React from 'react'
import './TestCard.css'
import Tesstcard from './test'


const TestCard = () => {

  return (
    <>
        <div class="wrapper">
        <div class="product_wrap">
        <div class="product_item">
            <div class="img">
            <img src="https://i.imgur.com/vuTSHe3.png" alt="Round_neck"/>
            <p class="brand_name">H & M Round Neck</p>
            </div>
            <div class="size_color">
                <div class="title">SIZE & COLOR</div>
                <div class="size_wrap">
                    <ul>
                    <li><span>36</span></li>
                    <li><span>38</span></li>
                    <li><span>40</span></li>
                    <li><span>42</span></li>
                </ul> 
                </div>
                <div class="color_wrap">
                    <ul>
                        <li data-color="#cab7a2" data-src="https://i.imgur.com/a31ZhsD.png"></li>
                        <li class="active" data-color="#532e35" data-src="https://i.imgur.com/vuTSHe3.png"></li>
                        <li data-color="#7f8cab" data-src="https://i.imgur.com/TT6hsaQ.png"></li>
                    </ul>
                </div>
            </div>
            <div class="price">
                <p>$12</p>
            </div>
        </div>
        <div class="product_item">
            <div class="img">
            <img src="https://i.imgur.com/C5DUqYu.png.png" alt="Round_neck"/>
            <p class="brand_name">Mast & Harbour</p>
            </div>
            <div class="size_color">
                <div class="title">SIZE & COLOR</div>
                <div class="size_wrap">
                    <ul>
                    <li><span>36</span></li>
                    <li><span>38</span></li>
                    <li><span>40</span></li>
                    <li><span>42</span></li>
                </ul> 
                </div>
                <div class="color_wrap">
                    <ul>
                        <li data-color="#f5d3ca" data-src="https://i.imgur.com/m6qrQtW.png"></li>
                        <li class="active" data-color="#6c623f" data-src="https://i.imgur.com/C5DUqYu.png"></li>
                        <li data-color="#2d2c32" data-src="https://i.imgur.com/xbOCNap.png"></li>
                    </ul>
                </div>
            </div>
            <div class="price">
                <p>$14</p>
            </div>
        </div>
        <div class="product_item">
            <div class="img">
            <img src="https://i.imgur.com/g6xpIKQ.png" alt="Round_neck"/>
            <p class="brand_name">Adidas</p>
            </div>
            <div class="size_color">
                <div class="title">SIZE & COLOR</div>
                <div class="size_wrap">
                    <ul>
                    <li><span>36</span></li>
                    <li><span>38</span></li>
                    <li><span>40</span></li>
                    <li><span>42</span></li>
                </ul> 
                </div>
                <div class="color_wrap">
                    <ul>
                        <li data-color="#0a5457" data-src="https://i.imgur.com/s2PKM1j.png"></li>
                        <li class="active" data-color="#b50a1d" data-src="https://i.imgur.com/g6xpIKQ.png"></li>
                        <li data-color="#fe911a" data-src="https://i.imgur.com/GkBF14L.png"></li>
                    </ul>
                </div>
            </div>
            <div class="price">
                <p>$15</p>
            </div>
        </div>
    </div>
    </div>
    <Tesstcard/>
    </>
  )
}

export default TestCard