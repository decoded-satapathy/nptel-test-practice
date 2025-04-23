import { ChangeEvent, Dispatch, SetStateAction } from 'react'

function DropdownList({ selectedValue, setSelectedValue, isDisabled }: { selectedValue: number, setSelectedValue: Dispatch<SetStateAction<number>>, isDisabled: boolean }) {

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => { setSelectedValue(Number(e.target.value)); };
  return (
    <select
      disabled={isDisabled}
      value={selectedValue} onChange={handleChange}
      className={`w-64 h-8 bg-teal-300 text-center rounded-lg font-montserrat text-xl shadow-2xl shadow-black ${isDisabled ? "cursor-not-allowed opacity-50" : "opacity-100"}`}>
      <option value={10}>10</option>
      <option value={20}>20</option>
      <option value={30}>30</option>
      <option value={40}>40</option>
      <option value={50}>50</option>
      <option value={60}>60</option>
      <option value={70}>70</option>
      <option value={80}>80</option>
      <option value={90}>90</option>
    </select >

  )
}

export default DropdownList
