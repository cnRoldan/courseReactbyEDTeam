import React from "react";
import Course from "./Course";


const CoursesList = (props) => (
    <ul className="course-list">
        {
            props.courses.map(course => (
                <Course
                    key={course.id}
                    id={course.id}
                    name={course.name}
                    teacher={course.teacher}
                    done={course.done}
                />
            ))
        }
    </ul>
)


export default CoursesList;