"use client";

import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/shared/ui/card";
import { useTransition } from "react";
import { Button } from "@/shared/ui/button";

export function CourseItem({
  course,
  onDelete,
}: {
  course: CourseListElement;
  onDelete: () => Promise<void>;
}) {
  const [isLoadingDelete, startDeleteTransition] = useTransition();

  const handleDelete = async () => {
    startDeleteTransition(async () => {
      await onDelete();
    });
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>{course.name}</CardTitle>
        <CardDescription>{course.description}</CardDescription>
      </CardHeader>
      <CardFooter>
        <Button disabled={isLoadingDelete} onClick={handleDelete}>
          Удалить
        </Button>
      </CardFooter>
    </Card>
  );
}
