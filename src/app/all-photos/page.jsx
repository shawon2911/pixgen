import Photocard from '@/Components/Photocard';
import React from 'react';

const AllPhotosPage = async() => {
    const res = await fetch('https://pixgen-nu.vercel.app/data.json');
    const photos = await res.json();
    // console.log(data);
    return (
        <div className='my-5'>
           <h3 className='font-bold text-2xl my-4'>All Photos</h3>
           <div className='grid grid-cols-4 gap-10'>
            {
                photos.map(photo => <Photocard key={photo.id} photo={photo}></Photocard>)
            }
           </div>
        </div>
    );
};

export default AllPhotosPage;