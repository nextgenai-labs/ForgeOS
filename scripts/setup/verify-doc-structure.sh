#!/usr/bin/env bash

set -e

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/../.." && pwd)"

source "$ROOT/scripts/lib/common.sh"
source "$ROOT/scripts/lib/colors.sh"
source "$ROOT/scripts/lib/output.sh"
source "$ROOT/scripts/lib/validator.sh"

title "ForgeOS Repository Structure Validator"

DIRS=(
docs
agents
runtime
services
packages
apps
plugins
integrations
memory
tests
)

for dir in "${DIRS[@]}"
do
    if [ -d "$ROOT/$dir" ]; then
        success "$dir"
        pass
    else
        error "$dir"
        fail
    fi
done

summary
