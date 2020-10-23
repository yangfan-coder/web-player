/* 封装的滑动的组件 */
import React, { forwardRef, useState, useRef ,useEffect} from 'react'
import PropTypes from 'prop-types'
import Bscroll from 'better-scroll'
import styled from 'styled-components'


const ScrollContainer = styled.div `
  width: 100%;
  height: 100%;
  overflow: hidden;
`
const Scroll = forwardRef((props, ref) => {
  
  const [bScroll, setBScroll] = useState()

  const scrollContaninerRef = useRef()

  const {} = props
  
  const {} = props

  useEffect(() => {
    // const scroll = new Bscroll(scrollContaninerRef.current, {
    //   // scrollX: direction === "horizental",
    //   // scrollY: direction === "vertical",
    //   // probeType: 3,
    //   // click: click,
    //   // bounce:{
    //   //   top: bounceTop,
    //   //   bottom: bounceBottom
    //   // }
    // })
    // setBScroll(scroll)
  })

  return (
    <ScrollContainer ref={scrollContaninerRef}>
      {props.children}
    </ScrollContainer>
  )
})

export default Scroll