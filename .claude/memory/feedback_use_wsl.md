---
name: Install and run tools in WSL
description: All project tools, packages, dependencies, and CLIs must be installed and invoked via WSL, not Windows/Git Bash
type: feedback
originSessionId: 783acc85-8b52-43b8-a9b7-1c50fc32f2ee
---
Install all tools, packages, dependencies, and CLIs for this project inside **WSL**, not on Windows directly and not via Git Bash (MSYS/MinGW). When those tools need to be run, run them through WSL as well.

**Why:** User explicitly stated this on 2026-04-24 as the project convention. Keeps the toolchain consistent in a Linux environment rather than fragmenting across Windows + Git Bash + WSL.

**How to apply:**
- Default shell for installing or running project tooling (gh, node, npm, python, docker, build/test commands, etc.) is WSL. Use `wsl <command>` from the Bash tool, or `wsl -e bash -lc "<command>"` for commands that need a login shell / proper PATH.
- Do NOT suggest `winget install`, Chocolatey, or installing on Windows directly for project tooling.
- The default Bash tool in this harness is Git Bash (MSYS/MinGW) — it is fine for filesystem operations on `c:\Alex\fashionista`, but project commands should be routed through WSL.
- When referencing paths inside WSL, remember Windows paths are accessible as `/mnt/c/Alex/fashionista`.
- If a tool appears missing in Git Bash, do not install it there — check/install it in WSL instead.
