# MERN Book Search Engine

The MERN Book Search Engine is a full-stack web application designed to provide users with a seamless experience in searching, saving, and managing their favorite books. Leveraging the MERN stack (MongoDB, Express.js, React.js, Node.js), along with other modern technologies, this project offers a robust platform for book enthusiasts to explore and organize their reading interests.

![MERN Book Search Engine Demo](demo.gif)

## Features

- **User Authentication**: Secure user registration and authentication system.
- **Book Search**: Utilizes the Google Books API to search for books based on title, author, or keywords.
- **Book Saving**: Allows users to save their preferred books to their personal reading list.
- **Responsive Design**: Ensures a seamless experience across various devices and screen sizes.

## Technologies Used

- **MongoDB**: NoSQL database for storing user data and saved books.
- **Express.js**: Backend framework for handling server-side logic and routing.
- **React.js**: Frontend library for building dynamic user interfaces.
- **Node.js**: JavaScript runtime environment for server-side scripting.
- **Google Books API**: External API for fetching book data.
- **JWT Authentication**: Secure authentication mechanism using JSON Web Tokens.
- **bcrypt.js**: Library for secure password hashing.
- **Axios**: Promise-based HTTP client for making API requests.
- **Bootstrap**: Frontend framework for responsive design and UI components.

## Installation

1. Clone the repository:
git clone https://github.com/yourusername/mern_book_search_engine.git


2. Navigate to the project directory:

cd mern_book_search_engine

3. Install dependencies:

npm install

4. Create a `.env` file in the root directory and add the following environment variables:

MONGODB_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret


5. Run the application:

npm start


6. Access the application at `http://localhost:3000`.

## Usage

1. Sign up or log in to your account.
2. Use the search bar to find books by title, author, or keywords.
3. Browse through search results and click on a book to view details.
4. Click on the "Save" button to add a book to your reading list.
5. Visit the "Saved Books" page to manage your saved books.
6. To remove a book from your list, simply click on the "Remove" button.

## Contributing

Contributions are welcome! If you'd like to contribute to the project, please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/my-feature`).
3. Make your changes and commit them (`git commit -am 'Add new feature'`).
4. Push to the branch (`git push origin feature/my-feature`).
5. Create a new Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

For any inquiries or feedback, feel free to contact us at [your_email@example.com](mailto:your_email@example.com).

