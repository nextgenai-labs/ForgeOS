#!/usr/bin/env bash

set -e

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/../.." && pwd)"

source "$ROOT/scripts/lib/common.sh"
source "$ROOT/scripts/lib/colors.sh"
source "$ROOT/scripts/lib/output.sh"
source "$ROOT/scripts/lib/validator.sh"

title "ForgeOS Service Validator"

for service in "$ROOT"/services/*
do
    [ -d "$service" ] || continue

    name=$(basename "$service")

    required=(
        "README.md"
        "src/index.ts"
    )

    ok=true

    for file in "${required[@]}"
    do
        if [ ! -f "$service/$file" ]; then
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
