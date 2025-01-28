import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'

function InterviewItemCard({interview}) {

  const router=useRouter();

  const onStart=()=>{
  router.push(`/dashboard/interview/${interview?.mockId}`)
  }

  const onFeedbackPress=()=>{
    router.push(`/dashboard/interview/${interview?.mockId}/feedback`)
  }

  return (
    <div className='border shadow-sm rounded-lg p-3'>
      <h2 className='font-bold text-zinc-400'>{interview?.jobPosition}</h2>
      <h2 className='text-sm text-gray-600'>{interview?.jobExperience}</h2>
      <h2 className='text-xs text-gray-400'>created At:{interview.createdAt}</h2>
      <div className='flex justify-between mt-2 gap-5'>
        <Button size="sm" className="w-full bg-gray-700 text-zinc-100" onClick={onFeedbackPress}>Feedback</Button>
        <Button size="sm" className="w-full bg-sky-300 text-black hover:bg-blue-500" onClick={onStart}>Start</Button>
        </div>
    </div>
  )
}

export default InterviewItemCard
