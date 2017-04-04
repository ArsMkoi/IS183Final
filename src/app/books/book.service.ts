import { Component, Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs';

@Injectable()
export class BookService {

    // this is where the variables go

    apiUrl: string;

    constructor(
        private http: Http
    ) {
        // do init stuff
        this.apiUrl = 'http://localhost:8000/api'
    }
    // this is where the function goes..
    getBooks(): Promise<Array<Object>> {
        return this.http.get(`${this.apiUrl}/books`).toPromise().then((resp) => {
            let books = resp.json();
            console.log('books', books);
            return books;
        });
    }

    getBookById(bookId): Promise<Object> {
        return this.http.get(`${this.apiUrl}/books/id/${bookId}`).toPromise().then((resp) => {
            let book = resp.json();
            console.log('book', book);
            return book;
        });
    }

    addBook(book): Promise<Object> {
        return this.http.post(`${this.apiUrl}/books`, book).toPromise().then((resp) => {
            let book = resp.json();
            console.log('book', book);
            return book;
        });
    }

}