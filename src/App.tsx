import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom"
import TestPage from "./TestPage"
import Footer from "./components/Footer"
import questionList from "../questionList"

function App() {

  return <BrowserRouter>
    <Routes>
      <Route path="/" element={<MainEndpoint />} />
      <Route path="/iot" element={<TestPage subjectName="IOT" questionList={questionList.iot} />} ></Route>
      <Route path="/iot-ml-edge" element={<TestPage subjectName="IOT ML Edge" questionList={questionList.iotMLEdge} />} ></Route>
    </Routes>
  </BrowserRouter>


}

function MainEndpoint() {
  const navigate = useNavigate();
  return (
    <div className=" min-h-screen h-auto  w-11/12 md:w-9/12 flex flex-col justify-between items-center font-montserrat gap-y-6 pt-20">
      <h1 className="text-2xl md:text-4xl font-bold font-montserrat text-center underline">
        Welcome to NPTEL Practice tests
      </h1>
      <div className="flex flex-col gap-10">
        <button
          className={`bg-teal-300 rounded-xl py-4 px-6 shadow-2xl shadow-black/50 hover:scale-95 active:scale-85 md:hover:scale-105 md:active:scale-90 transition-all duration-200 cursor-pointer md:scale-100 text-sm md:text-lg scale-90`}
          onClick={() => {
            navigate("/iot");
          }}
        >
          IOT (Semester 5)
        </button>
        <button
          className={`bg-teal-300 rounded-xl py-4 px-6 shadow-2xl shadow-black/50 hover:scale-95 active:scale-85 md:hover:scale-105 md:active:scale-90 transition-all duration-200 cursor-pointer md:scale-100 text-sm md:text-lg scale-90`}
          onClick={() => navigate("/iot-ml-edge")}
        >
          Foundation of Cloud IOT Edge ML (Semester 6)
        </button>
      </div>
      <Footer />
    </div>
  )
}

export default App
