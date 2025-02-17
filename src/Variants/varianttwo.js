export const fadeIn = (direction , delay) =>{
    return{
     hidden: {
         
         y: direction === 'left' ? 60 : direction === 'right' ? -40  : 0 ,
         x: direction === 'up' ? 60 : direction === 'down' ? -40  : 0 ,
     },
     show: {
         y: 0,
         x: 0,
         opacity: 5,
         transition: {
             type: 'tween',
             duration: 1.2,
             delay: delay,
             ease: [0.25 , 0.25 , 0.25 , 0.75],
         }
     }
    }
 }