#!/usr/bin/env bash

set -e

source scripts/lib/common.sh
source scripts/lib/colors.sh
source scripts/lib/output.sh
source scripts/lib/validator.sh

title "ForgeOS Agent Validator"

set -e

echo "=================================="
echo " ForgeOS Agent Validator"
echo "=================================="
echo

for agent in agents/*/*
do
    [ -d "$agent" ] || continue

    NAME=$(basename "$agent")

    REQUIRED=(
        "README.md"
        "agent.json"
        "permissions.json"
        "system-prompt.md"
        "tools.json"
    )

    OK=true

    for file in "${REQUIRED[@]}"
    do
        if [ ! -f "$agent/$file" ]; then
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
