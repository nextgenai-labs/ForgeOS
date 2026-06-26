#!/usr/bin/env bash

set -e

ROOT="$(pwd)"

echo "========================================"
echo " ForgeOS Placeholder Generator"
echo "========================================"

find "$ROOT" -type f \( -name "*.md" \) | while read file
do
    if [ ! -s "$file" ]; then

        NAME=$(basename "$file")

        cat > "$file" <<EOF
# ${NAME%.*}

## Overview

This document is part of the ForgeOS architecture.

## Purpose

Describe the purpose of this document.

## Responsibilities

-

## Related Files

-

## Status

Skeleton

---

Generated automatically by ForgeOS.
EOF

        echo "Generated $file"

    fi
done

echo
echo "Completed."
