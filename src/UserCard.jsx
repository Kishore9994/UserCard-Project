import PropTypes from "prop-types"

  const userData=[
    {
      name:"Kishore",
      city:"Chennai",
      description:"Front-end developer",
      skills:["Ui/Ux","Front-end developer","Css","JavaScrpit","Html","ReacJs"],
      online:true,
      profile:"file.jpg",

    },
    {
      name:"Balan",
      city:"Chennai",
      description:"Front-end developer",
      skills:["Ui/Ux","Front-end developer","Css","JavaScrpit","Html","ReacJs"],
      online:false,
      profile:"bala.jpg",

    },
    {
      name:"Sowndhar R",
      city:"Chennai",
      description:"Front-end developer",
      skills:["Ui/Ux","Front-end developer","Css","JavaScrpit","Html","ReacJs"],
      online:false,
      profile:"sowndhar.jpg",

    },
  ]

  function User(props) {
    
  return (

    <div className="card-container">

      {/* Conditional Redering */}
      <span className={props.online ? "pro online" : "pro offline"}> {props.online ? "ONLINE" : "OFFLINE"} </span> 

      <img src={props.profile} alt="user" className="img"/>

      <h3>{props.name}</h3>
      <h3>{props.city}</h3>

      <p>{props.description}</p>

      <div className="buttons">

        <button className="primary ">Message</button>
        <button className="primary outline">Following</button>

      </div>

      <div className="skills">

        <h6>Skills</h6>

        <ul>
          {/* using Map function */}
          {props.skills.map((skill,index) => (
            <li key={index}> {skill} </li>
          ))}
        </ul>

      </div>
    </div>
      
    
  )
}

export const UserCard = () => {
  return (
  <>
  {/* Using Map function and Multiple Rederings are run chesam */}
  
  {userData.map((user,index) => (
    <User key={index} 
    name={user.name}
    city={user.city}
    description={user.description}
    online={user.online}
    profile={user.profile}
    skills={user.skills}/>
    ))}
  </>
  );
};


{/* <User name="Rishi"
     city="Chennai"
     description="Full-Stock Devloper"
     skills={["Ui/Ux","Front-end developer","Css","JavaScrpit","Html","ReacJs"]}
     online={true}
     profile="file.jpg"/> */}

    

     User.propTypes={
      name:PropTypes.string.isRequired,
      city:PropTypes.string.isRequired,
      description:PropTypes.string.isRequired,
      skills:PropTypes.arrayOf(PropTypes.string).isRequired,
      online:PropTypes.bool.isRequired,
      profile:PropTypes.string.isRequired,

     }