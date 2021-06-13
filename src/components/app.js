import React from 'react';
import ReactDOM from 'react-dom';
import BooksList from './bookslist';
import SelectedBook from './selectedbook';
import AddBook from './addbook';

const App = () => {
    return(
        <div>
            <BooksList/>
            <SelectedBook />
            <AddBook />
        </div>
    )
};

export default App;