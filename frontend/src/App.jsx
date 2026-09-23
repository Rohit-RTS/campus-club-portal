import "./App.css";
import AppRoutes from "./routes/AppRoutes";
import { ClubsProvider } from "./context/ClubsContext";

function App() {
    return (
        <ClubsProvider>
            <AppRoutes />
        </ClubsProvider>
    );
}

export default App;