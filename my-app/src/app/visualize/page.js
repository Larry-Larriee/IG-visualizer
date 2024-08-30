"use client";

import React, { useState, useEffect, useMemo } from "react";
import SpanLink from "../components/helper/SpanLink";
import Dropzone from "react-dropzone";

import PublicProfile from "../components/visualizer/PublicProfile";
import Activity from "../components/visualizer/Activity";
import LoginInfo from "../components/visualizer/LoginInfo";
import IGFeed from "../components/visualizer/IGFeed";
import AdInfo from "../components/visualizer/AdInfo";

import PubProfAside from "../components/visualizer-aside/PubProfAside";
import ActivityAside from "../components/visualizer-aside/ActivityAside";
import LogInfAside from "../components/visualizer-aside/LogInfAside";
import IGFeedAside from "../components/visualizer-aside/IGFeedAside";
import AdInfoAside from "../components/visualizer-aside/AdInfoAside";

export default function Page() {
  const [folder, setFolder] = useState([]);

  const convertedData = useMemo(() => {
    let updatedFolder = [];

    let media = [];
    let objects = [];

    folder.forEach((file) => {
      if (file.name.includes(".jpg") || file.name.includes(".png")) {
        media.push({ name: file.name, url: URL.createObjectURL(file) });
      } else if (file.name.includes(".json")) {
        const fileReader = new FileReader();

        fileReader.onload = (e) => {
          const file = e.target.result;
          const fileObject = JSON.parse(file);

          objects.push(fileObject);
        };

        fileReader.readAsText(file);
      }
    });

    updatedFolder.push(media);
    updatedFolder.push(objects);

    return updatedFolder;
  }, [folder]);

  const [section, setSection] = useState("Public Profile");
  const [subSection, setSubSection] = useState("Public Profile");

  const changeSection = (sectionButton) => {
    setSection(sectionButton);
  };

  const changeSubSection = (subSectionButton) => {
    setSubSection(subSectionButton);
  };

  // useEffect(() => {
  //   console.log(`convertedData: ${convertedData}`);
  // }, [convertedData]);

  return (
    <>
      {folder.length === 0 && (
        <Dropzone
          onDrop={(acceptedFiles) => {
            setFolder(acceptedFiles);
          }}
        >
          {({ getRootProps, getInputProps }) => (
            <section className="flex h-full w-full items-center justify-center">
              <div
                {...getRootProps()}
                className="bg-prim-5 relative my-24 flex h-80 w-1/2 items-center justify-center border-4 border-dashed border-gray-500 hover:cursor-pointer"
              >
                <input
                  {...getInputProps()}
                  directory=""
                  webkitdirectory=""
                  type="file"
                />

                <div>
                  <section flex="flex flex-col gap-3 w-3/4">
                    <p className="text-center font-league text-2xl">
                      Upload your Instagram folder given by Meta.
                    </p>

                    {/* interesting observation of how clicking on the link does not trigger file explorer to open (which is a good thing). One reason could be dropzone automatically configures a z-index for elements with an onClick, or the onClick event for the link is just overlapping the dropzone file open */}
                    <p className="text-center font-league text-2xl">
                      Refer to this{" "}
                      <SpanLink
                        text={"page"}
                        link={"https://help.instagram.com/519522125107875"}
                      />{" "}
                      to obtain your Instagram folder
                    </p>
                  </section>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="text-prim-6 absolute bottom-12 left-1/2 right-0 h-16 w-16 -translate-x-1/2"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.5 3.75a6 6 0 0 0-5.98 6.496A5.25 5.25 0 0 0 6.75 20.25H18a4.5 4.5 0 0 0 2.206-8.423 3.75 3.75 0 0 0-4.133-4.303A6.001 6.001 0 0 0 10.5 3.75Zm2.25 6a.75.75 0 0 0-1.5 0v4.94l-1.72-1.72a.75.75 0 0 0-1.06 1.06l3 3a.75.75 0 0 0 1.06 0l3-3a.75.75 0 1 0-1.06-1.06l-1.72 1.72V9.75Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
            </section>
          )}
        </Dropzone>
      )}

      {convertedData[0].length !== 0 && (
        <div className="flex w-10/12 gap-16">
          {/* section components */}
          {section === "Public Profile" && (
            <PublicProfile
              images={convertedData[0]}
              objects={convertedData[1]}
            />
          )}
          {section === "Activity" && (
            <Activity
              convertedData={convertedData}
              changeSubSection={changeSubSection}
              subsection={subSection}
            />
          )}
          {section === "Login Information" && (
            <LoginInfo
              convertedData={convertedData}
              changeSubSection={changeSubSection}
              subsection={subSection}
            />
          )}
          {section === "Your IG Feed" && (
            <IGFeed
              convertedData={convertedData}
              changeSubSection={changeSubSection}
              subsection={subSection}
            />
          )}
          {section === "Ad Information" && (
            <AdInfo
              convertedData={convertedData}
              changeSubSection={changeSubSection}
              subsection={subSection}
            />
          )}

          {/* navigation aside components */}
          {section === "Public Profile" && (
            <PubProfAside
              section={section}
              changeSection={changeSection}
              changeSubSection={changeSubSection}
            />
          )}
          {section === "Activity" && (
            <ActivityAside
              section={section}
              changeSection={changeSection}
              changeSubSection={changeSubSection}
            />
          )}
          {section === "Login Information" && (
            <LogInfAside
              section={section}
              changeSection={changeSection}
              changeSubSection={changeSubSection}
            />
          )}
          {section === "Your IG Feed" && (
            <IGFeedAside
              section={section}
              changeSection={changeSection}
              changeSubSection={changeSubSection}
            />
          )}
          {section === "Ad Information" && (
            <AdInfoAside
              section={section}
              changeSection={changeSection}
              changeSubSection={changeSubSection}
            />
          )}
        </div>
      )}
    </>
  );
}
