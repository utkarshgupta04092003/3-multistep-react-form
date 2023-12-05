import React from 'react';
import { useState } from 'react';
import FormUserDetails from './FormUserDetails';
import UserPersonal from './UserPersonal';
import Confirm from './Confirm';
import Success from './Success';
import AppHeader from './AppHeader';

export default function Userform() {

    const [state,setState] = useState(1);

    const [data, setData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        occupation: '',
        city: '',
        bio: ''
    })

    const nextStep = ()=>{
        if(state<4)
            setState(state+1);
    }
    const prevStep = () =>{
        if(state > 1)
        setState(state-1);
    }

    switch (state) {
        case 1:
            // formuserdetails
            return(
                <div>
                    <AppHeader state={state} title={"Basic Details"}/>
                    <FormUserDetails state={state} data={data} setData={setData} nextStep={nextStep} prevStep={prevStep}/>
                </div>
            )
            
        case 2:
            // form personal details
            return(
                <div>
                    <AppHeader state={state} title={"Personal Details"}/>
                    <UserPersonal state={state} data={data} setData={setData} nextStep={nextStep} prevStep={prevStep}/>
                </div>

            )
        case 3:
            // form personal details
            return(
                <div>
                    <AppHeader state={state} title={"Confirmation"}/>
                    <Confirm state={state} data={data} nextStep={nextStep} prevStep={prevStep}/>
                </div>

            )
        
        case 4:
            // form personal details
            return(
                <div>
                    <AppHeader state={state} title={"Details Submitted"}/>
                    <Success state={state}  data={data}  nextStep={nextStep} prevStep={prevStep}/>
                </div>

            )
        default:
            return(
                <h1 className='text-center font-bold'>Some error happen! <br />Try Sometimes later.</h1>
            )
    }

}
