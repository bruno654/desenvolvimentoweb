"use client"
import { CldUploadButton } from "next-cloudinary";
import {  useRouter } from "next/navigation";

export default function UploadButton(){
    const router = useRouter()
    
    function handleUpload(result:any, widget:any){

       router.push(`?url=${result?.info?.url}`)

        widget.close()
    }
    return(
        <CldUploadButton
        onUpload={handleUpload}
        uploadPreset="qkywvbz8"
        />
    )
}


