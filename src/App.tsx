import Button from "./components/Button/Button.tsx";

function App() {

  return (
    <>
    <div className="container">
      <img src="./src/assets/profile.jpg" />
      <h2>Ruthvik Kamarasu</h2>
      <p><span>Hey There <span className="animate-shake hi">👋</span> !</span> I'm 6'6 dev who is figuring out life. <span>🎓 IIIT-BBSR'22 | ⚙️ Gupshup</span></p>
  
      <div className="button-group">
        <Button
          btnLink="https://twitter.com/blazingruthvik"
          btnLabel="Twitter  🐦"  
        />
        <Button
          btnLink="https://www.linkedin.com/in/ruthvik-kamarasu-984a23166/?originalSubdomain=in"
          btnLabel="LinkedIn 🖨️"  
        />     
        <Button
          btnLink="https://hashnode.com/@axelblaze0510"
          btnLabel="Blog ✒️"  
        />
      </div>
  
      <p style={{"margin":"20px 0px"}}>Attaching my extras</p>
      <div className="button-group">
        <Button 
          btnLink="https://www.instagram.com/5_ruthvik_5/"
          btnLabel="Instagram 📱" 
        />
        <Button 
          btnLink="https://www.goodreads.com/user/show/146673436-ruthvik-kamarasu"
          btnLabel="Good Reads  📚" 
        />
      </div>
    </div>
    </>
  )
}

export default App
