import Navbar from "./pages/Navbar";
import FirstPage from "./pages/firstPage"
function App() {
  return (
    <>
      <div className="flex flex-col h-screen overflow-hidden">
        <Navbar />
        <FirstPage />
      </div>
    </>
  );
}
export default App;
