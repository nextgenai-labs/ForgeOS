#!/usr/bin/env bash

PASSED=0
FAILED=0

pass() {
    PASSED=$((PASSED+1))
}

fail() {
    FAILED=$((FAILED+1))
}

summary() {
    echo
    echo "Passed : $PASSED"
    echo "Failed : $FAILED"

    [ "$FAILED" -eq 0 ]
}
