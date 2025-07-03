export enum ProjectState {
  DRAFT = "Draft",
  WAITING_FOR_APPROVAL = "Waiting For Approval",
  REVISION_REQUIRED = "Revision Required",
  PUBLISHED = "Published",
  NEW = "new",
}
export enum ProjectPriority {
  HIGH = 1,
  MEDIUM = 2,
  LOW = 3,
}

export enum StatusEnum {
  Active = "Active",
  Inactive = "Inactive",
}

export enum ComponentsNames {
  WELCOME_FORTEDIGITAL = "WELCOME_FORTEDIGITAL",
  WELCOME = "WELCOME",
  WELCOME_EBA = "WELCOME_EBA",
  TODAY_FUTURE = "TODAY-FUTURE",
  TEXT_QUESTION = "TEXT_QUESTION",
  TEXT_QUESTION_SHORT = "TEXT_QUESTION_SHORT",
  NUMBER_QUESTION = "NUMBER_QUESTION",
  MARKET_CONTEXT = "MARKET_CONTEXT",
  MARKET_CONTEXT2 = "MARKET_CONTEXT2",
  GROWTH_CHART = "GROWTH_CHART",
  WELCOME_GAPMAP = "WELCOME_GAPMAP",
  QUESTION = "QUESTION",
  INFORMATION = "INFORMATION",
  CONTENTSCREEN2 = "C2",
  CONTENTSCREEN3 = "SC3",
  CONTENTSCREEN5 = "C5",
  RESULTS = "C6",
  END_SCREEN = "END_SCREEN",
}

export enum EventTypes {
  // PHASE - 1
  ASSESSMENT_PUBLISH = "ASSESSMENT_PUBLISH",
  ASSESSMENT_USER_COMPLETED = "ASSESSMENT_USER_COMPLETED",
  KPI_UPDATE = "KPI_UPDATE",
  ASSESSMENT_ORG_COMPLETED = "ASSESSMENT_ORG_COMPLETED",
  ASSESSMENT_REPORT_GENERATED = "ASSESSMENT_REPORT_GENERATED",
  PHASE_1_COMPLETED = "PHASE_1_COMPLETED",

  // PHASE - 2
  PROJECT_CREATED = "PROJECT_CREATED",
  PROJECT_STATE_APPROVAL = "PROJECT_STATE_APPROVAL",
  PROJECT_STATE_REVISION_REQUIRED = "PROJECT_STATE_REVISION_REQUIRED",
  PROJECT_STATE_PUBLISHED = "PROJECT_STATE_PUBLISHED",
  PROJECT_EDITED = "PROJECT_EDITED",
  PROJECT_DELETED = "PROJECT_DELETED",
  PROJECT_UNDO_DELETED = "PROJECT_UNDO_DELETED",
}

export type EventType = keyof typeof EventTypes;

export enum CurrentPhase {
  NOT_STARTED = "Not Started",
  IN_PROGRESS = "In Progress",
  COMPLETED = "Completed",
  NOT_DOING = "Not Doing",
}

export enum FlagTypes {
  ON_HOLD = "on_hold",
  BLOCKED = "blocked",
  NOT_UPDATED = "not_updated",
  DATA_UNAVAILABLE = "data_unavailable",
}

export enum LinkedEntity {
  GOALS = "strategic_goals",
  INITIATIVES = "strategic_initiatives",
  PROJECTS = "Project",
  ACTIONS = "actions",
  FOLLOW_UP = "follow_ups",
  SURVEY = "surveys",
  MILESTONE = "milestones",
}

export enum RelationshipType {
  IS_BLOCKED_BY = "isBlockedBy",
  IS_DUPLICATE_OF = "isDuplicateOf",
}

export enum FollowUpType {
  Priority = "Priority",
  DailyStandup = "Daily Standup",
  WeeklyOpsSync = "Weekly Ops Sync",
  MonthlyProductReview = "Monthly Product Review",
}

export enum StrategicEntityType {
  EXECUTION = "Execution",
  LEARNING = "Learning",
  ALL = "All",
}
