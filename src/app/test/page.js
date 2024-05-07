import GoBack from "@/components/GoBack"
import Main from "@/components/ApiTest/Main"


export default function Test(){
    
    return (
        <div className="flex flex-col gap-5">
          <div className="">
            <GoBack />
            </div>
            <Main />
        </div>
    )
}