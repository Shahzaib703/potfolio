import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
    let navigation = useNavigate();
        
    const goToContectPage =()=>{
        navigation("/Contact");

    }




  return (
    <div className="container home" style={{display:"flex",justifyContent:"space-between"}}>
      <section>
          <h3>Hi,</h3>
          <h3>I'm <span style={{color:"#ffc107"}}> Shahzaib</span>,</h3>

          <h3>Web and Android Developer,</h3>
          <p>JavaScript / React JS / Java Android / Firebase / BootStrap</p>


        <button type="button" onClick={goToContectPage} class="btn btn-outline-warning">
          Contect Me
        </button>
      </section>
      <section>
          <img className="ProfilePic" src="https://firebasestorage.googleapis.com/v0/b/massagingapp-4fa3c.appspot.com/o/profile.jpeg?alt=media&token=17176209-e103-4cc9-88a8-5409e787d58a"></img>
      </section>

    </div>
  );
};

export default Home;
