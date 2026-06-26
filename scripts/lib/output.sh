#!/usr/bin/env bash

source "$(dirname "$0")/colors.sh"

success() {
    printf "${GREEN}✓ %s${RESET}\n" "$1"
}

error() {
    printf "${RED}✗ %s${RESET}\n" "$1"
}

warning() {
    printf "${YELLOW}! %s${RESET}\n" "$1"
}

title() {
    printf "\n${CYAN}%s${RESET}\n\n" "$1"
}
