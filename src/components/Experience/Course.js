import React,{useContext} from 'react';

import { ThemeContext } from '../../contexts/ThemeContext';

import './Experience.css';

import { courseData } from '../../data/courseData'
import ExperienceCard from './ExperienceCard';

function Course() {

    const { theme } = useContext(ThemeContext);
    return (
        <div className="experience" id="experience" style={{backgroundColor: theme.secondary}}> 
             <div className="experience-body">
                 {/* <div className="experience-image">
                     <img src={theme.expimg} alt="" />
                 </div> */}
                 <div className="experience-description">
                    <h1 style={{color:theme.primary}}>Courses</h1>
                    <div className='card-wrapper'>
                        {courseData.map(course =>(
                            <ExperienceCard 
                                key={course.id}
                                id={course.id}
                                courseTitle={course.courseTitle}
                                grade={course.grade}
                                startYear={course.startYear}
                                endYear={course.endYear}/>
                        ))}
                    </div>
                 </div>
             </div>
        </div>
    )
}

export default Course
