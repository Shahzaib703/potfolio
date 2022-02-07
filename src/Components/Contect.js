import React, { useState } from "react";
import {getDatabase,ref,set ,child,push} from "firebase/database"


const Contect = () => {
  const [fname, setfName] = useState("");
  const [lname, setlName] = useState("");
  const [massage, setmassage] = useState("");
  const [state, setFrom] = useState("Pakistan");

  const Submit = async(e)=>{
    e.preventDefault();


    if (fname === "" || lname === "" || massage === "" || state === "") {
    alert(fname+"|"+lname+"|"+massage+"|"+state)
      alert("Please fill all the fields...");
      return;
    }

    let FirstName = fname;
    let LastName = lname
    let Msg = massage;
    let Country = state;


    let db = getDatabase();
    // Get a key for a new Msg.
    const id = push(child(ref(db), "/Massages")).key;
    
    set(ref(db, "Massages/" + id), {
      FirstName,
      LastName,
      Msg,
      Country
    });

    setfName("");
    setlName("");
    setmassage("");
  }

  return (
    <>
      <h2 style={{ textAlign: "center", padding: "10px" }}>
        Contact The Developer
      </h2>

      <div class="container Contectcontainer">
        <form onSubmit={Submit}>
          <label for="fname">First Name</label>
          <input
            type="text"
            name="fname"
            value={fname}
            placeholder="Your name.."
            onChange={(e) => {
              setfName(e.target.value);
            }}
          />

          <label for="lname">Last Name</label>
          <input
            value={lname}
            type="text"
            name="lname"
            placeholder="Your last name.."
            onChange={(e) => {
              setlName(e.target.value);
            }}
          />

          <label for="country">Country</label>
          <select
            id="country"
            name="country"
            onChange={(e) => {
              setFrom(e.target.value);
            }}
          >
            <option value="Pakistan">Pakistan</option>
            <option value="India">India</option>
            <option value="Afganistan">Afganistan</option>
            <option value="australia">Australia</option>
            <option value="canada">Canada</option>
            <option value="usa">USA</option>
          </select>

          <label for="subject">Subject</label>
          <textarea
            id="subject"
            value={massage}
            name="subject"
            onChange={(e) => setmassage(e.target.value)}
            placeholder="Write something.."
            style={{ height: "200px" }}
          ></textarea>

          <input
            className="btn btn-outline-warning"
            type="submit"
            value="Submit"
          />
        </form>
      </div>
    </>
  );
};

export default Contect;
