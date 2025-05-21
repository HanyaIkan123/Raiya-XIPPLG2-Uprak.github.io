const Card = ({title, body, id}) => {
    return ( 
        <div className=" w-full h-full bg-slate-200 text-black p-5 hover:border border-gray-700 rounded-2xl gap-3 flex flex-col">
    
            <p className="border-2 flex justify-center items-center w-full h-50 rounded-2xl">{id}</p>
            <h1 className="font-bold text-[20px]">{title}</h1>
            <p className="font-light text-slate-500">{body}</p>
        </div>

     );
}
 
export default Card;