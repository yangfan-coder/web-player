import React, { useEffect } from 'react';
import {forceCheck} from 'react-lazyload';
import { connect } from "react-redux";
import Slider from '../../components/slider'
import * as actionTypes from './store/actionCreators';
import RecommendList from '../../components/list'
import Scroll from '../../baseUI/scroll'
import {Content} from './style'

function Recommend(props) {
  

  const {bannerList, recommendList, enterLoading} = props

  const {getBannerDataDispatch, getRecommendListDataDispatch} = props


  useEffect(() => {
    if(!bannerList.size) {
      getBannerDataDispatch()
    }
    
    if(!recommendList.size){
      getRecommendListDataDispatch();
    }
  }, [])

  const bannerListJS = bannerList ? bannerList.toJS() : []; 
  const recommendListJS = recommendList ? recommendList.toJS() :[];

  return  (
    <Content>
      <Scroll onScroll={forceCheck}>
        <div>
          <Slider bannerList={bannerListJS}/>
          <RecommendList recommendList={recommendListJS} />
        </div>
      </Scroll>
    </Content>
  )
}

 const mapStateToProps = (state) => {
  return {
    bannerList: state.getIn (['recommend', 'bannerList']),
    recommendList: state.getIn (['recommend', 'recommendList']),
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getBannerDataDispatch () {
      dispatch (actionTypes.getBannerList ());
    },
    getRecommendListDataDispatch () {
      dispatch (actionTypes.getRecommendList ());
    },
  }
}
export default connect (mapStateToProps, mapDispatchToProps)(React.memo (Recommend));