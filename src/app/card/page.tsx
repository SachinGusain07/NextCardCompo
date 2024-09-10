import React from 'react';
import Image from 'next/image';
import sac from '../../public/Images/sac.jpeg'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const MyCardComponent = () => {
  return (
    <div className='flex'>
        
    <Card className = 'w-80  m-11 flex rounded-sm' >
        <div>
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card Description</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Card Content</p>
      </CardContent>
      <CardFooter>
        <p>Card Footer</p>
      </CardFooter>
    </div>
    <div className=' w-52'> 
        <Image src ={sac} alt= 'userimage' className= 'w-full h-full rounded-r-sm'/>

    </div>

    </Card>
    
    
    </div>
  );
};

export default MyCardComponent;
