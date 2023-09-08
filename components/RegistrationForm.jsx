const RegistrationForm = () => {

    return(
        <>
            <form>
                <input type="text" placeholder="Name" />
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password" />
                <input type="password" placeholder="Confirm Password" />
                <button type="submit">Register</button>
            </form>
        </>
    )
}

export default RegistrationForm