import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./assets/css/index.css";
import { UserProvider } from "./Context/User/UserContext.tsx";
import { JobProvider } from "./Context/Job/jobContext.tsx";
import { JobSearchProvider } from "./Context/Job/jobSearchContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <UserProvider>
    <JobProvider>
      <JobSearchProvider>
        <App />
      </JobSearchProvider>
    </JobProvider>
  </UserProvider>
);
