class ParametersLenghtError extends Error {
  constructor(message: string) {
    super(message)
    this.name = "ValidationError"
  }
}

export {
  ParametersLenghtError
}