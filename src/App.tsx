import { useEffect, useState } from "react";
import questionList from "../questionList"
import DropdownList from "./components/DropdownList";
import QuestionCard from "./components/QuestionCard";
import Footer from "./components/Footer";

function App() {

  interface Question {
    question: string;
    options: string[];
    correct: number;
  }

  const getQuestionList = (n: number) => {
    // Check if n exceeds the array length
    if (n > questionList.length) {
      console.error("Input exceeded the questions number")
      return [];
    }

    // Shuffle the array using Fisher-Yates algorithm
    let shuffledArray = questionList.slice(); // Create a copy of the array to preserve original
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]]; // Swap elements
    }

    return shuffledArray.slice(0, n);
  }

  const [selectedValue, setSelectedValue] = useState<number>(10);
  const [testStarted, setTestStarted] = useState<boolean>(false);
  const [finalQuestionList, setFinalQuestionList] = useState<Question[]>([]);
  const [testType, setTestType] = useState<number>(2); // 0 => all questions 1=> randomised questions
  const [deviceType, setDeviceType] = useState<string>("");

  const handleStartTestClick = () => {
    setTestStarted(true);
    if (testType === 0) {
      setFinalQuestionList(questionList);
    }
  }

  const handleTestRestart = () => {
    setTestStarted(false);

    if (testType === 0) {
      setFinalQuestionList(questionList);
    }
  }
  useEffect(() => {
    const userAgent = navigator.userAgent.toLowerCase();

    if (
      /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(
        userAgent
      )
    ) {
      setDeviceType("mobile");
    } else if (/windows|macintosh|linux/i.test(userAgent)) {
      setDeviceType("desktop");
    } else {
      setDeviceType("unknown");
    }
  }, [deviceType]);


  useEffect(() => {
    setFinalQuestionList(getQuestionList(selectedValue));
  }, [selectedValue])

  return (
    <div className=" min-h-screen h-auto  w-10/12 flex flex-col justify-between items-center font-montserrat gap-y-6 pt-20">
      <div className="flex flex-col justify-center items-center gap-y-6 pb-10">
        <h3 className="text-4xl font-bold">Welcome to you're practice IOT tests.</h3>
        <h4 className="text-xl font-semibold flex flex-row gap-x-2">
          <div>
            Good luck to you!
          </div>
          <a
            href="https://chat.whatsapp.com/FZUTlD0EvF2ASq6RNMGnH2"
            target="_blank"
            className="text-blue-600 font-medium underline"
          >
            Cu Connect
          </a>
          <div>X</div>
          <a
            className="text-blue-600 font-medium underline hover:text-accentColor-200 text-accentColor/50 dark:text-accentColor dark:hover:text-accentColor-200 transition-all duration-500"
            href={`${deviceType === "mobile"
              ? "https://github.com/decoded-satapathy"
              : "https://decoded-satapathy-portfolio.vercel.app"
              }`}
            target="_blank"
          >
            Om
          </a>
        </h4>


        <div className="flex flex-row items-center justify-center gap-x-6">
          <button
            className={`bg-teal-300 rounded-xl py-4 px-6 shadow-2xl shadow-black/50 ${testType === 0 ? "cursor-not-allowed opacity-50 scale-90 " : "cursor-pointer scale-100 hover:scale-105"} transition-all duration-200`}
            disabled={testType === 0}
            onClick={() => {
              setTestType(0);
              setTestStarted(false)
            }}
          >
            All question test
          </button>

          <button
            className={`bg-teal-300 rounded-xl py-4 px-6 shadow-2xl shadow-black/50 hover:scale-105 active:scale-90 transition-all duration-200 ${testType === 1 ? "cursor-not-allowed opacity-50 scale-90 " : "cursor-pointer scale-100 hover:scale-105"}`}
            disabled={testType === 1}
            onClick={() => {
              setTestType(1)
              setTestStarted(false)
            }}
          >
            Custom question pool
          </button>
        </div>

        {testType === 1 && <div className="flex flex-col items-center justify-center gap-y-4">
          The questions you want to start the test with
          <DropdownList selectedValue={selectedValue} setSelectedValue={setSelectedValue} isDisabled={testStarted} />
          We have currently {questionList.length} questions.
        </div>}
        <div className="flex flex-row items-center justify-center gap-x-6">
          <button
            className={`bg-teal-300 rounded-xl py-4 px-6 shadow-2xl shadow-black/50 ${testStarted || testType === 2 ? "cursor-not-allowed opacity-50 scale-90 " : "cursor-pointer scale-100 hover:scale-105"} transition-all duration-200`}
            disabled={testType !== 2 && testStarted}
            onClick={handleStartTestClick}
          >
            Start the test
          </button>

          <button
            className={`bg-teal-300 rounded-xl py-4 px-6 shadow-2xl shadow-black/50 active:scale-90 transition-all duration-200 ${testType === 2 ? "cursor-not-allowed opacity-50 scale-90 " : "cursor-pointer scale-100 hover:scale-105"}`}
            onClick={handleTestRestart}
            disabled={testType === 2}
          >
            Reset the test
          </button>
        </div>
      </div>

      <div className={`relative flex flex-col items-center justify-center gap-y-10 pt-10 border-t-[1px] border-black/50 w-10/12`}>
        {testType === 0 && testStarted
          && <button
            className={`bg-teal-300 rounded-xl py-4 px-6 shadow-2xl shadow-black/50 hover:scale-105 active:scale-90 transition-all duration-200 cursor-pointer scale-100`}
            onClick={() => {
              setTestStarted(false);
              setFinalQuestionList(getQuestionList(219))
              setTimeout(() => {
                setTestStarted(true);
              }, 50)
            }}
          >
            Randomise questions
          </button>
        }
        {testStarted && finalQuestionList.map((question, index) => {
          return (
            <QuestionCard
              key={index}
              question={question.question}
              options={question.options}
              correct={question.correct}
              index={index}
            />
          )
        })}
      </div>
      <Footer />
    </div>

  )
}

export default App
