import React, { useState } from 'react';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
import './About.css';

const Stats = () => {
    const [viewed, setViewed] = useState({ activeStudents: false, mentors: false, courses: false, awards: false });

    return (
        <div className='stats'>
            <h2 className='stats-heading'>Our Stats</h2>
            <div className='stats-section'>
                <StatItem title="Active Students" end={5000} viewed={viewed.activeStudents} setViewed={() => setViewed(prev => ({ ...prev, activeStudents: true }))} />
                <StatItem title="Mentors" end={10} viewed={viewed.mentors} setViewed={() => setViewed(prev => ({ ...prev, mentors: true }))} />
                <StatItem title="Courses" end={200} viewed={viewed.courses} setViewed={() => setViewed(prev => ({ ...prev, courses: true }))} />
                <StatItem title="Awards" end={50} viewed={viewed.awards} setViewed={() => setViewed(prev => ({ ...prev, awards: true }))} />
            </div>
        </div>
    );
};

const StatItem = ({ title, end, viewed, setViewed }) => (
    <div className='stat-item'>
        <VisibilitySensor partialVisibility offset={{ bottom: 200 }} onChange={isVisible => isVisible && setViewed()}>
            {({ isVisible }) => (
                <div className='stat-number'>
                    {viewed || isVisible ? <CountUp start={0} end={end} duration={3} suffix="+" /> : end}
                </div>
            )}
        </VisibilitySensor>
        <div className='stat-title'>{title}</div>
    </div>
);

export default Stats;
