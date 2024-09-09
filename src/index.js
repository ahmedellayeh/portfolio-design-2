import ReactDOM from 'react-dom/client';
import Friend from './components/friends/component'

const parent = ReactDOM.createRoot(document.querySelector("#friends"));
parent.render(
  <>
    <Friend name="Ahmed"/>
    <Friend name="Abdelrahman"/>
    <Friend name="Osama"/>
    <Friend name="Abdullah"/>
    <Friend name="Ammar"/>
    <Friend name="Mohamed"/>
    <Friend name="Adam"/>
    <Friend name="Youssef"/>
    <Friend name="Tanisha"/>
    <Friend name="Michael"/>
    <Friend name="James"/>
  </>
)