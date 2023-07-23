// Warning: Do not proceed if you do not wish to see offensive words.  This list is to add on additional words that were missed by the profane-words library.  Used to keep users from polluting the leaderboard with profanity.

import badWords from 'profane-words';

// The profane-words library did not account for exclamation marks as I
const additionalBadWords = [
  'd!ck',
  'n!gger',
  'n!gga',
  'sh!tty',
  '$h!t',
  'p!ss,',
  't!ts',
]

const allBadWords = badWords.concat(additionalBadWords);

export default allBadWords;
