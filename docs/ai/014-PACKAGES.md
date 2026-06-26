# ForgeOS Package Architecture

Version: 1.0
Status: Living Specification
Owner: NextGenAI Labs

---

# Purpose

ForgeOS is organized as a monorepo.

Reusable code belongs inside packages.

Applications, services, SDKs, and runtime components consume packages instead of duplicating logic.

Packages should remain independent, reusable, versioned, and well documented.

---

# Package Philosophy

Packages should be:

Reusable

Small

Independent

Well documented

Versioned

Loosely coupled

Strongly typed

Well tested

Packages should never contain application-specific logic.

---

# Package Hierarchy

Applications

↓

Services

↓

Runtime

↓

Packages

↓

Shared Utilities

Packages should never depend on applications.

Packages may depend on other packages when appropriate.

---

# Current Packages

ForgeOS currently defines the following packages.

core

shared

types

utils

config

workflow

memory

database

auth

permissions

queue

scheduler

router

events

logger

models

ui

Additional packages may be introduced as the platform grows.

---

# Core Package

Directory

packages/core

Purpose

Shared business logic.

Responsibilities

Core interfaces

Base classes

Common abstractions

Runtime contracts

---

# Shared Package

Directory

packages/shared

Purpose

Reusable code shared by every project.

Examples

Constants

Helpers

Utilities

Validation

Shared configuration

---

# Types Package

Directory

packages/types

Purpose

Shared TypeScript types.

Contains

Interfaces

Enums

Schemas

DTOs

API contracts

Runtime contracts

---

# Utils Package

Directory

packages/utils

Purpose

Generic helper functions.

Examples

Formatting

Parsing

Validation

Retry logic

Date utilities

String utilities

Collections

---

# Config Package

Directory

packages/config

Purpose

Centralized configuration.

Contains

Environment loading

Runtime configuration

Model configuration

Service configuration

Plugin configuration

---

# Workflow Package

Directory

packages/workflow

Purpose

Workflow abstractions.

Responsibilities

Workflow models

Task models

Execution contracts

Workflow validation

Workflow serialization

---

# Memory Package

Directory

packages/memory

Purpose

Memory abstraction.

Responsibilities

Memory interfaces

Memory providers

Indexing

Search contracts

Retrieval

---

# Database Package

Directory

packages/database

Purpose

Database access layer.

Responsibilities

ORM

Repositories

Migrations

Database models

Transactions

---

# Auth Package

Directory

packages/auth

Purpose

Authentication.

Responsibilities

Login

Sessions

Tokens

Identity

Authentication middleware

---

# Permissions Package

Directory

packages/permissions

Purpose

Authorization.

Responsibilities

Policies

Permission evaluation

Roles

Access control

Least privilege

---

# Queue Package

Directory

packages/queue

Purpose

Background jobs.

Responsibilities

Task queues

Retries

Scheduling

Dead-letter queues

Workers

---

# Scheduler Package

Directory

packages/scheduler

Purpose

Scheduled execution.

Responsibilities

Cron jobs

Recurring jobs

Maintenance tasks

Cleanup

Automation

---

# Router Package

Directory

packages/router

Purpose

Model routing.

Responsibilities

Provider selection

Fallback

Cost optimization

Latency optimization

Load balancing

---

# Events Package

Directory

packages/events

Purpose

Event definitions.

Contains

Event contracts

Publishers

Subscribers

Event schemas

Message formats

---

# Logger Package

Directory

packages/logger

Purpose

Structured logging.

Responsibilities

Application logs

Audit logs

Security logs

Performance logs

JSON formatting

---

# Models Package

Directory

packages/models

Purpose

Model definitions.

Contains

LLM metadata

Provider metadata

Capabilities

Pricing

Context limits

Features

---

# UI Package

Directory

packages/ui

Purpose

Shared UI components.

Responsibilities

Buttons

Forms

Layouts

Cards

Design system

Reusable components

---

# Dependency Rules

Applications may depend on:

Packages

Runtime

Services

SDKs

Services may depend on:

Packages

Runtime

Plugins

Packages may depend on:

Shared Packages

Types

Utilities

Packages must never depend on:

Applications

User interfaces

Business workflows

Avoid circular dependencies.

---

# Versioning

Packages use semantic versioning.

MAJOR

Breaking changes.

MINOR

New functionality.

PATCH

Bug fixes.

---

# Testing

Every package should contain:

Unit tests

Documentation

Examples

Type definitions

Public exports

Packages should be independently testable.

---

# Build Rules

Every package should build independently.

No package should require another application to compile.

Build artifacts should be deterministic.

---

# Future Packages

Future additions may include

AI

Planning

Voice

Vision

Billing

Analytics

Notifications

Enterprise

Compliance

Simulation

---

# Final Principle

Packages are the foundation of the ForgeOS monorepo.

They provide reusable, maintainable building blocks that power applications, services, runtime engines, plugins, and SDKs without creating duplication.

