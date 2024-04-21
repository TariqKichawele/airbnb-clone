import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { useCountries } from '../lib/getCountries';
import { Heart } from 'lucide-react';
import { AddToFavoriteButton, DeleteFromFavoriteButton } from './CreationSubmit';
import { DeleteFromFavorite, addToFavorite } from '../actions';

interface iAppProps {
    imagePath: string;
    description: string;
    location: string;
    price: number;
    userId: string | undefined
    isInFavoriteList: boolean;
    favoriteId: string;
    homeId: string;
    pathname: string;
}

const ListingCard = ({
    description,
    imagePath,
    location,
    price,
    userId,
    favoriteId,
    isInFavoriteList,
    homeId,
    pathname
}: iAppProps) => {
    const { getCountryByValue } = useCountries();
    const country = getCountryByValue(location);

  return (
    <div className='flex flex-col'>
        <div className='relative h-72'>
            <Image 
                src={`https://bjehpomukrxfrykdjpnh.supabase.co/storage/v1/object/public/airbnb-images/${imagePath}`} 
                alt='house-image' 
                fill 
                className='rounded-lg h-full object-cover mb-3'
            />

            {userId && (
                <div className='z-10 absolute top-2 right-2'>
                    {isInFavoriteList ? (
                        <form action={DeleteFromFavorite}>
                            <input type="hidden" name='favoriteId' value={favoriteId} />
                            <input type='hidden' name='userId' value={userId} />
                            <input type='hidden' name='pathname' value={pathname} />
                            <DeleteFromFavoriteButton />
                        </form>
                    ): (
                        <form action={addToFavorite}>
                            <input type='hidden' name='homeId' value={homeId} />
                            <input type="hidden" name='userId' value={userId} />
                            <input type="hidden" name='pathName' value={pathname} />
                            <AddToFavoriteButton />
                        </form>
                    )}
                </div>
            )}
        </div>
        <Link href={`/home/${homeId}`} className='mt-2'>
            <h3 className='font-medium'>
                {country?.flag} {country?.label} / {country?.region}
            </h3>
            <p className='text-muted-foreground text-sm line-clamp-2'>
                {description}
            </p>
            <p className='pt-2 text-muted-foreground'>
                <span>${price}</span> Night
            </p>
        </Link>
    </div>
  )
}

export default ListingCard