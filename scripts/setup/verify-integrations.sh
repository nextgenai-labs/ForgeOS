#!/usr/bin/env bash

set -e

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/../.." && pwd)"

source "$ROOT/scripts/lib/common.sh"
source "$ROOT/scripts/lib/colors.sh"
source "$ROOT/scripts/lib/output.sh"
source "$ROOT/scripts/lib/validator.sh"

title "ForgeOS Integration Validator"

for integration in "$ROOT"/integrations/*
do
    [ -d "$integration" ] || continue

    name=$(basename "$integration")

    required=(
        "README.md"
    )

    ok=true

    for file in "${required[@]}"
    do
        if [ ! -f "$integration/$file" ]; then
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
