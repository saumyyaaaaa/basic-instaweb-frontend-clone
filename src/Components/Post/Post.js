import React, { Component } from 'react';
import "./Post.css";
import Grid from '@material-ui/core/Grid';
import { Avatar } from '@material-ui/core';
import postimage from "../../images/post.jpg";
import statusimg2 from "../../images/pp2.png";
import like from "../../images/love.svg";
import comment from "../../images/comment.svg";
import share from "../../images/share.svg";

class Post extends Component{
    constructor(props){
        super(props);
        this.state = { }
    }
    render() {
        return (
            <div className='post_constainer'>

            <div className='post__container'>
                <div className='header'>
                    <Avatar className='post__image' src={statusimg2} />
                    <div className='post__username'>saumyyaaaaa</div>
                </div>
                <img className='post' src={postimage} width="610px" />

                <div>
                    <Grid item={2}>
                    <img className="icon" src={like} width="25px"/>
                    <img className="icon" src={comment} width="25px"/>
                    <img className="icon" src={share} width="25px"/>
                    </Grid>

                    <Grid item={2}></Grid>
                </div>
            </div>
        
        </div>
        );
    }
}

 export default Post;