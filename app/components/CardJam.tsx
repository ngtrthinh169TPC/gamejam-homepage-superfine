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
    <div className="h-60 rounded-2xl bg-slate-500">
      <img
        src={jam.thumbnailImageUrl}
        alt={`jam-${jam.name}-thumbnail`}
        className="h-32 w-full rounded-2xl object-cover object-center"
      />
      <h2>{jam.name.toUpperCase()}</h2>
      <p>
        Hosted by {jam.hostProfiles.map((host) => host.username).join(", ")}
      </p>
      <p>
        Starts in {diffNow.days} days, {diffNow.hours} hours
      </p>
      <div>A progress bar</div>
      <div className="flex gap-8">
        <p>{jam.joinedCount} joined</p>
        <p>{jam.submissionCount} submissions</p>
      </div>
    </div>
  );
};
