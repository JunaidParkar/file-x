"use client"

import React, { useEffect, useState, useRef, act } from 'react'
import CustomCursor from "codereducer/cursor"
import Link from 'next/link'

const Home = () => {

  const parentRef = useRef(null);
  const childRef = useRef(null);
  const cursorRef = useRef(null)

  const [childPosition, setChildPosition] = useState({ x: 0, y: 0 });
  const [passwordType, setPasswordType] = useState("password")
  const [passwordFocus, setPasswordFocus] = useState(false)
  const [action, setAction] = useState("login")

  function handleMouseMove(event) {

    let sw = document.documentElement.clientWidth
    let sh = document.documentElement.clientHeight

    let cw = childRef.current.clientWidth
    let ch = childRef.current.clientHeight

    let pw = parentRef.current.clientWidth
    let ph = parentRef.current.clientHeight

    let maxX = ((pw - cw) / pw) * 100
    let maxY = ((ph - ch) / ph) * 100

    let swp = (event.clientX / sw) * 100
    let shp = (event.clientY / sh) * 100

    let x = swp - (((cw / 2) / pw) * 100)
    let y = shp - (((ch / 2) / ph) * 100)

    setChildPosition({ x: x > maxX ? maxX : x, y: y > maxY ? maxY : y })
  }


  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove);

    let cc = new CustomCursor(cursorRef.current)
    cc.getCursor()

    return () => {
      cc ? cc.revert() : ""
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <>
      <div ref={cursorRef}></div>
      <div className='w-full h-full flex justify-center items-center'>
        <div className='w-max h-max'>
          <div className='relative'>
            <div className='relative w-[225px] h-[225px] bg-[#fff] rounded-[100%] mx-auto shadow-panda-face z-[2]'>
              <div className='flex justify-center items-end gap-[80px] absolute top-[40px] w-full h-[calc(50%-30px)] overflow-hidden'>
                <div className='relative w-[60px] h-[80px] bottom-[0px] left-[25px] rotate-[220deg] rounded-panda-eye-shade bg-[#000]'>
                  <div className='w-[40px] h-[40px] bg-[#fff] rounded-[100%] absolute top-[10px] left-[5px]'>
                    <div className='w-full h-full relative rounded-[50%] rotate-[-220deg]' ref={parentRef}>
                      <div className={`w-[18px] h-[18px] bg-[#000] rounded-[50%] absolute`} style={{ top: `${childPosition.y}%`, left: `${childPosition.x}%` }} ref={childRef}></div>
                    </div>
                  </div>
                </div>
                <div className='relative w-[60px] h-[80px] bottom-[0px] right-[25px] rotate-[140deg] rounded-panda-eye-shade bg-[#000]'>
                  <div className='w-[40px] h-[40px] bg-[#fff] rounded-[100%] absolute top-[10px] right-[5px]'>
                    <div className='w-full h-full relative rounded-[50%] rotate-[-140deg]'>
                      <div className={`w-[18px] h-[18px] bg-[#000] rounded-[50%] absolute`} style={{ top: `${childPosition.y}%`, left: `${childPosition.x}%` }}></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='flex justify-center items-start absolute bottom-0 w-full h-[calc(50%-20px)]'>
                <div className='h-[20px] w-[35px] bottom-[40px] rounded-panda-nose rotate-[15deg] bg-[#000]'></div>
              </div>
            </div>
            <div className='absolute w-[80px] h-[80px] bg-[#000] z-[0] border-[10px] border-[#fff] left-[-10px] top-[-15px] rounded-[100%]'></div>
            <div className='absolute w-[80px] h-[80px] bg-[#000] z-[0] border-[10px] border-[#fff] right-[-10px] top-[-15px] rounded-[100%]'></div>
          </div>
          <div className="bg-[#fff] rounded-panda-body w-[275px] shadow-panda-body relative z-[4]" style={{height: action == "login" ? "310px" : "340px"}}>

            {/* form here */}

            <form className='absolute w-[450px] bg-[#fff] left-[50%] translate-x-[-50%] duration-100' style={{ bottom: passwordFocus && passwordType == "password" ? "120px" : "50px", height: action == "login" ? "345px" : "390px"}}>
              <div className='w-full h-full flex flex-col justify-start gap-[20px] text-center p-[30px] relative'>
                <div className='absolute w-[40px] left-[-20px] top-[50%] translate-y-[-50%]'>
                  <div className='w-full h-[30px] rounded-[50px] shadow-panda-hand bg-[#000]'></div>
                  <div className='w-full h-[30px] rounded-[50px] shadow-panda-hand bg-[#000] mt-[-10px]'></div>
                  <div className='w-full h-[30px] rounded-[50px] shadow-panda-hand bg-[#000] mt-[-10px]'></div>
                </div>
                <div className='absolute w-[40px] right-[-20px] top-[50%] translate-y-[-50%]'>
                  <div className='w-full h-[30px] rounded-[50px] shadow-panda-hand bg-[#000]'></div>
                  <div className='w-full h-[30px] rounded-[50px] shadow-panda-hand bg-[#000] mt-[-10px]'></div>
                  <div className='w-full h-[30px] rounded-[50px] shadow-panda-hand bg-[#000] mt-[-10px]'></div>
                </div>
                <h3 className='text-2xl font-bold'>{action == "login" ? "Login to file-x" : "Sign-up"}</h3>
                <div className='w-full bg-[rgba(0,0,0,.2)] rounded-[25px] py-[5px]'>
                  <input type="text" placeholder='Enter your E-Mail' className='bg-transparent outline-none w-full px-[20px] py-[5px] placeholder:text-[rgba(0,0,0,.5)]' />
                </div>
                <div className='w-full bg-[rgba(0,0,0,.2)] rounded-[25px] py-[5px] flex items-center pr-[25px] relative'>
                  <input type={passwordType} placeholder='Enter your E-Mail' onBlur={() => setPasswordFocus(false)} onFocus={(e) => setPasswordFocus(true)} className='bg-transparent outline-none w-[calc(100%-50px)] pl-[20px] py-[5px] placeholder:text-[rgba(0,0,0,.5)]' />
                  <p className='w-[50px] overflow-hidden text-end cursor-pointer' onClick={() => setPasswordType(passwordType == "password" ? "text" : "password")}>{passwordType == "password" ? "show" : "hide"}</p>
                  {action == "login" ? <Link href='#' className='absolute top-[calc(100%+10px)] right-0 text-sm'>Forgot password?</Link> : ""}
                </div>
                <div className='w-full bg-[rgba(0,0,0,.2)] rounded-[25px] py-[5px] flex items-center pr-[25px]' style={{display: action == "login" ? "none" : "flex"}}>
                  <input type={passwordType} placeholder='Enter your E-Mail' onBlur={() => setPasswordFocus(false)} onFocus={(e) => setPasswordFocus(true)} className='bg-transparent outline-none w-[calc(100%-50px)] pl-[20px] py-[5px] placeholder:text-[rgba(0,0,0,.5)]' />
                  <p className='w-[50px] overflow-hidden text-end cursor-pointer' onClick={() => setPasswordType(passwordType == "password" ? "text" : "password")}>{passwordType == "password" ? "show" : "hide"}</p>
                </div>
                <div className='w-full flex items-center justify-between' style={{marginTop: action == "login" ? "15px" : 0}}>
                  <button type="submit" className='w-[calc(50%-15px)] h-full bg-[#000] text-[#fff] py-[10px] rounded-[25px]'>{action == "login" ? "Log In" : "Register"}</button>
                  <input type='button' value={action == "login" ? "sign-up" : "Login"} className='w-[calc(50%-15px)] h-full py-[10px] cursor-pointer' onClick={e => {e.preventDefault; setAction(action == "login" ? "signup" : "login")}}></input>
                </div>
              </div>
            </form>

            {/* form ends */}

          </div>
          <div className='flex justify-between items-center relative w-full h-[120px] top-[-120px] z-[5]'>
            <div className='bg-[#000] shadow-panda-foot rounded-panda-foot w-[82px] h-[120px]'></div>
            <div className='bg-[#000] shadow-panda-foot rounded-panda-foot w-[82px] h-[120px]'></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home