import React, {useEffect} from 'react'
import Loading from "../components/Loading/Loading";
import {useSelector} from "react-redux";

function Character() {
    const array = useSelector((state) => state.getId.arrDATA)
    const {name,gender,origin, status,image,species,location} = array[0]



  return (
    <div className='container flex max-w-4xl max-[600px]:flex-wrap justify-center'>
        <div className='w-1/2'>
            <img  src={image} alt="" className='w-full'/>
        </div>
        <div >
            <ul className='flex sm:flex-wrap:flex-col'>
                <div>
                    <li className='m-10'>
                        <h5 className='font-bold text-2xl max-[600px]:text-base'>Name:</h5>
                        <span>{name}</span>
                    </li>
                    <li className='m-10'>
                        <h5 className='font-bold text-2xl max-[600px]:text-base'>Status:</h5>
                        <span>{status}</span>
                    </li>
                    <li className='m-10'>
                        <h5 className='font-bold text-2xl max-[600px]:text-base'>Species:</h5>
                        <span>{species}</span>
                    </li>
                </div>
                <div>
                    <li className='m-10'>
                        <h5 className='font-bold text-2xl max-[600px]:text-base'>Origin:</h5>
                        <span>{origin.name}</span>
                    </li>
                    <li className='m-10'>
                        <h5 className='font-bold text-2xl max-[600px]:text-base'>Location:</h5>
                        <span>{location.name}</span>
                    </li>
                    <li className='m-10'>
                        <h5 className='font-bold text-2xl max-[600px]:text-base'>Gender:</h5>
                        <span>{gender}</span>
                    </li>
                </div>
            </ul>
        </div>
    </div>
  )
}

export default Character