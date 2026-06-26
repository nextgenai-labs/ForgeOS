#!/usr/bin/env bash

set -e

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/../.." && pwd)"

source "$ROOT/scripts/lib/common.sh"
source "$ROOT/scripts/lib/colors.sh"
source "$ROOT/scripts/lib/output.sh"
source "$ROOT/scripts/lib/validator.sh"

title "ForgeOS Application Validator"

for app in "$ROOT"/apps/*
do
    [ -d "$app" ] || continue

    name=$(basename "$app")

    required=(
        "README.md"
        "package.json"
        "src/README.md"
    )

    ok=true

    for file in "${required[@]}"
    do
        if [ ! -f "$app/$file" ]; then
            ok=false
        fi
    done

    if $ok
    then
        success "$name"
        pass
    else
        error "$name"
        fail
    fi
done

summary
