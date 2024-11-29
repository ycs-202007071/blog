/*eslint-disable*/
import './App.css';
import {useState} from 'react';

function App() {

  let post = '강남 우동 맛집';
  let [글제목, set글제목] = useState(['남자 코드 추천', '강남 우동 맛집', '파이썬독학']);
  let [like, setLike] = useState([0,0,0]);
  let [modal, setModal] = useState(false);
  
  return (
    <div className="App">
      <div className = "black-nav">
        <h4>ReactBlog</h4>
      </div>
      {/* <div className = "list">
        <h4>{글제목[0]} <span onClick={()=>{setLike(like + 1)}}>👍</span> {like} </h4>
        <p>2월 17일 발행</p>
      </div>
      <div className = "list">
        <h4>{글제목[1]}</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className = "list">
        <h4 onClick={()=>{modal==true? setModal(false) : setModal(true)}}>{글제목[2]}</h4>
        <p>2월 17일 발행</p>
      </div> */}
      {
        글제목.map(function(a, i){
          return(
            <div className = "list" key={i}>
            <h4 onClick={()=>{modal==true? setModal(false) : setModal(true)}}>{글제목[i]}<span onClick={()=>{setLike[i](like[i] + 1)}}>👍</span> {like[i]} </h4>
            <p>2월 17일 발행</p>
          </div>
          )
        })
      }
      {
        modal==true ? <Modal></Modal> : null 
      }
    </div>
  );
}
function Modal(){
  return(
    <div className='modal'>
        <h4>제목</h4>
        <p>날짜</p>
        <p>상세내용</p>
      </div>
  )
}

export default App;
