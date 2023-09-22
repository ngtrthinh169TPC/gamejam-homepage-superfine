import type { Jam } from "~/frontend_test_homepage_data";
import { DateTime } from "luxon";
import { useEffect, useState } from "react";

const DisplayCount = ({
  label,
  value,
  padding,
}: {
  label: string;
  value: number;
  padding?: boolean;
}) => {
  return (
    <div className="w-16">
      <p className="text-3xl font-medium">
        {padding ? value.toString().padStart(2, "0") : value}
      </p>
      <p>{label}</p>
    </div>
  );
};

export const FirstJam = (jam: Jam) => {
  const [diffNow, setDiffNow] = useState(
    DateTime.fromMillis(jam.startTime)
      .diffNow(["day", "hour", "minute"])
      .toObject(),
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setDiffNow(
        DateTime.fromMillis(jam.startTime)
          .diffNow(["day", "hour", "minute"])
          .toObject(),
      );
    }, 60000);

    return () => clearInterval(interval);
  }, [jam.startTime]);

  return (
    <div className="flex w-full flex-col bg-slate-700 sm:flex-row">
      <img
        src={jam.coverImageUrl}
        alt={`jam-cover-${jam.name}`}
        className="h-60 w-full bg-slate-500 sm:h-80 sm:w-1/2"
      />
      <div className="flex h-fit w-full flex-col gap-4 px-8 pb-6 pt-4 sm:h-80 sm:w-1/2 sm:gap-6 sm:px-16 sm:py-12">
        <div>
          <h1 className="text-3xl font-bold tracking-wider text-white">
            {jam.name.toUpperCase()}
          </h1>
          <p className="italic text-purple-400">
            Hosted by {jam.hostProfiles.map((host) => host.username).join(", ")}
          </p>
        </div>
        <div className="flex flex-col items-end gap-4 sm:flex-row sm:gap-0">
          <div className="w-full sm:w-1/2">
            <p>Starts in</p>
            <div className="flex">
              <DisplayCount label="days" value={diffNow.days || 0} padding />
              <DisplayCount label="hours" value={diffNow.hours || 0} padding />
              <DisplayCount
                label="minutes"
                value={Math.round(diffNow.minutes || 0)}
                padding
              />
            </div>
          </div>
          <div className="flex w-full sm:w-1/2">
            <DisplayCount label="joined" value={jam.joinedCount} />
            <DisplayCount label="submissions" value={jam.submissionCount} />
          </div>
        </div>
        <div className="flex sm:justify-center">
          <button className="w-fit rounded-full bg-purple-500 px-4 py-2 font-medium tracking-wide">
            JOIN NOW!
          </button>
        </div>
      </div>
    </div>
  );
};
