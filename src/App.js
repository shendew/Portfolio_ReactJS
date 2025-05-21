import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "./HomePage";
import { Confirm } from "./components/Confirm/Confirm";
import { Rate } from "./components/Rate/Rate";
import TermsAndConditions from "./components/TermsConditionsPolicies/TermsAndConditions";
import PrivacyPolicy from "./components/TermsConditionsPolicies/PrivacyPolicy";
import RefundPolicy from "./components/TermsConditionsPolicies/RefundPolicy";

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      <Routes>

      <Route path="/" Component={HomePage}/>
      <Route path="/confirm" Component={Confirm}/>
      <Route path="/rate" Component={Rate}/>
      <Route path="/terms" Component={TermsAndConditions}/>
      <Route path="/privacy" Component={PrivacyPolicy}/>
      <Route path="/refundpolicy" Component={RefundPolicy}/>
      <Route path="/order_successnpm" Component={RefundPolicy}/>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
