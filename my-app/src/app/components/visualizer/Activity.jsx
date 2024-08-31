"use client";

import React, { useState, useEffect, useMemo } from "react";
import Speech from "../Speech";
import Comment from "../Comment";
import Image from "next/image";
import Like from "../Like";
import Interactions from "../Interactions";

export default function Activity({
  images,
  objects,
  changeSubSection,
  subsection,
}) {
  // on mount, change the subsection to "Direct Messages," which is the default subsection for the "Activity" section
  useEffect(() => {
    changeSubSection("Direct Messages");
  }, []);

  const storiesMedia = useMemo(() => {
    let storiesList;
    let result = [];

    if (objects) {
      objects.forEach((object) => {
        if (object["ig_stories"]) {
          storiesList = object["ig_stories"];
        }
      });

      let splitStoriesList = storiesList.map((story) => {
        return story["uri"].split("/");
      });

      images.forEach((image) => {
        for (let i = 0; i < splitStoriesList.length; i++) {
          if (image["name"].includes(splitStoriesList[i][3])) {
            result.push(image["url"]);
            break;
          }
        }
      });

      return result;
    }
  }, [images, objects]);

  // direct messages are the messages of all the users. it is an array of objects with the title of the user and the messages
  const directMessages = useMemo(() => {
    let result = [];

    if (objects) {
      objects.forEach((object) => {
        // if the object has the title (key), it signifies that it is a direct message
        if (object["title"]) {
          result.push(object);
        }
      });

      return result;
    }
  }, [objects]);

  // DMUsers is specifically an array of users that the user has had direct messages with
  const DMUsers = useMemo(() => {
    let result = [];

    if (directMessages) {
      directMessages.forEach((object) => {
        result.push(object["title"]);
      });

      return result;
    }
  }, [directMessages]);

  const [user, setUser] = useState("");

  const changeDMUser = (user) => {
    setUser(user);
  };

  // userMessages will change if the user clicks on a different person. it is the entire conversation between the user and the selected user
  // (maybe) bug where userMessages returns an array, although the array does have the correct object
  const userMessages = useMemo(() => {
    let result;

    if (user && directMessages) {
      directMessages.forEach((message) => {
        if (message["title"] === user) {
          result = message["messages"];
        }
      });

      // reversing array so messages are oldest to newest instead of newest to oldest
      let reversedResult = [];

      for (let i = result.length - 1; i >= 0; i -= 1) {
        reversedResult.push(result[i]);
      }

      return reversedResult;
    }
  }, [user, directMessages]);

  // on mount, set the default user state to the first user in the DMUsers array
  useEffect(() => {
    if (DMUsers) {
      changeDMUser(DMUsers[0]);
    }
  }, [DMUsers]);

  useEffect(() => {
    console.log(objects);
  }, [objects]);

  const commentsList = useMemo(() => {
    let result = [];

    if (objects) {
      objects.forEach((object) => {
        if (Array.isArray(object)) {
          // check if the specific array is an array of comments and data about the comments
          if (object[0]["string_map_data"]) {
            for (let i = 0; i < object.length; i += 1) {
              result.push(object[i]["string_map_data"]);
            }
          }
        }
      });

      return result.reverse();
    }
  }, [objects]);

  // i set aside a variable just for mediaOwners because some arrays do not have the "Media Owner" key
  const mediaOwners = useMemo(() => {
    let result = [];

    if (commentsList) {
      commentsList.forEach((comment) => {
        if (comment["Media Owner"]) {
          let mediaOwner = comment["Media Owner"]["value"];
          result.push(mediaOwner);
        } else {
          result.push("you");
        }
      });

      return result;
    }
  }, [commentsList]);

  const mostComments = useMemo(() => {
    let mostFrequent;
    let mostFrequentCount = 0;
    let frequentCount = 0;

    if (mediaOwners) {
      for (let i = 0; i < mediaOwners.length; i += 1) {
        for (let j = 0; j < mediaOwners.length; j += 1) {
          if (mediaOwners[i] === mediaOwners[j]) {
            frequentCount += 1;
          }
        }

        if (mostFrequentCount < frequentCount) {
          mostFrequent = mediaOwners[i];
          mostFrequentCount = frequentCount;
        }
        frequentCount = 0;
      }
    }

    return mostFrequent;
  }, [mediaOwners]);

  const earliestComment = useMemo(() => {
    let allTimestamps = [];
    let earliestTimestamp = Infinity;
    let earliestTimestampOwner;

    if (commentsList) {
      commentsList.forEach((comment) => {
        if (comment["Time"]) {
          if (comment["Media Owner"]) {
            allTimestamps.push({
              owner: comment["Media Owner"]["value"],
              time: comment["Time"]["timestamp"],
            });
          } else {
            allTimestamps.push({
              owner: "you",
              time: comment["Time"]["timestamp"],
            });
          }
        }
      });

      allTimestamps.forEach((timestamp) => {
        if (timestamp["time"] < earliestTimestamp) {
          earliestTimestamp = timestamp["time"];
        }
      });

      allTimestamps.forEach((timestamp) => {
        if (timestamp["time"] === earliestTimestamp) {
          earliestTimestampOwner = timestamp["owner"];
        }
      });

      let formattedDate = new Date(earliestTimestamp * 1000).toDateString();
      return { owner: earliestTimestampOwner, time: formattedDate };
    }
  }, [commentsList]);

  const likesList = useMemo(() => {
    let result;

    if (objects) {
      objects.forEach((object) => {
        if (object["likes_comment_likes"]) {
          result = object["likes_comment_likes"];
        }
      });
    }

    // reversing array so messages are oldest to newest instead of newest to oldest
    let reversedResult = [];

    for (let i = result.length - 1; i >= 0; i -= 1) {
      reversedResult.push(result[i]);
    }

    return reversedResult;
  }, [objects]);

  const storyInteractionsList = useMemo(() => {
    let result;

    if (objects) {
      objects.forEach((object) => {
        if (object["story_activities_story_likes"]) {
          result = object["story_activities_story_likes"];
        }
      });

      return result;
    }
  }, [objects]);

  return (
    <section className="bg-prim-5 shadow-rough min-h-182 flex w-full flex-col gap-5 rounded-xl px-10 py-8">
      {subsection === "Stories" && (
        <>
          <p className="text-prim-2 font-league text-3xl">Stories</p>

          <div className="flex h-full w-full flex-wrap gap-2">
            {storiesMedia &&
              storiesMedia.map((image, index) => {
                return (
                  <div
                    key={index}
                    className="bg-prim-6 h-96 w-1/4 flex-grow rounded-sm transition duration-200 ease-in-out hover:scale-105 hover:cursor-pointer"
                  >
                    <Image
                      src={image}
                      alt="Post Image"
                      width={500}
                      height={500}
                      className="h-full w-full rounded-sm"
                    />
                  </div>
                );
              })}
          </div>
        </>
      )}

      {subsection === "Direct Messages" && (
        <>
          <p className="text-prim-2 font-league text-3xl">Direct Messages</p>

          <div className="flex h-full w-full gap-10">
            <section className="flex h-full w-64 flex-none flex-col gap-4 rounded-lg bg-gray-200 p-5">
              {DMUsers &&
                DMUsers.map((user, index) => {
                  return (
                    <p
                      key={user + index}
                      className="text-prim-2 hover:text-prim-9 font-league text-xl transition duration-200 ease-in-out hover:scale-105 hover:cursor-pointer"
                      onClick={() => changeDMUser(user)}
                    >
                      {user}
                    </p>
                  );
                })}
            </section>

            <section className="flex w-full flex-col gap-9">
              {userMessages &&
                userMessages.map((message, index) => {
                  // if the message text is present, render the message
                  if (message["content"] && message["sender_name"] === user) {
                    return (
                      <Speech
                        key={message + index}
                        orientation={"left"}
                        text={message["content"]}
                        date={message["timestamp_ms"]}
                      />
                    );
                  }

                  // if the sender_name is not equal to the user, then it is you
                  if (message["content"] && message["sender_name"] !== user) {
                    return (
                      <Speech
                        key={message + index}
                        orientation={"right"}
                        text={message["content"]}
                        date={message["timestamp_ms"]}
                      />
                    );
                  }
                })}
            </section>
          </div>
        </>
      )}

      {subsection === "Comments" && (
        <>
          <p className="text-prim-2 font-league text-3xl">Comments</p>

          <div className="flex h-full w-full flex-col gap-8">
            <section className="flex h-48 w-full flex-col gap-1 rounded-lg bg-gray-200 p-4">
              <p className="text-prim-2 font-league text-2xl">Statistics:</p>
              <p className="text-prim-2 font-league text-lg transition duration-200 ease-in-out hover:scale-105">
                You&apos;ve typed {commentsList && commentsList.length} comments
                in your IG career{" "}
              </p>
              <p className="text-prim-2 font-league text-lg transition duration-200 ease-in-out hover:scale-105">
                You&apos;ve sent the most comments to{" "}
                <span className="text-prim-9">@{mostComments}</span>
              </p>
              <p className="text-prim-2 font-league text-lg transition duration-200 ease-in-out hover:scale-105">
                Your first comment ever was made in{" "}
                {earliestComment && earliestComment["time"]} to{" "}
                <span className="text-prim-9">
                  @{earliestComment && earliestComment["owner"]}
                </span>
              </p>
            </section>

            <div className="flex flex-col gap-5">
              {commentsList &&
                mediaOwners &&
                commentsList.map((comment, index) => {
                  return (
                    <Comment
                      key={comment + index}
                      comment={`You replied to @${mediaOwners[index]} ${comment["Comment"]["value"]}`}
                      date={comment["Time"]["timestamp"]}
                      atHandle={`@${mediaOwners[index]}`}
                    />
                  );
                })}
            </div>
          </div>
        </>
      )}

      {subsection === "Likes" && (
        <>
          <p className="text-prim-2 font-league text-3xl">Likes</p>

          <div className="flex h-full w-full flex-col gap-8">
            <div className="flex flex-col gap-5">
              {likesList &&
                likesList.map((like, index) => {
                  if (like["string_list_data"][0]["href"]) {
                    return (
                      <Like
                        key={like + index}
                        likeLink={like["string_list_data"][0]["href"]}
                        date={like["string_list_data"][0]["timestamp"]}
                      />
                    );
                  } else {
                    return (
                      <Like
                        key={like + index}
                        likeLink={"a deleted post"}
                        date={like["string_list_data"][0]["timestamp"]}
                      />
                    );
                  }
                })}
            </div>
          </div>
        </>
      )}

      {subsection === "Story Interactions" && (
        <>
          <p className="text-prim-2 font-league text-3xl">Story Interactions</p>

          <div className="flex h-full w-full flex-col gap-8">
            <div className="flex flex-col gap-5">
              {storyInteractionsList &&
                storyInteractionsList.map((interactions, index) => {
                  return (
                    <Interactions
                      key={interactions + index}
                      interactionsUser={interactions["title"]}
                      date={interactions["string_list_data"][0]["timestamp"]}
                    />
                  );
                })}
            </div>
          </div>
        </>
      )}
    </section>
  );
}
