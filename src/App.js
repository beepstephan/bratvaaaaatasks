import { useEffect, useState } from "react";
import { Header } from "./components/Header";
import { AddTask } from "./components/AddTask";
import { ShowTask } from "./components/ShowTask";
import { NoMobile } from "./components/NoMobile";
import './App.css';
 
 
function App() {
  const [tasklist, setTasklist] = useState(() => {
    const savedTasklist = localStorage.getItem("tasklist");
    return savedTasklist ? JSON.parse(savedTasklist) : [];
  });
  const [task, setTask] = useState({});
 
  useEffect(() => {
    localStorage.setItem("tasklist", JSON.stringify(tasklist))
  }, [tasklist]);
  
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;
    
    if (/android/i.test(userAgent) || /iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
      setIsMobile(true);
    }
  }, []);

  if (isMobile) {
    return <NoMobile />;
  }

  return (
    <div className="App">
      <Header />
      <AddTask 
        tasklist={tasklist} 
        setTasklist={setTasklist} 
        task={task}
        setTask={setTask}
      />
      <ShowTask 
        tasklist={tasklist} 
        setTasklist={setTasklist}
        task={task}
        setTask={setTask}  
      />
    </div>
  );
}
 
export default App; 