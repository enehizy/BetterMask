import Body from './Body';
import Button from './Button';
import ShadowContainer from './ShadowContainer';
import WelcomeText from './WelcomeText';
import {useRouter} from 'next/router';
export default function Login(){
 const router=useRouter();
 return(
   <Body>
    <ShadowContainer>
        <div className="text-center space-y-10 ">
           <WelcomeText/>
        </div>
       
         <div className="text-center pt-32 pb-4">
           <Button text="Get Started" color="blue" onClick={()=>{router.push('/create')}}/>
         </div>
    </ShadowContainer>
       
        
      
    
    
    

  
   </Body>
 )
}