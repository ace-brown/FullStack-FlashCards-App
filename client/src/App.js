import { useEffect, React } from "react";
import { uesDispatch } from "react-redux";
import Posts from "./components/Body/Posts/Posts";
import Navbar from "./components/Navbar/Navbar";
import Body from "./components/Body/Body";
import "./index.css";
import { useEffect } from "react";

const App = () => {
  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

  return (
    <div>
      <Navbar />
      <Body />
    </div>
  );
};

export default App;
