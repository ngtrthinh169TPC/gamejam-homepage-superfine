import { DateTime } from "luxon";
import { useEffect, useState } from "react";
import type { Jam } from "~/frontend_test_homepage_data";

export const CardJam = (jam: Jam) => {
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
    <div className="h-72 rounded-2xl bg-slate-700">
      <img
        src={jam.thumbnailImageUrl}
        alt={`jam-${jam.name}-thumbnail`}
        className="h-32 w-full rounded-2xl object-cover object-center"
      />
      <div className="flex flex-col gap-2 px-4 py-2">
        <div>
          <h2 className="text-2xl font-bold tracking-wider">
            {jam.name.toUpperCase()}
          </h2>
          <p className="text-purple-400">
            Hosted by {jam.hostProfiles.map((host) => host.username).join(", ")}
          </p>
        </div>
        <div className="flex flex-col gap-1">
          <p className="italic">
            Starts in {diffNow.days} days, {diffNow.hours} hours
          </p>
          <div className="h-4 w-full rounded-full bg-slate-600">
            <div className="from-gamejam-blue-100 to-gamejam-purple-100 h-full w-1/3 rounded-full bg-gradient-to-r"></div>
          </div>
          <div className="flex gap-20 italic">
            <p>{jam.joinedCount} Joined</p>
            <p>{jam.submissionCount} Submissions</p>
          </div>
        </div>
      </div>
    </div>
  );
};
