"use client";

import React, { useEffect, useMemo } from "react";
import Image from "next/image";
import { split } from "postcss/lib/list";

export default function PublicProfile({ images, objects }) {
  const pictureParse = useMemo(() => {
    let picture;
    let result;

    objects.forEach((object) => {
      if (object["ig_profile_picture"]) {
        picture = object["ig_profile_picture"];

        result = picture[0]["uri"].split("/");
      }
    });

    return result;
  }, [objects]);

  const profilePicture = useMemo(() => {
    let result;

    // we need to add pictureParse because images is a dependency and at that moment, pictureParse may not be defined yet
    if (pictureParse) {
      images.forEach((image) => {
        if (image["name"].includes(pictureParse[3])) {
          result = image["url"];
        }
      });
    }

    return result;
  }, [images, pictureParse]);

  const username = useMemo(() => {
    let user;

    if (objects.length !== 0) {
      objects.forEach((object) => {
        if (object["profile_user"]) {
          user = object["profile_user"][0]["string_map_data"]["Name"]["value"];
        }
      });

      return user;
    }
  }, [objects]);

  const bio = useMemo(() => {
    let result;

    if (objects.length !== 0) {
      objects.forEach((object) => {
        if (object["profile_user"]) {
          result = object["profile_user"][0]["string_map_data"]["Bio"]["value"];
        }
      });

      return result;
    }
  }, [objects]);

  const followersList = useMemo(() => {
    let result;

    if (objects.length !== 0) {
      objects.forEach((object) => {
        if (Array.isArray(object)) {
          // if the array index at 0 has the instagram hyperlink then we know it's the followers list
          // note that in this particular case, object is an array
          if (object[0]["string_list_data"]) {
            if (
              object[0]["string_list_data"][0]["href"].includes("instagram.com")
            ) {
              result = object;
            }
          }
        }
      });
    }

    return result;
  }, [objects]);

  const followingList = useMemo(() => {
    let result;

    if (objects.length !== 0) {
      objects.forEach((object) => {
        if (object["relationships_following"]) {
          result = object["relationships_following"];
        }
      });
    }

    return result;
  }, [objects]);

  const postsList = useMemo(() => {
    let result;

    if (objects.length !== 0) {
      objects.forEach((object) => {
        if (Array.isArray(object)) {
          // if one of the objects has a media key, then we know it's the user's posts, because all instagram posts have media (picture or video)
          if (object[0]["media"]) {
            result = object;
          }
        }
      });
    }

    console.log(result);
    return result;
  }, [objects]);

  const postImages = useMemo(() => {
    let postURIs = [];
    let result = [];

    if (postsList) {
      postsList.forEach((post) => {
        if (post["media"]) {
          // taking the first image media of a post (although i'm aware instagram posts can have more than one image or video)
          for (let i = 0; i < post["media"].length; i++) {
            if (
              post["media"][i]["uri"].includes(".jpg") ||
              post["media"][i]["uri"].includes(".png")
            ) {
              postURIs.push(post["media"][i]["uri"]);
              break;
            }
          }
        }
      });

      // postURIs is an array images
      let splitPostURIs = postURIs.map((uri) => {
        return uri.split("/");
      });

      if (images) {
        images.forEach((image) => {
          for (let i = 0; i < splitPostURIs.length; i++) {
            // some posts also have an "other" directory, meaning i have to search through both splitPostURIs[i][2] and splitPostURIs[i][3]
            if (image["name"].includes(splitPostURIs[i][2])) {
              result.push(image["url"]);
              break;
            }
            if (image["name"].includes(splitPostURIs[i][3])) {
              result.push(image["url"]);
              break;
            }
          }
        });
      }
    }

    return result;
  }, [images, postsList]);

  // useEffect(() => {
  //   console.log(images);
  // }, [images]);

  return (
    <>
      <section className="bg-prim-5 shadow-rough min-h-182 flex w-full flex-col gap-16 rounded-xl px-10 py-8">
        <div className="flex gap-16">
          <div className="bg-prim-9 flex h-56 w-80 flex-none items-center justify-center rounded-lg transition duration-200 ease-in-out hover:scale-105">
            {!profilePicture && (
              <>
                <p className="font-xl animate-pulse font-league text-white">
                  Loading
                </p>
              </>
            )}

            {profilePicture && (
              <Image
                src={profilePicture}
                alt="User Image"
                width={500}
                height={500}
                className="h-full w-full rounded-lg"
              />
            )}
          </div>

          <div className="flex min-h-56 w-full flex-col">
            <article className="flex flex-col gap-3">
              <div className="flex flex-col">
                <p className="text-prim-2 font-league text-4xl font-bold">
                  {username}
                </p>
                <div className="flex gap-5">
                  <p className="text-prim-2 font-league text-lg">
                    Followers: {followersList && followersList.length}
                  </p>
                  <p className="text-prim-2 font-league text-lg">
                    Following: {followingList && followingList.length}
                  </p>
                </div>
              </div>

              <p className="text-prim-2 font-league text-xl">{bio}</p>
            </article>

            <div className="flex h-full flex-col justify-end">
              <p className="text-prim-2 font-league text-xl">
                Followed by{" "}
                <span className="font-bold">
                  {followersList &&
                    followersList[0]["string_list_data"][0]["value"]}
                </span>{" "}
                and{" "}
                <span className="font-bold">
                  {followersList &&
                    followersList[1]["string_list_data"][0]["value"]}
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* you are able to add flex-grow or flex-shrink to children of a flexbox. setting it to 1/4 rounded each div to almost 1/3, the equivalent of setting width to 1/3 and accounting for the gap-3 */}
        <div className="flex flex-wrap gap-1">
          {postImages &&
            postImages.map((image, index) => {
              return (
                <div
                  key={index}
                  className="bg-prim-6 h-32 w-1/4 flex-grow rounded-sm"
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
      </section>
    </>
  );
}
