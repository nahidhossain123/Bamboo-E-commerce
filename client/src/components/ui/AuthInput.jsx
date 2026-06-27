export default function AuthInput({
    label,
    type="text",
    placeholder,
    ...props
}){

return(

<div className="space-y-2">

<label className="text-sm font-medium text-gray-700">
{label}
</label>

<input
type={type}
placeholder={placeholder}
className="
w-full
rounded-xl
border
border-green-200
px-4
py-3
outline-none
transition
focus:ring-4
focus:ring-green-100
focus:border-green-600
"
{...props}
/>

</div>

)

}