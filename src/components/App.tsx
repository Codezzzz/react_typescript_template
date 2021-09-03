import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getRootRequest } from "store/modules/root";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: getRootRequest.type, payload: "" });
  });

  return <div className="App">ddd</div>;
}

export default App;
