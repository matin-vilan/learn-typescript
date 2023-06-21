import "./App.css";
import Button from "./components/Button";
import Container from "./components/Container";
import Greet from "./components/Greet";
import Heading from "./components/Heading";
import Input from "./components/Input";
import Oscar from "./components/Oscar";
import Person from "./components/Person";
import PersonList from "./components/PersonList";
import Status from "./components/Status";
import Counter from "./components/state/Counter";
import { ThemeContextProvider } from "./components/context/ThemeContext";
import Box from "./components/context/Box";
import { UserContextProvider } from "./components/context/UserContext";
import User from "./components/context/User";
import Private from "./components/auth/Private";
import Profile from "./components/auth/Profile";
import List from "./components/generics/List";
import RandomNumber from "./components/RandomNumber";
import CustomButton from "./components/html/Button";

function App() {
  const personName = {
    first: "Bruce",
    last: "wayne",
  };
  const nameList = [
    {
      first: "Bruce",
      last: "wayne",
    },
    {
      first: "Clark",
      last: "Kent",
    },
    {
      first: "Princess",
      last: "Diana ",
    },
  ];
  return (
    <ThemeContextProvider>
      <UserContextProvider>
        <div className="App">
          {/* <Greet name={"ali"} messageCount={10} isLoggedIn={false} />
              <Person name={personName} />
              <PersonList names={nameList} />
              <Status status="loading" />
              <Heading>Placeholder Text</Heading>
              <Oscar>
              <Heading>Oscar goes to Leonardo Dicaprio!</Heading>
              </Oscar>
              <Greet name="Vishwas" isLoggedIn={true} />
              <Input value="" handleChange={(event) => console.log(event)} />
              <Button
              handleClick={(event, id) => {
              console.log("Button Clicked", event, id);
              }}
              />
              <Container styles={{ border: "1px solid black", padding: "1rem" }} /> 
              <Counter />
              <Box /> 
              <User /> 
              <Private isLoggedIn={true} component={Profile} /> 
               <List
              items={[
              { id: 1, first: "matin", last: "vilan" },
              { id: 2, first: "ali", last: "vilan" },
              { id: 3, first: "amin", last: "vilan" },
            ]}
            onClick={(items) => console.log(items)}
          /> 
          <RandomNumber value={10} isNegetive />*/}
          <CustomButton
            onClick={() => console.log("clicked")}
            variant="primary"
          >
            Primary Button
            {/* <div>PimaryButton</div> */}
          </CustomButton>
        </div>
      </UserContextProvider>
    </ThemeContextProvider>
  );
}

export default App;
