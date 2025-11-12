import "./App.css";
import UserForm from "./component/UserForm";
import UserProvider from "./component/UserProvider";
import SampleContext from "./component/SampleContext";

function App() {
  return (
    <>
      <UserProvider>
        <UserForm />
        <SampleContext />
      </UserProvider>
    </>
  );
}

export default App;
