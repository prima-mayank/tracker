# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Structure
scalable, modular, production-ready on everything, no exceptions.
                                           
Monorepo with two top-level directories:

- `frontend/` — Next.js App Router (to be scaffolded)
- `backend/` — Express API (to be scaffolded)

Both directories are currently empty. Update this file once scaffolding is complete.

## Expected Stack

Per global CLAUDE.md conventions:
- **Frontend**: Next.js (App Router), TypeScript, Zustand, React Hook Form + Zod, Tailwind
- **Backend**: Express, TypeScript, Prisma ORM
- **Package manager**: pnpm
- **Test framework**: Vitest
- **Shared types/validators**: `shared/` directory between frontend and backend


## Git Workflow — HARD RULE, NO EXCEPTIONS

- After every logical chunk of work is done (a layer, a feature, a group of related files) — STOP, commit, push, then continue
- Do NOT write more than one chunk without committing in between
- Commit message format: conventional commits (`chore:`, `feat:`, `fix:`)
- Push to GitHub after every commit (`git push origin <branch>`)
- Always on a feature branch, never main
- If you forget this rule, the user will call it out — do not let that happen
