#!/usr/bin/env bash

set -e

echo "=================================="
echo " ForgeOS Package Validator"
echo "=================================="
echo

FAILED=0
PASSED=0

for pkg in packages/*
do
    [ -d "$pkg" ] || continue

    NAME=$(basename "$pkg")

    REQUIRED=(
        "package.json"
        "README.md"
        "src/index.ts"
    )

    OK=true

    for file in "${REQUIRED[@]}"
    do
        if [ ! -f "$pkg/$file" ]; then
            OK=false
        fi
    done

    if $OK
    then
        printf "✓ %-20s\n" "$NAME"
        PASSED=$((PASSED+1))
    else
        printf "✗ %-20s\n" "$NAME"
        FAILED=$((FAILED+1))
    fi
done

echo
echo "Passed : $PASSED"
echo "Failed : $FAILED"

[ $FAILED -eq 0 ]
