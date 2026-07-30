
import Card from "./components/Card"

const App = () => {
  const name = [
    {
      userName : "Asraful Naim",
      profession : "Developer"
    },
    {
      userName : "Maruf P",
      profession : "Team Lead"
    },
    {
      userName : "Akash Paul",
      profession : "Network Engineer"
    }
  ]
  return (

    <div className="parent">
      {name.map((person,index)=>(
        <Card
          key = {index}
          userName={person.userName}
          profession={person.profession}
        />
      ))}
    </div>
  )
}

export default App