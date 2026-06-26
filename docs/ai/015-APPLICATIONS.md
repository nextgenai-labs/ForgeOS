# ForgeOS Applications

Version: 1.0
Status: Living Specification
Owner: NextGenAI Labs

---

# Purpose

ForgeOS consists of multiple applications.

Applications are the user-facing layer of the platform.

Applications consume Runtime, Services, Packages, SDKs, and Plugins.

Applications should never contain duplicated business logic.

Business logic belongs inside packages and services.

---

# Application Philosophy

Every application should be:

Independent

Modular

Secure

Responsive

Accessible

Observable

Maintainable

Well documented

Applications are clients of the ForgeOS platform.

---

# Current Applications

ForgeOS V1 includes:

Web

Dashboard

API

Discord

Documentation

Future applications can be added without changing existing architecture.

---

# Overall Architecture

User

↓

Application

↓

API

↓

Services

↓

Runtime

↓

Packages

↓

Plugins

↓

External Providers

---

# Web Application

Directory

apps/web

Purpose

Public website.

Responsibilities

Landing page

Features

Pricing

Documentation links

Blog

Downloads

Announcements

Careers

Roadmap

Community links

Target Users

Visitors

Customers

Contributors

---

# Dashboard Application

Directory

apps/dashboard

Purpose

Organization control panel.

Responsibilities

Agent monitoring

Project management

Workflow execution

Memory search

Analytics

Settings

Permissions

Model selection

Logs

Administration

Target Users

Founder

Administrators

Future team members

---

# API Application

Directory

apps/api

Purpose

Expose ForgeOS capabilities.

Responsibilities

REST API

GraphQL API

Authentication

Authorization

Rate limiting

API documentation

Webhooks

SDK support

Future MCP endpoints

Consumers

Web

Dashboard

Discord

SDKs

Third-party integrations

---

# Discord Application

Directory

apps/discord

Purpose

Integrate ForgeOS with Discord.

Responsibilities

Slash commands

Department notifications

Agent interaction

Workflow notifications

Research alerts

Issue tracking

Community interaction

Future voice integration

Primary User

Founder

Community

Developers

---

# Documentation Application

Directory

apps/docs

Purpose

Documentation portal.

Responsibilities

Architecture docs

Developer guides

API reference

Tutorials

Examples

Contribution guides

Release notes

Internal documentation

Target Users

Developers

Contributors

Researchers

---

# Shared Design Principles

Every application should:

Reuse packages

Reuse UI

Use shared authentication

Use shared permissions

Use shared configuration

Share runtime services

Remain independently deployable

---

# Authentication

Authentication is centralized.

Applications never implement custom authentication independently.

Authentication is provided by:

packages/auth

Permission Engine

Identity Service

---

# Authorization

Applications must validate:

User

Role

Permissions

Organization

Resource ownership

Every request is permission-aware.

---

# Configuration

Applications load configuration from:

packages/config

Environment Variables

Secrets

Runtime Configuration

Applications should never hardcode secrets.

---

# Logging

Applications generate:

Application Logs

Audit Logs

Security Logs

Performance Logs

Error Logs

Logs are centralized.

---

# Monitoring

Applications expose:

Health

Metrics

Latency

Errors

Version

Build Number

Runtime Status

---

# Deployment

Each application is independently deployable.

Supported Targets

Docker

Docker Compose

Cloud

Local Development

Future Kubernetes

---

# Future Applications

Future applications may include:

Desktop

Mobile

CLI

VS Code Extension

JetBrains Plugin

Browser Extension

Enterprise Portal

Voice Console

Admin Console

---

# Development Rules

Applications should remain thin.

Business logic belongs inside:

Packages

Runtime

Services

Plugins

Applications coordinate user interaction only.

---

# Versioning

Every application follows Semantic Versioning.

Major

Breaking changes

Minor

New functionality

Patch

Bug fixes

---

# Final Principle

Applications represent the presentation layer of ForgeOS.

They provide interfaces for humans while relying on the shared runtime, services, packages, and plugins for all business logic.

This separation keeps the platform modular, maintainable, and scalable.

