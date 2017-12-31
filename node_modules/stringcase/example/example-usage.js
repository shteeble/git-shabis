'use strict'

const {
  camelcase,
  capitalcase,
  constcase,
  cramcase,
  decapitalcase,
  enumcase,
  lowercase,
  pascalcase,
  pathcase,
  sentencecase,
  snakecase,
  spacecase,
  spinalcase,
  titlecase,
  trimcase,
  uppercase
} = require('stringcase')

// ------------------------
// Convert to camelcase
// ------------------------
camelcase('foo_bar') // => "fooBar"
camelcase('FOO_BAR') // => "fooBar"
camelcase('fooBar') // => "fooBar"
camelcase('FooBar') // => "fooBar"

// ------------------------
// Convert to capitalcase
// ------------------------
capitalcase('foo_bar') // => "Foo_bar"
capitalcase('FOO_BAR') // => "FOO_BAR"
capitalcase('fooBar') // => "FooBar"
capitalcase('FooBar') // => "FooBar"

// ------------------------
// Convert to constcase
// ------------------------
constcase('foo_bar') // => "FOO_BAR"
constcase('FOO_BAR') // => "FOO_BAR"
constcase('fooBar') // => "FOO_BAR"
constcase('FooBar') // => "FOO_BAR"

// ------------------------
// Convert to cramcase
// ------------------------
cramcase('foo_bar') // => "foobar"
cramcase('FOO_BAR') // => "foobar"
cramcase('fooBar') // => "foobar"
cramcase('FooBar') // => "foobar"

// ------------------------
// Convert to decapitalcase
// ------------------------
decapitalcase('foo_bar') // => "foo_bar"
decapitalcase('FOO_BAR') // => "fOO_BAR"
decapitalcase('fooBar') // => "fooBar"
decapitalcase('FooBar') // => "fooBar"

// ------------------------
// Convert to enumcase
// ------------------------
enumcase('foo_bar') // => "foo:bar"
enumcase('FOO_BAR') // => "foo:bar"
enumcase('fooBar') // => "foo:bar"
enumcase('FooBar') // => "foo:bar"

// ------------------------
// Convert to lowercase
// ------------------------
lowercase('foo_bar') // => "foo_bar"
lowercase('FOO_BAR') // => "foo_bar"
lowercase('fooBar') // => "foobar"
lowercase('FooBar') // => "foobar"

// ------------------------
// Convert to pascalcase
// ------------------------
pascalcase('foo_bar') // => "FooBar"
pascalcase('FOO_BAR') // => "FooBar"
pascalcase('fooBar') // => "FooBar"
pascalcase('FooBar') // => "FooBar"

// ------------------------
// Convert to pathcase
// ------------------------
pathcase('foo_bar') // => "foo/bar"
pathcase('FOO_BAR') // => "foo/bar"
pathcase('fooBar') // => "foo/bar"
pathcase('FooBar') // => "foo/bar"

// ------------------------
// Convert to sentencecase
// ------------------------
sentencecase('foo_bar') // => "Foo bar"
sentencecase('FOO_BAR') // => "Foo bar"
sentencecase('fooBar') // => "Foo bar"
sentencecase('FooBar') // => "Foo bar"

// ------------------------
// Convert to snakecase
// ------------------------
snakecase('foo_bar') // => "foo_bar"
snakecase('FOO_BAR') // => "foo_bar"
snakecase('fooBar') // => "foo_bar"
snakecase('FooBar') // => "foo_bar"

// ------------------------
// Convert to spacecase
// ------------------------
spacecase('foo_bar') // => "foo bar"
spacecase('FOO_BAR') // => "foo bar"
spacecase('fooBar') // => "foo bar"
spacecase('FooBar') // => "foo bar"

// ------------------------
// Convert to spinalcase
// ------------------------
spinalcase('foo_bar') // => "foo-bar"
spinalcase('FOO_BAR') // => "foo-bar"
spinalcase('fooBar') // => "foo-bar"
spinalcase('FooBar') // => "foo-bar"

// ------------------------
// Convert to titlecase
// ------------------------
titlecase('foo_bar') // => "Foo Bar"
titlecase('FOO_BAR') // => "Foo Bar"
titlecase('fooBar') // => "Foo Bar"
titlecase('FooBar') // => "Foo Bar"

// ------------------------
// Convert to trimcase
// ------------------------
trimcase('foo_bar') // => "foo_bar"
trimcase('FOO_BAR') // => "FOO_BAR"
trimcase('fooBar') // => "fooBar"
trimcase('FooBar') // => "FooBar"

// ------------------------
// Convert to uppercase
// ------------------------
uppercase('foo_bar') // => "FOO_BAR"
uppercase('FOO_BAR') // => "FOO_BAR"
uppercase('fooBar') // => "FOOBAR"
uppercase('FooBar') // => "FOOBAR"

