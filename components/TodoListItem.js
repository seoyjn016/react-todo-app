import {
  MdCheckBox,
  MdCheckBoxOutlineBlank,
  MdRemoveCircleOutline,
} from "react-icons/md";
import "../styles/TodoListItem.scss";
import classNames from "classnames";
import { useState } from "react";

const TodoListItem = ({ todo }) => {
  const { id, text, checked } = todo;

  return (
    <div className="TodoListItem">
      <div className={classNames("checkbox", { checked })}>
        {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}

        <div className="text">{text}</div>
      </div>
      <div className="remove">
        <MdRemoveCircleOutline />
      </div>
    </div>
  );
};

export default TodoListItem;
