"use client"
import { Button } from '@/components/ui/button'
import { db } from '@/utils/db'
import { chatSession } from '@/utils/GemeniAIModal'
import { UserAnswer } from '@/utils/schema'
import { useUser } from '@clerk/nextjs'
import { Mic, StopCircle, WebcamIcon } from 'lucide-react'
import moment from 'moment'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import useSpeechToText from 'react-hook-speech-to-text';
import { toast } from 'sonner'
import Webcam from 'react-webcam'

function RecordAnswerSection({ mockInterviewQuestion, activeQuestionIndex, interviewData }) {
  const [userAnswer, setUserAnswer] = useState('');
  const { user } = useUser();
  const [loading, setLoading] = useState(false);
  const [webCamEnabled, setWebCamEnabled] = useState(false)

  const {
    error,
    interimResult,
    isRecording,
    results,
    startSpeechToText,
    stopSpeechToText,
    setResults,
  } = useSpeechToText({
    continuous: true,
    useLegacyResults: false
  });

  useEffect(() => {
    results.map((result) => {
      setUserAnswer(prevAns => prevAns + result?.transcript)
    })
  }, [results])

  useEffect(() => {
    if (!isRecording && userAnswer.length > 5) {
      UpdateUserAnswer();
    }
  }, [userAnswer])


  const StartStopRecording = async () => {
    if (isRecording) {
      stopSpeechToText()
    }
    else {
      startSpeechToText()
    }
  }

  const UpdateUserAnswer = async () => {

    console.log(userAnswer)
    setLoading(true);

    // const feedbackPrompt="Question:"+mockInterviewQuestion[activeQuestionIndex]?.question+",User Answer:"+userAnswer+",Depends on question and user answer for given interview question"+"Please give us rating for answer and feedback as area of improvment if any"+"in just 3 to 5 lines to improve it in JSON format with rating field and feedback field"

    const feedbackPrompt = `Question: ${mockInterviewQuestion[activeQuestionIndex]?.question}  
User Answer: ${userAnswer}  

Context: The user is participating in a mental wellness assessment. Based on the provided question and their response, analyze their emotional state and determine their **mental wellness rating** on a scale of **1 to 10** (where 1 indicates severe depression and 10 indicates excellent mental well-being).  

Response Requirements:  
- Provide a **rating** (integer from **1 to 10**) based on the emotional tone, sentiment, and overall wellness reflected in the user’s answer.  
- Provide **detailed feedback** that includes:  
  1. **Emotional Analysis:** Identify signs of stress, anxiety, or positive mindset.  
  2. **Personalized Support:** Recommend mindfulness exercises, guided meditations, or relaxation techniques suitable for the user's state.  
  3. **Helpful Resources:** Suggest YouTube links or mental health resources for further support.  

Format the response in **valid JSON** as follows:  
    {
      "rating": 1 - 10,
        "feedback": "Detailed emotional analysis, personalized support, and recommended mental health resources."
    }
    `

    const result=await chatSession.sendMessage(feedbackPrompt);

    const mockJsonResp=(result.response.text()).replace('```json','').replace('```','')
    console.log(mockJsonResp);

    const JsonFeedbackResp=JSON.parse(mockJsonResp);

    const resp=await db.insert(UserAnswer).values({
      mockIdRef:interviewData?.mockId,
      question:mockInterviewQuestion[activeQuestionIndex]?.question,
      correctAns:mockInterviewQuestion[activeQuestionIndex]?.answer,
      userAns:userAnswer,
      feedback:JsonFeedbackResp?.feedback,
      rating:JsonFeedbackResp?.rating,
      userEmail:user?.primaryEmailAddress?.emailAddress,
      createdAt:moment().format('DD-MM-yyyy')
    })

    if(resp){
      toast('Answer Recorded Successfully')
      setUserAnswer('');
      setResults([]);
    }
    setResults([]);
    
    setLoading(false);
  }

  return (
    <div className='min-h-screen'>
      <div className='flex flex-col mt-32 justify-center items-center rounded-lg p-5 bg-gray-900'>
         <div>
                  {webCamEnabled ? <Webcam
                    onUserMedia={() => setWebCamEnabled(true)}
                    onUserMediaError={() => setWebCamEnabled(false)}
                    mirrored={true}
                    style={{
                      height: 300,
                      width: 300
                    }}
                  /> :
                    <>
                      <WebcamIcon className='h-72 w-full p-20 rounded-lg border bg-gradient-to-b from-gray-800 to bg-white my-7' />
                      <Button className="bg-blue-400" onClick={() => setWebCamEnabled(true)}>Enable Web Cam and Microphone</Button>
                    </>
                  }
                </div>
        {/* <Image src={'/webcam.png'} width={200} height={200} className='absolute' />
        <Webcam
          mirrored={true}
          audio={true}
          style={{
            height: 300,
            widht: '100%',
            zIndex: 10,
          }}
        /> */}
      </div>
      <Button
      disabled={loading}
      variant="outline" className="my-10 " onClick={StartStopRecording}>
        {isRecording ?
          <h2 className='text-red-600 animate-pulse gap-2 items-center'>
            <StopCircle /> Stop Recording
          </h2> :
          <h2 className='text-blue-400 flex gap-2 items-center'>
           <Mic /> Record Answer
          </h2> 
        }
      </Button>

      {/* <Button onClick={()=>console.log(userAnswer)}>Show User Answer</Button> */}
    </div>
  )
}

export default RecordAnswerSection




