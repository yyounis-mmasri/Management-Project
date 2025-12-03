import { BrowserRouter } from "react-router-dom";
import AppRoute from "./routes/AppRoute";
import { AuthProvider } from "./context/AuthContext";

const App = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <AppRoute />
      </AuthProvider>
    </BrowserRouter>
  );
};

export default App;
