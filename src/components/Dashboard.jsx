const Dashboard = ({username}) => {
    return(
        <section className="section is-large">
        <div className="card">

        <h2 className="subtitle">Hello {username}</h2>
        </div>
      </section>
  
    );
}

export default Dashboard;