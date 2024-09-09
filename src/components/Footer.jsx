import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';

const Footer = () => {

    return (
        <div className='bg-[#131313] py-16 md:py-28 px-6 md:px-20 lg:px-40 text-white'>
          <div className='flex justify-center md:justify-start'>
            <FacebookIcon className='text-white mx-2 hover:text-red-800 cursor-pointer' />
            <InstagramIcon className='text-white mx-2 hover:text-red-800 cursor-pointer' />
            <TwitterIcon className='text-white mx-2 hover:text-red-800 cursor-pointer' />
            <YouTubeIcon className='text-white mx-2 hover:text-red-800 cursor-pointer' />
          </div>
      
          <div className='flex flex-wrap justify-center md:justify-start text-white py-10 text-sm'>
            <div className='flex flex-col mr-6 md:mr-12 mb-4 md:mb-0'>
              <div className='hover:underline py-1 cursor-pointer'>Audio Description</div>
              <div className='hover:underline py-1 cursor-pointer'>Investor Relations</div>
              <div className='hover:underline py-1 cursor-pointer'>Legal Notices</div>
            </div>
      
            <div className='flex flex-col mr-6 md:mr-12 mb-4 md:mb-0'>
              <div className='hover:underline py-1 cursor-pointer'>Help Center</div>
              <div className='hover:underline py-1 cursor-pointer'>Jobs</div>
              <div className='hover:underline py-1 cursor-pointer'>Cookie Preferences</div>
            </div>
      
            <div className='flex flex-col mr-6 md:mr-12 mb-4 md:mb-0'>
              <div className='hover:underline py-1 cursor-pointer'>Gift Cards</div>
              <div className='hover:underline py-1 cursor-pointer'>Terms of Use</div>
              <div className='hover:underline py-1 cursor-pointer'>Corporate Information</div>
            </div>
      
            <div className='flex flex-col mr-6 md:mr-12 mb-4 md:mb-0'>
              <div className='hover:underline py-1 cursor-pointer'>Media Center</div>
              <div className='hover:underline py-1 cursor-pointer'>Privacy</div>
              <div className='hover:underline py-1 cursor-pointer'>Contact Us</div>
            </div>
          </div>
          <div className='text-center md:text-left hover:underline py-1 cursor-pointer'>
            © 2023-2024 Netflix.
          </div>
        </div>
      );
      
}

export default Footer