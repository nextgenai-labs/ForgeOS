#!/usr/bin/env bash

set -e

echo "=================================="
echo " ForgeOS Agent Validator"
echo "=================================="
echo

FAILED=0
PASSED=0

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
        echo "✓ $NAME"
        PASSED=$((PASSED+1))
    else
        echo "✗ $NAME"
        FAILED=$((FAILED+1))
    fi
done

echo
echo "Passed : $PASSED"
echo "Failed : $FAILED"

[ $FAILED -eq 0 ]
