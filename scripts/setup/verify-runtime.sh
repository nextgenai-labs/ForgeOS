#!/usr/bin/env bash

set -e

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/../.." && pwd)"

source "$ROOT/scripts/lib/common.sh"
source "$ROOT/scripts/lib/colors.sh"
source "$ROOT/scripts/lib/output.sh"
source "$ROOT/scripts/lib/validator.sh"

title "ForgeOS Runtime Validator"

for engine in "$ROOT"/runtime/*
do
    [ -d "$engine" ] || continue

    name=$(basename "$engine")

    required=(
        "README.md"
        "src/index.ts"
    )

    ok=true

    for file in "${required[@]}"
    do
        if [ ! -f "$engine/$file" ]; then
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