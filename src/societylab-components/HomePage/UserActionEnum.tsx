/**
 * Component to display the message the user has performed.
 *
 * Basic Usage:
 * <CardUserAction action="started" />
 *
 * to display the message as "has started".
 *
 * Currently we have 4 actions started, completed, finished, commented
 */
import React from "react";

export enum UserActionEnum {
  started = "started",
  completed = "completed",
  finished = "finished",
  commented = "commented",
  created = "created",
  published = "published",
  reportPublished = "reportPublished",
  projectRevision = "projectRevision",
  projectPublished = "projectPublished",
  projectApproval = "projectApproval",
}

export type UserActionTypes = keyof typeof UserActionEnum;

interface CardUserActionProps {
  action: UserActionTypes;
}

const CardUserAction: React.FC<CardUserActionProps> = ({ action }) => {
  const userActions = {
    // Add actions messages here
    started: "has started",
    completed: "has completed",
    finished: "has finished",
    commented: "has commented",
    created: "has created",
    published: "has published",
    reportPublished: "Report has published",
    projectPublished: "published project",
    projectRevision: "requires revision",
    projectApproval: "requires approval",
  };

  return (
    <span className="typography-small text-muted-foreground">
      {userActions[action]}
    </span>
  );
};
export default React.memo(CardUserAction);
