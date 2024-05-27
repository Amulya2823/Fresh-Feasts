import { HiOutlineArrowTopRightOnSquare } from "react-icons/hi2";

const details = {
  name: 'Amulya Reddy',
  bio: 'Frontend Developer',
  contact: {
    email: 'amulyareddy58@gmail.com',
    github: 'https://github.com/Amulya2823',
    linkedin: 'https://www.linkedin.com/in/amulya-reddy23/',
    twitter: 'https://x.com/Amulya2823',
  },
};

const Contact = () => {
  return (
    <div className=' w-1/2 m-auto p-40 text-2xl'>
      <h1 className='text-4xl my-4 font-bold'>Contact Me</h1>
      <div>
        <h2 className='text-2xl font-semibold'>Hi 👋, I'm {details.name} 👩‍💻</h2>
        <p className='text-2xl'>{details.bio}</p>

        <div className='my-4 space-y-2'>
          <h3 className='text-lg font-semibold'>Connect with me</h3>
          <p className='flex flex-wrap items-center gap-2'>
            <span className='font-semibold'>Gmail: </span>
            <a href={details.contact.email} className='flex items-center gap-1'>
              {details.contact.email}
            </a>
          </p>
          <p className='flex flex-wrap items-center gap-2'>
            <span className='font-semibold'>Github: </span>{' '}
            <a
              href={details.contact.github}
              className='flex items-center gap-1'
            >
              {details.contact.github}
              <HiOutlineArrowTopRightOnSquare className='w-4 h-4' />
            </a>
          </p>
          <p className='flex flex-wrap items-center gap-2'>
            <span className='font-semibold'>Linkedin: </span>{' '}
            <a
              href={details.contact.linkedin}
              className='flex items-center gap-1'
            >
              {details.contact.linkedin}
              <HiOutlineArrowTopRightOnSquare className='w-4 h-4' />
             
            </a>
          </p>
          <p className='flex flex-wrap items-center gap-2'>
            <span className='font-semibold'>Twitter: </span>{' '}
            <a
              href={details.contact.twitter}
              className='flex items-center gap-1'
            >
              {details.contact.twitter}
              <HiOutlineArrowTopRightOnSquare className='w-4 h-4' />
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;