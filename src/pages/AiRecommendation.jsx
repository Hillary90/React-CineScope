import React, { useState } from "react";


 const questions = [
  {
    name: 'genre',
    label: 'What is your favourite genre?',
    options: [
      'Action',
      'Comedy',
      'Drama',
      'Sci-Fi',
      'Animation',
    ],
  },
  {
    name: 'mood',
    label: "What's your current mood?",
    options: [
      'Excited',
      'Relaxed',
      'Thoughtful',
      'Scared',
    ],
  },
  {
    name: 'decade',
    label: 'Preferred decade?',
    options: ['2020s', '2010s', '2000s', '1990s', 'Older'],
  },
  {
    name: 'language',
    label: 'Preferred language?',
    options: ['English', 'French', 'Spanish'],
  },
  {
    name: 'length',
    label: 'Preferred movie length?',
    options: ['Short ( < 90 min )', 'Standard ( 90 - 120 min )', 'Long ( > 120 min )'],
  },
 ]

// using reduce method to iterate through the question and return name and get the in
 const initialState = questions.reduce((acc, question) => {
  acc[question.name] = "";
  return acc
 }, {})
 
export default function AiRecommendation() {
  // create an input and it going to update the input, and passing intialState from the user based on the question to usestate
  const [inputs, setInputs] = useState(initialState); 
  const [question, setQuestion] = useState(0); // set the intial question at 0 which will be the first question. it just tracks the question 

   const handleOption = (value) => {
    setInputs({ ...inputs, [questions[question].name]: value });
    console.log(inputs);
  };
  
  // handle the next button by increasing the question by 1
  const handleNextQuestion = () => {

    if (question < questions.length-1) {
      setQuestion(question + 1 )
      
    } else {
      console.log(inputs)
    }
  };

  // handle the back button by decreasing the question by 1
  const handleBackQuestion = () =>{

    if (question > 0) {
      setQuestion(question - 1)      
    }
  }

  return(
    <div 
     className="relative 
     w-full max-w-md mx-auto 
     mt-30 bg-gray-900 rounded-2xl 
     shadow-2xl border-gray-600 py-10 
     px-8 m-4 flex flex-col  items-center min-h-[500px]"
    >
      <h2 className="text-white text-3xl font-black mb-8 text-center tracking-tight drop-shadow-lg">AI Movie Recommendation
      </h2>

      <div className="w-full flex items-center mb-8">
         <div className=" flex-1 bg-gray-600 rounded-full overflow-hidden h-2">
          <div className="h-full bg-red-500 transition-all duration-300" style={{ width: `${((question + 1) / questions.length) * 100}%`}}></div>
         </div>
        {/* claculating the number of question over lenght of question so that we can get fraction */}
         <span className="ml-3 text-white text-sm font-semibold">{question + 1}/{questions.length}</span>
      </div>

      <div className="w-full flex flex-col flex-1">
         <div className="mb-6 flex-1">

         {/* diplay the interation of the lables in the questions array */}
          <h3 className="text-lg font-semibold text-white text-center mb-5 ">{questions[question].label}</h3>

          <div className="grid grid-cols-1 gap-2.5">
            {/* map through the options and display each button with a single option*/}
              {questions [question].options.map((que) =>  (
                <button 
                 key= {que} 
                 onClick={()=>  handleOption (que)}
                 className= {`w-full py-3 rounded-2xl 
                 transition font-semibold 
                 text-base flex items-center justify-center 
                 gap-2 focus:outline-none focus:ring-1 active:scale-90 duration-150 cursor-pointer 
                 ${inputs[questions[question].name ] == que ?"bg-red-500  text-white" : "bg-gray-800 text-white hover:bg-red-700/80" }`}
                >
                 {que}
                </button>
              ))}     
          </div>       
         </div>

           <div 
             className=" flex justify-between items-center my-5"
            >
            <button 
             onClick={handleBackQuestion}
             type="button" 
             className="px-4 py-2 rounded-2xl font-semibold border-2 
             transition text-white bg-red-600 hover:bg-red-700 cursor-pointer"
            >Back</button>

            <button 
             onClick={()=> handleNextQuestion()}
             className="px-4 py-2 rounded-2xl font-semibold 
             border-2  transition text-white bg-red-600  hover:bg-red-700 cursor-pointer"
            >
             {/* condtional  rendering */}
             {question === questions.length - 1 ? "Finish" : "Next"}
             </button>
           </div>
      </div>
    </div>
  )
  
}