/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */

type ErrorWithCode = Error & { code: number }
type MaybeErrorWithCode = ErrorWithCode | null | undefined

const createErrorFromCodeLookup: Map<number, () => ErrorWithCode> = new Map()
const createErrorFromNameLookup: Map<string, () => ErrorWithCode> = new Map()

/**
 * UnexpectedWrapperToken: 'Unexpected wrapper token mint'
 *
 * @category Errors
 * @category generated
 */
export class UnexpectedWrapperTokenError extends Error {
  readonly code: number = 0x0
  readonly name: string = 'UnexpectedWrapperToken'
  constructor() {
    super('Unexpected wrapper token mint')
    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, UnexpectedWrapperTokenError)
    }
  }
}

createErrorFromCodeLookup.set(0x0, () => new UnexpectedWrapperTokenError())
createErrorFromNameLookup.set(
  'UnexpectedWrapperToken',
  () => new UnexpectedWrapperTokenError()
)

/**
 * UnexpectedTokenProgram: 'Unexpected SPL Token Program'
 *
 * @category Errors
 * @category generated
 */
export class UnexpectedTokenProgramError extends Error {
  readonly code: number = 0x1
  readonly name: string = 'UnexpectedTokenProgram'
  constructor() {
    super('Unexpected SPL Token Program')
    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, UnexpectedTokenProgramError)
    }
  }
}

createErrorFromCodeLookup.set(0x1, () => new UnexpectedTokenProgramError())
createErrorFromNameLookup.set(
  'UnexpectedTokenProgram',
  () => new UnexpectedTokenProgramError()
)

/**
 * UnexpectedToken2022Program: 'Unexpected Token 2022 Program'
 *
 * @category Errors
 * @category generated
 */
export class UnexpectedToken2022ProgramError extends Error {
  readonly code: number = 0x2
  readonly name: string = 'UnexpectedToken2022Program'
  constructor() {
    super('Unexpected Token 2022 Program')
    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, UnexpectedToken2022ProgramError)
    }
  }
}

createErrorFromCodeLookup.set(0x2, () => new UnexpectedToken2022ProgramError())
createErrorFromNameLookup.set(
  'UnexpectedToken2022Program',
  () => new UnexpectedToken2022ProgramError()
)

/**
 * UnexpectedSystemProgram: 'Unexpected System Program'
 *
 * @category Errors
 * @category generated
 */
export class UnexpectedSystemProgramError extends Error {
  readonly code: number = 0x3
  readonly name: string = 'UnexpectedSystemProgram'
  constructor() {
    super('Unexpected System Program')
    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, UnexpectedSystemProgramError)
    }
  }
}

createErrorFromCodeLookup.set(0x3, () => new UnexpectedSystemProgramError())
createErrorFromNameLookup.set(
  'UnexpectedSystemProgram',
  () => new UnexpectedSystemProgramError()
)

/**
 * UnexpectedRent: 'Unexpected Rent'
 *
 * @category Errors
 * @category generated
 */
export class UnexpectedRentError extends Error {
  readonly code: number = 0x4
  readonly name: string = 'UnexpectedRent'
  constructor() {
    super('Unexpected Rent')
    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, UnexpectedRentError)
    }
  }
}

createErrorFromCodeLookup.set(0x4, () => new UnexpectedRentError())
createErrorFromNameLookup.set('UnexpectedRent', () => new UnexpectedRentError())

/**
 * UnexpectedInitializedAccount: 'Unexpected initialized account'
 *
 * @category Errors
 * @category generated
 */
export class UnexpectedInitializedAccountError extends Error {
  readonly code: number = 0x5
  readonly name: string = 'UnexpectedInitializedAccount'
  constructor() {
    super('Unexpected initialized account')
    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, UnexpectedInitializedAccountError)
    }
  }
}

createErrorFromCodeLookup.set(
  0x5,
  () => new UnexpectedInitializedAccountError()
)
createErrorFromNameLookup.set(
  'UnexpectedInitializedAccount',
  () => new UnexpectedInitializedAccountError()
)

/**
 * ExpectedInitializedAccount: 'Expected initialized account'
 *
 * @category Errors
 * @category generated
 */
export class ExpectedInitializedAccountError extends Error {
  readonly code: number = 0x6
  readonly name: string = 'ExpectedInitializedAccount'
  constructor() {
    super('Expected initialized account')
    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, ExpectedInitializedAccountError)
    }
  }
}

createErrorFromCodeLookup.set(0x6, () => new ExpectedInitializedAccountError())
createErrorFromNameLookup.set(
  'ExpectedInitializedAccount',
  () => new ExpectedInitializedAccountError()
)

/**
 * UnexpectedUserTokenAccountOwner: 'Unexpected user token account owner'
 *
 * @category Errors
 * @category generated
 */
export class UnexpectedUserTokenAccountOwnerError extends Error {
  readonly code: number = 0x7
  readonly name: string = 'UnexpectedUserTokenAccountOwner'
  constructor() {
    super('Unexpected user token account owner')
    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, UnexpectedUserTokenAccountOwnerError)
    }
  }
}

createErrorFromCodeLookup.set(
  0x7,
  () => new UnexpectedUserTokenAccountOwnerError()
)
createErrorFromNameLookup.set(
  'UnexpectedUserTokenAccountOwner',
  () => new UnexpectedUserTokenAccountOwnerError()
)

/**
 * UnexpectedReserveTokenAccountOwner: 'Unexpected reserve token account owner'
 *
 * @category Errors
 * @category generated
 */
export class UnexpectedReserveTokenAccountOwnerError extends Error {
  readonly code: number = 0x8
  readonly name: string = 'UnexpectedReserveTokenAccountOwner'
  constructor() {
    super('Unexpected reserve token account owner')
    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, UnexpectedReserveTokenAccountOwnerError)
    }
  }
}

createErrorFromCodeLookup.set(
  0x8,
  () => new UnexpectedReserveTokenAccountOwnerError()
)
createErrorFromNameLookup.set(
  'UnexpectedReserveTokenAccountOwner',
  () => new UnexpectedReserveTokenAccountOwnerError()
)

/**
 * UnexpectedReserveTokenAccount: 'Unexpected reserve token account'
 *
 * @category Errors
 * @category generated
 */
export class UnexpectedReserveTokenAccountError extends Error {
  readonly code: number = 0x9
  readonly name: string = 'UnexpectedReserveTokenAccount'
  constructor() {
    super('Unexpected reserve token account')
    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, UnexpectedReserveTokenAccountError)
    }
  }
}

createErrorFromCodeLookup.set(
  0x9,
  () => new UnexpectedReserveTokenAccountError()
)
createErrorFromNameLookup.set(
  'UnexpectedReserveTokenAccount',
  () => new UnexpectedReserveTokenAccountError()
)

/**
 * UnexpectedReserveAuthority: 'Unexpected reserve authority'
 *
 * @category Errors
 * @category generated
 */
export class UnexpectedReserveAuthorityError extends Error {
  readonly code: number = 0xa
  readonly name: string = 'UnexpectedReserveAuthority'
  constructor() {
    super('Unexpected reserve authority')
    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, UnexpectedReserveAuthorityError)
    }
  }
}

createErrorFromCodeLookup.set(0xa, () => new UnexpectedReserveAuthorityError())
createErrorFromNameLookup.set(
  'UnexpectedReserveAuthority',
  () => new UnexpectedReserveAuthorityError()
)

/**
 * Attempts to resolve a custom program error from the provided error code.
 * @category Errors
 * @category generated
 */
export function errorFromCode(code: number): MaybeErrorWithCode {
  const createError = createErrorFromCodeLookup.get(code)
  return createError != null ? createError() : null
}

/**
 * Attempts to resolve a custom program error from the provided error name, i.e. 'Unauthorized'.
 * @category Errors
 * @category generated
 */
export function errorFromName(name: string): MaybeErrorWithCode {
  const createError = createErrorFromNameLookup.get(name)
  return createError != null ? createError() : null
}
