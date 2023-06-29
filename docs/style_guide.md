---
layout: default
header: Indentify
title: Indentify official documentation
---
# Project style & naming convention

Describes exclusively stylistic solutions and conventions to simplify work and increase productivity.

## Documentation

Each documentation file must be:

- in `md` format
- NAMED_IN_UPPER_SNAKE_CASE

Any documentation file must match the following format:

1. Title
2. Short file description
3. h2 topics and their content

**TIP:** *it is better to have several files with links to one another than one huge file.*

Custom documentation entities in format `Entity - template`:

- Documentation file header
```
# H1
File description.
```

- Tip
```
**TIP:** *some tip.*
```

## Commits

Commit comments must match the following format:

```
label/s: Description
```

Labels are short designations of actions performed in the commits, the full content and purpose of which is known to all project participants. This will help to make more succinct descriptions and reduce the effort spent on them.There can be several labels in one comment.

Available labels:

- integration
- replace
- move
- remove
- fix
- config
- initial
- docs
- upgrade
- globals
- code
- localization
- media
- other

**TIP:** *divide commits so that they contain one clear logical change. Don't make multiple changes in one commit.*

## Branches

Branches should be named in:

- lower-kebab-case

if you have a subbranches, name it according to the example:

```
form (main branch)
  |
  form-submit-button (subbranch)
    |
    form-submit-button-tip (3-level nested branch)
```
