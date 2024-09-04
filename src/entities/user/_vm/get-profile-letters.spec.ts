import { describe, expect, it } from "@jest/globals";
import { getProfileLetters } from "./get-profile-letters";

describe("get profile letters", () => {
  it("should split by .", () => {
    const res = getProfileLetters({
      email: "admin.test@gmail.com",
    });

    expect(res).toEqual("AT");
  });

  it("should split by -", () => {
    const res = getProfileLetters({
      email: "admin.test@gmail.com",
      name: "Admin-Test",
    });

    expect(res).toEqual("AT");
  });

  it("should split by _", () => {
    const res = getProfileLetters({
      email: "admin.test@gmail.com",
      name: "Admin_Test",
    });

    expect(res).toEqual("AT");
  });

  it("should split by space", () => {
    const res = getProfileLetters({
      email: "admin.test@gmail.com",
      name: "Admin Test",
    });

    expect(res).toEqual("AT");
  });

  it("should return first 2 letters if no separator", () => {
    const res = getProfileLetters({
      email: "admin.test@gmail.com",
      name: "AdminTest",
    });

    expect(res).toEqual("AD");
  });

  it("should return first 2 letters if no separator email", () => {
    const res = getProfileLetters({
      email: "admin@gmail.com",
    });

    expect(res).toEqual("AD");
  });

  it("should return email if empty username", () => {
    const res = getProfileLetters({
      email: "admin@gmail.com",
      name: "",
    });

    expect(res).toEqual("AD");
  });

  it("should work with short names", () => {
    const res = getProfileLetters({
      email: "admin@gmail.com",
      name: "E",
    });

    expect(res).toEqual("E");
  });
});
