# Color encodings

In order to represent a color digitally, one needs a color encoding. This page
will discuss the various encodings.

## RGB

**RGB** is an encoding where a color is encoded as a mix of red, green and blue.
These can be presented with a char tuplet, i.e. `rgb(255,0,0)` would represent
red.

There is also **RGBA** which supports an alpha channel, for example
`rgba(255,0,0,0.5)` which would be red with 50% opacity.

### Hexadecimal color

A **hexadecimal color**, referred to as **hex codes** or **hex triplet**, is a
RGB encoding that uses hexadecimal numbers instead of decimals ones. This means
that each color component is encoded in the interval from `00` to `FF`. For
example, `#FF0000` would correspond to red (or `rgb(255,0,0)`).

Hexadecimal color also supports an alpha channel, meaning the color `#FF000080`
is a valid color - it is red which 50% opacity.

## HSL

**HSL** is an RGB alternative which is intended to be more more readable for
humans. It relies on the basic properties hue, saturation and luminance to
define a color. An example would be `hsl(120,100%,50%)`, where 120 correspond to
green, `100%` means full saturation and `50%` means a neutral luminance for the
color.

### HSV/HSB and HSI

There are other verions of HSL, such as HSV/HSB and HSI that define luminance
differently. This might have some use cases, but is not common in most software
development.
