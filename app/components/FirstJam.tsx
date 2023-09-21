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
    <div>
      <p>{padding ? value.toString().padStart(2, "0") : value}</p>
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
      <div className="h-60 w-full sm:h-80 sm:w-1/2">
        <h1>{jam.name.toUpperCase()}</h1>
        <p>
          Hosted by {jam.hostProfiles.map((host) => host.username).join(", ")}
        </p>
        <div className="flex items-end">
          <div>
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
          <div className="flex">
            <DisplayCount label="joined" value={jam.joinedCount} />
            <DisplayCount label="submissions" value={jam.submissionCount} />
          </div>
        </div>
        <button>JOIN NOW!</button>
      </div>
    </div>
  );
};
