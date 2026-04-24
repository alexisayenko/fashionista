---
name: Git commit signing is SSH-based and needs allowedSignersFile for local verification
description: How SSH commit signing is wired in this project's WSL git; explains the allowedSignersFile gotcha that makes signed commits display as unsigned locally
type: project
---

Commits in this repo are signed via **SSH** (not GPG) using the ed25519 key `~/.ssh/git_signing` inside WSL — registered on GitHub as a **Signing Key** for `alexisayenko`. The signing config lives in WSL's `~/.gitconfig`:

- `gpg.format = ssh`
- `user.signingkey = /home/alex-claude/.ssh/git_signing.pub`
- `commit.gpgsign = true`
- `tag.gpgsign = true`
- `gpg.ssh.allowedSignersFile = /home/alex-claude/.ssh/allowed_signers`

Fingerprint: `SHA256:/lmLlOjCEB5jnge0jFCIOL0Fer3OWQR+dZITWlzwiaM`.

**Why:** The project's security policy (see `claude-security-policy.md`, gitignored) enforces commit signing so the Verified badge appears on GitHub for every commit from this isolated environment.

**How to apply:**
- Always commit via WSL git — Windows-side git has no signing config and will produce unsigned commits authored with the wrong email. See `feedback_use_wsl.md`.
- If a commit ends up unsigned (check with `git log --pretty="%h %G? %s" -1` — `N` = unverified, `G` = good), fix with `git commit --amend --no-edit -S` from WSL before pushing. Amending is safe only before push.
- **Gotcha: `gpg.ssh.allowedSignersFile`.** If this config is unset or the file is missing, `git commit` still signs successfully, BUT `git log --show-signature` / `%G?` can't verify locally — every commit displays as `N` ("no signature") even though GitHub shows Verified fine. The file format is one line: `<email> <full ssh pubkey contents>`. Confirmed working: `alex.isayenko@gmail.com ssh-ed25519 AAAAC3...`.
- Do not trust the local `%G?` output as a signal to re-sign unless you've first verified `gpg.ssh.allowedSignersFile` is configured and the file exists.
