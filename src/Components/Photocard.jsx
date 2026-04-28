import { Button, Card, Chip, Separator } from "@heroui/react";
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
                     sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover rounded-xl"
                />
                <Chip className="absolute right-2 top-2 " size="sm">{photo.category}</Chip>
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
            <Button variant="outline" className={'w-full my-2'}>View Details</Button>
        </Card>
    );
};

export default Photocard;