import React, { Component } from "react";
import MyButton from "../MyButton";
import './style.css';
class Comment extends Component{
    constructor(props){
        super(props);
        this.state = {
            publisher: "",
            comment: ""
        }
    }
    bichih = (e) => {
        this.setState({comment: e.target.value});
    }
    
    static getDerivedStateFromProps(){
        console.log('====> getDerivedStateFromProps');
        return null;
    }

    /**{компонентийг өөрчлөх эсэхийг шийднэ Check} */
  shouldComponentUpdate(nextProps, nextStage) {
    console.log('====> shouldComponentUpdate');
    return true
  }


  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('====> getSnapshotBeforeUpdate');
    return true;
  }
  /**Component tataj bh hugatsaand load bj bln */
  componentDidMount() {
    console.log('====> componentDidMount');
  }

  /**Component өөрчлөгдөх үед дуудагдан */
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('====> componentDidUpdate');
  }

  /**
   * Компонент алга болгох үед алерт өгөх юмуу ямар нэгэн логик хийж болно
   */
  componentWillUnmount() {
    console.log('====> componentWillUnmount');
  }
    render(){
        return(
            <div className="MyCmt">
                <span>Зохиогч: {this.props.author}</span><br/>
                <span>{this.state.comment}</span><br/>
                <textarea
                onChange={this.bichih}
                >
                </textarea>
                <MyButton name="Хадгал" info = "Комментоо үнэнээр нь бичээрэй" show={this.state.comment}/>
                <MyButton name="Илгээ" info = "Комментоо ил тодоор бичнэ үү" show={this.state.comment}/>
           </div>
        )
    }
}
export default Comment;