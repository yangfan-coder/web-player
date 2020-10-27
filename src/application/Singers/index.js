import React, {useState} from 'react';
import Horizen from '../../baseUI/horizen-item'
import { categoryTypes, alphaTypes } from '../../api/config'
import { NavContainer } from './style'

function Singers(props) {
  let [category, setCategory] = useState('');
  let [alpha, setAlpha] = useState('');

  let handleUpdateAlpha = (val) => {
    setAlpha(val)
  }

  let handleUpdateCatetory = (val) => {
    setCategory(val)
  }

  return  (
    <NavContainer>
      <Horizen 
        list={categoryTypes} 
        title={"分类 （默认热门）：" }
        oldVal={category} 
        handleClick={handleUpdateCatetory}
      />
      <Horizen 
        list={alphaTypes} 
        title={"首字母：" } 
        oldVal={alpha} 
        handleClick={handleUpdateAlpha}
      />
    </NavContainer>
  )
}

export default React.memo(Singers);