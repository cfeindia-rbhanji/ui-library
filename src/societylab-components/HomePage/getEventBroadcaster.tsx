import { z } from "zod";
import { EventTypes } from "./enums";

// Event Schema
const EventSchema = z.object({
  _id: z.string(),
  eventType: z.enum(Object.values(EventTypes) as [string, ...string[]]),
  eventMessage: z.any(),
  createdDate: z.string().datetime(),
});

// Metadata Schema
const MetadataSchema = z.object({
  phase_in_progress: z.string().optional(),
  projectCount: z.number(),
});

// Full Response Schema
export const EventsResponseSchema = z.object({
  status: z.boolean(),
  statusCode: z.number(),
  message: z.string(),
  data: z.array(EventSchema),
});

export type EventUserTypes = {
  _id: string;
  firstname: string;
  lastname: string;
  roleName: string;
  profilePic: string;
};

export type EventAssessmentTypes = {
  _id: string;
  name: string;
  templateRef: string;
};

export type EventsResponse = z.infer<typeof EventsResponseSchema>;
export type EventData = z.infer<typeof EventSchema>;
export type Metadata = z.infer<typeof MetadataSchema>;
