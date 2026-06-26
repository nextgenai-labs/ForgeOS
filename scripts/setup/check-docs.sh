#!/usr/bin/env bash

set -e

echo "========================================="
echo " ForgeOS Documentation Quality Checker"
echo "========================================="

ERRORS=0

echo
echo "Checking Markdown files..."

find . \
-type f \
-name "*.md" \
-not -path "./node_modules/*" \
-not -path "./.git/*" |
while read FILE
do

    if [[ ! -s "$FILE" ]]; then
        echo "[EMPTY] $FILE"
        ERRORS=$((ERRORS+1))
    fi

    if grep -qi "TODO\|FIXME\|Lorem ipsum" "$FILE"; then
        echo "[PLACEHOLDER] $FILE"
        ERRORS=$((ERRORS+1))
    fi

    if ! grep -q "^# " "$FILE"; then
        echo "[NO TITLE] $FILE"
        ERRORS=$((ERRORS+1))
    fi

done

echo
echo "Checking README coverage..."

find . \
-type d \
-not -path "./.git/*" \
-not -path "./node_modules/*" |
while read DIR
do

    if [[ ! -f "$DIR/README.md" ]]; then
        echo "[MISSING README] $DIR"
    fi

done

echo
echo "Documentation check complete."

exit 0
