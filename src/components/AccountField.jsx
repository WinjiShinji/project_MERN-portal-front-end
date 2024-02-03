import { useState } from "react"
import useUpdateUser from "../api/useUpdateUser"

const AccountField = ({ field, type, userInfo }) => {
  // States //
  const [input, setInput] = useState(userInfo || '')
  const [editBtn, setEditBtn] = useState(false)
  const [changeBtn, setChangeBtn] = useState(true)

  const updateUser = useUpdateUser(input, field)

  // Events //
  const handleChange = (e) => {
    e.preventDefault()
    setEditBtn(false)
    setChangeBtn(true)
    try {
      updateUser()
    } catch (err) {
      console.log(err)
    }
  }
  const handleEdit = (e) => {
    e.preventDefault()
    setEditBtn(true)
    setChangeBtn(false)
  }

  return (
    <form>
      <h2>{field}</h2>
      <label htmlFor={`${field}`}>{`${field}:`}</label>
      <input 
        id={`${field}`}
        type={type} 
        placeholder={userInfo}
        required
        disabled={changeBtn === true ? true : false}
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        onClick={(e) => handleEdit(e)}
        disabled={editBtn === true ? true : false}
      >Edit</button>
      <button
        onClick={(e) => handleChange(e)}
        disabled={changeBtn === true ? true : false}
      >change</button>
      <span>@TODO: Success</span>
    </form>
  )
}

export default AccountField