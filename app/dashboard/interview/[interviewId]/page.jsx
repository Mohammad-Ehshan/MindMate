"use client"

import { Button } from '@/components/ui/button'
import { db } from '@/utils/db'
import { MockInterview } from '@/utils/schema'
import { eq } from 'drizzle-orm'
import { Lightbulb, WebcamIcon } from 'lucide-react'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Webcam from 'react-webcam'

function Interview({ params }) {

  const [interviewData, setInterviewData] = useState({});//differ i have added {}
  const [webCamEnabled, setWebCamEnabled] = useState(false)

  useEffect(() => {
    console.log(params.interviewId);
    GetInterviewDetails();
  }, [])

  // Used to Get Interveiw Details by MockId/Interview id

  const GetInterviewDetails = async () => {
    const result = await db.select().from(MockInterview).where(eq(MockInterview.mockId, params.interviewId))  
    //differ: getting 2 times question response

    console.log(result);
    console.log(result[0]);

    setInterviewData(result[0]);
  }


  return (
    <div className='my-10'>
      <h2 className='font-bold text-2xl'>Start your Interview</h2>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
        <div className='flex flex-col my-5 rounded-lg border'>
          <div className='flex flex-col rounded-lg p-5 border gap-5'>
            <h2 className='text-lg'><strong>Job Role/Position:</strong>{interviewData.jobPosition}</h2>
            <h2 className='text-lg'><strong>Job Description/Tech Stack:</strong>{interviewData.jobDesc}</h2>
            <h2 className='text-lg'><strong>Years of Experience:</strong>{interviewData.jobExperience}</h2>
          </div>
          <div className='p-5 border rounded-lg border-yellow-300 bg-yellow-50'>
            <h2 className='flex gap-2 items-center text-yellow-800'><Lightbulb /><strong>Information</strong></h2>
            <h2>{process.env.NEXT_PUBLIC_INFORMATION}</h2>
          </div>
        </div>

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
              <WebcamIcon className='h-72 w-full p-20 rounded-lg border bg-secondary my-7' />
              <Button variant="ghost" onClick={() => setWebCamEnabled(true)}>Enable Web Cam and Microphone</Button>
            </>
          }
        </div>
      </div>
      <div className='flex justify-end items-end'>
        <Link href={'/dashboard/interview/'+params.interviewId+'/start'}>
      <Button>Start Interview</Button>
        </Link>
      </div>
    </div>
  )
}

export default Interview
