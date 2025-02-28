export class AuthorizationError extends Error {
  constructor(message: string = "Authorization Error") {
    super(message);
  }
}

export class NeedAuthError extends Error {
  constructor(message: string = "Need Auth Error") {
    super(message);
  }
}

export class BadRequestError extends Error {
  constructor(message: string = "Bad Request Error") {
    super(message);
  }
}
