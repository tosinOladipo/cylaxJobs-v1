import React, { useEffect } from 'react'
import { InterviewFormDataType } from '../create-interview/[id]/page'

const QuestionList = ({formData}: InterviewFormDataType) => {


    useEffect(() => {
        
        GenerateQuestionList()

    }, [formData])

    const GenerateQuestionList = () => {

    }

  return (
    <div>QuestionList</div>
  )
}

export default QuestionList