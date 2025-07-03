"use-client";
/**
 * Activity Card Component
 * Card to display :
 * Mandatory fields - User Avatar, User Name, Time, User department and User Action performed.
 * Non Mandatory fields - Project Name, Call to Actions, Comments, Likes and Dislike Reactions.
 *
 * Basic Usage:
 * <ActivityCard
 *  user={
 *    name: "Organizational Gap analysis",
        image: "/gaplyavatar.png",
        department: "CEO",
      } 
      action="started" 
      cta={false} 
    />
 * 
 * Complete Usage:
 * <ActivityCard
      user={
        name: "Organizational Gap analysis",
        image: "/gaplyavatar.png",
        department: "CEO",
      } 
      action="completed"
      project={
        project: "Nordic Pragmatism - Way of Working",
        projectId: "",
      }
      comment="lorem ipsum is simply a dummy text."
      cta={true}
      reactions={
        like: 10,
        dislike: 0,
      }
    />
 */

import React from "react";
import UserAvatar from "../Avatar/UserAvatar";
import { Button } from "@/components/ui/button";

// import components required
import CardLinkText from "./CardDetails/CardLinkText";
import CardUserAction, { UserActionTypes } from "./UserActionEnum";
import CardActionDate from "./CardDetails/CardActionDate";
import CardUserDesignation from "./CardDetails/CardUserDesignation";
import CardComment from "./CardDetails/CardComment";
import CardLikeDislike from "./CardDetails/CardLikeDislike";
import { EventAssessmentTypes, EventUserTypes } from "./getEventBroadcaster";
import { Project } from "@/api/Project";
import { AppRoutes } from "@/utils/constants/AppRoutes";

interface ActivityCardProps {
  user: EventUserTypes;
  date: string;
  action: UserActionTypes;
  project?: Project;
  assessment?: EventAssessmentTypes;
  cta?: boolean;
  comment?: string;
  reactions?: {
    like?: number;
    dislike?: number;
  };
}

const ActivityCard: React.FC<ActivityCardProps> = ({
  user,
  action,
  project,
  assessment,
  date = Date(),
  cta = false,
  comment,
  reactions,
}) => {
  const { firstname, lastname, profilePic, roleName } = user;

  const username = [firstname, lastname].filter((d) => !!d).join(" ");
  const userlink = "/";
  const isSystemGenerated = roleName === "System";
  const avatarSrc = isSystemGenerated ? "/favicon-96x96.png" : profilePic;

  return (
    <div className="border-border-light flex w-full flex-col gap-2 border-b py-4">
      <div id="primaryContent" className="flex gap-2">
        <UserAvatar src={avatarSrc} size="big" fallback={username} />
        <div className="flex flex-col">
          <p className="flex flex-wrap items-center gap-2">
            {username && <CardLinkText title={username} link={userlink} />}
            <CardUserAction action={action} />
            {project?._id && (
              <CardLinkText
                title={project.name}
                link={`${AppRoutes.VIEW_PROJECT}/${project._id}`}
              />
            )}
            {assessment?.name && <CardLinkText title={assessment.name} />}
          </p>
          <p className="flex items-center gap-1">
            {date && <CardActionDate date={date} />}
            {roleName && (
              <>
                <span className="text-muted-foreground">•</span>
                <CardUserDesignation designation={roleName} />
              </>
            )}
          </p>
        </div>
      </div>
      {cta && (
        <div id="CTAContent" className="flex gap-2">
          <Button variant="secondary">CTA 1</Button>
          <Button className="primaryButton">CTA 2</Button>
        </div>
      )}
      {comment && (
        <div id="CommentContent" className="flex flex-col">
          <CardComment comment={comment} />
        </div>
      )}
      {typeof reactions !== "undefined" && (
        <div id="ReactionsContent" className="ml-auto">
          <CardLikeDislike
            initialLikes={reactions?.like || 0}
            initialDislikes={reactions?.dislike || 0}
          />
        </div>
      )}
    </div>
  );
};
export default React.memo(ActivityCard);
