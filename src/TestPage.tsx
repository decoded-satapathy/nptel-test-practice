import { useEffect, useRef, useState } from "react";
import { Question } from "../questionList"
import DropdownList from "./components/DropdownList";
import QuestionCard from "./components/QuestionCard";
import Footer from "./components/Footer";
import { useInView } from "react-intersection-observer";
import { ArrowUp } from "lucide-react";

function TestPage({ subjectName, questionList }: { subjectName: string, questionList: Question[] }) {

  const { ref: mainSectionRef, inView: isMainsectionInView } = useInView({ threshold: 0 });

  const topSectionRef = useRef<HTMLDivElement>(null)

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
  const [showCorrectAnswer, setShowCorrectAnswer] = useState<boolean>(false);
  const [showGoToTop, setShowGoToTop] = useState<boolean>(false);
  const [totalQuestions, setTotalQuestions] = useState<number>(0);
  const [totalCorrectAnswers, setTotalCorrectAnswers] = useState<number>(0);
  const [totalWrongAnswers, setTotalWrongAnswers] = useState<number>(0);

  const handleStartTestClick = () => {
    setTestStarted(true);
    if (testType === 0) {
      setFinalQuestionList(questionList);
      setTotalQuestions(questionList.length);
    } else {
      setFinalQuestionList(getQuestionList(selectedValue));
      setTotalQuestions(selectedValue);
    }
  }

  const handleTestRestart = () => {
    setTestStarted(false);
    setShowCorrectAnswer(false);
    setTotalCorrectAnswers(0);
    setTotalWrongAnswers(0);
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
    setShowGoToTop(!isMainsectionInView);
  }, [isMainsectionInView])


  useEffect(() => {
    setFinalQuestionList(getQuestionList(selectedValue));
  }, [selectedValue])

  return (
    <div className=" min-h-screen h-auto  w-11/12 md:w-9/12 flex flex-col justify-between items-center font-montserrat gap-y-6 pt-20">
      <div
        className="flex flex-col justify-center items-center gap-y-6 pb-10"
        ref={topSectionRef}
      >
        <h3 className="text-4xl font-bold text-center">Welcome to you're practice {subjectName} tests.</h3>
        <h4 className="text-xl font-semibold flex flex-col md:flex-row justify-center items-center">
          <div>
            Good luck to you! by
          </div>
          <div className="flex flex-row items-center justify-center gap-x-2 pl-0 md:pl-2">
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
          </div>
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

      {testStarted && <div className={`relative flex flex-col items-center justify-center gap-y-10 pt-10 border-t-[1px] border-black/50 w-full md:w-10/12 `}>
        <div
          className="flex flex-row items-center justify-center md:justify-evenly w-full"
          ref={mainSectionRef}
        >
          {testType === 0
            && <button
              className={`bg-teal-300 rounded-xl py-4 px-6 shadow-2xl shadow-black/50 hover:scale-95 active:scale-85 md:hover:scale-105 md:active:scale-90 transition-all duration-200 cursor-pointer md:scale-100 text-sm md:text-lg scale-90`}
              onClick={() => {
                setTestStarted(false);
                setFinalQuestionList(getQuestionList(questionList.length))
                setTimeout(() => {
                  setTestStarted(true);
                }, 50)
              }}
            >
              Randomise questions
            </button>
          }

          <button
            className={`bg-teal-300 rounded-xl py-4 px-6 shadow-2xl shadow-black/50 hover:scale-95 active:scale-85 md:hover:scale-105 md:active:scale-90 transition-all duration-200 cursor-pointer md:scale-100 text-sm md:text-lg scale-90`}
            onClick={() => {
              setShowCorrectAnswer((prev) => !prev);
              // setTimeout(() => {
              //   setTestStarted(true);
              // }, 50)
            }}
          >
            {showCorrectAnswer ? "Hide" : "Show"} correct options
          </button>
        </div>

        {totalCorrectAnswers + totalWrongAnswers === totalQuestions && !showCorrectAnswer
          && <div
            className="flex flex-row items-center justify-center md:justify-evenly w-full gap-x-4"
          >
            <p className="bg-green-500 rounded-lg py-2 px-4 shadow-2xl shadow-black/70 text-sm md:text-lg font-bold">
              <div>
                Correct : {totalCorrectAnswers}/{totalQuestions}
              </div>
              <div>
                {(totalCorrectAnswers / totalQuestions) * 100}% Correct
              </div>
            </p>
            <p className="bg-red-500 rounded-lg py-2 px-4 shadow-2xl shadow-black/70 text-sm md:text-lg font-bold">
              <div>
                Wrong : {totalWrongAnswers}/{totalQuestions}
              </div>
              <div>
                {(totalWrongAnswers / totalQuestions) * 100}% Correct
              </div>
            </p>
          </div>}

        {showGoToTop &&
          <ArrowUp
            className="cursor-pointer sticky top-8  bg-teal-400 z-50 rounded-full animate-bounce border-2 border-gray-200 w-10 h-10 p-[6px] md:w-14 md:h-14 md:p-2"
            onClick={() => {
              const sectionYPos = topSectionRef?.current?.getBoundingClientRect().y;
              window.scrollBy({ top: sectionYPos, left: 0, behavior: "smooth" });
            }
            }
          />
        }
        {finalQuestionList.map((question, index) => {
          return (
            <QuestionCard
              key={index}
              question={question.question}
              options={question.options}
              correct={question.correct}
              index={index}
              showCorrectAnswer={showCorrectAnswer}
              setTotalCorrectAnswers={setTotalCorrectAnswers}
              setTotalWrongAnswers={setTotalWrongAnswers}
            />
          )
        })}

        {totalCorrectAnswers + totalWrongAnswers === totalQuestions && !showCorrectAnswer
          && <div
            className="flex flex-row items-center justify-center md:justify-evenly w-full gap-x-4"
          >
            <p className="bg-green-500 rounded-lg py-2 px-4 shadow-2xl shadow-black/70 text-sm md:text-lg font-bold">
              <div>
                Correct : {totalCorrectAnswers}/{totalQuestions}
              </div>
              <div>
                {(totalCorrectAnswers / totalQuestions) * 100}% Correct
              </div>
            </p>
            <p className="bg-red-500 rounded-lg py-2 px-4 shadow-2xl shadow-black/70 text-sm md:text-lg font-bold">
              <div>
                Wrong : {totalWrongAnswers}/{totalQuestions}
              </div>
              <div>
                {(totalWrongAnswers / totalQuestions) * 100}% Correct
              </div>
            </p>
          </div>}
      </div>}
      <Footer />
    </div >

  )
}

export default TestPage; 
