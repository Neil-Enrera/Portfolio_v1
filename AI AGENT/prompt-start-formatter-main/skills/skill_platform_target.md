# Skill. Target Builder Fit

## Goal
Make the starter prompt fit the builder or coding environment where it will be pasted.

## Rules
- Always capture the target builder or environment
- For Base44, Lovable, or similar builder-first tools, keep the prompt outcome-focused and avoid unnecessary low-level implementation detail
- For Replit, Claude Code, Cursor, Codex, Copilot, or local-machine builds, include framework, CSS framework, and database preferences when provided
- If the user is building locally and does not provide framework, CSS framework, or database, ask for them before generating the final prompt starter
- If the target environment is broad but the requested scope is large, bias the prompt toward a thin MVP first
- Keep platform-specific notes inside the final `ready_to_paste_prompt` instead of creating extra sections

## Output
Reflect the target builder fit silently inside the YAML and final prompt text.
