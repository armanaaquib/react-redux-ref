import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';

// const Li = styled.li`
//   text-decoration: ${(props) => (props.completed ? 'line-through' : 'none')};
// `;

const Todo = ({ onClick, completed, text }) => (
  <li
    onClick={onClick}
    style={{
      textDecoration: completed ? 'line-through' : 'none',
    }}
  >
    {text}
  </li>
);

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
};

export default Todo;
