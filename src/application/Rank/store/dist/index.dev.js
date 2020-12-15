"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.reducer = exports.getRankList = exports.CHANGE_LOADING = exports.CHANGE_RANK_LIST = void 0;

var _immutable = require("immutable");

var _request = require("../../../api/request");

var CHANGE_RANK_LIST = 'home/rank/CHANGE_RANK_LIST';
exports.CHANGE_RANK_LIST = CHANGE_RANK_LIST;
var CHANGE_LOADING = 'home/rank/CHANGE_LOADING'; // actionCrreator

exports.CHANGE_LOADING = CHANGE_LOADING;

var changeRankList = function changeRankList(data) {
  return {
    type: CHANGE_RANK_LIST,
    data: (0, _immutable.fromJS)(data)
  };
};

var changeLoading = function changeLoading(data) {
  return {
    type: CHANGE_LOADING,
    data: data
  };
};

var getRankList = function getRankList() {
  return function (dispatch) {
    (0, _request.getRankListRequest)().then(function (data) {
      var list = data && data.list;
      dispatch(changeRankList(list));
      dispatch(changeLoading(false));
    });
  };
}; // reducer


exports.getRankList = getRankList;
var defaultState = (0, _immutable.fromJS)({
  rankList: [],
  loading: true
});

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case CHANGE_RANK_LIST:
      return action.set('rankList', action.data);

    case CHANGE_LOADING:
      return state.set('loading', action.data);

    default:
      return state;
  }
};

exports.reducer = reducer;