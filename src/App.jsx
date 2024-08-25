import Card from "./components/Card"

export default function App() {

const [quotes, setQuotes] = React.useState([])
  
  React.useEffect(()=>{
    fetch("link")
    .then(res => {
      if(!res.ok) console.log("Network Error")
      return res.json()
    })
    .then(data => console.log(data))
    .catch(error => {
    console.error('Request error:', error);
  })
  }, [])


  return (
    <main>

    </main>
  )
}