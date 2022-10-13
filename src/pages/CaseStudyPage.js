import React from 'react'
import CaseStudyBrief from '../components/casestudybrief/CaseStudyBrief'
import CaseStudyGoal from '../components/casestudygoals/CaseStudyGoal'
import CaseStudyTrait from '../components/casestudytraits/CaseStudyTrait'

const CaseStudyPage = () => {
  
  return (
    <div>
        <CaseStudyBrief />
        <CaseStudyGoal />
        <CaseStudyTrait />
    </div>
  )
}

export default CaseStudyPage