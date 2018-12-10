import React, { Component } from "react";
import PropTypes from 'prop-types';
import CoursesList from "./CoursesList";
import CourseAddForm from "./CourseAddForm";
import DemoCarousel from "./DemoCarousel";
import uid from 'uid';
import $ from 'jquery';
import ButtonAppBar from './AppBar';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { courses } from '../data/courses.json'



class App extends Component {

    constructor(...props) {
        super(...props);
        this.state = {
            courses: []
        }
        this.handleOnAddCourse = this.handleOnAddCourse.bind(this);
        this.fetchData = this.fetchData.bind(this);
        this.resetData = this.resetData.bind(this);
    }

    handleOnAddCourse(e) {
        e.preventDefault();

        let form = e.target,
            course = {
                id: form.id.value,
                name: (form.name.value) ? form.name.value : App.defaultProps.name,
                teacher: (form.teacher.value) ? form.teacher.value : App.defaultProps.teacher,
                done : false
            }

        $('.course-list').fadeOut(1000, (callback)=> this.setState({
            courses: this.state.courses.concat([course])
        })).fadeIn();

        form.reset();
    }

    fetchData() {
        // setTimeout((cb) => this.setState({ courses: courses }), 500);
        $('.course-list').fadeOut(1000, (cb) => this.setState({ courses: courses })).fadeIn()

    }

    resetData() {
        // this.setState({ courses: [] });
        $('.course-list').fadeOut(1000, (cb) => this.setState({ courses: [] })).fadeIn()
    }

    componentDidMount() {
        // this.fetchData();
    }
    render() {
        return (
            <div>
                <ButtonAppBar />
                <DemoCarousel />
                <CourseAddForm
                    onAddCourse={this.handleOnAddCourse}
                    onLoadCourses={this.fetchData}
                    onResetCourses={this.resetData}
                    courses={this.state.courses}
                />
                <CoursesList
                    courses={this.state.courses}
                />

            </div>
        )
    }

}

App.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    teacher: PropTypes.string.isRequired,
    done : PropTypes.bool.isRequired
};
App.defaultProps = {
    id: uid(10),
    name: 'Curso Desconocido',
    teacher: 'Profesor No Asignado',
    done : false
};

export default App