import { Card, Separator } from "@heroui/react";
import Image from "next/image";
import { FaHeart } from "react-icons/fa";
import { IoDownloadSharp } from "react-icons/io5";


const Photocard = ({photo}) => {
    // console.log(photo);
    return (
        <Card className="border rounded-xl">
            <div className="relative aspect-square w-full">
                <Image 
                    src={photo.imageUrl}
                    fill
                    alt={photo.title}
                    className="object-cover rounded-xl"
                />
            </div>
            <div>
                <h2 className="font-medium ">{photo.title}</h2>
            </div>
            <div className="flex items-center gap-6">
                <div className="flex items-center gap-2">
                    <p><FaHeart /></p>
                    <p>{photo.likes}</p>

                </div>
                
                <Separator orientation="vertical" />

                <div className="flex items-center gap-2">
                    <p><IoDownloadSharp /></p>
                    <p>Downloads</p>
                </div>
            </div>
        </Card>
    );
};

export default Photocard;