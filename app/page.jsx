"use client";
import React, { useEffect, useState } from "react";

const Home = () => {
  const [activeTab, setActiveTab] = useState("google_drive");
  const [path, setPath] = useState("Google drive:/hello/init/artex/A.R.T.E.X/System/Database/local/Roaming/db.db")

  useEffect(() => {
    if (path) {
      path.split("/")[0] == "Google drive:" ? setActiveTab("google_drive") : ""
    }

    return () => { }
  }, [path])


  return (
    <>
      <div className="w-full h-[100dvh] overflow-hidden bg-[#fff] relative">
        <div className="rounded-[50%] bg-[#9cb6dd] absolute z-[0] top-[-65%] left-[40%] blur-[120px] flex justify-start items-center w-full aspect-square">
          <div className="w-[50%] h-[50%] rounded-[50%] bg-[#fff] flex items-center justify-center">
            <div className="w-[50%] h-[50%] bg-[#d3e2f2]"></div>
          </div>
        </div>
        <div className="rounded-[50%] bg-[#d3e2f2] absolute z-[0] top-[50%] left-[-50%] blur-[120px] w-full aspect-square"></div>

        <div className="absolute w-full h-full z-[99]">
          <div className="w-full h-full">
            <div className="w-full h-[60px] flex items-center gap-[20px] px-[25px] mt-[15px]">
              <div className="flex gap-[20px] items-center bg-[rgba(0,0,0,0.129)] p-[10px] rounded-[5px]">
                <img
                  className="cursor-pointer h-[24px] opacity-[60%] hover:opacity-[100%] aspect-square"
                  src="./assets/file_manager/left.png"
                  alt=""
                />
                <img
                  className="cursor-pointer h-[24px] opacity-[60%] hover:opacity-[100%] aspect-square"
                  src="./assets/file_manager/right.png"
                  alt=""
                />
                <img
                  className="cursor-pointer h-[24px] opacity-[60%] hover:opacity-[100%] aspect-square"
                  src="./assets/file_manager/reload.png"
                  alt=""
                />
              </div>
              <div className="gap-[20px] p-[10px] flex bg-[#b3a9eb3e] items-center rounded-[5px]">
                <img
                  className="cursor-pointer h-[24px] opacity-[60%] hover:opacity-[100%] aspect-square"
                  src="./assets/file_manager/createFile.png"
                  alt=""
                />
                <img
                  className="cursor-pointer h-[24px] opacity-[60%] hover:opacity-[100%] aspect-square"
                  src="./assets/file_manager/createFolder.png"
                  alt=""
                />
                <img
                  className="cursor-pointer h-[24px] opacity-[60%] hover:opacity-[100%] aspect-square"
                  src="./assets/file_manager/rename.png"
                  alt=""
                />
                <img
                  className="cursor-pointer h-[24px] opacity-[60%] hover:opacity-[100%] aspect-square"
                  src="./assets/file_manager/delete.png"
                  alt=""
                />
              </div>
              <div className="w-[calc(100%-694px)] h-[44px] rounded-[5px] bg-[rgba(0,0,0,0.126)] p-10px">
                <div className="w-full h-full p-[10px] px-[20px] text-[rgba(0,0,0,0.64)]">
                  <div className="w-full h-full flex items-center gap-[10px] overflow-hidden overflow-x-auto">
                    {
                      path.split("/").map((pt, index) => (
                        <React.Fragment key={index}>
                          <span className="hover:text-[rgba(0,0,0,1)] hover:px-[10px] rounded-lg hover:bg-[#b3a9eb53] text-nowrap font-[400] text-[14px] ">{pt}</span>
                          {index < path.split("/").length - 1 ? <img
                            className="h-[10px] aspect-square opacity-[64%]"
                            src="./assets/file_manager/forward.png"
                            alt=""
                          /> : ""}
                        </React.Fragment>
                      ))
                    }
                  </div>
                </div>
              </div>
              <div className="h-[44px] w-[350px] border-[1px] border-solid border-[rgba(0,0,0,0.126)] bg-transparent flex justify-center items-center px-[10px]">
                <input
                  type="text"
                  className="outline-none w-full h-[24px] bg-transparent rounded-[5px] placeholder:text-[rgba(0,0,0,0.519)] text-[rgba(0,0,0,0.519)]"
                  placeholder="Enter file name"
                />
              </div>
            </div>

            {/* file manager starts here */}

            <div className="flex w-full h-[calc(100%-75px)]">
              {/* sidebar starts here */}
              <div className="w-[230px] h-full flex flex-col gap-[20px] p-[25px]">
                <div className="w-full flex flex-col gap-[10px]">
                  <h3>Drives</h3>
                  <ul className="w-full flex flex-col gap-[10px] max-h-[500px] overflow-scroll">
                    <li
                      className={`flex min-h-[36px] items-center p-[10px] gap-[10px] rounded-[5px] cursor-pointer overflow-hidden relative`}
                      style={{
                        background: activeTab === "google_drive" ? "#d3e2f2" : "rgba(0,0,0,0.126)",
                      }}
                    >
                      <img
                        className="h-[20px] aspect-square"
                        src="./assets/file_manager/drive.png"
                        alt="Google Drive"
                      />
                      <p className="text-[13px] leading-[16px] font-[200]">Google drive</p>
                      <div
                        className="absolute top-0 left-0 w-[5px] h-full bg-[#9cb6dd]"
                        style={{
                          display: activeTab === "google_drive" ? "block" : "none",
                        }}
                      ></div>
                    </li>
                  </ul>
                </div>
                <div className="w-full aspect-square border-dotted border-[2px] border-[#rgba(0,0,0,0.526)] rounded-[5px] px-[10px] flex flex-col justify-evenly">
                  <div className="w-full flex justify-center items-center">
                    <img
                      className="w-[50px] aspect-square"
                      src="./assets/file_manager/uploadfile.png"
                      alt=""
                    />
                  </div>
                  <div className="w-full text-center">
                    <p>Drop your files here.</p>
                  </div>
                  <div className="w-full">
                    <div className="w-full py-[7px] text-center bg-[#9cb6dd]">
                      <p>Select files</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* sidebar ends here */}
              {/* manager starts here */}
              <div className="w-[calc(100%-230px)] h-full p-[25px]">
                <ul role="list" className="p-6 h-full overflow-x-hidden overflow-y-auto">
                  <li className="flex py-4 first:pt-0 last:pb-0 last:border-0 border-b-[1px] border-solid border-[rgb(29,23,15,0.126)] items-center w-full last:h-[calc(44px+1rem)] first:h-[calc(44px+1rem)] h-[calc(44px+2rem)] hover:bg-[#b3a9eb53] hover:px-[20px] rounded-[5px]">
                    <p className="text-3xl">...</p>
                  </li>
                  <li className="flex py-4 first:pt-0 last:pb-0 last:border-0 border-b-[1px] border-solid border-[rgb(29,23,15,0.126)] items-center w-full last:h-[calc(44px+1rem)] first:h-[calc(44px+1rem)] h-[calc(44px+2rem)]">
                    <div className="w-[30px] h-full flex items-center">
                      <img src="/assets/file_manager/folder.png" className="w-full aspect-square" alt="" />
                    </div>
                    <div className="w-[calc(100%-162px)] px-[20px] h-full flex justify-center items-center text-xl tracking-normal">
                      <p className="whitespace-nowrap text-ellipsis overflow-hidden">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur adipisci cupiditate accusantium soluta eveniet! Blanditiis dignissimos deleniti nam praesentium, placeat, porro est doloribus adipisci voluptas numquam fugiat error, dolorem in.</p>
                    </div>
                    <div className="gap-[20px] w-[132px] h-full p-[10px] flex bg-[#b3a9eb3e] items-center rounded-[5px]">
                      <img
                        className="cursor-pointer h-[24px] opacity-[60%] hover:opacity-[100%] aspect-square"
                        src="./assets/file_manager/download.png"
                        alt=""
                      />
                      <img
                        className="cursor-pointer h-[24px] opacity-[60%] hover:opacity-[100%] aspect-square"
                        src="./assets/file_manager/rename.png"
                        alt=""
                      />
                      <img
                        className="cursor-pointer h-[24px] opacity-[60%] hover:opacity-[100%] aspect-square"
                        src="./assets/file_manager/delete.png"
                        alt=""
                      />
                    </div>
                  </li>
                </ul>
              </div>
              {/* manager ends here */}
            </div>

            {/* file manager ends here */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
