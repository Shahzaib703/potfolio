import React from "react";

const Projects = () => {
  const Projects = [
    {
      Title: "TodoList",
      ProjectType: "Web site(React Js)",
      Image:
        "https://firebasestorage.googleapis.com/v0/b/massagingapp-4fa3c.appspot.com/o/ProjectsImages%2FTodoImg.PNG?alt=media&token=be3345bf-2314-41b7-b6fb-05583f986719",
      Discription:
        "i created it to put in the potfolio and to find job.  i created this web app in react js",
      Url: "https://shahzaib703.github.io/TodoList/",
    },
    {
      Title: "Chat Application",
      ProjectType: "Web site(React Js)",
      Image:
        "https://firebasestorage.googleapis.com/v0/b/massagingapp-4fa3c.appspot.com/o/ProjectsImages%2FChatAppImg.PNG?alt=media&token=21281253-5152-40de-8146-d9aa5a109d6d",
      Discription:
        "i created this to put in the potfolio. its the complete chat app with all new featuers like Seen,Sent massage /Online,offline and etc. I created this web app in react js and for backend. i used firebase. i used Email and Password Authentication in it.",
      Url: "https://shahzaib703.github.io/ChatApp/",
    },
    {
      Title: "Roll Dice",
      ProjectType: "Web site(React Js)",
      Image:
        "https://firebasestorage.googleapis.com/v0/b/massagingapp-4fa3c.appspot.com/o/ProjectsImages%2FRollDiceImg.PNG?alt=media&token=d1b03307-af8b-4e28-af82-4d0be250b079",
      Discription:
        "Android App Android AppAndroid AppAndroid AppAndroid AppAndroid AppAndroid AppAndroid AppAndroid AppAndroid AppAndroid AppAndroid App",
      Url: "https://shahzaib703.github.io/rollDice/",
    },

    {
      Title: "Calculator",
      ProjectType: "Web site(React Js)",
      Image:
        "https://firebasestorage.googleapis.com/v0/b/massagingapp-4fa3c.appspot.com/o/ProjectsImages%2FCalculatorImg.PNG?alt=media&token=29f86566-8374-4981-a3ef-36d7d2b4b85f",
      Discription: "A Simple Calculator Developed in react js",
      Url: "https://shahzaib703.github.io/calculator/",
    },

    {
      Title: "School Buss Mannagement",
      ProjectType: "Android Application",
      Image:
        "https://firebasestorage.googleapis.com/v0/b/massagingapp-4fa3c.appspot.com/o/ProjectsImages%2FWhatsApp%20Image%202022-02-07%20at%207.14.44%20PM.jpeg?alt=media&token=61a54412-1f3b-4982-ba40-94be9ce2c53d",
      Discription:
        "i created this application on the demond of my client. There is a problem that when buss(school duty buss which take the children to there houses) reaches on the stop..the parents some time are late and sometimes if the buss is late parents are so worried about their children.      This android application is the solution to this problem.   There are TWO app:   (1):the admin penal   (2):for Busses...The idea of this application is to inform each and every movement of buss to parents...in this way, both of them don't need to worry.and the application will work totally independently.More Info as pr the request.",
      Url: "https://youtu.be/YHrA9uwt54s",
    },

    {
      Title: "The Music App",
      ProjectType: "Android Application",
      Image: "/The_Music_frame.png",
      Discription:
        "i created this application for client(Usman). The client is completely satisfied and he promised me to give projects in future.",
      Url: "https://www.youtube.com/watch?v=_ItkTIhEepc",
    },
    {
      Title: "Data Access",
      ProjectType: "Android Application",
      Image:
        "https://firebasestorage.googleapis.com/v0/b/massagingapp-4fa3c.appspot.com/o/ProjectsImages%2FWhatsApp%20Image%202022-02-07%20at%207.14.44%20PM%20(1).jpeg?alt=media&token=fc546162-8fb3-4375-80f2-3db24061ec8e",
      Discription:
        "I created this applicaiton on the demond of my client. there are two application: One is admin penal Other One is for the user the admin penal is responsible to insert data against a uniqe key and the other one applicaiton is to get and show data (Though the barcode or the uniqe key ). An Other  very unique feature is also in this app even a person who don't have smart phone he can also get that data through Sending a sms to a phone number and that phone number will replay him or her the data without even a single second delay.",
      Url: "https://www.youtube.com/watch?v=W3vaH2EBmiI",
    },

    {
      Title: "PCLU School",
      ProjectType: "Android Application",
      Image:
        "https://firebasestorage.googleapis.com/v0/b/massagingapp-4fa3c.appspot.com/o/ProjectsImages%2FPCLUMain.jpeg?alt=media&token=dde94bd0-eb4b-400d-b37c-4f8d931c01b7",
      Discription:
        "i created this android app for one of my clients for his school information. There are two apps: one is the  Admin penel the other one is for Users i Used Firebase for backend and JAVA & XML for the development of front end",
      Url: "https://youtu.be/y5eDi6Av4DI",
    },
    {
      Title: "Sao Browser",
      ProjectType: "Android Application",
      Image:
        "https://firebasestorage.googleapis.com/v0/b/massagingapp-4fa3c.appspot.com/o/ProjectsImages%2Fsao.jpeg?alt=media&token=2d5ad92b-dcf2-44e6-8666-d6b7a81285e9",
      Discription: "I created this applicaiton on the demond of my client.",
      Url: "https://youtu.be/NTWKAlVxE8E",
    },
  ];

  return (
    <div className="container-flex">
      <h2 style={{ marginTop: "20px", paddingLeft:"20px" }}>Projects:</h2>

      {Projects.map((item, index) => {
        return (
          <div key={index}>
            <Card data={item} />
            <hr
              size="5"
              width="90%"
              style={{ color: "#ffc107", marginRight: "5%", marginLeft: "5%" }}
            />
          </div>
        );
      })}
    </div>
  );
};

function Card(props) {
  return (
    <div
      className="mx-5"
      style={{
        display: "flex",
        marginTop: "20px",
        justifyContent: "space-between",
      }}
    >
      <section style={{ margin: "50px" }}>
        <h3>{props.data.Title}</h3>
        <h5>{props.data.ProjectType}</h5>

        <p className="card-text">{props.data.Discription}</p>

        <button
          type="button"
          onClick={() => window.open(props.data.Url)}
          class="btn btn-primary"
        >
          visit
        </button>
      </section>
      <section style={{ margin: "50px" }}>
        <img style={{ width: "300px", border:"1px solid white" }} src={props.data.Image} alt="Image"/>
      </section>
    </div>
  );
}

export default Projects;
