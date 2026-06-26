#!/usr/bin/env bash

success() {
    printf "${GREEN}✓ %s${RESET}\n" "$1"
}

error() {
    printf "${RED}✗ %s${RESET}\n" "$1"
}

warning() {
    printf "${YELLOW}! %s${RESET}\n" "$1"
}

info() {
    printf "${BLUE}• %s${RESET}\n" "$1"
}

title() {
    echo
    printf "${CYAN}%s${RESET}\n" "$1"
    echo
}
