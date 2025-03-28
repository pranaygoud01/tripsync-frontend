import React from 'react';

const Gallery = () => {
    const data = [
        {
            url: "https://images.unsplash.com/photo-1615277512685-048facc78afa?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            url: "https://images.unsplash.com/photo-1541945876617-8026869043f2?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            url: "https://images.unsplash.com/photo-1604351888999-9ea0a2851e61?q=80&w=1972&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            url: "https://images.unsplash.com/photo-1524841943832-d2130e6ec264?q=80&w=1948&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            url: "https://images.unsplash.com/photo-1524841268495-3921a3fb80c3?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        
    ];

    return (
        <div className="flex justify-between items-center gap-5">
            {data.map((item, index) => (
                <div
                    key={index}
                    className={`w-full rounded-xl  overflow-hidden shadow-md ${
                        index % 2 === 0 ? 'h-[400px] max-lg:h-[200px]' : ' max-lg:h-[150px] h-[300px]'
                    } ${index>2&&'max-lg:hidden'}`}
                >
                    <img
                        src={item.url}
                        alt={`Gallery Image ${index}`}
                        className="w-full h-full object-cover hover:scale-110 duration-200"
                    />
                </div>
            ))}
        </div>
    );
};

export default Gallery;
