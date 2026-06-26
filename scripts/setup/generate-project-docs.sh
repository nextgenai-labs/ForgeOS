#!/usr/bin/env bash

set -e

echo "==================================="
echo " ForgeOS Documentation Generator"
echo "==================================="

declare -A DOCS=(
["README.md"]="docs/ai/000-MASTER-SYSTEM.md"
["COMPANY.md"]="docs/ai/001-COMPANY.md"
["VISION.md"]="docs/ai/002-VISION.md"
["MISSION.md"]="docs/ai/003-MISSION.md"
["ARCHITECTURE.md"]="docs/ai/010-ARCHITECTURE.md"
["ROADMAP.md"]="docs/ai/027-ROADMAP.md"
["CONTRIBUTING.md"]="docs/ai/030-CONTRIBUTING-AI.md"
)

for DEST in "${!DOCS[@]}"
do
    SRC="${DOCS[$DEST]}"

    if [[ -f "$SRC" ]]; then

        {
            echo "<!--"
            echo "AUTO-GENERATED FILE"
            echo
            echo "DO NOT EDIT DIRECTLY."
            echo
            echo "Source:"
            echo "$SRC"
            echo "-->"
            echo
            cat "$SRC"

        } > "$DEST"

        echo "Generated $DEST"

    else

        echo "Missing source: $SRC"

    fi

done

echo
echo "Done."
