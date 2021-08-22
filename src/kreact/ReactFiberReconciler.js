import createFiber from "./createFiber";
import {isArray, isStr, updateNode} from "./utils";

export function updateHostComponent(wip) {
  if (!wip.stateNode) {
    wip.stateNode = document.createElement(wip.type);
    updateNode(wip.stateNode, wip.props);
  }

  reconcileChildren(wip, wip.props.children);
}

export function updateFunctionComponent(wip) {
  const {type, props} = wip;
  const children = type(props);
  reconcileChildren(wip, children);
}

// 协调子节点
function reconcileChildren(returnFiber, children) {
  if (isStr(children)) {
    return;
  }

  const newChildren = isArray(children) ? children : [children];

  // 记录上个fiber
  let previousNewFiber = null;
  for (let i = 0; i < newChildren.length; i++) {
    const newChild = newChildren[i];

    const newFiber = createFiber(newChild, returnFiber);

    if (i === 0) {
      returnFiber.child = newFiber;
    } else {
      previousNewFiber.sibling = newFiber;
    }

    previousNewFiber = newFiber;
  }
}
