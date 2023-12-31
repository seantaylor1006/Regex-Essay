# Regex Essay

What do web-scrappers, text-processors, and pattern dectectors for things like names and emails all have in common? They all use Regular Expressions, also referred to as RegEx or RegExp.

## Summary

Regex has a variety of different versions used for different specifications. Each of these will be described in the following chapters.

## Table of Contents

- [Anchors](#anchors)
- [Quantifiers](#quantifiers)
- [OR Operator](#or-operator)
- [Character Classes](#character-classes)
- [Flags](#flags)
- [Grouping and Capturing](#grouping-and-capturing)
- [Bracket Expressions](#bracket-expressions)
- [Greedy and Lazy Match](#greedy-and-lazy-match)
- [Boundaries](#boundaries)
- [Back-references](#back-references)
- [Look-ahead and Look-behind](#look-ahead-and-look-behind)

## Regex Components

The most basic components of a regular expression are two slashes '//' with a piece of string in the middle. If it's the length of a word (for example, /cat/ among a string with 'the cat jumped'), it will highlight the word in the string. Highlighting a smaller piece (such as a letter) of the string is also possible if you put a 'g' at the end of the 2nd slash (ex. /c/g), as it becomes global.

### Anchors

Anchors don't match characters but find something in strings based on their position. 
Carets (^) point out what is in the beginning of a string. 
Dollar signs ($), on the other hand, point out what is at the end of a string.

### Quantifiers

Quantifiers, as the "quant" in the name implies, are all about how characters can be grouped together. 
The plus sign (+) is used to indicate that the character before it should occur one or more times in order to be highlighted. 
The question mark (?) indicates an either-or state for the characters before it. It can occur 0 times or 1 time, but won't highlight for more than one.
The asterisk (*) acts as both a + and ? in that it finds a character that occurs 0 or more times, not limited to any quantity.
The curly brace ({}) indicates characters occuring a specific amount of times before the braces based on the number put in the brace. For example, if a 1 is in the curly brace ({1}), it will highlight the characters in a string if in the string it occurs exactly once.
A curly brace with a comma ({,}) works similarly to bare curly braces but will accept more instances than the number inside (but not less).
If the curly brace with a comma has a number past it ({2,5}), it will find no less than the number before the comma and no more than the number after (in an instance of /a{2,5}, it would find a string with no less than 2 instances of 'a' but no more than 5).

### OR Operator



### Character Classes

### Flags

### Grouping and Capturing

### Bracket Expressions

### Greedy and Lazy Match

### Boundaries

### Back-references

### Look-ahead and Look-behind

## Author

A short section about the author with a link to the author's GitHub profile (replace with your information and a link to your profile)
