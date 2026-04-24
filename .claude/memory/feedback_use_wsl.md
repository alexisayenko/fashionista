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
- **Git is a special case of this rule.** The GitHub PAT lives only in `~/.config/gh/hosts.yml` inside WSL (wired to git via `gh auth setup-git`). It is NOT in Windows Credential Manager and NOT in Git Credential Manager on the Windows side. Running `git push`/`git fetch` from Windows git-bash under the `alex-claude` account fails with "fatal: could not read Username" / cancelled credential dialog because GCM's store is empty for that account. Always run git via `wsl -d Debian -e bash -c "cd /mnt/c/Alex/fashionista && git <cmd>"` (or inside a WSL shell). Same applies to committing — WSL git-config has the correct identity (`Alex <alex.isayenko@gmail.com>`) and SSH-signing setup; Windows-side git-config does not, so Windows-side commits will have the wrong committer and won't get the Verified badge.
- **Read-only git is fine from Windows-side Bash.** `git status`, `git log`, `git diff`, `git show`, `git cat-file`, `git config --get` need no identity/credentials and write no history, so running them via the default Git Bash is OK and avoids an unnecessary WSL hop. Writes (`commit`, `push`, `fetch`, `pull`, `rebase`, `tag`, `merge`, `cherry-pick`) must go via WSL.
- **Recovering an accidentally-Windows-side commit** (wrong author / unsigned, pre-push): `wsl -d Debian -e bash -lc "cd /mnt/c/Alex/fashionista && git commit --amend --no-edit --reset-author"`. `--reset-author` picks up WSL's `Alex <alex.isayenko@gmail.com>`, and `commit.gpgsign=true` in WSL's `~/.gitconfig` signs it automatically — no `-S` needed. Verify with `git log -1 --pretty='%h %G? %an <%ae>'` from WSL; `G` = good signature.
