import React, { Component } from "react";
import PropTypes from 'prop-types';
import CoursesList from "./CoursesList";
import CourseAddForm from "./CourseAddForm";
import DemoCarousel from "./DemoCarousel";
import ButtonAppBar from './AppBar';
import "react-responsive-carousel/lib/styles/carousel.min.css";



class App extends Component {

    constructor(...props) {
        super(...props);
        this.state = {
            courses: [
                { id: 1, name: 'React desde cero', teacher: 'Jonathan MirCha' },
                { id: 2, name: 'Drupal 8 desde cero', teacher: 'Alberto Quiroga' },
            ]
        }
        this.handleOnAddCourse = this.handleOnAddCourse.bind(this);
    }

    handleOnAddCourse(e) {
        alert('¡Curso añadido!');
        e.preventDefault();

        let form = e.target,
            course = {
                id: form.id.value,
                name: (form.name.value) ? form.name.value : App.defaultProps.name,
                teacher: (form.teacher.value) ? form.name.value : App.defaultProps.teacher
            }

        this.setState({
            courses: this.state.courses.concat([course])
        })

        form.reset();
    }
    render() {
        return (
            <div>
                <ButtonAppBar/>
                <DemoCarousel />
                <CourseAddForm
                    onAddCourse={this.handleOnAddCourse}
                />

                <CoursesList
                    courses={this.state.courses}
                />
            </div>
        )
    }

}

App.propTypes = {
    id: PropTypes.number,
    name: PropTypes.string.isRequired,
    teacher: PropTypes.string.isRequired
};
App.defaultProps = {
    name: 'Curso Desconocido',
    teacher: 'Profesor No Asignado'
};

export default App