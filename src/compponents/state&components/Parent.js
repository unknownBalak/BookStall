import React, { useState } from "react";
import DisplayChild from "./DisplayChild";
import ButtonChild from "./ButtonChild";
function Parent() {
  const hello = "Say Hello, Welocome to React props/state";
  const [toggle, isToggle] = useState(false);
  return (
    <div>
      {toggle ? <DisplayChild hello={hello} /> : null}
      <ButtonChild onclick={() => isToggle(!toggle)} />
    </div>
  );
}

export default Parent;
