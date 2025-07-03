import React from "react";
import EmptySection from "./EmptySection";
import ActivityCard from "./ActivityCard";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { EventData } from "./getEventBroadcaster";
import { EventTypes } from "./enums";
import { UserActionEnum } from "./UserActionEnum";

type Props = {
  eventData: EventData[];
  selectedOption: string;
  onSelectedOptionChange: (value: string) => void;
  showEmptySection?: boolean;
};

function ActivityFeed({
  eventData,
  selectedOption,
  onSelectedOptionChange,
  showEmptySection = false,
}: Props) {
  if (showEmptySection) return <EmptySection />;

  function ActivityCardEvent(data: EventData) {
    const event = data.eventType;

    switch (event) {
      case EventTypes.ASSESSMENT_USER_COMPLETED: {
        return (
          <ActivityCard
            key={data.createdDate + data.eventType}
            action={UserActionEnum.finished}
            date={data.createdDate}
            assessment={data.eventMessage.assessment}
            user={data.eventMessage.user}
          />
        );
      }
      case EventTypes.ASSESSMENT_ORG_COMPLETED: {
        return (
          <ActivityCard
            key={data.createdDate + data.eventType}
            action={UserActionEnum.finished}
            date={data.createdDate}
            assessment={data.eventMessage.assessment}
            user={{
              roleName: "System",
              _id: "#",
              firstname: "All",
              lastname: "users",
              profilePic: "",
            }}
          />
        );
      }
      case EventTypes.ASSESSMENT_REPORT_GENERATED: {
        return (
          <ActivityCard
            key={data.createdDate + data.eventType}
            action={UserActionEnum.reportPublished}
            date={data.createdDate}
            assessment={data.eventMessage.assessment}
            user={{
              roleName: "System",
              _id: "#",
              firstname: "",
              lastname: "",
              profilePic: "",
            }}
          />
        );
      }
      case EventTypes.PROJECT_CREATED: {
        return (
          <ActivityCard
            key={data.createdDate + data.eventType}
            action={UserActionEnum.created}
            date={data.createdDate}
            project={data.eventMessage.project}
            user={data.eventMessage.user}
          />
        );
      }
      case EventTypes.PROJECT_STATE_REVISION_REQUIRED: {
        return (
          <ActivityCard
            key={data.createdDate + data.eventType}
            action={UserActionEnum.projectRevision}
            date={data.createdDate}
            project={data.eventMessage.project}
            user={data.eventMessage.user}
          />
        );
      }
      case EventTypes.PROJECT_STATE_APPROVAL: {
        return (
          <ActivityCard
            key={data.createdDate + data.eventType}
            action={UserActionEnum.projectApproval}
            date={data.createdDate}
            project={data.eventMessage.project}
            user={data.eventMessage.user}
          />
        );
      }
      case EventTypes.PROJECT_STATE_PUBLISHED: {
        return (
          <ActivityCard
            key={data.createdDate + data.eventType}
            action={UserActionEnum.projectPublished}
            date={data.createdDate}
            project={data.eventMessage.project}
            user={data.eventMessage.user}
          />
        );
      }
      default:
        return null;
    }
  }

  return (
    <div>
      <div id="activityFilter" className="mb-1">
        <Select value={selectedOption} onValueChange={onSelectedOptionChange}>
          <SelectTrigger className="w-[100px]">
            <SelectValue placeholder="Date" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="today">Today</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="[&::-webkit-scrollbar-thumb]:bg-background-secondary-foreground [&::-webkit-scrollbar]:w-spacing-2 h-96 overflow-y-scroll [&::-webkit-scrollbar-thumb]:rounded-3xl dark:[&::-webkit-scrollbar-thumb]:bg-primary-foreground [&::-webkit-scrollbar-track]:bg-primary-foreground dark:[&::-webkit-scrollbar-track]:bg-primary-foreground">
        {eventData.map((e) => ActivityCardEvent(e))}
      </div>
    </div>
  );
}

export default ActivityFeed;
