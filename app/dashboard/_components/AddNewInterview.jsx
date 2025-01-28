'use client'
import React, { useState } from 'react'

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { LoaderCircle } from 'lucide-react';
import {v4 as uuidv4} from 'uuid';
import { useUser } from '@clerk/nextjs';
import moment from 'moment';
import { useRouter } from 'next/navigation';
import { chatSession } from '@/utils/GemeniAIModal';
import { db } from '@/utils/db';
import { MockInterview } from '@/utils/schema';


function AddNewInterview() {

  const [openDialog, setOpenDialog] = useState(false);
  const [jobPosition, setJobPosition] = useState();
  const [jobDesc, setJobDesc] = useState();
  const [jobExperience, setJobExperience] = useState();
  const [loading,setLoading]=useState(false);
  const [jsonResponse,setJsonResponse]=useState([]);
  const {user}=useUser();
  const router=useRouter();

  const onSubmit=async(e)=>{
    setLoading(true);
    e.preventDefault();
    console.log(jobPosition,jobDesc,jobExperience);

    // const InputPrompt="Job Position:"+jobPosition+" , Job Description:"+jobDesc+",Years of Experience:"+jobExperience+" ,Depends on Job Position,Job Description & Years of Experience give us "+process.env.NEXT_PUBLIC_INTERVIEW_QUESTION_COUNT+" interview question along with Answer in JSON format, Give us question and answer field on JSON" //differ now i will write my own prompt

    const InputPrompt=`Job Position:${jobPosition} , Job Description:${jobDesc},Years of Experience:${jobExperience} ,Return exactly ${process.env.NEXT_PUBLIC_INTERVIEW_QUESTION_COUNT} interview questions and their corresponding answers in a valid JSON format.Important:- Ensure that the response is a valid JSON array of objects - Each object should have two fields 'question' and 'answer'- Do not include any additional text, instructions, or comments outside of the JSON structure. `

//     const InputPrompt = `User Profile: Age:${age}, Gender:${gender}, Sleep Schedule:${sleepSchedule}, Personality Type:${personalityType}, Physical Health:${physicalHealth}.  
// Return exactly ${process.env.NEXT_PUBLIC_MENTAL_HEALTH_ADVICE_COUNT} personalized mental health tips and actionable advice in a valid JSON format.  

// Important:  
// - Ensure that the response is a valid JSON array of objects.  
// - Each object should have two fields: 'tip' and 'explanation'.  
// - The 'tip' field should provide a concise mental health recommendation.  
// - The 'explanation' field should offer a brief but meaningful justification or further guidance on the tip.  
// - Do not include any additional text, instructions, or comments outside of the JSON structure.`  

    const result=await chatSession.sendMessage(InputPrompt);
    const MockJsonResp=(result.response.text()).replace('```json','').replace('```','')//he has not put await but in previous application i have put await here
    // console.log(JSON.parse(MockJsonResp));
    setJsonResponse(MockJsonResp);

    if(MockJsonResp){
    const resp=await db.insert(MockInterview).values({
      mockId:uuidv4(),
      jsonMockResp:MockJsonResp,
      jobPosition:jobPosition,
      jobDesc:jobDesc,
      jobExperience:jobExperience,
      createdBy:user?.primaryEmailAddress?.emailAddress,
      createdAt:moment().format('DD-MM-yyyy')
    }).returning({mockId:MockInterview.mockId})

    console.log("Inserted Id",resp)
    if(resp){
      setOpenDialog(false);
      router.push('/dashboard/interview/'+resp[0]?.mockId)
    }
  }
  else console.log("MockJsonRespError");


    setLoading(false);
  }

  return (
    <div>
      <div className='p-10 border rounded-lg  hover:scale-105 hover:shadow-md cursor-pointer transition-all bg-gradient-to-r from-white to-zinc-300 '
      onClick={()=>setOpenDialog(true)}
      >
        <h2 className='text-blue-800 font-medium text-lg text-center'>+Add New</h2>
      </div>

      <Dialog open={openDialog}>
        <DialogContent className="bg-gradient-to-r from-slate-400 to-gray-600">
          <DialogHeader>
            <DialogTitle className="text-xl text-gray-800">Job Interview Information</DialogTitle>
            {/* <DialogTitle className="text-xl text-gray-800">Personal Information</DialogTitle> */}
            <DialogDescription>
              <form onSubmit={onSubmit}>
              <div>
              <h2 className='text-gray-700'>Add details about your job</h2>
              {/* <h2 className='text-gray-700'>Your Mental Health</h2> */}
              
              <div className='mt-7 my-3'>
                <label className='text-black'>Job Role</label>
                {/* <label className='text-black'>Age</label> */}
                <Input placeholder="Ex: full stack developer" required
                // <Input placeholder="18,20,60" required
                onChange={(e)=>setJobPosition(e.target.value)}
                ></Input>
              </div>
              <div className='my-3'>
                <label className='text-black'>Job Description</label>
                {/* <label className='text-black'>Gender</label> */}
                <Textarea placeholder="Ex:Node,Express,Angular,React" required
                // <Textarea placeholder="Ex: Male,Female,Transgender" required
                onChange={(e)=>setJobDesc(e.target.value)}
                />
              </div>
              <div className='my-3'>
                <label className='text-black'>Experience</label>
                {/* <label className='text-black'>Sleep Schedule</label> */}
                <Input placeholder="5,10,15,20" type="number" required
                onChange={(e)=>setJobExperience(e.target.value)}
                max="60" min="0"/>
                {/* <Input placeholder="Ex:10pm,12pm,2am" type="number" required
                onChange={(e)=>setJobExperience(e.target.value)}
                max="60" min="0"/> */}
              </div>
              {/* extra */}
              <div className='my-3'>
                <label className="text-black">Total Question</label>
                {/* <label className='text-black'>Personality Type</label> */}
                <Input placeholder="5,10,15,20" type="number" required max="60" min="0"/>
                {/* <Input placeholder="Ex:INTJ,ISTP" type="number" required max="60" min="0"/> */}
              </div>
              <div className='mt-7 my-3'>
                <label className='text-black'>Company</label>
                {/* <label className='text-black'>Physical Health</label> */}
                <Input placeholder="Ex:Amazon,Google,Flipkart" required
                // <Input placeholder="Ex:5'11/80, 5'8/60" required
                ></Input>
              </div>
              </div>
              <div className='flex gap-5 justify-end '>
                <Button type="button" className="bg-blue-400" onClick={()=>setOpenDialog(false)}>Cancel</Button>
                <Button className="bg-sky-800" type="submit" disabled={loading}>
                  {loading?
                  <>
                  <LoaderCircle className='animate-spin'/>
                  Generating Questions
                  </>: 'Start'}
                  </Button>
              </div>
              </form>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>

    </div>
  )
}

export default AddNewInterview
