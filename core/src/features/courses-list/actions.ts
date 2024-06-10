"use server";

import { coursesRepository } from "@/features/courses-list/courses.repository";
import { revalidatePath } from "next/cache";

export const createCourseAction = async (
  command: CreateCourseListElementCommand,
  revalidatePagePath: string,
) => {
  await coursesRepository.createCoursesElement(command);
  revalidatePath(revalidatePagePath);
};
