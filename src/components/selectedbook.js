import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {updatebook} from '../actions/index';
import {deletebook} from '../actions/index';

class SelectedBook extends React.Component{
    constructor(props){
        super(props);
        this.state={
            book:{}
        }
    }

    updateHandler=()=>{
          this.props.updatebook(this.state.book);
    }

    deleteHandler=()=>{
        this.props.deletebook(this.state.book.bookid);
    }

    static getDerivedStateFromProps(props,state){
        return{book:props.bookState.selectedBook}
    }

    componentDidMount(){

    }

    getSelectedBookHTML=()=>{
        if(!this.state.book)
            return (
                <div class="row">                   
                    <div class="col-xs-12" style={{"text-align":"center"}}>
                        Please Select a Book !!
                    </div>
                </div>
                      
            )
        
        return(
           <div class="row" style={{margin:"5px"}}>               
                <div class="col-xs-4"></div>
                <div class="col-xs-6">
                    <div class="row">
                        <div class="col-xs-2">
                            BookID
                        </div>
                        <div class="col-xs-6">
                            <input type="text" value={this.state.book.bookid} 
                              onChange={(event)=>{
                                  let updatedbook = this.state.book;
                                  updatedbook.bookid=event.target.value;
                                  this.setState({book:updatedbook})
                              }}
                            />
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-xs-2">
                            Title
                        </div>
                        <div class="col-xs-6">
                            <input type="text" value={this.state.book.title} 
                             onChange={(event)=>{
                                let updatedbook = this.state.book;
                                updatedbook.title=event.target.value;
                                this.setState({book:updatedbook})
                            }}
                            />
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-xs-2">
                            Author
                        </div>
                        <div class="col-xs-6">
                            <input type="text" value={this.state.book.author} 
                              onChange={(event)=>{
                                let updatedbook = this.state.book;
                                updatedbook.author=event.target.value;
                                this.setState({book:updatedbook})
                            }}
                            />
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-xs-2">
                        </div>
                        <div class="col-xs-6" style={{margin:"5px 0"}}>
                            <button onClick={(event)=>this.updateHandler()}>Update</button>
                            <button onClick={(event)=>this.deleteHandler()}>Delete</button>
                        </div >
                    </div>
                </div>
            </div>
        )
}

    render(){        
        return(
            <div>
               {this.getSelectedBookHTML()}      
            </div>
        )    
    }
};

const mapStateToProps = (state)=>{
    return { bookState : state.BooksReducer}
}

const mapDispatchToProps = (dispatch)=>{
    return bindActionCreators({updatebook:updatebook,deletebook:deletebook},dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(SelectedBook)

