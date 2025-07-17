import candidates from '@/utils/data/candidates'
import React from 'react'
import CandidateCard from './candidates/CandidateCard'

const DashboardFeatCandidateList = () => {
  return (
    <div className="grid lg:grid-cols-3 gap-5">
        {candidates.map((candidate) => (
            <CandidateCard key={candidate.id} fullname={candidate.fullname} location={candidate.location} state={candidate.state} desc={candidate.desc} tags={candidate.tags}/>
        ))}
    </div>
  )
}

export default DashboardFeatCandidateList