"use client";
import { useEffect, useState } from "react";
import Xo from "./xo";
const winer=[
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6]
]
export default function Home() {
  const [xxoo,setXxoo]=useState(["","","","","","","","",""]);
  const [ox,setOx]=useState("oo");
  const [winr,setWinr]=useState("");
  useEffect(()=>{
    winer.forEach((compo)=>{
      let r=compo.every((c)=>xxoo[c]==="o");
      let re=compo.every((c)=>xxoo[c]==="x");
      if(r){
        setWinr("circle Winer !!");
      }else if(re) {
        setWinr("Cross Winer !!");

      }
    })
  },[xxoo])
  useEffect(()=>{
    if(xxoo.every((d)=>d!="" && !winr)){
      setWinr("Draw !!");
    }
  },[xxoo,winr])
  return (
    
        <div className="div1">
            <div className="div2">
              {xxoo.map((x,index)=>
              <Xo key={index}
                  winr={winr}
                  xxoo={xxoo}
                  index={index}
                  setXxoo={setXxoo}
                  ox={ox}
                  setOx={setOx}/>
              )}
            </div>
            <div>{winr}</div>
            {!winr&&<div>{`it's now ${ox === "oo"?"circle":"cross"} turn`}</div>}
        </div>
        
       
  );
}
