import "./App.css";

import { Button } from "react-bootstrap";
import style from "./Custom.module.css";
import Prop from "./Prop";
import User from "./User";
import Usestate from "./Usestate";
import GetInput from "./GetInput";
import HideShow from "./HideShow";
import ClassComp from "./ClassComp";
import Form from "./Form";
import PropsAsFunction from "./PropsAsFunction";
import Useeffect from "./Useeffect";
import ArrayWithList from "./ArrayWithList";
import ListWithBootstrap from "./ListWithBootstrap";
import ReuseComponent from "./ReuseComponent";
import SendDataChildToParent from "./SendDataChildToParent";
import UseMemo from "./UseMemo";
import UseRef from "./UseRef";
import ControlledComp from "./ControlledComp";
import Hoc from "./Hoc";
import Routing from "./Routing";
import DynamicRouting from "./DynamicRouting";
import APIget from "./APIget";
import APIpost from "./APIpost";
import APIdelete from "./APIdelete";

function App() {
  // if this function is require for more component
  function propAsFunction() {
    alert("hello from prop as function");
  }

  const img1 = "https://pisum.photos/300/300";

  return (
    <div>
      <h1 className="primery"> hello world</h1>
      <h1 style={{ backgroundColor: "brown", color: "crimson" }}>
        hello world
      </h1>
      <h1 className={style.success}>hello world</h1>
      <img src={img1} alt="randomimg" />
      <br />

      {/* this is for react bootstrap */}
      <Button variant="primary">Primary</Button>
      <br />
      <br />

      <User />
      <Usestate />
      <ClassComp name="props in class comp" />
      <Prop name="props" />
      <GetInput />
      <HideShow />
      <Form />
      <PropsAsFunction data={propAsFunction} />
      <Useeffect />
      <ArrayWithList />
      <ListWithBootstrap />
      <ReuseComponent />
      <SendDataChildToParent />
      <UseMemo />
      <UseRef />
      <ControlledComp />
      <Hoc />
      <Routing />
      <DynamicRouting />
      <APIget />
      <APIpost />
      <APIdelete />
    </div>
  );
}

export default App;
