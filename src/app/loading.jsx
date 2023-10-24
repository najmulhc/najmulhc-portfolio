import logo from '../assets/logo.svg'
import Image from 'next/image'
const loading = () => {
  return (
 
      <div className='w-screen h-screen flex items-center justify-center'>
       <Image className='fill-red-600 animate-bounce' src={logo} alt="Logo screen" width={128} height={128} />
      </div>
  );
};

export default loading;
 