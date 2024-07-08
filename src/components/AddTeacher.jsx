import { RxCross2 } from 'react-icons/rx'
import useSignup from '../authentication/useSignup'
import { useState } from 'react'

export default function AddTeacher({ onClose }) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [department, setDepartment] = useState('')
  const [subject, setSubject] = useState('')
  const { signup, isLoading } = useSignup()

  const handleAddTeacher = (e) => {
    e.preventDefault()
    signup({
      fullName: name,
      email,
      password,
      role: 'teacher',
      about: { department, subject },
    })
  }

  return (
    <form
      className="relative bg-white w-full max-w-[400px] p-8 rounded-md flex flex-col col gap-4"
      onSubmit={handleAddTeacher}
    >
      <button
        type="button"
        className="bg-red-400 text-white text-xl rounded-full p-.5 absolute top-4 right-4"
        onClick={onClose}
      >
        <RxCross2 />
      </button>
      <div className="flex flex-col">
        <label className="font-medium  text-gray-500" htmlFor="name">
          Name
        </label>
        <input
          placeholder="Enter teacher's name"
          type="text"
          id="name"
          className="text-base py-2 outline-none focus:outline-blue-400 rounded-sm tracking-wide font-normal px-2 bg-gray-200/60"
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="flex flex-col">
        <label className="font-medium  text-gray-500" htmlFor="email">
          Email
        </label>
        <input
          placeholder="Enter teacher's name"
          type="text"
          id="email"
          className="text-base py-2 outline-none focus:outline-blue-400 rounded-sm tracking-wide font-normal px-2 bg-gray-200/60"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="flex flex-col">
        <label className="font-medium  text-gray-500" htmlFor="password">
          Password
        </label>
        <input
          placeholder="Enter teacher's name"
          type="text"
          id="password"
          className="text-base py-2 outline-none focus:outline-blue-400 rounded-sm tracking-wide font-normal px-2 bg-gray-200/60"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="flex flex-col">
        <label className="font-medium  text-gray-500" htmlFor="department">
          Department
        </label>
        <input
          placeholder="Enter teacher's department"
          type="text"
          id="department"
          className="text-base py-2 outline-none focus:outline-blue-400 rounded-sm tracking-wide font-normal px-2 bg-gray-200/60"
          onChange={(e) => setDepartment(e.target.value)}
        />
      </div>
      <div className="flex flex-col">
        <label className="font-medium  text-gray-500" htmlFor="subject">
          Subject
        </label>
        <input
          placeholder="Enter teacher's subject"
          type="text"
          id="subject"
          className="text-base py-2 outline-none focus:outline-blue-400 rounded-sm tracking-wide font-normal px-2 bg-gray-200/60"
          onChange={(e) => setSubject(e.target.value)}
        />
      </div>
      {/* <div className="flex flex-col">
        <label className="font-medium  text-gray-500" htmlFor="file">
          Select a photo
        </label>
        <input
          type="file"
          id="file"
          onChange={(e) => {
            //   setFile(e.target.files[0])
          }}
        />
      </div> */}
      <button className="bg-blue-500 font-medium text-lg py-2 rounded-md text-gray-50 outline-none mt-3 focus:outline-blue-500">
        {/* {isUploading ? <SpinnerSmall /> : 'Upload'} */}
        Add
      </button>
    </form>
  )
}
