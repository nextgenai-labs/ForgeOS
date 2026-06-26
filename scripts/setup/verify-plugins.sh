#!/usr/bin/env bash

set -e

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/../.." && pwd)"

source "$ROOT/scripts/lib/common.sh"
source "$ROOT/scripts/lib/colors.sh"
source "$ROOT/scripts/lib/output.sh"
source "$ROOT/scripts/lib/validator.sh"

title "ForgeOS Plugin Validator"

for plugin in "$ROOT"/plugins/*
do
    [ -d "$plugin" ] || continue

    name=$(basename "$plugin")

    required=(
        "README.md"
    )

    ok=true

    for file in "${required[@]}"
    do
        if [ ! -f "$plugin/$file" ]; then
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
