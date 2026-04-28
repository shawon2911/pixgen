import { Chip, Separator } from "@heroui/react";
import Image from "next/image";
import { FaHeart } from "react-icons/fa";
import { IoDownloadSharp } from "react-icons/io5";

const PhotoDetails = async ({ params }) => {
  const { id } = await params;
  const res = await fetch("https://pixgen-nu.vercel.app/data.json");
  const photos = await res.json();
  // console.log(photos);
  // console.log(id);
  const photo = photos.find((p) => p.id == id);
  // console.log(photo);
  return (
    <div className="flex  items-center gap-x-16 border mt-30 mb-40 p-10 rounded-xl">
      <div className="justify-start">
        <Image
          src={photo.imageUrl}
          height={500}
          width={500}
          alt={photo.title}
          className="rounded-xl"
        />
      </div>
      <Separator orientation="vertical" />

      <div className="space-y-4">
        <h3 className="font-bold text-xl 0 ">
          Title : <span className="font-medium ">{photo.title}</span>
        </h3>
        <h3 className="font-bold text-xl ">
          Prompt : <span className="font-medium">{photo.prompt}</span>
        </h3>
        <h3 className="font-bold text-xl ">
          Category : <span className="font-medium">{photo.category}</span>
        </h3>
        <h3 className="font-bold text-xl ">
          Model : <span className="font-medium">{photo.model}</span>
        </h3>
        <div>
          <span className="font-bold text-xl ">
            Tags :
            {photo.tags.map((tag, ind) => (
              <Chip key={ind} className="mx-1" size="lg">
                {tag}
              </Chip>
            ))}
          </span>
        </div>
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <p>
              <FaHeart />
            </p>
            <p>{photo.likes}</p>
          </div>

          <Separator orientation="vertical" />

          <div className="flex items-center gap-2">
            <p>
              <IoDownloadSharp />
            </p>
            <p>Downloads</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoDetails;
