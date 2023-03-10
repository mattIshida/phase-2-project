import React, { useEffect, useState } from 'react';
import ParkListItem from './ParkListItem';


function ParkList({ parks, onClickSave, userData }){


    // if(parks!==[] && parks !== undefined) {
    //     //console.log(parks)
    //     console.log(parks.reduce((acc, elem)=>{
    //         if(!(acc.includes(elem.designation))) acc.push(elem.designation)
    //     }, ['starter']))
    // }

    const [counter, setCounter] = useState(0)
    const [scrollPosition, setScrollPosition] = useState(0);
    
    const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollPosition(position);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const atBottom = scrollPosition >= (document.body.clientHeight-window.innerHeight) * .95

    useEffect(() => {
        if(atBottom) setCounter(prev => prev+1)
    }, [atBottom])


    const parkItems = parks.slice(0, (counter)*24).map(park => <ParkListItem key={park['id']} park={park} onClickSave={onClickSave} userData={userData}/> )

    return(
        <div className="parkContainer">
            {parkItems}
        </div>
    )
}

export default ParkList;