import React, { ReactNode, createContext, useState } from "react";

interface Test {
  TestStr: string;
}
interface LoginDetails {
  isLoggedIn: boolean;
}
interface Data{
  myApps:Array<{ URL:string,
      title : string,
      useCount : number}>
  setMyApps:React.Dispatch<React.SetStateAction<Array<{ URL:string,
                                                          title : string,
                                                          useCount : number}>>>
    RecentS:Array<string>;
    setRecents:React.Dispatch<React.SetStateAction<Array<string>>>;
    
    MyTasks:Array<string>;
    AddTask:React.Dispatch<React.SetStateAction<Array<string>>>;
}
interface UUID{
  USER_UID : string;

  email:string;
  password:string;

  todos : Array<string>;

}
interface ContextTypeManger extends 
Test,
LoginDetails,
Data,
UUID
{}

interface ContextTypeMangerProps {
  children: ReactNode; // Fix the typo here
}

const GlobalContext = createContext<ContextTypeManger | undefined>(undefined);

const GlobalContextProvider: React.FC<ContextTypeMangerProps> = ({ children }) => {
  const TestStr = "Hello";

  const isLoggedIn = localStorage.getItem('logInStatus_') ? true : false;

  const Def  = [
    {"URL": "https://www.youtube.com/", "title": "youtube","useCount" : 0},
    {"URL": "https://mail.google.com/", "title": "Gmail","useCount" : 0},
    {"URL": "https://drive.google.com/", "title": "Drive","useCount" : 0},
    {"URL": "https://www.instagram.com/", "title": "instagram","useCount" : 0},
    {"URL": "https://dashboard.render.com/", "title": "Render","useCount" : 0},
    {"URL": "https://samvidha.iare.ac.in/", "title": "Samvidha","useCount" : 0},
    {"URL": "https://github.com/", "title": "Git Hub","useCount" : 0},
    {"URL": "https://chat.openai.com/", "title": "Chat GPT","useCount" : 0},
    {"URL": "https://fontawesome.com/", "title": "Fontawesome","useCount" : 0},
    {"URL": "https://cloud.mongodb.com/", "title": "Data Base","useCount" : 0},
    {"URL": "https://www.hotstar.com/", "title": "Hotstar","useCount" : 0},
    {"URL": "https://buildit.iare.ac.in/", "title": "Build IT","useCount" : 0},
    {"URL": "https://uiverse.io/", "title": "uiverse","useCount" : 0},
    {"URL": "https://codepen.io/", "title": "Code Pen","useCount" : 0},
    {"URL": "https://bard.google.com/", "title": "BRAD","useCount" : 0},
    {"URL": "https://twitter.com/", "title": "Twitter","useCount" : 0},
    {"URL": "https://www.facebook.com/", "title": "Facebook","useCount" : 0},
    {"URL": "https://teleporthq.io/", "title": "Teleport HQ","useCount" : 0},
    {"URL": "https://aniwatch.to/", "title": "Zoro","useCount" : 0},
    {"URL": "https://blog-it-ten.vercel.app/", "title": "Blog-IT","useCount" : 0},
    {"URL": "https://www.kaggle.com/", "title": "KAGGLE","useCount" : 0},
    {"URL": "https://www.codechef.com/", "title": "code chef","useCount" : 0},
    {"URL": "https://vercel.com/", "title": "vercel","useCount" : 0},
    {"URL": "https://smashkarts.io/", "title": "smashkarts","useCount" : 0},
    {"URL": "https://uiball.com/", "title": "Ui Ball","useCount" : 0},
    {"URL": "https://web.telegram.org/", "title": "Telegram","useCount" : 0},
    {"URL": "https://www.speedtest.net/", "title": "Ookla","useCount" : 0},
    {"URL": "https://leetcode.com/", "title": "leetcode","useCount" : 0},
    {"URL": "https://www.amazon.in/", "title": "Amazon","useCount" : 0},
    {"URL": "https://drive.google.com/drive/folders/1bODVssOlCYPQSkkW3pDxQ18Ux55lzVik?usp=sharing", "title": "Link","useCount" : 0},
    {"URL": "https://chat-room-kohl-pi.vercel.app/", "title": "My Chat","useCount" : 0},
    {"URL": "https://video-calling-web-rtc.vercel.app/", "title": "Pick","useCount" : 0},
    {"URL": "https://bankai4meet.vercel.app/", "title": "bankai4meet","useCount" : 0},
    {"URL": "https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/", "title": "DSA learn","useCount" : 0},
    {"URL": "https://rezzumy.vercel.app/", "title": "REzZUMY","useCount" : 0},
    {"URL": "https://discord.com/", "title": "Discord","useCount" : 0},
    {"URL": "https://turso.tech/app", "title": "Turso","useCount" : 0}
  ]
  const Stored = localStorage.getItem('MyPageData');

  const storedData = Stored ? JSON.parse(Stored) : {Bookmarks:Def};
  const [myApps,setMyApps] = useState(storedData.Bookmarks);

  const USER_UID = storedData.USER_UID;

  const email = storedData.email;
  const password = storedData.password;
  console.log(USER_UID)

  const todos = storedData.todos;
  const storedRec = Stored ? JSON.parse(Stored) : {Recents:[]};

  const [RecentS,setRecents] = useState<Array<string>>
            (storedRec.Recents);

  const storedTsks = Stored ? JSON.parse(Stored) : {todos:[]};
  const [MyTasks,AddTask] = useState<Array<string>>(
    // ["Upload PWO lab sheets","Book Train ticket","Mail PPT","Learn SQL"]
    storedTsks.todos
    )
  return (
    <GlobalContext.Provider
      value={{
        TestStr,
        isLoggedIn,
        myApps,
        setMyApps,
        USER_UID,
        email,password,
        todos,
        RecentS,setRecents,
        MyTasks,AddTask
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export { GlobalContext, GlobalContextProvider };
