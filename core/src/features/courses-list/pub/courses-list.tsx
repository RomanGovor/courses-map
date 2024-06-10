import { coursesRepository } from "@/features/courses-list/courses.repository";
import { CourseItem } from "@/features/courses-list/ui/course-item";
import { revalidatePath } from "next/cache";

export async function CourseList({
  revalidatePagePath,
}: {
  revalidatePagePath: string;
}) {
  const coursesList = await coursesRepository.getCoursesList();

  const handleDeleteAction = async (courseId: string) => {
    "use server";

    await coursesRepository.deleteCoursesList({ id: courseId });
    revalidatePath(revalidatePagePath);
  };

  return (
    <div className="flex flex-col gap-3">
      {coursesList.map((course) => (
        <CourseItem
          key={course.id}
          course={course}
          onDelete={handleDeleteAction.bind(null, course.id)}
        />
      ))}
    </div>
  );
}
