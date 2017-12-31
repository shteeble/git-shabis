/**
 * Convert string cases between camel case, pascal case, snake case etc...
 * @module stringcase
 */

'use strict'

let d = (module) => module && module.default || module

module.exports = {
  get camelcase () { return d(require('./camelcase')) },
  get capitalcase () { return d(require('./capitalcase')) },
  get constcase () { return d(require('./constcase')) },
  get cramcase () { return d(require('./cramcase')) },
  get decapitalcase () { return d(require('./decapitalcase')) },
  get enumcase () { return d(require('./enumcase')) },
  get lowercase () { return d(require('./lowercase')) },
  get pascalcase () { return d(require('./pascalcase')) },
  get pathcase () { return d(require('./pathcase')) },
  get sentencecase () { return d(require('./sentencecase')) },
  get snakecase () { return d(require('./snakecase')) },
  get spacecase () { return d(require('./spacecase')) },
  get spinalcase () { return d(require('./spinalcase')) },
  get titlecase () { return d(require('./titlecase')) },
  get trimcase () { return d(require('./trimcase')) },
  get uppercase () { return d(require('./uppercase')) }
}
