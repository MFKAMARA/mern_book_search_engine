import {gql} from "@apollo/client"
export const ADD_USER=gql`
mutation AddUser($username: String!, $email: String!, $password: String!) {
  addUser(username: $username, email: $email, password: $password) {
    token
  }
}

`
export const LOGIN=gql`
mutation Login($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    token
  }
}
`
export const SAVE_BOOKS=gql`
mutation SaveBook($bookData: bookInput) {
  saveBook(bookData: $bookData) {
    savedBooks {
      authors
      bookId
      description
      image
      link
      title
    }
  }
}
`
export const REMOVE_BOOK=gql`
mutation RemoveBook($bookId: String) {
  removeBook(bookId: $bookId) {
    savedBooks {
      authors
      bookId
      description
      image
      link
      title
    }
  }
}
`