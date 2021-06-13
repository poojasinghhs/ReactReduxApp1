export const selectbook=(bookid)=>{
    console.log("Action selectbook");
    return{
        type:"SELECT_BOOK",
        payload:{bookid:bookid}
    }
}

export const addbook=(book)=>{
    return{
        type:"ADD_BOOK",
        payload:book
    }
}

export const updatebook=(book)=>{
    return{
        type:"UPDATE_BOOK",
        payload:{book:book}
    }
}

export const deletebook=(bookid)=>{
    return{
        type:"DELETE_BOOK",
        payload:{bookid:bookid}
    }
}

export const showaddform=()=>{
    return{
        type:"SHOW_ADD_FORM",
        payload:null
    }
}