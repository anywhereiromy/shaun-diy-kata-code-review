const reachDestination = (distance, speed) => {
 const timeToArrival = Math.ceil((distance/speed)*2)/2;
 return `I should be there in ${timeToArrival} hours`;
};
module.exports = reachDestination;
