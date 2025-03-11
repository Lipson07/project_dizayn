import React from 'react'
import Contac from '../style/contacts.module.scss'
import Cont from '../components/Contactspages/Cont'
 const Contacts = ({black}) => {
  return (
    <div className={black==1?Contac.contacts1:Contac.contacts}>

      <Cont black={black} />


    </div>
  )
}
export default Contacts