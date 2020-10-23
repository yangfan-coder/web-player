import React,{useState, useEffect} from 'react'
import {SliderContainer} from './style'
import 'swiper/css/swiper.min.css'  // 根据实际路径和文件修改
import Swiper from 'swiper'


function Slider(props) {
  const [sliderSwiper, setSliderSwiper] = useState(null)
  const { bannerList} = props
  
  useEffect(() => {
    if(bannerList.length && !sliderSwiper) {
      
      // 新版本的6.x 不显示pagination
      let sliderSwiper = new Swiper('.slider-container',{
          loop:true,
          autoplay:{
            delay:5000,
            disableOnInteraction:false
          },
          pagination:{
            el:'.swiper-pagination',
            clickable:true,
          }
      })

      setSliderSwiper(sliderSwiper)
    }
  },[bannerList.length, sliderSwiper])

  return (
    <SliderContainer>
      <div className='before'></div>
      <div className='slider-container'>
        <div className='swiper-wrapper'>
          {
            bannerList.map((slider,index) => {
              return (
                <div className='swiper-slide' key={slider.imageUrl + index}>
                  <div className='slider-nav'>
                    <img src={slider.imageUrl} width='100%' height='100%' alt='推荐' />
                  </div>
                </div>
              )
            })
          }
        </div>
        <div className='swiper-pagination'></div>
      </div>
    </SliderContainer>
  )
}

export default React.memo(Slider)