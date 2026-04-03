export const GAME_TITLE = 'Wonster-ita'

export const WIN_MESSAGES = [
  'Sei un grande!',
  'Mi piaci',
  'Sei un figo',
  "Vuoi essere mio amico?",
  'Sei bellissimo',
  'Mi piacciono gli umani',
]
export const GAME_COPIED_MESSAGE = 'Gioco copiato negli appunti'
export const NOT_ENOUGH_LETTERS_MESSAGE = 'Manca qualche lettera'
export const WORD_NOT_FOUND_MESSAGE = 'Parola sconosciuta'
export const CORRECT_WORD_MESSAGE = (solution: string) =>
  `La parola era ${solution}`
export const WRONG_SPOT_MESSAGE = (guess: string, position: number) =>
  `Devi usare ${guess} in posizione ${position}`
export const NOT_CONTAINED_MESSAGE = (letter: string) =>
  `Il tentativo deve contenere ${letter}`
export const ENTER_TEXT = 'Invio'
export const DELETE_TEXT = 'Canc'
export const STATISTICS_TITLE = 'Statistica'
export const GUESS_DISTRIBUTION_TEXT = 'Distribuzione Tentativi'
export const NEW_WORD_TEXT = 'Prossimo mostro in'
export const SHARE_TEXT = 'Condividi'
export const SHARE_FAILURE_TEXT = 'Impossibile condividere il risultato.'
export const TOTAL_TRIES_TEXT = 'Totale'
export const SUCCESS_RATE_TEXT = 'Successo'
export const CURRENT_STREAK_TEXT = 'Sequenza attuale'
export const BEST_STREAK_TEXT = 'Miglior sequenza'
export const WIN_INFO_MESSAGE = (name: string, tries: number, limit: number) =>
  `${name} ha indovinato la parola del giorno! 🎉 ${tries}/${limit}`
export const LOSE_INFO_MESSAGE = (name: string, limit: number) =>
  `${name} non ha indovinato la parola del giorno 😅 X/${limit}`
