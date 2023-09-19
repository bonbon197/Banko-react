const Dashboard = ({account}) => {
    return(
      <>
      <section className="section is-large">
        <div className="card">

        <h2 className="subtitle">Hello {account.firstName}</h2>
        <h2 className="subtitle">Your current balance is {account.balance}</h2>
        <div className="container">
        </div>
        </div>
      </section>
      </>
    );
}

export default Dashboard;