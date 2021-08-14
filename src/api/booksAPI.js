import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:3001/api',
  withCredentials: true
});

export const booksAPI = {
  getBooks() {
    return instance.get(`/get-books`).then((res) => {
      return res.data;
    });
  },
  addBook(file) {
    return instance.post('/add-book', file).then((res) => {
      return res.data;
    });
  },
  getUserBooks(id) {
    return instance.post('/user-books', { id: id}).then((res) => {
      return res.data
    });
  }
};
