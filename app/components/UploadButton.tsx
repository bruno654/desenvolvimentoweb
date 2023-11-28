"use client"

import { url } from "inspector";
import { CldUploadButton } from "next-cloudinary";
import { Router } from "next/router";

export default function UploadButton(){
    function handleUpload(result:any, widget:any){
        

        widget.close()
    }
    return(
        <CldUploadButton
        onUpload={handleUpload}
        uploadPreset="qkywvbz8"
        />
    )
}