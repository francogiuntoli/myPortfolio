import React from "react";
import bubbleBot from "../animation/bubbleMid.json";
import LottieBubbleBot from "./LottieBubbleBot";

export default function Bubble (){
    
    return (
      <div>
        <LottieBubbleBot animation={bubbleBot} width={800} height={800} />
      </div>
    );
  }
