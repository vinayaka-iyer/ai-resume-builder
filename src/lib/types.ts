import { ResumeValues } from "./validation";
import { Prisma } from "@prisma/client";

export interface EditorFormProps {
  resumeData: ResumeValues;
  setResumeData: (data: ResumeValues) => void;
}

export const resumeDataInclude = {
  // for db join
  workExperiences: true,
  educations: true,
} satisfies Prisma.ResumeInclude;

// generates type for resume that includes work ex and educations
export type ResumeServerData = Prisma.ResumeGetPayload<{
  include: typeof resumeDataInclude;
}>;
