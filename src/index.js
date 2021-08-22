// import React from "react";
// import ReactDOM from "react-dom";
import ReactDOM from "./kreact/react-dom";

import "./index.css";

// class ClassComponent extends Component {
//   render() {
//     return (
//       <div className="border">
//         <p>{this.props.name}</p>
//       </div>
//     );
//   }
// }

function FunctionComponent(props) {
  return (
    <div className="border">
      <p>{props.name}</p>
    </div>
  );
}

const jsx = (
  <div className="border">
    <h1>全栈</h1>
    <a href="https://www.kaikeba.com/">kkb</a>
    <FunctionComponent name="函数" />
    {/* <ClassComponent name="class" /> */}
  </div>
);

// ReactDOM.render(jsx, document.getElementById("root"));
ReactDOM.createRoot(document.getElementById("root")).render(jsx);

// console.log("React", React.version); //sy-log
// 原生标签
// 文本节点
