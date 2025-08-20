import { Dispatch, SetStateAction } from "react";

type cellProps={
    xxoo : string[];
    setXxoo:Dispatch<SetStateAction<string[]>>;
    ox:string;
    setOx:Dispatch<SetStateAction<string>>;
    index:number;
    winr:string;
}

function Xo({xxoo,setXxoo,ox,index,setOx,winr}:cellProps){
    
    function handlexo(){
        if(winr){
        return ;
    }
    if(xxoo[index]===""){
        let e = [...xxoo];
        if(ox==="oo"){
            e[index] = "o";
            setOx("xx");
        }
        else{
             e[index] = "x";
             setOx("oo");
        }
    setXxoo(e);
    
    }
    }
    return(
       <div className="div3" onClick={handlexo}>
         <div className={xxoo[index] === "o" ? "oo" : xxoo[index] === "x" ? "xx" : ""}>
        {xxoo[index]}</div>
       </div>
       
    );
}
export default Xo;