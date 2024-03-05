import React from "react"

const SForm = ()=>{
    return(

        <>
        <form action="">

            <label htmlFor="name">Name:</label>
            <input type="text" id="name" />
            <br />
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" />
            <br />
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" />

            <br />
            <br />
            <button type="submit">Submit</button>

        </form>

        </>

    )
    
}

export default SForm