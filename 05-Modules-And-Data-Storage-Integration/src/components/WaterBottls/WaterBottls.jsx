import React, { use } from 'react';

const WaterBottls = ({waterBottlesPromise}) => {
    const waterBottles = use(waterBottlesPromise);
    console.log(waterBottles)
    return (
        <div>
            
        </div>
    );
};

export default WaterBottls;