import { useContext } from "react"
import AccountField from "./AccountField"
import SiteContext from "../context/SiteContext"
import AccountPasswordChange from "./AccountPasswordChange"

const AccountDetails = () => {
  const { state } = useContext(SiteContext)

  return (
    <section className="acc_details">
      <AccountField 
        field={'username'}
        type={'text'} 
        userInfo={state.userInfo.username}
      />
      <AccountField 
        field={'email'}
        type={'email'} 
        userInfo={state.userInfo.email || 'No email'} 
      />
      <AccountPasswordChange />
    </section>
  )
}

export default AccountDetails