import { NextResponse } from "next/server";
import OpenAI from "openai";

export async function POST(req) {
  const { jobTitle, jobDescription, interviewDuration, type } =
    await req.json();

  try {

    const openai = new OpenAI({
    baseURL: "https://openrouter.ai/api/v1",
    apiKey: process.env.OPENROUTER_AI_API_KEY,
  });

  const completion = await openai.chat.completions.create({
    model: "google/gemma-3n-e2b-it:free",
    messages: [
      { role: "user", content: "Say this is a test" }
    ],
  })
  console.log(completion.choices[0].message)
  return NextResponse.json(completion.choices[0].message)
    
  } catch (error) {
    console.log(error)
    return NextResponse.json(error)
  }  
  
}
