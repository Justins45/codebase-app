import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { invoke } from "@tauri-apps/api/tauri";
import "./assets/ResetCss.css"
import "./App.css";

function App() {
  const [greetMsg, setGreetMsg] = useState("");
  const [name, setName] = useState("");

  async function greet() {
    // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
    setGreetMsg(await invoke("greet", { name }));
  }

  return (

    <div>
      
      {/* Nav Start */}
      <div className="nav-bar">
        {/* Nav Open and Close */}
        <div className="sidebar-toggle">
          <p>&larr;</p>
        </div> 
        <div className="nav-group">
          <div>
            <div className="nav-group-heading">
              <p className="nav-group-title">Projects</p>
              <div className="nav-group-chevron">
                ^
              </div>
            </div>
            <div className="divider" />
          </div>
          <div className="nav-items">
            <p>+ Add New Project</p>
          </div>
        </div>
        <div className="nav-group">
          <div>
          <div className="nav-group-heading">
              <p className="nav-group-title">Todo</p>
              <div className="nav-group-chevron">
                ^
              </div>
            </div>
            <div className="divider" />
          </div>
          <div className="nav-items">
            <p>+ Add Todo items</p>
          </div>
        </div>
      </div>
      {/* Nav End */}
    </div>

    // Tauri -> Rust function talking
    /* 
      <form
        className="row"
        onSubmit={(e) => {
          e.preventDefault();
          greet();
        }}
      >
        <input
          id="greet-input"
          onChange={(e) => setName(e.currentTarget.value)}
          placeholder="Enter a name..."
        />
        <button type="submit">Greet</button>
      </form>

      <p>{greetMsg}</p>
     */
  );
}

export default App;
