import Button from "./components/Button/Button.tsx";
import ButtonGroup from "./components/ButtonGroup/ButtonGroup.tsx";

function App() {
  const extras =[{
  "btnLink":"https://www.instagram.com/5_ruthvik_5/",
  "btnLabel":"Instagram 📱"
  },
  {
  "btnLink":"https://www.goodreads.com/user/show/146673436-ruthvik-kamarasu",
  "btnLabel":"Good Reads  📚" 
  }];

  const primary = [
    {
      "btnLink":"https://twitter.com/blazingruthvik",
      "btnLabel":"Twitter  🐦"  
    },
    {
      "btnLink":"https://www.linkedin.com/in/ruthvik-kamarasu-984a23166/?originalSubdomain=in",
      "btnLabel":"LinkedIn 🖨️"  
    },
    {
      "btnLink":"https://hashnode.com/@axelblaze0510",
      "btnLabel":"Blog ✒️"  
    }
  ]
  return (
    <>
    <div className="container">
      <img src="./src/assets/profile.jpg" />
      <h2>Ruthvik Kamarasu</h2>
      <p><span>Hey There <span className="animate-shake hi">👋</span> !</span> I'm 6'6 dev who is figuring out life. <span>🎓 IIIT-BBSR'22 | ⚙️ Gupshup</span></p>
      <ButtonGroup ButtonList={primary}/>
      <p style={{"margin":"20px 0px"}}>Attaching my extras</p>
      <ButtonGroup ButtonList={extras} />
    </div>
    </>
  )
}

export default App
