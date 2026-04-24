---
name: Use WSL 1, not WSL 2
description: On this machine, Symantec Endpoint Protection blocks WSL 2 — WSL distros must be WSL 1
type: project
---

WSL distros on this machine must run as **WSL 1**, not WSL 2.

**Why:** Symantec Endpoint Protection on the user's work machine blocks WSL 2 networking/operation. Stated by the user on 2026-04-24.

**How to apply:**
- When installing a new distro, after install run `wsl --set-version <Distro> 1` (from pwsh, with `wsl --shutdown` first if the distro is running).
- Verify with `wsl -l -v` — the `VERSION` column must show `1`.
- Do not suggest WSL 2–only features (e.g. systemd in WSL 2, mirrored networking, `wsl --mount` of physical disks, `.wslconfig` memory/CPU limits) as solutions here — they won't work.
- File performance trade-off: WSL 1 is faster on `/mnt/c/...` (Windows filesystem) but slower on native Linux FS for heavy IO. Prefer keeping project files on `/mnt/c/Alex/...` so the Windows ACLs (IsolatedUsers grant) remain authoritative.
- If a future fix unblocks WSL 2 (Symantec policy change), re-evaluate before switching.
