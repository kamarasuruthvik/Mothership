

function App() {

  return (
    <>
    <div className="container">
      <img src="./src/assets/profile.jpg" />
      <h2>Ruthvik Kamarasu</h2>
      <p><span>Hey There <span className="animate-shake hi">👋</span> !</span> I'm 6'6 dev who is figuring out life. <span>🎓 IIIT-BBSR'22 | ⚙️ Gupshup</span></p>
  
      <div className="button-group">
        <button><a href="https://twitter.com/blazingruthvik" target="_blank">Twitter  🐦</a></button>
        <button><a href="https://www.linkedin.com/in/ruthvik-kamarasu-984a23166/?originalSubdomain=in" target="_blank">LinkedIn 🖨️</a></button>
        <button><a href="https://hashnode.com/@axelblaze0510" target="_blank">Blog ✒️</a></button>
      </div>
  
      <p style={{"margin":"20px 0px"}}>Attaching my extras</p>
      <div className="button-group">
        <button><a href="https://www.instagram.com/5_ruthvik_5/" target="_blank">Instagram 📱</a></button>
        <button><a href="https://www.goodreads.com/user/show/146673436-ruthvik-kamarasu" target="_blank">Good Reads  📚 </a></button>
      </div>
  
    </div>
    </>
  )
}

export default App
