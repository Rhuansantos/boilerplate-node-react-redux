import axios from 'axios';

export const loadColor = () => {
  return(dispatch) => {
    return axios.get('http://www.colr.org/json/color/random').then((response) => {
      dispatch(changeColor('#' + response.data.new_color));
    })
  }
}

export const changeColor = (color) => {
  return{
    type:'CHANGE_COLOR',
    color
  }
}
