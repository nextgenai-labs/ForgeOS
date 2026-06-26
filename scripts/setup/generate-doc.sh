#!/usr/bin/env bash

set -e

FORCE=false

if [[ "$1" == "--force" ]]; then
    FORCE=true
    shift
fi

FILE="$1"
TITLE="$2"

if [[ -z "$FILE" || -z "$TITLE" ]]; then
    echo "Usage:"
    echo "./generate-doc.sh [--force] file title"
    exit 1
fi

if [[ -f "$FILE" && "$FORCE" = false ]]; then
    echo "Already exists."
    exit 0
fi

mkdir -p "$(dirname "$FILE")"

cat > "$FILE" <<EOF
# ${TITLE}

> Status: Draft

---

## Overview

Describe the purpose.

---

## Responsibilities

-

---

## Architecture

-

---

## Interfaces

-

---

## Dependencies

-

---

## Future Work

-

---

## References

-
EOF

echo "Created $FILE"
