import React from 'react';
import uid from 'uid';
import Tooltip from '@material-ui/core/Tooltip';


const CourseAddForm = (props) => (

    <div className="form-group">
        <h1>Añadir Curso</h1>
        <div className="form-add">
            <form onSubmit={props.onAddCourse} className="form-add">
                <input type="text" name="name" placeholder="Nombre del Curso" />
                <input type="text" name="teacher" placeholder="Profesor" />
                <input type="hidden" name="id" value={uid(10)} />
                <Tooltip title="Guardar un curso" aria-label="Guardar un curso">
                    <input type="submit" value="GUARDAR" className="button-awesome" />
                </Tooltip>
            </form>
            {!props.courses.length ?
                <button onClick={props.onLoadCourses} className="button-awesome"> Cargar cursos</button> :
                <button onClick={props.onResetCourses} className="button-awesome"> Borrar cursos</button>}
        </div>
    </div>
);

export default CourseAddForm;