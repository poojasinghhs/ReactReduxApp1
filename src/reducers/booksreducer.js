import React from 'react';
import ReactDOM from 'react-dom';

const initialState={
    books:[
        {bookid:10,title:"C++",author:"Balagurusamy"},
        {bookid:11,title:"Java",author:"Java Author"},
        {bookid:12,title:"SQL",author:"SQL Author"},
        {bookid:13,title:".Net Core",author:".Net Core Author"},
        {bookid:14,title:"MVC",author:"MVC Author"},
        {bookid:15,title:"React",author:"React Author"}
    ],
    selectedBook:null,
    showAddForm:false
}

const BooksReducer=(state=initialState,action)=>{
    let index = -1;
    let newbooksarray =[];
    switch(action.type){
        case "SELECT_BOOK":            
            let id = action.payload.bookid;
            index =  state.books.findIndex(x=>x.bookid==id);           
            return{...state,selectedBook:state.books[index],showAddForm:false}
        
        case "ADD_BOOK":
            console.log("ADD_BOOK");
            console.log({...state,books:[...state.books,action.payload]});
            return {...state,books:[...state.books,action.payload],showAddForm:false}
        
        case "UPDATE_BOOK":
             console.log("update book");          
             index = state.books.findIndex(x=>x.bookid == action.payload.bookid);
             let newbooksarray = [...state.books];
             newbooksarray[index] = action.payload;
             return({...state,books:newbooksarray,selectedBook:null,showAddForm:false});
             //return state;
        
        case "DELETE_BOOK":            
            index = state.books.findIndex(x=>x.bookid == action.payload.bookid);
            let deletebooksarr = [...state.books];
            deletebooksarr.splice(index,1);
            return {...state,books:deletebooksarr};

        case "SHOW_ADD_FORM":
            console.log("SHOW_ADD_FORM");
            return{...state,selectedBook:null,showAddForm:true}
           
    }
    return state;
}

export default BooksReducer;