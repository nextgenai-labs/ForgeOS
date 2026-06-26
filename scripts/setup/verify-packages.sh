#!/usr/bin/env bash

set -e

source scripts/lib/common.sh
source scripts/lib/colors.sh
source scripts/lib/output.sh
source scripts/lib/validator.sh

title "ForgeOS Agent Validator"

set -e

echo "=================================="
echo " ForgeOS Package Validator"
echo "=================================="
echo

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
        success "$NAME"
        pass
    else
        error "$NAME"
        fail
    fi
done

echo
echo "Passed : $PASSED"
echo "Failed : $FAILED"

[ $FAILED -eq 0 ]
