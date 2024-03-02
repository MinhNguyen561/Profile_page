import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import Photo from './man.png'
import 'react-toastify/dist/ReactToastify.css';

const Profile = () => {
  const [avatar, setAvatar] = useState(Photo);
    const notify = () => {
      toast.success('Your Avatar Has Been Updated !!', {
        position: 'top-right',
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      })}

      const handleFileChange = (e) => {
        const file = e.target.files[0];
    
        if (file) {
          setAvatar(URL.createObjectURL(file));
        }
      }

    let fileInputRef;


    return (
      <>
      <div className='mx-auto flex flex-initial mr-150'>
      <ToastContainer /> 
        <div id='profile'
        className='w-4/12 h-150 mx-auto 
        flex flex-col items-center justify-center text-neutral-500 dropzone'
        >
         
          <p className='text-center text-3xl'>Profile</p>
          <input 
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              style={{ display: 'none' }}
              ref={(input) => (fileInputRef = input)}/>
          <img src={avatar} className='w-36 rounded-full mt-12 mb-8' alt='avatar'></img>
          <p className='text-center text-neutral-950 font-bold text-xl'>Khusab Akhmedov</p>
          <p className='text-center text-lg'>Web-designer</p>

          <div className='border-2 flex mt-6 mb-4'>
            <p className='flex-1 text-center mr-3'> <span className='text-xl text-neutral-950 font-bold'>21</span> <br></br> Shots</p>
            <p className='flex-1 text-center border-black border-l border-r pr-2 pl-2'>
              <span className='text-xl text-neutral-950 font-bold'>238</span> <br></br> Followers</p>
            <p className='flex-1 text-center ml-3'>
              <span className='text-xl text-neutral-950 font-bold'>101</span><br></br> Following</p>
          </div>

          <button type='submit' className='mt-4 mb-4 text-xl pb-1 pl-6 pr-6 rounded text-neutral-100
          bg-6b6b47 hover:bg-5c5c3d' onClick={() => fileInputRef && fileInputRef.click()}>Upload new avatar</button>
          <p className='text-center mb-4 text-xl'>Uzbekistan, Tashkent</p>
          <p className='text-center mb-2'>I'm web designer. I work in programs like figma, <br></br>
            adobe photoshop, adobe illustrator
          </p>
    
        </div>        
        <div className='flex justify-center'>
        <div id='info' className='w-1/2 mx-auto flex-1 mt-7'>
          <label className='text-neutral-950 font-bold text-base absolute'>BASIC INFO</label>
          <button className='float-right text-center rounded text-neutral-100 border-6b6b47 border-2
          bg-6b6b47 hover:bg-5c5c3d px-4 py-1 text-sm' onClick={notify}>SAVE</button>
          <button className='float-right text-center mr-4 rounded text-neutral-500 border-6b6b47 border-2
          bg-white hover:bg-5c5c3d px-2 py-1 text-sm'>CANCEL</button>
          
          <div className='flex mt-16'>
            <div className='flex-1'>
              <label className='text-sm'>FIRST NAME</label>
              <input className='border border-gray-300 rounded-md w-11/12 mt-2 mb-2'></input>
            </div>
            <div className='flex-1'>
              <label className='text-sm'>LAST NAME</label>
              <input className='border border-gray-300 rounded-md w-full mt-2 mb-2'></input>
            </div>
          </div>
          <label className='text-sm mt-5'>TITTLE</label>
          <input className='border border-gray-300 rounded-md w-full mt-2 mb-2'></input>
          <label className='text-sm mt-5 text-neutral-900'>EMAIL</label>
          <input className='border border-gray-300 rounded-md w-full mt-2'></input>
          <div className='border-b border-gray-300'>
            <p className='text-neutral-950 font-bold text-base mt-10 mb-5'>ABOUT ME</p>
          </div>
          
          <div className='mt-7 border border-gray-300 h-40'>
          <p className='pl-2 pt-2 text-neutral-500 text-xs'>I'm web designer. I work in programs like figma, 
            adobe photoshop, adobe illustrator</p>
          </div>
          </div>
          
        </div>
        <div className='h-120 w-2/6 mx-auto flex'></div>
      </div>
      </>
    )
}

export default Profile;