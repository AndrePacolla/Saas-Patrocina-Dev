"use client"


import { Button } from "@/components/ui/button";
import { createUsername } from "../_actions/create-username";

export function UrlPreview(){

  async function submitAction(formData: FormData){
    const username = formData.get("username") as string;
   if(username === "") return ;

   const response = await createUsername({username})
  }



  return(
   <div className=" flex flex-1 items-center p-2  text-gray-100">
         <form className="flex flex-1 flex-col items-start md:items-center md:flex-row gap-3"
         action={submitAction}
         >


          <div className=" flex  items-center  justify-center w-full ">
            <p className="">
              {process.env.NEXT_PUBLIC_HOST_URL}/creator/
            </p>
            <input type="text"
              className="flex-1 outline-none border h-9 border-gray-300 bg-gray-50 text-black rounded-md px-1 "
              placeholder="Digite seu userName..."
              name="username"
              />
          </div>

         <Button 
            type="submit"
            className="w-full  h-9 bg-blue-600 hover:bg-blue-700 md:w-fit text-white rounded-md cursor-pointer "
            >

            Salvar
        
        </Button>

        </form>
   </div>
    )
}  