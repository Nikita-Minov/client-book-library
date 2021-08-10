import React from 'react';
import { Formik } from 'formik';
import { connect } from 'react-redux';
import { addBook } from '../../../redux/books-reducer';
import {validateForAddBook} from "../../../utils/validator";

const AddBook = (props) => {
  return (
    <Formik
      validate={validateForAddBook}
      initialValues={{ nameBook: '', author: '', file: null}}
      onSubmit={(values, {resetForm}) => {
        const data = new FormData();
        data.append('pdf', values.file);
        data.append('name', values.nameBook);
        data.append('author', values.author);
        console.log(values.file)
        props.addBook(props.user.id, data);
        resetForm();
      }}

    >
      {({ values, errors, touched, handleChange, handleBlur, handleSubmit, setFieldValue }) => (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="nameBook"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.nameBook}
          />
          {errors.nameBook && touched.nameBook && errors.nameBook}
          <input
            type="text"
            name="author"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.author}
          />
          {errors.author && touched.author && errors.author}
          <input id="file" name="file" type="file" onChange={(event) => {
            setFieldValue('file', event.target.files[0])
          }}/>
          {errors.file}
          {errors.nameBook || errors.author || errors.file ? <button disabled type="submit">Submit</button>: <button type="submit">Submit</button>}
        </form>
      )}
    </Formik>
  );
};

const MapStateToProps = (state) => {
    return {
        user: state.user.user
    }
}

const AddBookContainer = connect(MapStateToProps, {addBook})(AddBook);

export default AddBookContainer;
