import "./App.css"
function App({profile,title,price,username,location,description,status,isOnline}) {
  return (
    <>

        <div className="card">
          <div className="card-header">
            <img src={profile} alt="profile" height="100" width="100"/>
            <h1 className="card-title">{title}</h1>
            <h4 className="card-price">{price}</h4>
          </div>
          <div className="card-body">
            <h2 className="card-username">{username}</h2>
            <h3 className="card-location"><i className="fas fa-map-marker-alt"></i>{location}</h3>
            <h3 className="card-description">{description}</h3>
            <div className="btns">
              <button className="btn-outline">VIEW CV</button>
              <button className="btn-filled">MAKE OFFER</button>
            </div>
            <p className="card-status">
              {isOnline?(<>
                <span className="dot"></span>
                Online
              </>)
              :(status)}
            </p>
          </div>
        </div>        

    </>
  )
}
export default App