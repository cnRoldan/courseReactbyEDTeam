import React from 'react';


const CourseAddForm = (props) => (
    // <form onSubmit={props.onAddCourse} class="form-add">
    // <input type="text" placeholder="Nombre del Curso" name="name" />
    // <input type="text" placeholder="Profesor" name="teacher" />
    // <input type="submit" value="Guardar" class="submit-button" />

    <div className="form-style-6">
        <h1>Añadir Curso</h1>
        <form onSubmit={props.onAddCourse} className="form-add">
            <input type="text" name="name" placeholder="Nombre del Curso" />
            <input type="text" name="teacher" placeholder="Profesor" />
            <input type="hidden" name="id" value={Math.floor(Math.random() * 100)} />
            <input type="submit" value="Guardar" />
        </form>
    </div>
    // </form>
);

export default CourseAddForm;