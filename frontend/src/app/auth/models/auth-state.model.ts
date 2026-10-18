export type AuthStateModel =
    | 'unknown'         // session status hasn't been checked yet.
    | 'authenticated'   // the server confirmed a valid session.
    | 'unauthenticated' // the server confirmed no valid session.
    | 'unavailable'     // the server couldn't be reached or returned an unexpected error.
