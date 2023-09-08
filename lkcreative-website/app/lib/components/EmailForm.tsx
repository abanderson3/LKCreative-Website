"use client"
import { useState } from "react"

const EmailForm = () => {
    const [ emailForm, setEmailForm ] = useState({
    first: '',
    last: '',
    email: '',
    phone: '',
    message: ''
  })

  const handleChange = (event: { target: { name: string; value: string } }) => {
    setEmailForm((curr) => ({
      ...curr,
      [event.target.name]: event.target.value
    }));
  }

  const onSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    console.log(emailForm)
  }

  const inputStyling = 'border border-black m-2 rounded-md p-2'

  return (
  <div className="">
    <div className="text-center font-josefine text-4xl mt-6 italic font-light">
      Send us an email
    </div>
    <form
      onSubmit={onSubmit}
      className="flex flex-col justify-center border border-black m-5 rounded-md"
    >
      <input
        required
        className='border border-black m-2 rounded-md p-2 '
        type="text"
        name="first"
        placeholder="First Name"
        value={emailForm.first}
        onChange={handleChange}
      />

      <input
        required
        className={inputStyling}
        type="text"
        name="last"
        placeholder="Last Name"
        value={emailForm.last}
        onChange={handleChange}
      />

      <input
        required
        className={inputStyling}
        type="email"
        name="email"
        placeholder="Email"
        value={emailForm.email}
        onChange={handleChange}
      />

      <input
        required
        className={inputStyling}
        type="number"
        name="phone"
        placeholder="Phone Number"
        value={emailForm.phone}
        onChange={handleChange}
      />

      <textarea
        required
        className="border border-black m-2 rounded-md p-2 h-28"
        name="message"
        placeholder="How can I help?"
        value={emailForm.message}
        onChange={handleChange}
      />
      <button
        className="border border-black rounded-md mx-16 my-3 p-1"
      >
        Send
      </button>
    </form>
  </div>

  )
}

export default EmailForm