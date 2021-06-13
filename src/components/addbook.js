import React from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';
import {addbook} from '../actions/index';
import {bindActionCreators} from 'redux';

class AddBook extends React.Component{
    constructor(props){
        super(props);
        this.state={
            book:{
                bookid:0,
                title:'',
                author:''
            }
        }
    }

    static getDerivedStateFromProps(props,state){       
    }

    addHandler=()=>{   
        this.props.addbook(this.state.book);        
    }

    render(){
        if(!this.props.bookstate.showAddForm)  
            return('')    
        return(
            <div>
            <div className="row">
                <div className="col-xs-4"></div>
                <div className="col-xs-6">
                    <div className="row">
                        <div className="col-xs-2">
                            BookId
                        </div>
                        <div className="col-xs-4">
                            <input type="text" value={this.state.bookid} 
                             onChange={(event)=>{
                                let book = this.state.book;
                                book.bookid = event.target.value
                                this.setState({book:book});
                             }}
                         /> 
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xs-2">
                            Title
                        </div>
                        <div className="col-xs-4">
                            <input type="text" value={this.state.title} 
                             onChange={(event)=>{
                                let book = this.state.book;
                                book.title = event.target.value
                                this.setState({book:book})
                             }}
                         /> 
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xs-2">
                            Author
                        </div>
                        <div className="col-xs-4">
                            <input type="text" value={this.state.author} 
                             onChange={(event)=>{
                                let book = this.state.book;
                                book.author = event.target.value
                                this.setState({book:book})
                             }}
                           /> 
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xs-2">
                        </div>
                        <div className="col-xs-4">
                             <button onClick={()=>this.addHandler()}>Add Book</button>   
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }

}

const mapStateToProps=(state)=>{
    return{bookstate:state.BooksReducer}
}

const mapDispatchToProps=(dispatch)=>{
    return bindActionCreators({addbook:addbook},dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(AddBook)

