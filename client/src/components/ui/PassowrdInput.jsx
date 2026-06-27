import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";

export default function PasswordInput(){

const [show,setShow]=useState(false);

return(

<div>

<label className="text-sm font-medium">
Password
</label>

<div className="relative mt-2">

<input
type={show?"text":"password"}
placeholder="Enter password"
className="w-full rounded-xl border border-green-200 px-4 py-3 pr-12 focus:ring-4 focus:ring-green-100 outline-none"
/>

<button
type="button"
onClick={()=>setShow(!show)}
className="absolute right-4 top-3.5"
>

{show?<EyeOff size={20}/>:<Eye size={20}/>}

</button>

</div>

</div>

)

}