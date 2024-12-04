import { Check, CircleX } from "lucide-react";
import { useEffect, useState } from "react";

interface QuestionCardProps {
  question: string;
  options: string[];
  correct: number;
  index: number;
  showCorrectAnswer: boolean;
}
function QuestionCard({ question, options, correct, index, showCorrectAnswer = false }: QuestionCardProps) {
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

  const getCorrectOptionStyles = (optionName: string) => {
    if (showCorrectAnswer && optionName === options[correct]) {
      return "bg-green-500";
    }
    else if (showCorrectAnswer && optionName !== options[correct]) {
      return "bg-teal-200 opacity-50"
    }
    else if (selectedOption === "") {
      return "bg-teal-200";
    }
    else if (optionName === options[correct]) {
      return "bg-green-500";
    }
    else if (optionName === selectedOption) {
      return "bg-red-500"
    } else {
      return "bg-teal-200 opacity-50"
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
    <div className="relative flex flex-col items-start justify-center font-montserrat bg-teal-300 w-10/12 px-6 py-4 rounded-lg">
      <p className="font-bold text-sm">Q{index + 1}</p>
      <div className="flex flex-row justify-between items-start w-full">
        <p className="text-xl">{question}</p>
        <div className={`${selectedOption === "" ? "scale-0" : "scale-100"} transition-all duration-300 w-auto h-auto`}>
          {
            showCorrectAnswer ? "" : isOptionCorrect && selectedOption !== "" ? <Check className="bg-green-500 rounded-full " /> : <CircleX className="bg-red-500 rounded-full" />
          }
        </div>
      </div>
      <div>
        {selectedOption}
      </div>
      <div className="grid grid-rows-4 md:grid-rows-2 md:grid-cols-2 w-full place-items-center gap-4 pt-4 z-50">
        {randomisedOptions.map((option, index) => {
          return (
            <button
              key={index}
              className={`${getCorrectOptionStyles(option)} text-xs md:text-lg w-full h-auto rounded-lg py-1 px-4  transition-all duration-400 ${selectedOption === "" && !showCorrectAnswer ? "hover:scale-105 active:scale-95 scale-100 cusror-pointer" : "scale-95 cursor-not-allowed"}`}
              onClick={() => handleOptionClick(option)}
              value={option}
              disabled={selectedOption !== ""}
            >
              {option}
            </button>
          )
        })}
      </div>
    </div>
  )
}

export default QuestionCard
