import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { CourseItem } from "./course-item";
import { describe, expect, it, jest } from "@jest/globals";

describe("course item", () => {
  it("should call delete callback", async () => {
    const onDelete = jest.fn(async () => undefined);
    render(
      <CourseItem
        course={{
          id: "id",
          description: "desc",
          name: "name",
        }}
        onDelete={onDelete}
      />,
    );

    await userEvent.click(screen.getByText("Удалить"));

    expect(onDelete).toHaveBeenCalled();
  });
});
