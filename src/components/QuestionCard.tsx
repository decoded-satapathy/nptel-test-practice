import { Check, CircleX } from "lucide-react";
import { useEffect, useState } from "react";

interface QuestionCardProps {
  question: string;
  options: string[];
  correct: number;
  index: number;
}
function QuestionCard({ question, options, correct, index }: QuestionCardProps) {
  const [selectedOption, setSelectedOption] = useState<string>("");
  const [isOptionCorrect, setIsOptionCorrect] = useState<boolean>(false);
  const [randomisedOptions, setRandomisedOptions] = useState<string[]>([]);

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    checkAnswerCorrectness(option);
  }

  const checkAnswerCorrectness = (option: string) => {
    if (option === options[correct]) {
      setIsOptionCorrect(true);
    } else {
      setIsOptionCorrect(false);
    }

  }
  useEffect(() => {
    // Shuffle the array using Fisher-Yates algorithm
    let shuffledArray = options.slice(); // Create a copy of the array to preserve original
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]]; // Swap elements
    }
    setRandomisedOptions(shuffledArray.slice(0, 4));

  }, [options])
  return (
    <div className="relative flex flex-col items-start justify-center font-montserrat bg-teal-300 w-auto md:w-10/12 px-6 py-4 rounded-lg">
      <p className="font-bold text-sm">Q{index + 1}</p>
      <div className="flex flex-row justify-between items-start w-full">
        <p className="text-xl">{question}</p>
        <div className={`${selectedOption === "" ? "scale-0" : "scale-100"} transition-all duration-300 w-auto h-auto`}>
          {
            isOptionCorrect && selectedOption !== "" ? <Check className="bg-green-500 rounded-full " /> : <CircleX className="bg-red-500 rounded-full" />
          }
        </div>
      </div>
      <div className="grid grid-rows-2 grid-cols-2 w-full place-items-center gap-4 pt-4">
        {randomisedOptions.map((option, index) => {
          return (
            <div
              key={index}
              className={`bg-teal-200 text-xs md:text-medium w-auto h-auto rounded-lg py-2 px-4  transition-all duration-400 ${selectedOption === "" ? "hover:scale-105 active:scale-95 scale-100 cusror-pointer" : "scale-95 cursor-not-allowed opacity-50"}`}
              onClick={() => handleOptionClick(option)}
            // disabled={selectedOption !== ""}
            >
              {option}
            </div>
          )
        })}
      </div>
      <div
        className={`bg-green-400 h-full w-48 top-0 right-0 absolute ${selectedOption === "" ? "opacity-0" : isOptionCorrect ? "translate-x-0 opacity-0" : "opacity-100 translate-x-44"} flex flex-col justify-center items-center transition-opacity duration-500 px-10 rounded-r-lg`}
      >
        The correct option is :
        <strong>Option {correct + 1} : {options[correct]}</strong>
      </div>
    </div>
  )
}

export default QuestionCard
