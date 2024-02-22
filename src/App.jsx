import "./i18n";
import "@mantine/core/styles.css";
import "@mantine/dates/styles.css";
import { MantineProvider } from "@mantine/core";
import AppsModules from "./modules/AppsModules";
import UserProvier from "./context/UserContext";

function App() {
  return (
    <MantineProvider defaultColorScheme="light">
      <UserProvier>
        <AppsModules />
      </UserProvier>
    </MantineProvider>
  );
}

export default App;
