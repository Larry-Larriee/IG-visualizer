"use client";

import React, { useEffect, useMemo } from "react";
import Advertisers from "../Advertisers";

export default function AdInfo({
  images,
  objects,
  changeSubSection,
  subsection,
}) {
  // on mount, change the subsection to "Ad Posts Viewed," which is the default subsection for the "Ad Information" section
  useEffect(() => {
    changeSubSection("Ad Posts Viewed");
  }, []);

  useEffect(() => {
    console.log(objects);
  }, [objects]);

  const adViewList = useMemo(() => {
    let result;

    if (objects) {
      objects.forEach((object) => {
        // if the object has the key "impressions_history_posts_seen," then we know that the object is an ad view
        if (object["impressions_history_posts_seen"]) {
          result = object["impressions_history_posts_seen"];
        }
      });
    }

    return result;
  }, [objects]);

  const adUseList = useMemo(() => {
    let result;

    if (objects) {
      objects.forEach((object) => {
        if (object["ig_custom_audiences_all_types"]) {
          result = object["ig_custom_audiences_all_types"];
        }
      });
    }

    return result;
  }, [objects]);

  useEffect(() => {
    console.log(adUseList);
  }, [adUseList]);

  return (
    <section className="bg-prim-5 shadow-rough min-h-182 flex w-full flex-col gap-16 rounded-xl px-10 py-8">
      {subsection === "Ad Posts Viewed" &&
        adViewList &&
        adViewList.map((adView, index) => {
          return (
            <>
              <div className="flex flex-col gap-8">
                <p className="text-prim-2 font-league text-3xl">
                  Here&apos; the people who sent you ads
                </p>

                <Advertisers
                  key={adView["string_map_data"]["Author"]["value"] + index}
                  author={adView["string_map_data"]["Author"]["value"]}
                  date={adView["string_map_data"]["Time"]["timestamp"]}
                />
              </div>
            </>
          );
        })}
      {subsection === "Advertisers Using Your Info" && (
        <div className="flex flex-col gap-8">
          <p className="text-prim-2 font-league text-3xl">
            Here&apos;s the people who may want to send you ads
          </p>

          <div className="flex flex-col gap-3">
            {adUseList &&
              adUseList.map((adUse, index) => {
                return (
                  <Advertisers
                    key={adUse["advertiser_name"] + index}
                    author={adUse["advertiser_name"]}
                  />
                );
              })}
          </div>
        </div>
      )}
    </section>
  );
}
