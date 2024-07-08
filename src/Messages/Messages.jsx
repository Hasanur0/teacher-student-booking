import { IoMdSend } from 'react-icons/io'
import { useParams, useSearchParams } from 'react-router-dom'

export default function Messages() {
  const { id } = useParams()
  console.log(id)
  return (
    <div className=" h-full relative">
      <div className="border-2  absolute w-full bottom-0 p-3">
        <div className="relative">
          <input
            type="text"
            placeholder="Type your message..."
            className="px-4 py-3 rounded-md w-full text-xl font-medium focus:outline-none focus:ring"
          />
          <button className="absolute right-2 bg-blue-500 px-3 py-1.5 top-1/2 -translate-y-1/2 rounded-md active:scale-95  transition-transform duration-200 focus:outline-none focus:ring">
            <IoMdSend className="text-3xl text-gray-100" />
          </button>
        </div>
      </div>
    </div>
  )
}
