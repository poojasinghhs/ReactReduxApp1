import React from 'react';
import ReactDOM from 'react-dom';
import { connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import BooksReducer from '../reducers/booksreducer';
import {selectbook} from '../actions/index'
import {showaddform} from '../actions/index';

class BooksList extends React.Component{
    constructor(props){
        super(props);
        console.log(props.bookState.books);
    }

    bookSelectHandler=(bookid)=>{
        console.log('bookSelectHandler');
        this.props.selectbook(bookid);
    }
    showAddFormHandler=()=>{
        console.log("showAddFormHandler") ;
        this.props.showaddform();
    }

    render(){        
         const books_li = this.props.bookState.books.map((book,index)=>{
             return(
                 <li className="list-group-item" style={{color:"green"}}
                   onClick={(event)=>this.bookSelectHandler(book.bookid)}>{book.title}</li>
             )
         });
         return(
             <div>
                 <div>
                     <button style={{"text-align":"center"}} onClick={()=>this.showAddFormHandler()}>Add New Book</button>
                 </div>
                 <div style={{"text-align":"center"}}>
                    <h4>--Books List--</h4>
                 </div>               
                 <div className="row">
                    <div className="col-xs-4"></div>
                    <div class="col-xs-4">
                         <ul className="list-group">
                            {books_li}
                         </ul>
                     </div>                
                 </div>
             </div>            
             
         )
    }
    
};

const mapStateToProps=(state)=>{
    return {bookState:state.BooksReducer}
}

const mapDispatchToProps=(dispatch)=>{
    return bindActionCreators({selectbook:selectbook,showaddform:showaddform},dispatch)
}


export default connect(mapStateToProps,mapDispatchToProps)(BooksList)