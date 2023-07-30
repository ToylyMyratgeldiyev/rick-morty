import React from 'react'
import img from '../img/i.jpeg'

function Item({data}) {
  return (
    <div key={data.id}>
        <div className="p-5 cursor-auto " >
                <div className="max-w-sm rounded overflow-hidden shadow-lg max-w-xs cursor-pointer" >
                    <img className="w-full " src={data.image} alt="Mountain" />
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2 text-center">{data.name}</div>
                        </div>
                </div>
            </div>
    </div>
  )
}

export default Item