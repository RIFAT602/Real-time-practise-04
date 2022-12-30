
import Withcounter from './Withcounter';
const HoverCounter= (props)=> {
  const{count,incrementCount}=props
    

   return (
     <div>
         <h1 onMouseOver={incrementCount}>button was clickked {count} times</h1>
     </div>
   )
 
}
export default Withcounter(HoverCounter);