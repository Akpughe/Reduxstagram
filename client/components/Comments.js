import React, { Component } from 'react'

export default class Comments extends Component {

    renderComment(comment, i){
        return(
            <div className="comment" key={i}>
                <p>
                    <strong>{comment.user}</strong>
                    {comment.text}
                    <button className="remove-comment">&times;</button>
                </p>
            </div>
        )
    }
    
    handleSubmit(e){
        e.preventDefault();
        const {postId} = this.props.params;
        const author = this.refs.author.value
    }

    render() {
        return (
            <div className="comments">
               {this.props.postComments.map(this.renderComment)}
               <form ref="commentForm" className="comment-form" onSubmit={this.handleSubmit}>
                   <input type="text" ref="author" placeholder="author"/>
                   <input type="text" ref="comment" placeholder="comment"/>
                   <input type="submit" hidden/>
               </form>
            </div>
        )
    }
}
