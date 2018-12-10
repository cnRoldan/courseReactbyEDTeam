import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';

const Course = (props) => (
    <li><Checkbox checked={props.done} color="primary"/>{props.id} - {props.name} - {props.teacher} </li>
);


export default Course;