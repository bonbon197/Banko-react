import { Button } from 'react-bulma-components'

const RegistrationForm = () => {

    return(
        <>
        <div className="field">
            <div className="control has-icons-left has-icons-right">
                <input className="input" type="text" placeholder="Email Address" />
                <span className="icon is-small is-left">
                    <i className="fas fa-envelope"></i>
                </span>
                <span className="icon is-small is-right">
                    <i className="fas fa-check"></i>
                </span>

            </div>
        </div>

        <div className="field">
            <div className="control has-icons-left has-icons-right">
                <input className="input" type="password" placeholder="Password" />
                <span className="icon is-small is-left">
                    <i className="fas fa-lock"></i>
                </span>

                <span className="icon is-small is-right">
                    <i className="fas fa-eye"></i>
                </span>

            </div>
        </div>

        <Button color="primary">Log In</Button>
        </>
    )
}

export default RegistrationForm