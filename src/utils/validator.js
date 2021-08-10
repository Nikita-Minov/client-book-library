export const validateForRegister = (values) => {
  const errors = {};

  if (!values.username) {
    errors.username = 'Поле не должно быть пустым';
  } else if (values.username.length <= 6) {
    errors.username = 'Имя должно быть больше 6 символов'
  } else if (values.username.length >= 32) {
    errors.username = 'Имя не должно быть больше 32 символов'
  }

  if (!values.password) {
    errors.password = 'Поле не должно быть пустым';
  } else if (values.password.length <= 6) {
    errors.password = 'Пароль должен быть больше 6 символов'
  } else if (values.password.length >= 32) {
    errors.password = 'Пароль не должен быть больше 32 символов'
  }
  return errors;
};

export const validateForAddBook = (values) => {
  const errors = {};

  if (!values.nameBook) {
    errors.nameBook = 'Поле не должно быть пустым';
  } else if (values.nameBook.length <= 6) {
    errors.nameBook = 'Название книги должно быть больше 6 символов'
  } else if (values.nameBook.length >= 32) {
    errors.nameBook = 'Название книги не должно быть больше 32 символов'
  }

  if (!values.author) {
    errors.author = 'Поле не должно быть пустым';
  } else if (values.author.length <= 6) {
    errors.author = 'Автор должен быть больше 6 символов'
  } else if (values.author.length >= 32) {
    errors.author = 'Автор не должен быть больше 32 символов'
  }

  if(!values.file) {
    errors.file = 'Поле не должно быть пустым'
  } else if (values.file.type !== 'application/pdf') {
    errors.file = 'Загрузите файл с расщирением .pdf!'
  }
  return errors;
};

export const validateForLogin = (values) => {
  const errors = {};

  if (!values.username) {
    errors.username = 'Поле не должно быть пустым';
  } else if (values.username.length <= 6) {
    errors.username = 'Имя должно быть больше 6 символов'
  } else if (values.username.length >= 32) {
    errors.username = 'Имя не должно быть больше 32 символов'
  }

  if (!values.password) {
    errors.password = 'Поле не должно быть пустым';
  } else if (values.password.length <= 6) {
    errors.password = 'Пароль должен быть больше 6 символов'
  } else if (values.password.length >= 32) {
    errors.password = 'Пароль не должен быть больше 32 символов'
  }
  return errors;
};
