import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fade from 'react-reveal/Fade';

import { ThemeContext } from '../../contexts/ThemeContext';

import eduImgWhite from '../../assets/svg/education/eduImgWhite.svg'
import eduImgBlack from '../../assets/svg/education/eduImgBlack.svg'
import './Education.css'
import { Box, Chip } from '@material-ui/core';

function EducationCard({ id, institution, course, startYear, endYear, atar, courses }) {

    const { theme } = useContext(ThemeContext);

    const useStyles = makeStyles((t) => ({
        educationCard : {
            backgroundColor:theme.primary30,
            "&:hover": {
                backgroundColor:theme.primary50,
            },
        }
    }));

    const classes = useStyles();

    return (
        <Fade bottom>
            <div key={id} className={`education-card ${classes.educationCard}`} >
                <div className="educard-img" style={{backgroundColor: theme.primary}}>
                    <img src={theme.type === 'light' ? eduImgBlack : eduImgWhite} alt="" />
                </div>
                <div className="education-details">
                    <h6 style={{color: theme.primary}}>{startYear}-{endYear}</h6>
                    <h4 style={{color: theme.tertiary}}>{course}</h4>
                    {atar && <h6 style={{color: theme.tertiary70}}>ATAR: {atar}</h6>}
                    <h5 style={{color: theme.tertiary80}}>{institution}</h5>
                    <Box mt={2} >
                    {courses && courses.map(course => (
                        <Chip 
                        label={course} style={{marginRight: '10px',backgroundColor: theme.primary50, color: theme.tertiary}} />
                    ))}  
                    </Box>             
                </div>
            </div>
        </Fade>        
    )
}

export default EducationCard
