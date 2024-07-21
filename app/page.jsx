"use client"
import React from 'react'

const Home = () => {
  return (
    <>
      <div className='w-full h-[100dvh] overflow-hidden bg-[#fff] relative'>
        <div className='rounded-[50%] bg-[#9cb6dd] absolute z-[0] top-[-65%] left-[40%] blur-[120px] flex justify-start items-center' style={{ width: document.body.clientWidth + "px", height: document.body.clientWidth + "px" }}>
          <div className='w-[50%] h-[50%] rounded-[50%] bg-[#fff] flex items-center justify-center'>
            <div className='w-[50%] h-[50%] bg-[#d3e2f2]'></div>
          </div>
        </div>
        <div className='rounded-[50%] bg-[#d3e2f2] absolute z-[0] top-[50%] left-[-50%] blur-[120px]' style={{ width: document.body.clientWidth + "px", height: document.body.clientWidth + "px" }}></div>

        <div className="w-full h-full absolute z-[9] top-0 left-0">
          {/* header starts */}
          <div className='w-full gap-[15px] flex justify-between py-[0] px-[20px] mt-[10px] overflow-hidden 480:flex-wrap'>

            <div id="controls" className='mx-0 my-[10px] flex gap-[20px] items-center bg-[rgba(255,255,255,0.129)] p-[10px] rounded-[5px]'>
              <div id="left">
                <img src="./assets/file_manager/left.png" alt="" srcset="" />
              </div>
              <div id="right">
                <img src="./assets/file_manager/right.png" alt="" srcset="" />
              </div>
              <div id="reload">
                <img src="./assets/file_manager/reload.png" alt="" srcset="" />
              </div>
              <div id="hamburger">
                <i className="ri-menu-4-line" style={{color: "white"}}></i>
              </div>
            </div>

            <div id="actions" className='mx-0 my-[10px]'>
              <div id="createFolder" className="action">
                <img src="./assets/file_manager/folder.png" alt="" srcset="" />
              </div>
              <div id="createFile" className="action">
                <img src="./assets/file_manager/file.png" alt="" srcset="" />
              </div>
              <div id="renameFile" className="action">
                <img src="./assets/file_manager/rename.png" alt="" srcset="" />
              </div>
              <div id="select" className="action">
                <img src="./assets/file_manager/select.png" alt="" srcset="" />
              </div>
              <div id="uploadFile" className="action">
                <img src="./assets/file_manager/upload.png" alt="" srcset="" />
              </div>
              <div id="deleteFile" className="action">
                <img src="./assets/file_manager/delete.png" alt="" srcset="" />
              </div>
            </div>

            <div id="navigator" className='mx-0 my-[10px]'>
              <div id="path" className="active">
                <span>C:</span>
                <img src="./assets/file_manager/forward.png" alt="" />
                <span>Home</span>
                <img src="./assets/file_manager/forward.png" alt="" />
                <span>Junaid</span>
              </div>
              <div id="pathInput" className="">
                <input type="text" name="" id="" placeholder="Enter directory path" />
              </div>
            </div>
            <div id="searchBar" className='mx-0 my-[10px]'>
              <input type="text" placeholder="Enter file or folder name" />
            </div>
          </div>

          <div id="fileManager">

            <div id="sidebar">
              <div id="drives" className="sub-sidebar">
                <ul className='list-none'>
                  <li heading>
                    <h3>Drives</h3>
                  </li>
                  <li clickAble root-path="A.R.T.E.X/home" className="active">
                    <img src="./assets/file_manager/cloud.png" alt="" />
                    <p>A.R.T.E.X</p>
                  </li>
                  <li clickable root-path="Google drive/home">
                    <img src="./assets/file_manager/drive.png" alt="" srcset="" />
                    <p>Google</p>
                  </li>
                </ul>
              </div>

              <div id="draganddrop" className="sub-sidebar">
                <ul className='list-none'>
                  <li Draganddrop>
                    <img src="./assets/file_manager/uploadfile.png" alt="" />
                    <p>drop your file here</p>

                    <label for="uploadfile">Select</label>
                    <input type="file" name="" id="uploadfile" />
                  </li>
                </ul>
              </div>

              <div id="banner" className="sub-sidebar">
                <ul className="banner">
                  <img src="./assets/file_manager/bannerposter.png" alt="" />
                  <span>
                    <h3>Sync your files</h3>
                    <p>Lorem ipsum dolor sit amet.</p>
                  </span>
                </ul>
              </div>

              <i id="close-sidebar" className="ri-close-line"></i>

            </div>

            <div id="system">
              <ul id="file-list">
                <li data-type="file" data-path="google/home">
                  <input type="checkbox" name="select-file" />
                  <span className="file-name">
                    <img src="./assets/file_manager/system-file.png" alt="" srcset="" />
                    <p>file.txt</p>
                  </span>
                  <div className="fileaction">
                    <img title="download" src="./assets/file_manager/download.png" alt="" srcset=""
                      id="download-btn" />
                    <img title="rename" src="./assets/file_manager/rename.png" alt="" srcset=""
                      id="rename-btn" />
                    <img title="delete" src="./assets/file_manager/delete.png" alt="" srcset=""
                      id="delete-btn" />
                  </div>
                </li>
                <li data-type="folder" data-path="google/home">
                  <input type="checkbox" name="select-file" />
                  <span className="folder-name">
                    <img src="./assets/file_manager/system-folder.png" alt="" srcset="" />
                    <p>Dream</p>
                  </span>
                  <div></div>
                  <div className="fileaction">
                    <img title="rename" src="./assets/file_manager/rename.png" alt="" srcset=""
                      id="rename-btn" />
                    <img title="delete" src="./assets/file_manager/delete.png" alt="" srcset=""
                      id="delete-btn" />
                  </div>
                </li>
                <li data-type="file" data-path="google/home">
                  <input type="checkbox" name="select-file" />
                  <span className="file-name">
                    <img src="./assets/file_manager/system-file.png" alt="" srcset="" />
                    <p>hola.txt</p>
                  </span>
                  <div className="fileaction">
                    <img title="download" src="./assets/file_manager/download.png" alt="" srcset=""
                      id="download-btn" />
                    <img title="rename" src="./assets/file_manager/rename.png" alt="" srcset=""
                      id="rename-btn" />
                    <img title="delete" src="./assets/file_manager/delete.png" alt="" srcset=""
                      id="delete-btn" />
                  </div>
                </li>
                <li data-type="folder" data-path="google/home">
                  <input type="checkbox" name="select-file" />
                  <span className="folder-name">
                    <img src="./assets/file_manager/system-folder.png" alt="" srcset="" />
                    <p>Mines</p>
                  </span>
                  <div></div>
                  <div className="fileaction">
                    <img src="./assets/file_manager/rename.png" alt="" srcset="" id="rename-btn" />
                    <img title="delete" src="./assets/file_manager/delete.png" alt="" srcset=""
                      id="delete-btn" />
                  </div>
                </li>
                <li data-type="file" data-path="google/home">
                  <input type="checkbox" name="select-file" />
                  <span className="file-name">
                    <img src="./assets/file_manager/system-file.png" alt="" srcset="" />
                    <p>passwords.txt</p>
                  </span>
                  <div className="fileaction">
                    <img title="download" src="./assets/file_manager/download.png" alt="" srcset=""
                      id="download-btn" />
                    <img title="rename" src="./assets/file_manager/rename.png" alt="" srcset=""
                      id="rename-btn" />
                    <img title="delete" src="./assets/file_manager/delete.png" alt="" srcset=""
                      id="delete-btn" />
                  </div>
                </li>
                <li data-type="folder" data-path="google/home">
                  <input type="checkbox" name="select-file" />
                  <span className="folder-name">
                    <img src="./assets/file_manager/system-folder.png" alt="" srcset="" />
                    <p>Frnds</p>
                  </span>
                  <div></div>
                  <div className="fileaction">
                    <img src="./assets/file_manager/rename.png" alt="" srcset="" id="rename-btn" />
                    <img title="delete" src="./assets/file_manager/delete.png" alt="" srcset=""
                      id="delete-btn" />
                  </div>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default Home